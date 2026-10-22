import { testimoni } from "@/data/konten";
import "./Testimoni.css";

const inisial = (n) =>
  n
    .split(" ")
    .map((x) => x[0])
    .slice(0, 2)
    .join("");

export default function Testimoni() {
  return (
    <section className="seksi">
      <div className="wrap">
        <div className="kepala">
          <span className="label">Cerita pengguna</span>
          <h2>Kata tim medis yang berganti jaga tiap hari.</h2>
          <p>
            Nama dan persona di bawah ini bersifat ilustratif untuk kebutuhan
            peragaan.
          </p>
        </div>
        <div className="testi-grid">
          {testimoni.map((t) => (
            <figure key={t.nama} className="testi-sel">
              <blockquote>“{t.teks}”</blockquote>
              <figcaption>
                <span className="avatar">{inisial(t.nama)}</span>
                <div>
                  <b>{t.nama}</b>
                  <small>{t.jabatan}</small>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
