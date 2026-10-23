import { formatNomor } from "@/lib/whatsapp";
import "./Footer.css";

const fitur = [
  ["Absensi & GPS", "#j-0658"],
  ["Perizinan & Tukar Jaga", "#j-1015"],
  ["Gaji & Upah per Shift", "#j-1405"],
  ["Exam & Checklist APD", "#j-0650"],
  ["Library & SPO Offline", "#j-1300"],
];
const info = [
  ["Semua Fitur", "#fitur"],
  ["Paket & Biaya", "#harga"],
  ["Tanya Jawab (FAQ)", "#faq"],
  ["Hubungi Kami", "#kontak"],
];

export default function Footer({ site, wa }) {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-atas">
          <div className="ft-merek">
            <a href="#" className="ft-logo">
              <span className="ft-tanda" aria-hidden="true" />
              {site.nama}
            </a>
            <p>
              Siaga 24 jam untuk jadwal jaga, absensi, dan gaji. Aplikasi HRIS
              untuk klinik dan rumah sakit di Indonesia.
            </p>
          </div>
          <nav aria-label="Fitur">
            <h3>5 Fitur Utama</h3>
            <ul>
              {fitur.map(([t, h]) => (
                <li key={h}>
                  <a href={h}>{t}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Info">
            <h3>Informasi</h3>
            <ul>
              {info.map(([t, h]) => (
                <li key={h}>
                  <a href={h}>{t}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3>Kontak</h3>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={wa} target="_blank" rel="noreferrer">
                  WhatsApp {formatNomor(site.whatsappNomor)}
                </a>
              </li>
              <li>
                <span>{site.kota}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ft-bawah">
          <span>
            © 2026 {site.nama}. Seluruh hak cipta dilindungi undang-undang.
          </span>
          <span>
            Data, harga, dan nama pada halaman ini bersifat ilustratif.
          </span>
        </div>
      </div>
    </footer>
  );
}
