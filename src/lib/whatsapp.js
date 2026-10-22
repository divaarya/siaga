export function buatLinkWa(nomor, pesan) {
  return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
}

// 6281234567890 menjadi 0812 3456 7890
export function formatNomor(nomor) {
  const lokal = "0" + nomor.replace(/^62/, "");
  return lokal.replace(/(\d{4})(?=\d)/g, "$1 ");
}
