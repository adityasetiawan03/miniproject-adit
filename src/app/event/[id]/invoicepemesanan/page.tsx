'use client'
import React from 'react';

const InvoicePage: React.FC = () => {
  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
      
      {/* Left Section - Thank You Message */}
      <div style={{ flex: 1, padding: '16px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginRight: '20px' }}>
        
        {/* Image */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img 
            src="https://www.loket.com/assets-v2/img/opt-in-registration-promo.png" 
            alt="Thank You for Your Order" 
            style={{ width: '80%', maxWidth: '350px', margin: '0 auto' }} 
          />
        </div>

        {/* Thank You Message */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Terima kasih atas pesananmu</h2>
        <p style={{ fontSize: '1rem' }}>
          Silakan cek email kamu <strong>adityasetiawan0307@gmail.com</strong> untuk mendapatkan tiket yang kamu pesan atau klik tombol dibawah untuk langsung mencetak e-voucher.
        </p>

        {/* Buttons */}
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: '#0070f3',
              color: '#fff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              margin: '10px 0'
            }}
          >
            Lihat E-Voucher
          </button>
          <br />
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#fff',
              border: '1px solid #0070f3',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '10px'
            }}
          >
            Kembali ke Beranda
          </button>
        </div>

        {/* Bagikan Event Section */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Bagikan Event</h4>
          <p>Yuk ajak teman-temanmu dengan membagikan event ini di media sosialmu.</p>
          <div>
            <a href="#" style={{ margin: '0 10px' }}>Facebook</a>
            <a href="#" style={{ margin: '0 10px' }}>Twitter</a>
            <a href="#" style={{ margin: '0 10px' }}>WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Right Section - Event and Order Details */}
      <div style={{ flex: 1, padding: '16px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        
        {/* Event Banner Image */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img 
            src="https://assets.loket.com/neo/production/images/banner/20250429133940_6810742c07c7f.jpg" 
            alt="Event Banner" 
            style={{ width: '100%', maxWidth: '450px', margin: '0 auto', borderRadius: '8px' }} 
          />
        </div>
        
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Kode Pesanan: MJH868BX</h3>
        <p style={{ fontSize: '1.1rem' }}>Mon, 05 May 2025 10:34 AM</p>
        <p style={{ fontSize: '1.1rem' }}>Webinar: Singapore Expansion as a Gateway to Southeast Asia Market</p>
        
        {/* Event Info */}
        <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '20px' }}>Jadwal dan Lokasi</h4>
        <p><strong>📅</strong> 08 May 2025</p>
        <p><strong>🕓</strong> 16:00 - 17:00 WIB</p>
        <p><strong>📍</strong> Online</p>

        {/* Ticket Info */}
        <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '20px' }}>Info Tiket</h4>
        <p>Webinar Ekspansi Bisnis ke Singapura</p>
        <p>1 Tiket</p>
      </div>
    </div>
  );
};

export default InvoicePage;
