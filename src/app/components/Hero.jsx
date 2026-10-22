import { DemoHero } from "./Demo";
import "./Hero.css";

export default function Hero({ site, wa }) {
  // Tiap kalimat jadi satu baris. Baris terakhir berwarna merah.
  const kalimat = site.heroJudul.split(/(?<=\.)\s+/);
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="label">HRIS untuk klinik dan rumah sakit</span>
          <h1>
            {kalimat.map((k, i) => (
              <span
                key={i}
                className={
                  kalimat.length > 1 && i === kalimat.length - 1 ? "merah" : ""
                }
              >
                {k}
              </span>
            ))}
          </h1>
          <p className="hero-desk">{site.heroDeskripsi}</p>
          <div className="hero-aksi">
            <a className="btn merah" href={wa} target="_blank" rel="noreferrer">
              {site.ctaTeks}
            </a>
            <a className="btn garis" href="#modul">
              Lihat 5 Modul
            </a>
          </div>
          <ul className="hero-poin">
            <li>Selfie dan GPS unit mencegah titip absen</li>
            <li>Tukar jaga disetujui, jadwal berubah otomatis</li>
            <li>Checklist APD dan SPO offline dalam satu aplikasi</li>
          </ul>
        </div>
        <div className="hero-ponsel" id="simulasi">
          <DemoHero />
          <p>Ketuk “Absen Jaga” untuk mencoba.</p>
        </div>
      </div>
    </section>
  );
}
