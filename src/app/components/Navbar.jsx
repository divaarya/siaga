"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const links = [
  ["Modul", "#modul"],
  ["Fasilitas", "#fasilitas"],
  ["Cara Kerja", "#cara-kerja"],
  ["Harga", "#harga"],
  ["FAQ", "#faq"],
];

export default function Navbar({ nama, wa }) {
  const [buka, setBuka] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-isi">
        <a href="#" className="nav-logo">
          <span className="logo-tanda" aria-hidden="true" />
          {nama}
        </a>
        <nav
          className={buka ? "nav-menu buka" : "nav-menu"}
          aria-label="Menu utama"
        >
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setBuka(false)}>
              {t}
            </a>
          ))}
        </nav>
        <div className="nav-aksi">
          <a className="btn garis kecil" href="#simulasi">
            Coba Simulasi
          </a>
          <a
            className="btn merah kecil"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Minta Demo
          </a>
        </div>
        <button
          className="nav-toggle"
          onClick={() => setBuka(!buka)}
          aria-label="Buka menu"
          aria-expanded={buka}
        >
          {buka ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
