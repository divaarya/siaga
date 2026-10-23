// Data bawaan. Nanti diganti oleh data dari API admin panel (lewat lib/getSite.js).
export const siteConfig = {
  nama: "Siaga",
  warnaUtama: "#e4002b",
  warnaAksen: "#0b1030",
  heroJudul: "Jadwal jaga rapi. Absen jujur. Gaji tepat.",
  heroDeskripsi:
    "Siaga menyatukan absensi jaga, gaji per shift, uji kompetensi, SPO, dan perizinan tenaga kesehatan dalam satu aplikasi untuk klinik dan rumah sakit.",
  ctaTeks: "Minta Demo",
  // Nomor asli cukup ditulis di .env.local, bukan di file ini.
  whatsappNomor: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappPesan:
    "Halo Siaga, saya ingin meminta demo sistem HRIS untuk klinik atau rumah sakit kami.",
  email: "halo@siaga.gmail",
  kota: "Surabaya, Jawa Timur",
  seo: {
    metaTitle:
      "Siaga - HRIS Klinik dan Rumah Sakit: Absensi Jaga, Gaji, Exam, Library, Perizinan",
    metaDescription:
      "Absensi jaga dengan selfie dan GPS, tukar jaga, gaji per shift, checklist APD, dan SPO offline dalam satu aplikasi untuk klinik dan rumah sakit.",
    ogImage: "",
  },
};
