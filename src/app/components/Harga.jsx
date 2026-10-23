import { Check, Minus } from "lucide-react";
import { paket, barisHarga } from "@/data/konten";
import "./Harga.css";

export default function Harga({ wa }) {
  return (
    <section id="harga" className="seksi">
      <div className="wrap">
        <div className="kepala">
          <span className="label">Paket dan biaya</span>
          <h2>Bayar hanya untuk tenaga yang aktif.</h2>
          <p>
            Tanpa biaya pemasangan awal dan tanpa biaya server tersembunyi.
            Harga bersifat simulasi ilustratif.
          </p>
        </div>
        <div className="kartu hg-bungkus">
          <table className="hg">
            <thead>
              <tr>
                <th>
                  <span className="sr">Fitur</span>
                </th>
                {paket.map((p) => (
                  <th key={p.nama} className={p.populer ? "pop" : ""}>
                    {p.populer && <em>Paling dipilih</em>}
                    <b>{p.nama}</b>
                    <small>{p.batas}</small>
                    <strong>{p.harga}</strong>
                    <small>{p.satuan}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {barisHarga.map(([n, v]) => (
                <tr key={n}>
                  <th scope="row">{n}</th>
                  {v.map((ada, i) => (
                    <td key={i} className={paket[i].populer ? "pop" : ""}>
                      {ada ? (
                        <Check
                          size={18}
                          strokeWidth={3}
                          aria-label="Termasuk"
                        />
                      ) : (
                        <Minus
                          size={16}
                          aria-label="Tidak termasuk"
                          className="nol"
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td />
                {paket.map((p) => (
                  <td key={p.nama} className={p.populer ? "pop" : ""}>
                    <a
                      className={p.populer ? "btn utama kecil" : "btn kecil"}
                      href={wa}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Minta demo
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
