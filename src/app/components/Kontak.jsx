import "./Kontak.css";

export default function Kontak({ site, wa }) {
  return (
    <section id="kontak" className="kontak">
      <div className="wrap kontak-isi">
        <h2>Coba lihat jadwal jaga timmu di ponsel.</h2>
        <div>
          <p>
            Minta demo sekarang. Tim kami menyiapkan satu klinik atau unit
            contoh yang disesuaikan dengan pola jaga fasilitasmu.
          </p>
          <div className="kontak-aksi">
            <a className="btn" href={wa} target="_blank" rel="noreferrer">
              {site.ctaTeks} {site.nama}
            </a>
            <a className="btn putih" href="#harga">
              Lihat Pilihan Harga
            </a>
          </div>
          <small>
            Tanpa komitmen jangka panjang. Cukup pilot satu fasilitas selama 14
            hari.
          </small>
        </div>
      </div>
    </section>
  );
}
