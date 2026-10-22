import "./Phone.css";

export default function Phone({ judul, children }) {
  return (
    <div className="phone">
      <div className="layar">
        <div className="status">
          <span>06:58</span>
          <span>{judul}</span>
        </div>
        <div className="layar-isi">{children}</div>
      </div>
    </div>
  );
}
