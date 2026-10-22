import { Check, X } from "lucide-react";
import { chatLama, bandingan } from "@/data/konten";
import "./Perbandingan.css";

export default function Perbandingan() {
  return (
    <section className="seksi">
      <div className="wrap">
        <div className="kepala">
          <span className="label">Sebelum dan sesudah</span>
          <h2>Jadwal jaga tidak seharusnya hidup di grup chat.</h2>
          <p>
            Menghilangkan salah paham tukar jaga, surat dokter yang tercecer,
            dan lembur yang tidak tercatat.
          </p>
        </div>
        <div className="banding-grid">
          <div className="banding-sel abu">
            <h3>Cara lama: grup WhatsApp jaga</h3>
            <div className="chat">
              {chatLama.map(([n, t, j]) => (
                <div key={t} className="gelembung">
                  <b>{n}</b>
                  {t}
                  <small>{j}</small>
                </div>
              ))}
            </div>
            <p className="banding-akhir">
              Pesan tenggelam, perubahan jaga tidak tercatat, unit kekurangan
              orang.
            </p>
          </div>
          <div className="banding-sel">
            <h3>Dengan Siaga: tercatat dan terverifikasi</h3>
            <div className="jadwal">
              <div>
                <span>Rabu 14 Okt · Pagi · IGD</span>
                <b>Ns. Rina Maharani</b>
              </div>
              <div>
                <span>Kamis 15 Okt · Malam · Rawat Inap</span>
                <b>Ns. Dimas menggantikan</b>
              </div>
              <div>
                <span>Jumat 16 Okt · Siang · Poli</span>
                <b>Bd. Sari Wulandari</b>
              </div>
            </div>
            <p className="banding-akhir ok">
              Tukar jaga disetujui dan jadwal berubah otomatis ✓
            </p>
          </div>
        </div>
        <ul className="banding-daftar">
          {bandingan.map(([a, b]) => (
            <li key={a}>
              <span className="lama">
                <X size={18} /> {a}
              </span>
              <span className="baru">
                <Check size={18} /> {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
