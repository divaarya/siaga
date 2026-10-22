import { fasilitas } from "@/data/konten";
import "./Fasilitas.css";

export default function Fasilitas() {
  return (
    <section id="fasilitas" className="seksi">
      <div className="wrap">
        <div className="kepala">
          <span className="label">Dipakai di fasilitas kesehatan</span>
          <h2>Dibuat untuk jam jaga yang tidak 9 sampai 5.</h2>
          <p>
            Dari perawat IGD yang jaga malam, analis lab, sampai apoteker yang
            bergantian shift di apotek.
          </p>
        </div>
        <div className="fas-grid">
          {fasilitas.map((f, i) => (
            <article key={f.nama} className="fas-sel">
              <span className="fas-no">0{i + 1}</span>
              <h3>{f.nama}</h3>
              <p>{f.teks}</p>
              <em>{f.chip}</em>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
