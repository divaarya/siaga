import "./Navbar.css";

const links = [
  ["Fitur", "#fitur"],
  ["Harga", "#harga"],
  ["FAQ", "#faq"],
  ["Kontak", "#kontak"],
];

export default function Navbar({ nama, wa, cta }) {
  return (
    <header className="nav">
      <div className="wrap nav-isi">
        <a href="#" className="logo">
          <span className="logo-tanda" aria-hidden="true" />
          {nama}
        </a>
        <nav aria-label="Menu utama">
          {links.map(([t, h]) => (
            <a key={h} href={h}>
              {t}
            </a>
          ))}
        </nav>
        <a
          className="btn utama kecil"
          href={wa}
          target="_blank"
          rel="noreferrer"
        >
          {cta}
        </a>
      </div>
    </header>
  );
}
