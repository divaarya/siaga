import { bukti, logo } from "@/data/konten";
import "./Bukti.css";

export default function Bukti() {
  return (
    <section className="bukti">
      <div className="wrap">
        <div className="bukti-angka">
          {bukti.map(([a, b]) => (
            <div key={b}>
              <b>{a}</b>
              <span>{b}</span>
            </div>
          ))}
        </div>
        <p className="bukti-logo">
          <span>Dipercaya tim medis:</span>
          {logo.map((x) => (
            <em key={x}>{x}</em>
          ))}
        </p>
        <p className="bukti-catatan">
          Nama fasilitas di atas bersifat ilustratif untuk kebutuhan peragaan.
        </p>
      </div>
    </section>
  );
}
