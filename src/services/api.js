const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Fungsi dasar untuk memanggil backend REST API.
// Nanti dipakai saat backend sudah dibuat.
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(`Permintaan gagal: ${res.status}`);
  return res.json();
}

export const api = {
  get: (path) => request(path),
  post: (path, data) =>
    request(path, { method: "POST", body: JSON.stringify(data) }),
};
