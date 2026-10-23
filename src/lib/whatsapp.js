export function buatLinkWa(nomor, pesan) {
  return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
}

export function formatNomor(nomor) {
  const lokal = "0" + nomor.replace(/^62/, "");
  return lokal.replace(/(\d{4})(?=\d)/g, "$1 ");
}
