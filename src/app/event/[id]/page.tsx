const BannerCard: React.FC = () => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        maxWidth: '1300px',
        margin: '0 auto',
      }}>
        {/* Gambar dan Card Penyelenggara */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '20px',
          padding: '16px',
          maxWidth: '1300px',
          margin: '0 auto',
        }}>
  
          {/* Gambar */}
          <img
            src="https://assets.loket.com/neo/production/images/banner/vTn6d_1744602107005372.png"
            alt="Loket Banner"
            style={{
              width: '800px',
              height: 'auto',
              borderRadius: '8px',
              flexShrink: 0,
            }}
          />
  
          {/* Card Penyelenggara */}
          <div style={{
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            flex: 1,
            minWidth: '250px',
            marginTop: '16px'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              SUPERMUSIC INTIMATE SESSIONS 2025 - SBY
            </h2>
            <p style={{ margin: '4px 0' }}>
              <span>📅</span> 25 Apr 2025
            </p>
            <p style={{ margin: '4px 0' }}>
              <span>🕓</span> 16:00 - 22:00 WIB
            </p>
            <p style={{ margin: '4px 0' }}>
              <span>📍</span> HEDON ESTATE, Jawa Timur
            </p>
            <p style={{ marginTop: '8px', fontStyle: 'italic' }}>
              Diselenggarakan oleh SUPERMUSIC
            </p>
  
            {/* Card Beli Button */}
            <div style={{
              padding: '16px',
              border: '1px solid #ccc',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              flex: 1,
              minWidth: '250px',
              marginTop: '16px'
            }}>
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%',
              }}>
                Beli Tiket
              </button>
            </div>
          </div>
  
        </div>
  
        {/* Deskripsi */}
        <div style={{
          padding: '16px',
          margin: '0 auto',
          textAlign: 'left', // Align text to the left
          width: '100%',  // Ensure it takes full width
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            SUPERMUSIC INTIMATE SESSIONS 2025
          </h2>
          <p>
            Superfriends! Supermusic Intimate Sessions kembali hadir di tahun 2025 dengan membawa format baru 'Acoustic Set'. Mulai April hingga Juni 2025, rangkaian acara ini akan dilaksanakan di 25 Kota, menghadirkan 25 Guest Stars serta Local Heroes dari berbagai wilayah di Indonesia. Dengan menyasar kota-kota di Jawa Timur, Jawa Tengah, Jabodetabek, hingga Jawa Barat, event Supermusic Intimate Sessions 2025 ini membawa konsep pertunjukan musik yang lebih hangat dan intim serta menjadikan ruang yang mempertemukan Musisi dan Superfriends secara lebih personal dan bermakna karena INIRASANYASUPER!!! Guest Star : St.Loco Local Heroes : Moccatune, Mighfar Suganda, XGO, Iwakvisual
          </p>
  
   {/* Syarat & Ketentuan */}
<h3 style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>
  Syarat & Ketentuan
</h3>
<ol>
  <li>
    1.Pengunjung wajib berusia diatas 18 tahun untuk bisa ke masuk ke acara.
  </li>
  <li>
    2.Registrasi ini termasuk merchandise dan freepass akses datang ke acara SuperMusic Intimate Sessions sesuai dengan kota penyelenggaraan acara yang dipilih.
  </li>
  <li>
    3.E-Voucher akan dikirimkan melalui whatsapp dan email yang di registrasikan, pastikan untuk mengisi semua data yang dibutuhkan pada website registrasi.
  </li>
  <li>
    4.Pengambilan merchandise dan penukaran e-voucher hanya dapat dilakukan di redemption booth sesuai dengan kota penyelenggaraan acara yang dipilih.
  </li>
  <li>
    5.Waktu Penukaran e-voucher dan check in dapat dilakukan di venue sesuai dengan kota penyelenggaraan acara yang dipilih mulai jam 15:00 WIB.
  </li>
  <li>
    6.Kami tidak bertanggung jawab atas penyalahgunaan e-voucher.
  </li>
  <li>
    7.Penyelenggara berhak untuk tidak memberikan izin untuk masuk ke dalam tempat acara apabila syarat-syarat & ketentuan tidak dipenuhi.
  </li>
  <li>
    8.Dilarang melakukan perbuatan dan juga atau pun membawa benda yang melanggar hukum/ peraturan yang berlaku pada saat acara.
  </li>
  <li>
   9.Dilarang Membawa:
    <ul>
      <li>Obat Obatan Terlarang</li>
      <li>Makanan dan Minuman dari luar</li>
      <li>Senjata Tajam</li>
      <li>Senjata Api/ Peledak</li>
      <li>Video Kamera Profesional</li>
      <li>Laser Pen</li>
      <li>E Cigarette dan Heat Not Burn Cigarette</li>
      <li>Produk Tembakau Dengan Kemasan/ Segel Terbuka</li>
    </ul>
  </li>
</ol>

        </div>
      </div>
    );
  };
  
  export default BannerCard;
  