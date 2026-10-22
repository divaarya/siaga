import { modul } from "@/data/konten";
import {
  DemoAbsensi,
  DemoPerizinan,
  DemoGaji,
  DemoExam,
  DemoLibrary,
} from "./Demo";
import "./Modul.css";

const demo = {
  absensi: DemoAbsensi,
  perizinan: DemoPerizinan,
  gaji: DemoGaji,
  exam: DemoExam,
  library: DemoLibrary,
};

export default function Modul() {
  return (
    <section id="modul" className="seksi">
      <div className="wrap">
        <div className="kepala">
          <span className="label">Lima modul, satu aplikasi</span>
          <h2>Semua urusan jaga, di satu ponsel.</h2>
          <p>
            Persetujuan di Perizinan mengubah jadwal dan slip gaji secara
            langsung. Coba sendiri di setiap ponsel di bawah ini.
          </p>
        </div>
        {modul.map((m, i) => {
          const D = demo[m.id];
          return (
            <article
              key={m.id}
              id={`modul-${m.id}`}
              className={i % 2 ? "modul balik" : "modul"}
            >
              <div className="modul-teks">
                <span className="modul-no">{m.no}</span>
                <span className="label">Modul {m.nama}</span>
                <h3>{m.judul}</h3>
                <p className="modul-desk">{m.desk}</p>
                <div className="subfitur">
                  {m.fitur.map(([t, x]) => (
                    <div key={t}>
                      <h4>{t}</h4>
                      <p>{x}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`modul-ponsel ${m.warna}`}>
                <D />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
