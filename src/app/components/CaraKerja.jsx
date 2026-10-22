import { langkah } from "@/data/konten";
import "./CaraKerja.css";

export default function CaraKerja() {
  return (
    <section id="cara-kerja" className="seksi">
      <div className="wrap">
        <div className="kepala">
          <span className="label">Mulai cepat</span>
          <h2>Dari daftar tenaga medis ke absen pertama dalam tiga langkah.</h2>
          <p>
            Tidak butuh mesin fingerprint yang mahal dan rawan rusak. Semua
            berjalan dari ponsel tenaga kesehatan.
          </p>
        </div>
        <div className="langkah">
          {langkah.map((l, i) => (
            <article key={l.judul} className="langkah-sel">
              <span className="langkah-no">{i + 1}</span>
              <h3>{l.judul}</h3>
              <p>{l.teks}</p>
              <div className="langkah-chip">
                {l.chip.map((c) => (
                  <em key={c}>{c}</em>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="langkah-catatan">
          Migrasi dari absensi lama bisa berjalan paralel selama satu siklus
          gaji sampai data cocok.
        </p>
      </div>
    </section>
  );
}
