import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { MeshLambertMaterial, DoubleSide } from 'three';
import * as topojson from 'topojson-client';
import chroma from 'chroma-js';

// Material untuk poligon, tidak perlu diubah
const polygonsMaterial = new MeshLambertMaterial({ color: 'darkslategrey', side: DoubleSide });

function Home() {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState(null);

  // Definisikan gradien warna
  const colors = ['#00FFE1', '#FF00BB'];
  const colorScale = chroma.scale(colors);

  // Muat data GeoJSON untuk negara-negara saat komponen di-mount
  useEffect(() => {
    fetch('//unpkg.com/world-atlas@2.0.2/countries-110m.json')
      .then(res => res.json())
      .then(landTopo => {
        setCountries(topojson.feature(landTopo, landTopo.objects.countries));
      })
      .catch(error => console.error("Error loading countries data:", error));
  }, []);

  // Fungsi untuk mendapatkan warna gradien berdasarkan rata-rata bujur negara
  const getPolygonColor = (polygon) => {
    if (!countries.features || countries.features.length === 0) {
      return '#CCCCCC';
    }

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
      return '#CCCCCC';
    }

    const normalizedLng = (avgLng + 180) / 360;
    const clampedNormalizedLng = Math.max(0, Math.min(1, normalizedLng));
    return colorScale(clampedNormalizedLng).hex();
  };

  return (
    <div className="relative flex items-center justify-between min-h-screen bg-[#100F2F] from-gray-900 to-black text-white p-10 overflow-hidden ">
      {/* Konten kiri (penjelasan dan CTA) */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center w-full md:w-1/2 p-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Selalu Terhubung!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-lg">
          Nikmati pengalaman online terbaik dengan koneksi internet fiber optik yang cepat, stabil, dan tanpa batas. Cocok untuk rumah, bisnis, dan segala aktivitas digital Anda.</p>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
          Mulai Petualangan Anda
        </button>
      </div>

      {/* Globe di pojok kanan bawah, hanya seperempat yang terlihat */}
      <div className="absolute z-0 -bottom-[700px] -right-[500px] w-[1400px] h-[1400px]">
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
              // Nonaktifkan scroll-to-zoom
              globeEl.current.controls().enableZoom = false;
            }
          }}
          onPolygonHover={setHoverD}

          // Properti poligon heksagon
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.3}
          hexPolygonUseDots={true}
          hexPolygonColor={getPolygonColor}
        />

        {hoverD && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white text-sm px-3 py-1 rounded-md shadow-lg pointer-events-none">
            {hoverD.properties.name}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
