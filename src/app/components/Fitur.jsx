import { ArrowUpRight } from "lucide-react";
import { modulInfo, kejadian } from "@/data/konten";
import "./Fitur.css";

export default function Fitur() {
  return (
    <section id="fitur" className="seksi">
      <div className="wrap">
        <div className="kepala">
          <span className="label">Lima fitur wajib</span>
          <h2>Semua urusan jaga, satu per satu.</h2>
          <p>
            Klik “Lihat di jam” untuk melompat ke momen fitur itu dipakai di jam
            digital paling atas.
          </p>
        </div>
        <ol className="fb">
          {Object.entries(modulInfo).map(([id, m], i) => {
            const k = kejadian.find((x) => x.mod === id);
            return (
              <li key={id} className="kartu fb-baris">
                <span className="fb-no">0{i + 1}</span>
                <div className="fb-judul">
                  <h3>{m.nama}</h3>
                  <p>{m.desk}</p>
                </div>
                <ul>
                  {m.fitur.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a className="fb-lompat" href={`#j-${k.t.replace(":", "")}`}>
                  Lihat di jam {k.t} <ArrowUpRight size={16} />
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
