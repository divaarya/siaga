export const bukti = [
  ["60+", "klinik dan rumah sakit"],
  ["4.200+", "perawat dan tenaga medis"],
  ["0", "titip absen lolos tanpa tanda"],
  ["2 hari", "pasang untuk satu fasilitas"],
];

export const logo = [
  "Klinik Sehat Sentosa",
  "RS Medika Nusantara",
  "Klinik Pratama Bunda",
  "Lab Cendekia Medika",
  "Apotek Wijaya Farma",
];

export const fasilitas = [
  {
    nama: "Klinik Pratama",
    teks: "Dokter, perawat, dan admin dengan jam praktik berbeda absen dari satu aplikasi.",
    chip: "Jam praktik",
  },
  {
    nama: "Rumah Sakit",
    teks: "Jaga pagi, siang, dan malam di IGD dan rawat inap, dengan tukar jaga yang disetujui kepala ruangan.",
    chip: "3 shift",
  },
  {
    nama: "Laboratorium",
    teks: "Analis dan petugas sampel absen di titik layanan, uji kompetensi berkala tercatat.",
    chip: "Per titik layanan",
  },
  {
    nama: "Apotek dan Praktik Bersama",
    teks: "Apoteker dan asisten dengan jadwal bergantian dibayar per shift secara jelas.",
    chip: "Upah per shift",
  },
];

export const modul = [
  {
    id: "absensi",
    no: "01",
    nama: "Absensi",
    warna: "w1",
    judul: "Absen jaga yang tidak bisa dititipkan.",
    desk: "Selfie memastikan orangnya, GPS memastikan unitnya. Jadwal jaga pagi, siang, dan malam masuk otomatis ke rekap.",
    fitur: [
      [
        "Selfie biometrik",
        "Wajah dicocokkan dengan foto referensi tenaga kesehatan.",
      ],
      [
        "Geofence per unit",
        "Absen hanya sah di dalam radius fasilitas atau unit layanan.",
      ],
      [
        "Deteksi lokasi palsu",
        "Aplikasi lokasi palsu dan lompatan posisi ditandai ke atasan.",
      ],
      [
        "Jadwal jaga rolling",
        "Pola pagi, siang, malam tersusun dan terlihat di ponsel.",
      ],
      [
        "Rekap per unit",
        "IGD, rawat inap, dan poli terpantau terpisah secara real-time.",
      ],
      [
        "Jaga panggilan",
        "Jaga on-call dicatat dari jam dipanggil sampai selesai.",
      ],
    ],
  },
  {
    id: "perizinan",
    no: "02",
    nama: "Perizinan",
    warna: "w2",
    judul: "Tukar jaga dan izin, selesai dari ponsel.",
    desk: "Ajukan tukar jaga dengan rekan, pantau persetujuan kepala ruangan, dan jadwal berubah dengan sendirinya.",
    fitur: [
      [
        "Tukar jaga antar rekan",
        "Dua perawat bertukar jadwal tanpa kepala ruangan menyusun ulang.",
      ],
      [
        "Izin sakit + foto surat",
        "Surat dokter difoto dari ponsel dan langsung tercatat.",
      ],
      [
        "Persetujuan berjenjang",
        "Dari rekan, kepala ruangan, sampai manajer keperawatan.",
      ],
      [
        "Pengganti jaga otomatis",
        "Shift kosong ditawarkan ke tenaga yang tersedia.",
      ],
      ["Persetujuan lembur", "Jam mulai dan selesai lembur tercatat jelas."],
      ["Saldo cuti", "Sisa cuti tahunan terlihat tanpa bertanya ke HRD."],
    ],
  },
  {
    id: "gaji",
    no: "03",
    nama: "Gaji",
    warna: "w3",
    judul: "Gaji per shift, terhitung tanpa spreadsheet.",
    desk: "Jumlah jaga, tunjangan malam, dan lembur masuk slip langsung dari data absensi.",
    fitur: [
      ["Upah per shift", "Dihitung dari jaga yang benar-benar dihadiri."],
      [
        "Tunjangan jaga malam",
        "Premi malam dan hari libur terhitung per frekuensi.",
      ],
      ["Insentif unit", "Insentif IGD dan kamar operasi tercatat terpisah."],
      ["Lembur berjenjang", "Kalkulasi lembur dari pengajuan yang disetujui."],
      ["BPJS dan PPh 21", "Iuran dan pajak dihitung otomatis tiap periode."],
      ["Slip gaji digital", "Tenaga kesehatan melihat rincian dari ponsel."],
    ],
  },
  {
    id: "exam",
    no: "04",
    nama: "Exam",
    warna: "w4",
    judul: "Siap sebelum jaga: checklist APD dan uji kompetensi.",
    desk: "Checklist kesiapan selesai sebelum jaga dimulai. Uji kompetensi berkala tercatat di profil.",
    fitur: [
      [
        "Checklist APD dan higienitas",
        "Cuci tangan, APD, dan alat dasar diperiksa sebelum jaga.",
      ],
      [
        "Kuis SPO harian",
        "Kuis singkat dengan timer untuk pemahaman prosedur.",
      ],
      [
        "Uji kompetensi berkala",
        "Evaluasi keahlian perawat, analis, dan apoteker.",
      ],
      ["Tes rekrutmen", "Calon tenaga kesehatan mengerjakan tes dari ponsel."],
      ["Pelatihan wajib", "Progres pelatihan wajib terpantau per orang."],
      ["Rekap nilai", "Nilai tersimpan di profil dan mudah diaudit."],
    ],
  },
  {
    id: "library",
    no: "05",
    nama: "Library",
    warna: "w5",
    judul: "SPO di genggaman, terbaca tanpa sinyal.",
    desk: "SPO klinis, formularium, dan arsip izin praktik tersimpan di ponsel dan bisa dibuka offline.",
    fitur: [
      ["SPO klinis offline", "Prosedur tetap terbaca di ruang tanpa sinyal."],
      ["Formularium obat", "Daftar obat fasilitas mudah dicari."],
      ["Arsip STR dan SIP", "Masa berlaku diingatkan sebelum habis."],
      ["Surat edaran", "Kebijakan dan edaran fasilitas tersimpan aman."],
      [
        "E-learning pelatihan",
        "Materi pelatihan dan progres belajar tenaga medis.",
      ],
      ["Pencarian cepat", "Temukan prosedur dalam hitungan detik."],
    ],
  },
];

