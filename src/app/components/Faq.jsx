import { ShieldCheck } from "lucide-react";
import { faq, privasi } from "@/data/konten";
import "./Faq.css";

export default function Faq({ wa }) {
  return (
    <section id="faq" className="seksi">
      <div className="wrap">
        <div className="kepala">
          <span className="label">Tanya jawab</span>
          <h2>Pertanyaan seputar absensi dan privasi data.</h2>
          <p>
            Jawaban singkat untuk hal yang biasanya ditanyakan manajemen sebelum
            mulai memakai.
          </p>
        </div>
        <div className="fq-grid">
          <div className="fq-daftar">
            {faq.map((x, i) => (
              <details key={x.t} open={i === 0} className="kartu">
                <summary>{x.t}</summary>
                <p>{x.j}</p>
              </details>
            ))}
          </div>
          <div className="kartu fq-privasi">
            <h3>
              <ShieldCheck size={20} /> Pusat privasi data
            </h3>
            <ul>
              {privasi.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <a
              className="btn utama kecil"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              Tanya lewat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
