import React, { useState, useEffect } from 'react';

// Menggunakan placeholder untuk ikon/gambar.
// Anda bisa menggantinya dengan path ke aset lokal Anda jika ada.
const telkomselVideoImage = 'https://placehold.co/400x250/cccccc/333333?text=Telkomsel+Video';

const Service = () => {
    // Data Paket SIMPATI (disesuaikan dengan tampilan kartu baru dari screenshot)
    const simpatiPackages = [
        {
            id: 'simpati-gigamax-100k-10m-100g',
            price: 'Rp 100.000',
            speed: '10 Mbps',
            dataAmount: '100 GB',
            name: 'Paket A' // Nama opsional jika diperlukan
        },
        {
            id: 'simpati-gigamax-100k-15m-100g',
            price: 'Rp 100.000',
            speed: '15 Mbps',
            dataAmount: '100 GB',
            name: 'Paket B'
        },
        {
            id: 'simpati-gigamax-100k-20m-100g',
            price: 'Rp 100.000',
            speed: '20 Mbps',
            dataAmount: '100 GB',
            name: 'Paket C'
        },
        {
            id: 'simpati-gigamax-150k-20m-200g',
            price: 'Rp 150.000',
            speed: '20 Mbps',
            dataAmount: '200 GB',
            name: 'Paket D'
        },
        {
            id: 'simpati-gigamax-250k-50m-500g',
            price: 'Rp 250.000',
            speed: '50 Mbps',
            dataAmount: '500 GB',
            name: 'Paket E'
        },
        {
            id: 'simpati-gigamax-400k-100m-800g',
            price: 'Rp 400.000',
            speed: '100 Mbps',
            dataAmount: '800 GB',
            name: 'Paket F'
        },
        {
            id: 'simpati-gigamax-600k-500m-900g',
            price: 'Rp 600.000',
            speed: '500 Mbps',
            dataAmount: '900 GB',
            name: 'Paket G'
        }
    ];

    // Data Paket Telkomsel Halo (disesuaikan dengan tampilan kartu baru, contoh saja)
    const telkomselHaloPackages = [
        {
            id: 'halo-reguler-s',
            price: 'Rp 80.000',
            speed: '10 Mbps',
            dataAmount: '50 GB',
            name: 'Halo S'
        },
        {
            id: 'halo-reguler-m',
            price: 'Rp 120.000',
            speed: '25 Mbps',
            dataAmount: '100 GB',
            name: 'Halo M'
        }
    ];

    // Style inline untuk elemen-elemen
    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    };

    const pageStyle = {
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: '#f4f7f6',
        color: '#333',
        lineHeight: '1.6',
        paddingTop: '20px', // Memberi sedikit ruang di atas
    };

    const mainHeaderStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '40px',
        marginBottom: '30px',
        fontSize: '24px',
        fontWeight: '600',
        color: '#555',
    };

    const headerItemActiveStyle = {
        color: '#E30022', // Warna merah Telkomsel
        borderBottom: '3px solid #E30022',
        paddingBottom: '5px',
    };

    const heroSectionStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        padding: '30px',
        marginBottom: '40px',
    };

    const heroImageContainerStyle = {
        flex: '1',
        minWidth: '300px',
        borderRadius: '10px',
        overflow: 'hidden',
    };

    const heroImageStyle = {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '10px',
    };

    const heroContentStyle = {
        flex: '1',
        padding: '20px',
    };

    const heroH2Style = {
        fontSize: '32px',
        marginBottom: '10px',
        color: '#333',
    };

    const heroPStyle = {
        fontSize: '18px',
        color: '#666',
        marginBottom: '20px',
    };

    const seeAllPackagesBtnStyle = {
        backgroundColor: '#E30022', // Warna merah Telkomsel
        color: '#fff',
        border: 'none',
        padding: '12px 25px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: '600',
        transition: 'background-color 0.3s ease',
    };

    const packageSectionStyle = {
        padding: '40px 0',
        marginBottom: '40px',
    };

    const sectionTitleStyle = {
        fontSize: '30px',
        marginBottom: '30px',
        color: '#E30022', // Warna merah Telkomsel
        textAlign: 'center',
    };

    const packageGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
    };

    // --- Gaya untuk Card Baru ---
    const newPackageCardStyle = {
        backgroundColor: '#ffffff',
        padding: '20px', // Padding lebih kecil dari sebelumnya
        borderRadius: '15px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',
        border: '1px solid #eee', // Border tipis seperti di gambar
    };

    const newPackagePriceStyle = {
        fontSize: '28px',
        fontWeight: '700',
        color: '#333',
        marginBottom: '10px',
    };

    const newPackageSpeedDataStyle = {
        fontSize: '18px',
        color: '#555',
        marginBottom: '20px',
    };

    const newPackageSpeedLabelStyle = {
        fontWeight: '600',
        color: '#E30022', // Warna merah untuk Mbps
    };

    const newPackageDataLabelStyle = {
        fontWeight: '600',
        color: '#007bff', // Warna biru untuk GB (contoh, bisa disesuaikan)
    };

    const newLihatDetailBtnStyle = {
        backgroundColor: '#E30022',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'background-color 0.3s ease',
        width: '100%',
    };
    // --- Akhir Gaya Card Baru ---


    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '25px 0',
        fontSize: '15px',
    };

    // Komponen PackageCard yang diperbarui
    const PackageCard = ({ packageInfo }) => {
        const [hovered, setHovered] = useState(false);

        const cardHoverStyle = {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
        };

        return (
            <div
                style={{
                    ...newPackageCardStyle, // Menggunakan gaya kartu baru
                    ...(hovered ? cardHoverStyle : {}),
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div>
                    <p style={newPackagePriceStyle}>{packageInfo.price}</p>
                    <p style={newPackageSpeedDataStyle}>
                        <span style={newPackageSpeedLabelStyle}>{packageInfo.speed}</span> &bull; <span style={newPackageDataLabelStyle}>{packageInfo.dataAmount}</span>
                    </p>
                </div>
                <div>
                    <button
                        className="lihat-detail-btn-hover" // Kelas untuk hover CSS
                        style={newLihatDetailBtnStyle}
                        onClick={() => alert(`Melihat detail paket ${packageInfo.name || packageInfo.id}`)}
                    >
                        Lihat Detail
                    </button>
                </div>
            </div>
        );
    };

    // Menginjeksikan gaya global dan media queries menggunakan useEffect
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            body { margin: 0; padding: 0; box-sizing: border-box; } /* Reset margin browser global */

            /* Hover states dan pseudo-elements */
            .see-all-packages-btn-hover:hover {
                background-color: #A0001A !important; /* Merah lebih gelap */
            }
            .lihat-detail-btn-hover:hover {
                background-color: #A0001A !important; /* Merah lebih gelap */
            }

            /* Media Queries */
            @media (max-width: 900px) {
                .hero-section-responsive {
                    flex-direction: column;
                    text-align: center;
                }
                .hero-content-responsive {
                    padding: 0;
                }
                .hero-image-container-responsive {
                    width: 100%;
                }
            }

            @media (max-width: 768px) {
                .main-header-responsive {
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                }
                .main-header-item-responsive {
                    font-size: 20px;
                }
                .hero-h2-responsive {
                    font-size: 28px !important;
                }
                .hero-p-responsive {
                    font-size: 16px !important;
                }
                .package-grid-responsive {
                    grid-template-columns: 1fr !important;
                }
                .section-title-responsive {
                    font-size: 24px !important;
                }
                /* Gaya kartu baru mungkin tidak memerlukan penyesuaian ukuran font spesifik ini */
                /* .package-data-responsive { font-size: 30px !important; } */
                /* .package-price-responsive { font-size: 24px !important; } */
            }

            @media (max-width: 480px) {
                .hero-h2-responsive {
                    font-size: 24px !important;
                }
                .hero-p-responsive {
                    font-size: 14px !important;
                }
                .see-all-packages-btn-responsive {
                    font-size: 16px !important;
                    padding: 10px 20px !important;
                }
                /* Gaya kartu baru mungkin tidak memerlukan penyesuaian ukuran font spesifik ini */
                /* .package-name-responsive { font-size: 20px !important; } */
            }
        `;
        document.head.appendChild(styleSheet);

        // Menambahkan kelas untuk gaya hover
        document.querySelectorAll('button').forEach(btn => {
            if (btn.textContent === 'Lihat semua paket') {
                btn.classList.add('see-all-packages-btn-hover');
            } else if (btn.textContent === 'Lihat Detail') { // Perubahan teks tombol
                btn.classList.add('lihat-detail-btn-hover');
            }
        });

        // Fungsi untuk menerapkan kelas responsif secara dinamis
        const applyResponsiveClasses = () => {
            const width = window.innerWidth;

            // Header
            document.querySelector('[data-main-header]')?.classList.toggle('main-header-responsive', width <= 768);
            document.querySelectorAll('[data-header-item]').forEach(item => item.classList.toggle('main-header-item-responsive', width <= 768));

            // Hero Section
            document.querySelector('[data-hero-section]')?.classList.toggle('hero-section-responsive', width <= 900);
            document.querySelector('[data-hero-image-container]')?.classList.toggle('hero-image-container-responsive', width <= 900);
            document.querySelector('[data-hero-content]')?.classList.toggle('hero-content-responsive', width <= 900);
            document.querySelector('[data-hero-h2]')?.classList.toggle('hero-h2-responsive', width <= 768);
            document.querySelector('[data-hero-p]')?.classList.toggle('hero-p-responsive', width <= 768);
            document.querySelector('[data-see-all-packages-btn]')?.classList.toggle('see-all-packages-btn-responsive', width <= 480);

            // Package Sections
            document.querySelectorAll('[data-section-title]').forEach(title => title.classList.toggle('section-title-responsive', width <= 768));
            document.querySelectorAll('[data-package-grid]').forEach(grid => grid.classList.toggle('package-grid-responsive', width <= 768));
            // Gaya kartu baru mungkin tidak memerlukan penyesuaian ukuran font spesifik ini, jadi data-attribute terkait dihapus dari sini.
        };

        applyResponsiveClasses();
        window.addEventListener('resize', applyResponsiveClasses);

        return () => {
            document.head.removeChild(styleSheet);
            window.removeEventListener('resize', applyResponsiveClasses);
        };
    }, []);

    return (
        <div style={pageStyle}>
            <main style={containerStyle}>
                {/* Header Utama (SIMPATI, Telkomsel Halo) */}
                <div style={mainHeaderStyle} data-main-header>
                    <span style={headerItemActiveStyle} data-header-item>Layanan</span>
                    <span style={{...headerItemActiveStyle, color: '#555', borderBottom: 'none'}} data-header-item>Telkomsel Halo</span> {/* Telkomsel Halo tidak aktif di gambar */}
                </div>

                {/* Hero Section / Telkomsel Video */}
                <section style={heroSectionStyle} data-hero-section>
                    <div style={heroImageContainerStyle} data-hero-image-container>
                        <img src={telkomselVideoImage} alt="Telkomsel Video" style={heroImageStyle} />
                    </div>
                    <div style={heroContentStyle} data-hero-content>
                        <h2 style={heroH2Style} data-hero-h2>Namselink Video</h2>
                        <p style={heroPStyle} data-hero-p>Streaming konten favorit dengan MAXstream</p>
                        <button
                            className="see-all-packages-btn-hover"
                            style={seeAllPackagesBtnStyle}
                            data-see-all-packages-btn
                            onClick={() => alert('Melihat semua paket video')}
                        >
                            Lihat semua paket
                        </button>
                    </div>
                </section>

                {/* Bagian Paket SIMPATI */}
                <section style={packageSectionStyle}>
                    <h2 style={sectionTitleStyle} data-section-title>Paket</h2>
                    <div style={packageGridStyle} data-package-grid>
                        {simpatiPackages.map(pkg => (
                            <PackageCard key={pkg.id} packageInfo={pkg} />
                        ))}
                    </div>
                </section>

                {/* Bagian Paket Telkomsel Halo */}
                <section style={packageSectionStyle}>
                    <h2 style={sectionTitleStyle} data-section-title>Telkomsel Halo</h2>
                    <div style={packageGridStyle} data-package-grid>
                        {telkomselHaloPackages.map(pkg => (
                            <PackageCard key={pkg.id} packageInfo={pkg} />
                        ))}
                    </div>
                </section>
            </main>

            <footer style={footerStyle}>
                <div style={containerStyle}>
                    <p>&copy; 2025 Promoi. Hak Cipta Dilindungi.</p>
                </div>
            </footer>
        </div>
    );
};

export default Service;
