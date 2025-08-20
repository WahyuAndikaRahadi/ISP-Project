import React, { useRef, useEffect, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { MeshLambertMaterial, DoubleSide } from 'three';
import * as topojson from 'topojson-client';
import chroma from 'chroma-js';

import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Service from './sections/Service';
import QualityAndPrice from './sections/QualityAndPrice';
import Payment from './sections/Payment';
import Contact from './sections/Contact';
import Footer from './components/Footer';

// Material untuk poligon, tidak perlu diubah
const polygonsMaterial = new MeshLambertMaterial({ color: 'darkslategrey', side: DoubleSide });

const App = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState(null);
  const [polygonColors, setPolygonColors] = useState({});

  // Muat data GeoJSON untuk negara-negara saat komponen di-mount
  useEffect(() => {
    fetch('//unpkg.com/world-atlas@2.0.2/countries-110m.json')
      .then(res => res.json())
      .then(landTopo => {
        const features = topojson.feature(landTopo, landTopo.objects.countries).features;
        setCountries({ features });
      })
      .catch(error => console.error("Error loading countries data:", error));
  }, []);

  // Definisikan gradien warna dan hitung warna untuk setiap poligon sekali
  useEffect(() => {
    if (countries.features.length > 0) {
      const colors = ['#00FFE1', '#FF00BB'];
      const colorScale = chroma.scale(colors);
      const newColors = {};

      countries.features.forEach(polygon => {
        let sumLng = 0;
        let count = 0;

        const processCoordinates = (coords) => {
          coords.forEach(coordSet => {
            if (coordSet && coordSet.length > 0) {
              coordSet.forEach(coord => {
                if (Array.isArray(coord) && coord.length >= 2) {
                  sumLng += coord[0];
                  count++;
                }
              });
            }
          });
        };

        if (polygon.geometry && polygon.geometry.coordinates) {
          if (polygon.geometry.type === 'Polygon') {
            processCoordinates(polygon.geometry.coordinates);
          } else if (polygon.geometry.type === 'MultiPolygon') {
            polygon.geometry.coordinates.forEach(polyCoords => {
              processCoordinates(polyCoords);
            });
          }
        }

        let avgLng = 0;
        if (count > 0) {
          avgLng = sumLng / count;
        } else {
          newColors[polygon.properties.name] = '#CCCCCC';
          return;
        }

        const normalizedLng = (avgLng + 180) / 360;
        const clampedNormalizedLng = Math.max(0, Math.min(1, normalizedLng));
        newColors[polygon.properties.name] = colorScale(clampedNormalizedLng).hex();
      });

      setPolygonColors(newColors);
    }
  }, [countries]);

  // Fungsi untuk mendapatkan warna dari state
  const getPolygonColor = (polygon) => {
    return polygonColors[polygon.properties.name] || '#CCCCCC';
  };

  // Menggunakan useMemo untuk Globe agar tidak di-render ulang
  const globe = useMemo(() => (
    <Globe
      ref={globeEl}
      globeImageUrl={null}
      bumpImageUrl={null}
      showGlobe={false}
      showGraticules={false}
      backgroundColor="#100F2F"
      showAtmosphere={false}
      atmosphereColor="#ADD8E6"
      atmosphereAltitude={0.25}
      polygonsData={[]}
      polygonCapMaterial={polygonsMaterial}
      polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
      width={1400}
      height={1400}
      onGlobeReady={() => {
        if (globeEl.current) {
          globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2 }, 0);
          globeEl.current.controls().autoRotate = true;
          globeEl.current.controls().autoRotateSpeed = 0.5;
          globeEl.current.controls().enableZoom = false;
        }
      }}
      onPolygonHover={setHoverD}
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonUseDots={true}
      hexPolygonColor={getPolygonColor}
    />
  ), [countries, getPolygonColor, setHoverD]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#100F2F]">
      {/* Globe rendered once in the parent and positioned absolutely */}
      <div className="absolute z-0 -top-[75px] -right-[500px] w-[1400px] h-[1400px]">
        {globe}
        {hoverD && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white text-sm px-3 py-1 rounded-md shadow-lg pointer-events-none">
            {hoverD.properties.name}
          </div>
        )}
      </div>
      
      {/* Render existing components with a higher z-index to be on top of the globe */}
      <Navbar />
      <Home />
      <About />
      <Service />
      <QualityAndPrice />
      <Payment />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;