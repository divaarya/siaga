import { ImageResponse } from "next/og";
import { getSite } from "@/lib/getSite";

export const alt = "Gambar pratinjau situs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Gambar Open Graph dibuat otomatis dari data situs (nama, judul, warna).
export default async function Image() {
  const s = await getSite();
  const ink = s.warnaAksen;
  const kalimat = s.heroJudul.split(/(?<=\.)\s+/);
  const rows = [
    ["Jaga pagi · IGD", "Hadir"],
    ["Tukar jaga", "Disetujui"],
    ["Gaji bulan ini", "Siap"],
  ];
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#fff",
        color: ink,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: s.warnaUtama,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 32,
                height: 8,
                background: "#fff",
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 8,
                height: 32,
                background: "#fff",
                display: "flex",
              }}
            />
          </div>
          <div style={{ fontSize: 46, fontWeight: 800, display: "flex" }}>
            {s.nama}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {kalimat.map((k, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                fontSize: 68,
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: -2,
                color:
                  kalimat.length > 1 && i === kalimat.length - 1
                    ? s.warnaUtama
                    : ink,
              }}
            >
              {k}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              fontSize: 26,
              marginTop: 22,
              color: "#5f5f5a",
            }}
          >
            Absensi jaga, gaji, exam, library, dan perizinan.
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 400,
          background: s.warnaUtama,
          padding: 40,
          gap: 12,
        }}
      >
        {rows.map(([a, b]) => (
          <div
            key={a}
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "#fff",
              padding: "20px 22px",
              fontSize: 24,
            }}
          >
            <div style={{ display: "flex" }}>{a}</div>
            <div style={{ display: "flex", fontWeight: 800 }}>{b}</div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