export const chatLama = [
  [
    "Ns. Dimas (IGD)",
    "Besok siapa yang jaga malam? Jadwal minggu lalu mana ya?",
    "21:14",
  ],
  [
    "Ns. Rina (Rawat Inap)",
    "Aku tukar jaga sama Dimas ya, kepala ruangan belum balas.",
    "21:20",
  ],
  [
    "Bidan Sari",
    "Surat dokter menyusul besok pagi ya, masih di klinik.",
    "21:28",
  ],
  ["Kepala Ruangan", "Tolong rekap lembur kemarin lagi, manual ya.", "21:35"],
];

export const bandingan = [
  [
    "Absen tanda tangan di buku, bisa dititipkan",
    "Selfie dan GPS unit, tidak bisa dititipkan",
  ],
  [
    "Tukar jaga lewat chat dan sering lupa dicatat",
    "Tukar jaga disetujui dan jadwal berubah otomatis",
  ],
  [
    "Lembur dan insentif dihitung manual di Excel",
    "Jam jaga langsung masuk ke slip gaji",
  ],
];

export const langkah = [
  {
    judul: "Impor tenaga dan unit",
    teks: "Unggah daftar tenaga kesehatan dari Excel, lalu tandai titik GPS dan radius tiap unit.",
    chip: ["Excel", "CSV", "Titik GPS"],
  },
  {
    judul: "Susun pola jaga dan tarif",
    teks: "Pilih pola pagi, siang, malam, atur jeda istirahat, upah per shift, dan premi malam.",
    chip: ["3 shift", "Upah shift", "Premi malam"],
  },
  {
    judul: "Tenaga medis absen dari ponsel",
    teks: "Rekam foto referensi sekali, lalu langsung absen dengan selfie dan GPS di unit kerja.",
    chip: ["Selfie", "GPS", "Siap pakai"],
  },
];

export const testimoni = [
  {
    nama: "Rina Maharani",
    jabatan: "Kepala Keperawatan, Klinik Sehat Sentosa",
    teks: "Titip absen berhenti sejak selfie wajib. Rekap kehadiran tiga unit selesai tanpa saya mengejar laporan.",
  },
  {
    nama: "Hendra Kusuma",
    jabatan: "Manajer HRD, RS Medika Nusantara",
    teks: "Tukar jaga dulu lewat chat dan sering lupa dicatat. Sekarang tercatat, disetujui, dan masuk jadwal hari itu juga.",
  },
  {
    nama: "Made Wijaya",
    jabatan: "Apoteker Penanggung Jawab, Apotek Wijaya Farma",
    teks: "Upah per shift dan premi malam sudah ada di slip. Asisten apoteker berhenti menanyakan hitungan di akhir bulan.",
  },
];

export const harga = [
  {
    nama: "Klinik",
    batas: "Hingga 40 tenaga aktif",
    harga: "Rp 12.000",
    satuan: "/ orang / bulan",
    teks: "Untuk klinik pratama, lab, dan apotek tunggal.",
    fitur: [
      "Modul Absensi (selfie dan geofence)",
      "Modul Perizinan dan tukar jaga",
      "Modul Library dan SPO offline",
      "Dukungan WhatsApp",
    ],
  },
  {
    nama: "Fasilitas",
    batas: "40 sampai 250 tenaga aktif",
    harga: "Rp 9.500",
    satuan: "/ orang / bulan",
    teks: "Untuk rumah sakit dan klinik multi-unit.",
    populer: true,
    fitur: [
      "Semua fitur Klinik",
      "Modul Gaji dan slip digital",
      "Modul Exam dan checklist APD",
      "Persetujuan berjenjang",
    ],
  },
  {
    nama: "Jaringan",
    batas: "250+ tenaga aktif",
    harga: "Hubungi kami",
    satuan: "",
    teks: "Untuk grup rumah sakit dan banyak cabang.",
    fitur: [
      "Semua fitur Fasilitas",
      "Banyak cabang dan entitas",
      "Ekspor laporan bank dan payroll",
      "Pendamping khusus",
    ],
  },
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
