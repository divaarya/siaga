import { ImageResponse } from "next/og";
import { getSite } from "@/lib/getSite";

export const alt = "Gambar pratinjau situs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Gambar Open Graph dibuat otomatis dari data situs (nama, judul, warna).
export default async function Image() {
  const s = await getSite();
  const kalimat = s.heroJudul.split(/(?<=\.)\s+/);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 60,
        color: "#0b1030",
        backgroundImage:
          "linear-gradient(90deg, #ffd9c7 0%, #dff1ff 36%, #ffc9a0 68%, #0c1233 100%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 27,
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
              width: 28,
              height: 7,
              background: "#fff",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 7,
              height: 28,
              background: "#fff",
              display: "flex",
            }}
          />
        </div>
        <div style={{ fontSize: 44, fontWeight: 800, display: "flex" }}>
          {s.nama}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}
        >
          {kalimat.map((k, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                fontSize: 58,
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: -2,
                color:
                  kalimat.length > 1 && i === kalimat.length - 1
                    ? s.warnaUtama
                    : "#0b1030",
              }}
            >
              {k}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 800,
            letterSpacing: -8,
            lineHeight: 0.85,
            color: "#fff",
          }}
        >
          24h
        </div>
      </div>
    </div>,
    size,
  );
}
