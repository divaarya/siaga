import { Mail, MapPin, MessageCircle } from "lucide-react";
import { formatNomor } from "@/lib/whatsapp";
import "./Kontak.css";

export default function Kontak({ site, wa }) {
  return (
    <section id="kontak" className="seksi">
      <div className="wrap">
        <div className="kartu kt">
          <div>
            <span className="label">Mulai uji coba</span>
            <h2>Lihat jadwal jaga timmu hidup di layar.</h2>
            <p>
              Minta demo sekarang. Tim kami menyiapkan satu unit contoh yang
              disesuaikan dengan pola jaga fasilitasmu. Tanpa komitmen jangka
              panjang, cukup pilot 14 hari.
            </p>
            <a className="btn utama" href={wa} target="_blank" rel="noreferrer">
              {site.ctaTeks} {site.nama}
            </a>
          </div>
          <ul>
            <li>
              <Mail size={18} />
              <span>
                <small>Email</small>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </span>
            </li>
            <li>
              <MessageCircle size={18} />
              <span>
                <small>WhatsApp</small>
                <a href={wa} target="_blank" rel="noreferrer">
                  {formatNomor(site.whatsappNomor)}
                </a>
              </span>
            </li>
            <li>
              <MapPin size={18} />
              <span>
                <small>Lokasi</small>
                {site.kota}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
