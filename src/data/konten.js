// Kejadian di jam jaga. t = jam, mod = fitur yang ditampilkan.
export const kejadian = [
  { t: "06:50", mod: "exam", judul: "Checklist APD sebelum jaga" },
  { t: "06:58", mod: "absensi", judul: "Absen jaga pagi" },
  { t: "10:15", mod: "perizinan", judul: "Tukar jaga disetujui" },
  { t: "13:00", mod: "library", judul: "SPO dibuka tanpa sinyal" },
  { t: "14:05", mod: "gaji", judul: "Shift selesai, lembur masuk slip" },
  { t: "21:55", mod: "absensi", judul: "Absen jaga malam", malam: true },
];

export const modulInfo = {
  absensi: {
    nama: "Absensi",
    desk: "Selfie memastikan orangnya, GPS memastikan unitnya. Jadwal pagi, siang, dan malam masuk otomatis ke rekap.",
    fitur: [
      "Selfie biometrik",
      "Geofence per unit",
      "Deteksi lokasi palsu",
      "Jadwal jaga rolling",
      "Rekap per unit",
      "Jaga panggilan",
    ],
  },
  perizinan: {
    nama: "Perizinan",
    desk: "Ajukan tukar jaga dengan rekan, pantau persetujuan kepala ruangan, dan jadwal berubah dengan sendirinya.",
    fitur: [
      "Tukar jaga antar rekan",
      "Izin sakit + foto surat",
      "Persetujuan berjenjang",
      "Pengganti jaga otomatis",
      "Persetujuan lembur",
      "Saldo cuti",
    ],
  },
  gaji: {
    nama: "Gaji",
    desk: "Jumlah jaga, tunjangan malam, dan lembur masuk slip langsung dari data absensi.",
    fitur: [
      "Upah per shift",
      "Tunjangan jaga malam",
      "Insentif unit",
      "Lembur berjenjang",
      "BPJS dan PPh 21",
      "Slip gaji digital",
    ],
  },
  exam: {
    nama: "Exam",
    desk: "Checklist kesiapan selesai sebelum jaga dimulai. Uji kompetensi berkala tercatat di profil.",
    fitur: [
      "Checklist APD dan higienitas",
      "Kuis SPO harian",
      "Uji kompetensi berkala",
      "Tes rekrutmen",
      "Pelatihan wajib",
      "Rekap nilai",
    ],
  },
  library: {
    nama: "Library",
    desk: "SPO klinis, formularium, dan arsip izin praktik tersimpan di ponsel dan bisa dibuka offline.",
    fitur: [
      "SPO klinis offline",
      "Formularium obat",
      "Arsip STR dan SIP",
      "Surat edaran",
      "E-learning pelatihan",
      "Pencarian cepat",
    ],
  },
};

export const unit = ["IGD", "Rawat Inap", "Poli", "Lab"];

export const roster = {
  Pagi: {
    IGD: ["Ns. Rina", "Dr. Aditya", "Ns. Dimas"],
    "Rawat Inap": ["Ns. Sari", "Ns. Budi", "Bd. Wulan"],
    Poli: ["Dr. Maya", "Ns. Tika"],
    Lab: ["Ana. Hendra"],
  },
  Siang: {
    IGD: ["Ns. Fajar", "Dr. Lestari"],
    "Rawat Inap": ["Ns. Agus", "Ns. Nia"],
    Poli: ["Dr. Bayu"],
    Lab: ["Ana. Putri"],
  },
  Malam: {
    IGD: ["Ns. Yusuf", "Dr. Kevin"],
    "Rawat Inap": ["Ns. Dewi", "Ns. Anton"],
    Poli: [],
    Lab: ["Ana. Joko"],
  },
};

export const paket = [
  {
    nama: "Klinik",
    batas: "Hingga 40 tenaga",
    harga: "Rp 12.000",
    satuan: "/ orang / bulan",
  },
  {
    nama: "Fasilitas",
    batas: "40 sampai 250 tenaga",
    harga: "Rp 9.500",
    satuan: "/ orang / bulan",
    populer: true,
  },
  { nama: "Jaringan", batas: "250+ tenaga", harga: "Hubungi kami", satuan: "" },
];

export const barisHarga = [
  ["Absensi selfie dan geofence", [true, true, true]],
  ["Perizinan dan tukar jaga", [true, true, true]],
  ["Library dan SPO offline", [true, true, true]],
  ["Gaji per shift dan slip digital", [false, true, true]],
  ["Exam dan checklist APD", [false, true, true]],
  ["Persetujuan berjenjang", [false, true, true]],
  ["Banyak cabang dalam satu akun", [false, false, true]],
  ["Ekspor payroll untuk bank", [false, false, true]],
];

export const faq = [
  {
    t: "Bagaimana selfie dan GPS mencegah titip absen?",
    j: "Setiap absen meminta selfie yang dicocokkan dengan foto referensi, lalu lokasi diperiksa terhadap radius unit. Absen yang tidak cocok ditandai untuk ditinjau atasan.",
  },
  {
    t: "Bagaimana dengan jaga on-call dan panggilan darurat?",
    j: "Jaga panggilan dicatat dari saat dipanggil sampai selesai, lalu dihitung sebagai jam kerja atau lembur sesuai aturan yang kamu atur.",
  },
  {
    t: "Bagaimana data wajah dan lokasi dilindungi?",
    j: "Lokasi hanya diambil saat tombol absen ditekan dan tidak ada pelacakan di luar itu. Akses data dibatasi per peran dan tercatat.",
  },
  {
    t: "Bagaimana jika sinyal lemah di ruangan?",
    j: "SPO dan arsip yang sudah diunduh tetap bisa dibuka offline. Absensi memerlukan koneksi saat tombol ditekan.",
  },
  {
    t: "Bisakah pola jaga dan tarif diatur sendiri?",
    j: "Bisa. Pola pagi, siang, malam, jeda istirahat, upah per shift, premi malam, dan lembur dapat kamu atur sesuai kebijakan fasilitas.",
  },
  {
    t: "Berapa lama pemasangan untuk satu fasilitas?",
    j: "Biasanya satu sampai dua hari, termasuk impor tenaga, penentuan radius unit, dan pengaturan pola jaga.",
  },
];

export const privasi = [
  "Lokasi hanya diambil saat tombol absen ditekan",
  "Foto referensi hanya untuk mencocokkan wajah",
  "Akses data dibatasi per peran dan tercatat",
];
