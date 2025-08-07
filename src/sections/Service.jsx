import React, { useState } from 'react';

// Konstanta warna untuk kemudahan kustomisasi
const telkomselRed = '#E30022';
const Layananpaket = '#ffffff'
const dataBlue = '#007bff';
const buttonAccent1 = '#00FFE1';
const buttonAccent2 = '#FF00BB';

// Komponen PackageCard
const PackageCard = ({ packageInfo }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: isHovered ? '0 6px 15px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.05)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',
        border: '1px solid #eee',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    };

    const buttonStyle = {
        backgroundColor: isHovered ? buttonAccent2 : buttonAccent1,
        color: '#000',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'background-color 0.3s ease',
        width: '100%',
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                <p style={{ fontSize: '28px', fontWeight: '700', color: '#333', marginBottom: '10px' }}>
                    {packageInfo.price}
                </p>
                <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
                    {/* Menggunakan tag <span> terpisah untuk warna Mbps dan GB */}
                    <span style={{ fontWeight: '600', color: telkomselRed }}>{packageInfo.speed}</span> &bull; <span style={{ fontWeight: '600', color: dataBlue }}>{packageInfo.dataAmount}</span>
                </p>
            </div>
            <div>
                <button
                    style={buttonStyle}
                    onClick={() => alert(`Melihat detail paket ${packageInfo.name || packageInfo.id}`)}
                >
                    Lihat Detail
                </button>
            </div>
        </div>
    );
};

// Komponen utama Service
const Service = () => {
    const simpatiPackages = [
        { id: 'simpati-gigamax-100k-10m-100g', price: 'Rp 100.000', speed: '10 Mbps', dataAmount: '100 GB', name: 'Paket A' },
        { id: 'simpati-gigamax-100k-15m-100g', price: 'Rp 100.000', speed: '15 Mbps', dataAmount: '100 GB', name: 'Paket B' },
        { id: 'simpati-gigamax-100k-20m-100g', price: 'Rp 100.000', speed: '20 Mbps', dataAmount: '100 GB', name: 'Paket C' },
        { id: 'simpati-gigamax-150k-20m-200g', price: 'Rp 150.000', speed: '20 Mbps', dataAmount: '200 GB', name: 'Paket D' },
        { id: 'simpati-gigamax-250k-50m-500g', price: 'Rp 250.000', speed: '50 Mbps', dataAmount: '500 GB', name: 'Paket E' },
        { id: 'simpati-gigamax-400k-100m-800g', price: 'Rp 400.000', speed: '100 Mbps', dataAmount: '800 GB', name: 'Paket F' },
        { id: 'simpati-gigamax-600k-500m-900g', price: 'Rp 600.000', speed: '500 Mbps', dataAmount: '900 GB', name: 'Paket G' },
    ];

    const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' };
    const pageStyle = { fontFamily: "'Poppins', sans-serif", backgroundColor: '#100F2F', color: '#333', lineHeight: '1.6', paddingTop: '20px' };
    const mainHeaderStyle = { display: 'flex', justifyContent: 'flex-end', gap: '40px', marginBottom: '30px', fontSize: '24px', fontWeight: '600', color: '#555' };
    
    // Gaya terpisah untuk kata "Layanan"
    const headerItemActiveStyle = { 
        color: Layananpaket, 
        borderBottom: `3px solid ${telkomselRed}`, 
        paddingBottom: '5px' 
    };
    
    // Gaya terpisah untuk kata "Paket"
    const sectionTitleStyle = { 
        fontSize: '30px', 
        marginBottom: '30px', 
        color: Layananpaket, 
        textAlign: 'center' 
    };

    const packageGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' };

    return (
        <div style={pageStyle}>
            <main style={containerStyle}>
                <div style={mainHeaderStyle}>
                    <span style={headerItemActiveStyle}>Layanan</span>
                </div>
                <section style={{ padding: '40px 0', marginBottom: '40px' }}>
                    <h2 style={sectionTitleStyle}>Paket</h2>
                    <div style={packageGridStyle}>
                        {simpatiPackages.map(pkg => (
                            <PackageCard key={pkg.id} packageInfo={pkg} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Service;