"use client";
import { useEffect, useState } from "react";
import "./Demo.css";

const rp = (n) => "Rp " + n.toLocaleString("id-ID");

function Pil({ opsi, nilai, set, nonaktif }) {
  return (
    <div className="d-pil">
      {opsi.map((o) => (
        <button
          key={o}
          aria-pressed={nilai === o}
          disabled={nonaktif}
          onClick={() => set(o)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Saklar({ aktif, onKlik, children }) {
  return (
    <button
      className="d-saklar"
      role="switch"
      aria-checked={aktif}
      onClick={onKlik}
    >
      {children}
      <i />
    </button>
  );
}

/* ---------- Absensi ---------- */
export function DemoAbsensi({ malam }) {
  const unit = ["IGD", "Rawat Inap", "Poli"];
  const [u, setU] = useState(0);
  const [palsu, setPalsu] = useState(false);
  const [hasil, setHasil] = useState(null);
  const waktu = malam ? "21:55" : "06:58";
  return (
    <div className="d">
      <Pil
        opsi={unit}
        nilai={unit[u]}
        set={(x) => setU(unit.indexOf(x))}
        nonaktif={!!hasil}
      />
      <div className="d-radar" aria-hidden="true">
        <span className="d-unit">{unit[u]}</span>
        <i className={palsu ? "d-pin jauh" : "d-pin"} />
      </div>
      <span className={palsu ? "d-chip bad" : "d-chip ok"}>
        {palsu ? "41 km dari fasilitas" : "8 m dari unit · radius 50 m"}
      </span>
      <Saklar
        aktif={palsu}
        onKlik={() => {
          setPalsu(!palsu);
          setHasil(null);
        }}
      >
        Simulasi lokasi palsu
      </Saklar>
      {hasil === "ok" && (
        <div className="d-hasil ok">
          Absen jaga {unit[u]} {waktu} WIB tercatat. Wajah cocok, lokasi asli.
        </div>
      )}
      {hasil === "tolak" && (
        <div className="d-hasil bad">
          Ditolak: lokasi palsu terdeteksi. Dicatat untuk ditinjau kepala
          ruangan.
        </div>
      )}
      {hasil ? (
        <button
          className="d-tombol gelap"
          onClick={() => {
            setHasil(null);
            setPalsu(false);
          }}
        >
          Ulangi simulasi
        </button>
      ) : (
        <button
          className="d-tombol"
          onClick={() => setHasil(palsu ? "tolak" : "ok")}
        >
          Absen jaga {waktu}
        </button>
      )}
    </div>
  );
}

/* ---------- Perizinan ---------- */
export function DemoPerizinan() {
  const rekan = ["Ns. Dimas", "Bd. Sari", "Ns. Budi"];
  const [r, setR] = useState(0);
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= 1 && step < 3) {
      const t = setTimeout(() => setStep((s) => s + 1), 900);
      return () => clearTimeout(t);
    }
  }, [step]);
  const alur = [
    "Diajukan",
    `${rekan[r]} menyetujui`,
    "Kepala ruangan menyetujui",
  ];
  return (
    <div className="d">
      <p className="d-judul">Rabu: kamu Malam ⇄ {rekan[r]} Pagi</p>
      <Pil
        opsi={rekan}
        nilai={rekan[r]}
        set={(x) => setR(rekan.indexOf(x))}
        nonaktif={step > 0}
      />
      <ul className="d-alur">
        {alur.map((x, i) => (
          <li key={x} className={step > i ? "on" : ""}>
            {x}
          </li>
        ))}
      </ul>
      {step === 3 && (
        <div className="d-hasil ok">
          Disetujui. Rabu: kamu Pagi, {rekan[r]} Malam. Terkirim ke Absensi dan
          Gaji.
        </div>
      )}
      {step === 0 && (
        <button className="d-tombol" onClick={() => setStep(1)}>
          Ajukan tukar jaga
        </button>
      )}
      {step > 0 && step < 3 && (
        <button className="d-tombol" disabled>
          Menunggu persetujuan...
        </button>
      )}
      {step === 3 && (
        <button className="d-tombol gelap" onClick={() => setStep(0)}>
          Ulangi simulasi
        </button>
      )}
    </div>
  );
}

/* ---------- Gaji ---------- */
export function DemoGaji() {
  const [shift, setShift] = useState(22);
  const [malam, setMalam] = useState(6);
  const [lembur, setLembur] = useState(4);
  const m = Math.min(malam, shift);
  const upah = shift * 220000;
  const premi = m * 40000;
  const lem = lembur * 30000;
  const bruto = upah + premi + lem;
  const bpjs = Math.round(bruto * 0.03);
  return (
    <div className="d">
      <label className="d-geser">
        Shift bulan ini: <b>{shift}</b>
        <input
          type="range"
          min="16"
          max="26"
          value={shift}
          onChange={(e) => setShift(+e.target.value)}
        />
      </label>
      <label className="d-geser">
        Shift malam: <b>{m}</b>
        <input
          type="range"
          min="0"
          max="10"
          value={m}
          onChange={(e) => setMalam(+e.target.value)}
        />
      </label>
      <label className="d-geser">
        Lembur: <b>{lembur} jam</b>
        <input
          type="range"
          min="0"
          max="20"
          value={lembur}
          onChange={(e) => setLembur(+e.target.value)}
        />
      </label>
      <div className="d-slip">
        <div>
          <span>Upah ({shift} × Rp 220.000)</span>
          <b>{rp(upah)}</b>
        </div>
        <div>
          <span>Premi malam ({m} × Rp 40.000)</span>
          <b>{rp(premi)}</b>
        </div>
        <div>
          <span>Lembur ({lembur} × Rp 30.000)</span>
          <b>{rp(lem)}</b>
        </div>
        <div>
          <span>Iuran BPJS (ilustrasi 3%)</span>
          <b>−{rp(bpjs)}</b>
        </div>
        <div className="total">
          <span>Dibawa pulang</span>
          <b>{rp(bruto - bpjs)}</b>
        </div>
      </div>
      <p className="d-catatan">Simulasi ilustratif, bukan nasihat pajak.</p>
    </div>
  );
}

/* ---------- Exam (checklist APD) ---------- */
const apd = [
  "Cuci tangan 6 langkah selesai",
  "Masker medis terpasang benar",
  "Sarung tangan sesuai ukuran",
  "APD lengkap sesuai unit",
  "Area kerja didisinfeksi",
  "Perangkat darurat diperiksa",
];

export function DemoExam() {
  const [cek, setCek] = useState(apd.map(() => false));
  const [mulai, setMulai] = useState(false);
  const n = cek.filter(Boolean).length;
  return (
    <div className="d">
      <p className="d-judul">
        {n} dari {apd.length} selesai
      </p>
      <div className="d-prog">
        <i style={{ width: `${(n / apd.length) * 100}%` }} />
      </div>
      <div className="d-cek">
        {apd.map((x, i) => (
          <button
            key={x}
            role="checkbox"
            aria-checked={cek[i]}
            disabled={mulai}
            className={cek[i] ? "on" : ""}
            onClick={() => setCek(cek.map((v, k) => (k === i ? !v : v)))}
          >
            <i />
            {x}
          </button>
        ))}
      </div>
      {mulai && (
        <div className="d-hasil ok">
          Siap jaga. Checklist 6 dari 6 tercatat 06:52 WIB.
        </div>
      )}
      {mulai ? (
        <button
          className="d-tombol gelap"
          onClick={() => {
            setCek(apd.map(() => false));
            setMulai(false);
          }}
        >
          Ulangi simulasi
        </button>
      ) : (
        <button
          className="d-tombol"
          disabled={n < apd.length}
          onClick={() => setMulai(true)}
        >
          Mulai jaga
        </button>
      )}
    </div>
  );
}

/* ---------- Library ---------- */
const dok = [
  ["SPO Cuci Tangan 6 Langkah", "SPO", true],
  ["SPO Penanganan Pasien IGD", "SPO", true],
  ["Formularium Obat 2026", "SPO", true],
  ["Arsip STR dan SIP Tenaga Medis", "Izin praktik", true],
  ["SIP Bd. Sari berakhir 12 Des 2026", "Izin praktik", false],
  ["Pelatihan Bantuan Hidup Dasar (video)", "Pelatihan", false],
];

export function DemoLibrary() {
  const tab = ["Semua", "SPO", "Izin praktik"];
  const [t, setT] = useState("Semua");
  const [pesawat, setPesawat] = useState(false);
  const daftar = dok.filter(([, k]) => t === "Semua" || k === t);
  return (
    <div className="d">
      <Pil opsi={tab} nilai={t} set={setT} />
      <Saklar aktif={pesawat} onKlik={() => setPesawat(!pesawat)}>
        Mode pesawat
      </Saklar>
      <div className="d-dok">
        {daftar.map(([n, k, offline]) => (
          <div key={n} className={pesawat && !offline ? "mati" : ""}>
            <span>
              <b>{n}</b>
              <small>{k}</small>
            </span>
            <em className={offline ? "d-chip ok" : "d-chip"}>
              {offline ? "Offline siap" : "Perlu internet"}
            </em>
          </div>
        ))}
      </div>
      <p className="d-catatan">4 dari 6 dokumen tersimpan lokal di ponsel.</p>
    </div>
  );
}
