"use client";
import { useCallback, useEffect, useState } from "react";
import {
  Play,
  Pause,
  Clock,
  CalendarCheck,
  Wallet,
  ClipboardCheck,
  BookOpen,
  Check,
} from "lucide-react";
import { kejadian, modulInfo, roster, unit } from "@/data/konten";
import {
  DemoAbsensi,
  DemoPerizinan,
  DemoGaji,
  DemoExam,
  DemoLibrary,
} from "./Demo";
import "./Jam.css";

const demo = {
  absensi: DemoAbsensi,
  perizinan: DemoPerizinan,
  gaji: DemoGaji,
  exam: DemoExam,
  library: DemoLibrary,
};
const ikon = {
  absensi: Clock,
  perizinan: CalendarCheck,
  gaji: Wallet,
  exam: ClipboardCheck,
  library: BookOpen,
};

const ke = (s) => {
  const [h, m] = s.split(":").map(Number);
  return h * 60 + m;
};
const jam = (m) =>
  `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
const faseDari = (m) =>
  m >= 270 && m < 420
    ? "fajar"
    : m >= 420 && m < 1020
      ? "siang"
      : m >= 1020 && m < 1170
        ? "senja"
        : "malam";
const shiftDari = (m) =>
  m >= 390 && m < 840 ? "Pagi" : m >= 840 && m < 1260 ? "Siang" : "Malam";
const namaFase = {
  fajar: "Fajar",
  siang: "Siang hari",
  senja: "Senja",
  malam: "Malam",
};

const THUMB = 30;
const kiri = (m) =>
  `calc(${(m / 1439) * 100}% + ${(0.5 - m / 1439) * THUMB}px)`;
const ticks = [0, 180, 360, 540, 720, 900, 1080, 1260, 1439];
const acara = kejadian
  .map((k) => ({ ...k, m: ke(k.t) }))
  .sort((a, b) => a.m - b.m);

export default function Jam({ site, wa }) {
  const [menit, setMenit] = useState(418); // 06:58
  const [main, setMain] = useState(false);

  const fase = faseDari(menit);
  const shift = shiftDari(menit);
  const aktif =
    [...acara].reverse().find((k) => k.m <= menit) || acara[acara.length - 1];
  const m = modulInfo[aktif.mod];
  const D = demo[aktif.mod];
  const IkonAktif = ikon[aktif.mod];

  // Warna seluruh halaman mengikuti fase hari.
  useEffect(() => {
    document.documentElement.dataset.fase = fase;
  }, [fase]);

  // Putar otomatis 24 jam.
  useEffect(() => {
    if (!main) return;
    const id = setInterval(() => setMenit((x) => (x + 8) % 1440), 90);
    return () => clearInterval(id);
  }, [main]);

  const lompat = useCallback((mm) => {
    setMain(false);
    setMenit(mm);
  }, []);

  // Link seperti /#j-0658 melompat ke jam tersebut.
  useEffect(() => {
    const baca = () => {
      const h = /^#j-(\d{2})(\d{2})$/.exec(window.location.hash);
      if (!h) return;
      lompat(Number(h[1]) * 60 + Number(h[2]));
      document
        .getElementById("jam")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    baca();
    window.addEventListener("hashchange", baca);
    return () => window.removeEventListener("hashchange", baca);
  }, [lompat]);

  const kalimat = site.heroJudul.split(/(?<=\.)\s+/);

  return (
    <section id="jam" className="stage">
      <div className="wrap">
        <div className="atas">
          <span className="label">HRIS untuk klinik dan rumah sakit</span>
          <h1>
            {kalimat.map((k, i) => (
              <span
                key={i}
                className={
                  kalimat.length > 1 && i === kalimat.length - 1 ? "merah" : ""
                }
              >
                {k}
              </span>
            ))}
          </h1>
          <div className="kanan">
            <p>{site.heroDeskripsi}</p>
            <div className="aksi">
              <a
                className="btn utama"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                {site.ctaTeks}
              </a>
              <button className="btn" onClick={() => setMain(!main)}>
                {main ? <Pause size={16} /> : <Play size={16} />}{" "}
                {main ? "Jeda" : "Putar 24 jam"}
              </button>
            </div>
          </div>
        </div>

        <div className="jam-besar">
          <b aria-label={`Pukul ${jam(menit)}`}>{jam(menit)}</b>
          <div className="fase">
            <strong>{namaFase[fase]}</strong>
            <span>Shift {shift} sedang jaga</span>
          </div>
        </div>

        <div className="pena">
          {acara.map((k) => {
            const I = ikon[k.mod];
            return (
              <button
                key={k.t}
                className={aktif.t === k.t ? "tanda on" : "tanda"}
                style={{ left: kiri(k.m) }}
                onClick={() => lompat(k.m)}
                aria-label={`${k.t} ${k.judul}`}
                title={`${k.t} · ${k.judul}`}
              >
                <I size={16} />
              </button>
            );
          })}
        </div>
        <input
          className="geser"
          type="range"
          min="0"
          max="1439"
          step="1"
          value={menit}
          onChange={(e) => lompat(Number(e.target.value))}
          aria-label="Geser jam"
          aria-valuetext={jam(menit)}
        />
        <div className="skala" aria-hidden="true">
          {ticks.map((t) => (
            <span key={t} style={{ left: kiri(t) }}>
              {t === 1439 ? "24" : String(t / 60).padStart(2, "0")}
            </span>
          ))}
        </div>
        <div className="legenda">
          <span>
            <i className="pg" />
            Shift pagi
          </span>
          <span>
            <i className="sg" />
            Shift siang
          </span>
          <span>
            <i className="ml" />
            Shift malam
          </span>
          <small>Geser jamnya, atau ketuk ikon fitur di atas</small>
        </div>

        <div className="stage-grid">
          <article className="kartu kj" aria-live="polite">
            <header className="kj-kepala">
              <span className="kj-jam">{aktif.t}</span>
              <div>
                <small>Fitur · {m.nama}</small>
                <h2>{aktif.judul}</h2>
              </div>
              <IkonAktif size={22} />
            </header>
            <p className="kj-desk">{m.desk}</p>
            <D key={aktif.t} malam={aktif.malam} />
            <ul className="kj-fitur">
              {m.fitur.map((f) => (
                <li key={f}>
                  <Check size={13} strokeWidth={3.5} />
                  {f}
                </li>
              ))}
            </ul>
          </article>

          <aside className="samping">
            <section className="kartu sp">
              <h3>
                Sedang jaga <em>Shift {shift}</em>
              </h3>
              {unit.map((u) => {
                const o = roster[shift][u];
                return (
                  <div key={u} className="unit">
                    <b>{u}</b>
                    {o.length ? (
                      <div className="avatars">
                        {o.map((n) => (
                          <span key={n} title={n}>
                            {n.split(" ")[1][0]}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <em>Tutup</em>
                    )}
                    <small>{o.length ? `${o.length} tenaga` : "—"}</small>
                  </div>
                );
              })}
            </section>
            <section className="kartu sp">
              <h3>Jejak jaga hari ini</h3>
              <ol className="log">
                {acara.map((k) => (
                  <li key={k.t} className={k.m <= menit ? "lalu" : ""}>
                    <button onClick={() => lompat(k.m)}>
                      <span>{k.t}</span>
                      {k.judul}
                    </button>
                  </li>
                ))}
              </ol>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
