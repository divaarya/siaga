import { ShieldCheck, MessageCircle } from "lucide-react";
import { faq, privasi } from "@/data/konten";
import "./Faq.css";

export default function Faq({ wa }) {
  return (
    <section id="faq" className="seksi">
      <div className="wrap faq-grid">
        <div className="faq-kiri">
          <span className="label">Tanya jawab</span>
          <h2>Pertanyaan seputar absensi dan privasi data.</h2>
          <div className="faq-privasi">
            <h3>
              <ShieldCheck size={22} /> Pusat privasi data
            </h3>
            <ul>
              {privasi.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <a
              className="btn merah kecil"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Tanya lewat WhatsApp
            </a>
          </div>
        </div>
        <div className="faq-daftar">
          {faq.map((x, i) => (
            <details key={x.t} open={i === 0}>
              <summary>{x.t}</summary>
              <p>{x.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
