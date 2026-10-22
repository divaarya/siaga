"use client";
import { useEffect, useState } from "react";
import Phone from "./Phone";
import "./Demo.css";

const rp = (n) => "Rp " + n.toLocaleString("id-ID");

function Saklar({ aktif, onKlik, children }) {
  return (
    <button
      className="saklar"
      role="switch"
      aria-checked={aktif}
      onClick={onKlik}
    >
      {children}
      <i />
    </button>
  );
}

export function DemoHero() {
  const [sudah, setSudah] = useState(false);
  return (
    <Phone judul="Jadwal Jaga">
      <div className="d-sapa">
        <small>Selamat pagi</small>
        <b>Ns. Rina Maharani</b>
      </div>
      <div className="d-jam">
        06:58 <span>WIB</span>
      </div>
      <div className="d-kartu">
        <b>Jaga Pagi · IGD</b>
        <small>07:00 – 14:00 WIB · Klinik Sehat Sentosa</small>
        <span className="chip ok">8 m dari pintu IGD</span>
      </div>
      {sudah && (
        <div className="d-hasil ok">
          Absen jaga 06:58 WIB tercatat. Wajah cocok, lokasi asli.
        </div>
      )}
      <button className="d-tombol merah" onClick={() => setSudah(!sudah)}>
        {sudah ? "Ulangi simulasi" : "Absen Jaga"}
      </button>
    </Phone>
  );
}

export function DemoAbsensi() {
  const unit = ["IGD", "Rawat Inap", "Poli"];
  const [u, setU] = useState(0);
  const [palsu, setPalsu] = useState(false);
  const [hasil, setHasil] = useState(null);
  const ulang = () => {
    setHasil(null);
    setPalsu(false);
  };
  return (
    <Phone judul="Absen Jaga">
      <div className="d-sapa">
        <small>Pilih unit jaga</small>
        <b>Ns. Dimas Saputra</b>
      </div>
      <div className="pilih">
        {unit.map((x, i) => (
          <button
            key={x}
            aria-pressed={u === i}
            disabled={!!hasil}
            onClick={() => setU(i)}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="radar" aria-hidden="true">
        <span className="sekolah">{unit[u]}</span>
        <i className={palsu ? "pin jauh" : "pin"} />
      </div>
      <span className={palsu ? "chip bad" : "chip ok"}>
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
          Absen jaga {unit[u]} 06:58 WIB tercatat. Wajah cocok, lokasi asli.
        </div>
      )}
      {hasil === "tolak" && (
        <div className="d-hasil bad">
          Ditolak: lokasi palsu terdeteksi. Dicatat untuk ditinjau kepala
          ruangan.
        </div>
      )}
      {hasil ? (
        <button className="d-tombol" onClick={ulang}>
          Ulangi simulasi
        </button>
      ) : (
        <button
          className="d-tombol merah"
          onClick={() => setHasil(palsu ? "tolak" : "ok")}
        >
          Absen Jaga
        </button>
      )}
    </Phone>
  );
}

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
    <Phone judul="Tukar Jaga">
      <div className="d-sapa">
        <small>Rabu, 14 Okt</small>
        <b>Kamu Malam ⇄ {rekan[r]} Pagi</b>
      </div>
      <div className="pilih">
        {rekan.map((x, i) => (
          <button
            key={x}
            aria-pressed={r === i}
            disabled={step > 0}
            onClick={() => setR(i)}
          >
            {x}
          </button>
        ))}
      </div>
      <ul className="alur">
        {alur.map((x, i) => (
          <li key={x} className={step > i ? "on" : ""}>
            {x}
          </li>
        ))}
      </ul>
      {step === 3 && (
        <div className="d-hasil ok">
          Disetujui. Rabu: kamu Pagi, {rekan[r]} Malam.
          <br />
          Terkirim ke: Absensi · Gaji
        </div>
      )}
      {step === 0 && (
        <button className="d-tombol merah" onClick={() => setStep(1)}>
          Ajukan tukar jaga
        </button>
      )}
      {step > 0 && step < 3 && (
        <button className="d-tombol" disabled>
          Menunggu persetujuan...
        </button>
      )}
      {step === 3 && (
        <button className="d-tombol" onClick={() => setStep(0)}>
          Ulangi simulasi
        </button>
      )}
    </Phone>
  );
}

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
    <Phone judul="Slip Gaji">
      <div className="d-sapa">
        <small>Periode Oktober 2026</small>
        <b>Ns. Rina Maharani</b>
      </div>
      <label className="geser-label">
        Shift bulan ini: <b>{shift}</b>
        <input
          className="geser"
          type="range"
          min="16"
          max="26"
          value={shift}
          onChange={(e) => setShift(+e.target.value)}
        />
      </label>
      <label className="geser-label">
        Shift malam: <b>{m}</b>
        <input
          className="geser"
          type="range"
          min="0"
          max="10"
          value={m}
          onChange={(e) => setMalam(+e.target.value)}
        />
      </label>
      <label className="geser-label">
        Lembur: <b>{lembur} jam</b>
        <input
          className="geser"
          type="range"
          min="0"
          max="20"
          value={lembur}
          onChange={(e) => setLembur(+e.target.value)}
        />
      </label>
      <div className="slip">
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
      <small className="catatan">
        Simulasi ilustratif, bukan nasihat pajak.
      </small>
    </Phone>
  );
}

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
  const ulang = () => {
    setCek(apd.map(() => false));
    setMulai(false);
  };
  return (
    <Phone judul="Checklist APD">
      <div className="d-sapa">
        <small>Wajib sebelum jaga · 06:50 WIB</small>
        <b>
          {n} dari {apd.length} selesai
        </b>
      </div>
      <div className="prog">
        <i style={{ width: `${(n / apd.length) * 100}%` }} />
      </div>
      <div className="daftar-cek">
        {apd.map((x, i) => (
          <button
            key={x}
            role="checkbox"
            aria-checked={cek[i]}
            disabled={mulai}
            className={cek[i] ? "cek on" : "cek"}
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
        <button className="d-tombol" onClick={ulang}>
          Ulangi simulasi
        </button>
      ) : (
        <button
          className="d-tombol merah"
          disabled={n < apd.length}
          onClick={() => setMulai(true)}
        >
          Mulai Jaga
        </button>
      )}
    </Phone>
  );
}

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
  const [t, setT] = useState(0);
  const [pesawat, setPesawat] = useState(false);
  const daftar = dok.filter(([, k]) => t === 0 || k === tab[t]);
  return (
    <Phone judul="Library SPO">
      <div className="pilih">
        {tab.map((x, i) => (
          <button key={x} aria-pressed={t === i} onClick={() => setT(i)}>
            {x}
          </button>
        ))}
      </div>
      <Saklar aktif={pesawat} onKlik={() => setPesawat(!pesawat)}>
        Mode pesawat
      </Saklar>
      <div className="daftar-dok">
        {daftar.map(([n, k, offline]) => (
          <div key={n} className={pesawat && !offline ? "dok mati" : "dok"}>
            <div>
              {n}
              <small>{k}</small>
            </div>
            <span className={offline ? "chip ok" : "chip"}>
              {offline ? "Offline siap" : "Perlu internet"}
            </span>
          </div>
        ))}
      </div>
      <small className="catatan">
        4 dari 6 dokumen tersimpan lokal di ponsel.
      </small>
    </Phone>
  );
}
