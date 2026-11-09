# Blueprint Website Badan Riset Maqāṣid (BARISMA)

**Institusi:** Badan Riset Maqāṣid, Pondok Pesantren Lingkar Studi Qur’an (LSQ) Ar-Rohmah  
**Lokasi yang disebut dalam dokumen:** Yogyakarta  
**Versi dokumen:** 1.0 — 8 November 2026  
**Status:** Blueprint konseptual untuk validasi kelembagaan dan dasar desain/pengembangan

> **Gagasan utama:** BARISMA ditampilkan sebagai lembaga riset dan pengembangan kapasitas akademik yang mengintegrasikan spiritualitas, intelektualitas, dan profesionalitas. Website menjadi representasi kelembagaan sekaligus ruang diseminasi pengetahuan melalui program riset, publikasi, kegiatan, dan kolaborasi.

---

## Daftar Isi

1. [Ringkasan Eksekutif](#1-ringkasan-eksekutif)
2. [Landasan dan Batas Informasi](#2-landasan-dan-batas-informasi)
3. [Tujuan Website dan Audiens](#3-tujuan-website-dan-audiens)
4. [Positioning, Pesan, dan Identitas Visual](#4-positioning-pesan-dan-identitas-visual)
5. [Sitemap](#5-sitemap)
6. [Wireframe Homepage](#6-wireframe-homepage)
7. [Rancangan Halaman Profil Lembaga](#7-rancangan-halaman-profil-lembaga)
8. [Rancangan Portal Artikel dan Publikasi](#8-rancangan-portal-artikel-dan-publikasi)
9. [Rancangan Halaman Program Riset](#9-rancangan-halaman-program-riset)
10. [Rancangan Halaman Peneliti dan Mitra](#10-rancangan-halaman-peneliti-dan-mitra)
11. [Sistem Dashboard Admin](#11-sistem-dashboard-admin)
12. [Model Data dan Relasi Konten](#12-model-data-dan-relasi-konten)
13. [Alur Editorial dan Publikasi](#13-alur-editorial-dan-publikasi)
14. [Kebutuhan Nonfungsional](#14-kebutuhan-nonfungsional)
15. [SEO, Analitik, dan Pengukuran Dampak](#15-seo-analitik-dan-pengukuran-dampak)
16. [Tahapan Implementasi](#16-tahapan-implementasi)
17. [Konten dan Aset yang Perlu Disiapkan](#17-konten-dan-aset-yang-perlu-disiapkan)
18. [Risiko, Validasi, dan Keputusan Terbuka](#18-risiko-validasi-dan-keputusan-terbuka)
19. [Kriteria Penerimaan](#19-kriteria-penerimaan)
20. [Lampiran: Contoh Struktur Navigasi dan Label](#20-lampiran-contoh-struktur-navigasi-dan-label)

---

## 1. Ringkasan Eksekutif

Website BARISMA dirancang sebagai **website institusi riset dengan portal publikasi/editorial**. Dua fungsi utamanya:

1. **Institutional presence:** menjelaskan identitas, sejarah, arah keilmuan, program, tim akademik, rekam jejak, kemitraan, dan cara menghubungi lembaga.
2. **Knowledge and publication portal:** menerbitkan artikel, opini, kajian tematik, berita riset, laporan, policy brief, serta informasi publikasi ilmiah yang dikelola atau didukung BARISMA.

Website tidak sebaiknya diposisikan hanya sebagai katalog layanan bimbingan akademik. Proposal 2026 menggambarkan BARISMA sebagai instrumen strategis untuk mengembangkan keterampilan akademik dan profesional mahasiswa, terutama pada ranah sosial-humaniora dengan penekanan studi keislaman berbasis riset. Karena itu, narasi, desain, dan arsitektur informasi perlu menonjolkan **tradisi riset, produksi pengetahuan, mutu akademik, dan kolaborasi**.

### Sasaran tahap pertama (MVP)

- Website publik responsif dengan halaman Beranda, Tentang, Program, Publikasi, Peneliti, Kemitraan, Berita/Kegiatan, dan Kontak.
- Portal artikel dengan kategori, pencarian, halaman detail artikel, penulis, referensi, dan berbagi.
- CMS/dashboard admin untuk mengelola halaman, artikel, kategori, penulis, kegiatan, program, profil tim, dan mitra.
- Sistem peran dan alur editorial agar konten dapat disiapkan, ditinjau, disetujui, lalu diterbitkan secara terkontrol.
- Dasar SEO, aksesibilitas, keamanan, pencadangan, dan analitik.

### Prinsip keputusan

- Utamakan keterbacaan dan kejelasan informasi; hindari tampilan dekoratif yang mengganggu pembacaan artikel.
- Pisahkan fakta resmi lembaga dari rancangan editorial atau rekomendasi pengembang.
- Gunakan satu penulisan nama resmi yang telah disahkan: rekomendasi sementara **Badan Riset Maqāṣid (BARISMA)**.
- Jangan tampilkan klaim akreditasi, indeksasi, jumlah capaian, daftar mitra, tarif, atau gelar/jabatan tanpa verifikasi dan persetujuan lembaga.

---

## 2. Landasan dan Batas Informasi

Blueprint ini disusun berdasarkan dua dokumen yang diberikan:

1. **Revisi Brosur Badan Riset Maqāṣid LSQ Ar-Rohmah (Tahun 2026).** Dipakai sebagai referensi identitas visual, informasi layanan, kanal kontak, dan materi promosi kelembagaan. Sebagian informasi brosur berbentuk visual sehingga detail tertentu tetap perlu dikonfirmasi dari materi sumber beresolusi asli.
2. **Proposal Kerja Sama Badan Riset Maqāṣid 2026.** Dipakai sebagai sumber utama untuk deskripsi profil, latar belakang, program, kurikulum, narasumber/mentor, mekanisme kemitraan, dan contoh luaran peserta.

### 2.1 Informasi yang dinyatakan dalam proposal

- Nama lembaga ditulis sebagai Badan Riset Maqāṣid/Maqashid dan berada dalam lingkungan Pondok Pesantren LSQ Ar-Rohmah.
- Proposal menyebut lembaga didirikan pada 2016.
- Fokus pengembangan keterampilan akademik dan profesional mahasiswa berada pada ranah sosial-humaniora, dengan penekanan pada studi keislaman berbasis riset.
- Proposal menyebut pendampingan langsung Prof. Dr. Abdul Mustaqim dalam pelatihan riset dan metodologi Tafsir Maqasidi.
- Proposal menawarkan program pendampingan proposal tugas akhir, artikel jurnal, buku antologi/bunga rampai ber-ISBN, Write Space, inkubasi pascasarjana, dan publikasi Jurnal Studi Maqashid Ar-Rohmah (JUSMA).
- Program KKL yang disebut mencakup workshop metodologi penelitian Al-Qur’an dan Hadis, seminar/pelatihan teori Maqashidi, workshop model pendekatan studi Al-Qur’an, tafsir, dan hadis, serta pelatihan riset berbasis AI.
- Proposal memuat daftar narasumber, narasumber tamu luar negeri, mentor, contoh database publikasi peserta, dan dokumentasi kegiatan.

### 2.2 Batas interpretasi

- Dokumen menyebut tujuan dan orientasi lembaga, tetapi belum memberikan rumusan formal visi dan misi. Jangan menyajikan rumusan visi-misi buatan sebagai pernyataan resmi.
- Data narasumber/mentor belum otomatis berarti semua nama adalah pengurus tetap, staf, atau anggota aktif. Penempatan profil dan label peran harus dikonfirmasi.
- Contoh artikel peserta yang terbit pada jurnal eksternal bukan berarti jurnal tersebut dikelola BARISMA.
- JUSMA disebut sebagai jurnal yang dimiliki/dikelola BARISMA, tetapi dokumen yang tersedia belum cukup untuk memastikan ISSN, alamat OJS, dewan editor terkini, DOI, atau status akreditasinya.
- Nama mitra dan daftar karya pada proposal perlu diverifikasi sebelum dipublikasikan sebagai portofolio resmi.
- Tarif dan contoh RAB di proposal/brosur memiliki angka serta konteks perhitungan yang berbeda. Harga tidak dimasukkan ke website sebelum ada daftar tarif yang disahkan.
- URL `lsqarrohmah.com` disebut pada brosur. Status kepemilikan, fungsi, dan kemungkinan penggunaan sebagai domain/subdomain BARISMA perlu dikonfirmasi.

### 2.3 Penanda status konten

Gunakan label kerja berikut dalam proses pengembangan:

- **[TERVERIFIKASI]**: data sudah disetujui penanggung jawab lembaga.
- **[DARI DOKUMEN]**: tertulis pada brosur/proposal, menunggu validasi publikasi.
- **[DRAF]**: redaksi yang disusun untuk ditinjau lembaga.
- **[BELUM TERSEDIA]**: data/aset perlu diminta.
- **[JANGAN TAYANGKAN]**: data belum boleh dipublikasikan sebelum ada izin atau verifikasi.

---

## 3. Tujuan Website dan Audiens

### 3.1 Tujuan utama

1. Membangun representasi digital BARISMA yang kredibel, konsisten, dan mudah ditemukan.
2. Menjelaskan fokus keilmuan, program riset, dan model pendampingan secara transparan.
3. Menjadi pusat publikasi artikel dan diseminasi hasil pemikiran/riset.
4. Menunjukkan rekam jejak program, luaran, dan kemitraan secara dapat diverifikasi.
5. Memfasilitasi komunikasi calon mitra, kampus, peneliti, peserta, dan masyarakat.
6. Memberikan sarana kerja editorial yang dapat dikelola tim internal tanpa harus mengubah kode website untuk setiap artikel.

### 3.2 Audiens utama

| Audiens | Kebutuhan informasi | Tindakan yang diharapkan |
|---|---|---|
| Mahasiswa S1/S2/S3 | Program, kurikulum, mentor, luaran, persyaratan peserta | Bertanya atau mendaftar program |
| Dosen dan peneliti | Fokus riset, pakar, publikasi, peluang kolaborasi | Menjalin kolaborasi atau menjadi narasumber |
| Perguruan tinggi/lembaga | Profil, proposal kerja sama, rekam jejak, program | Mengajukan kemitraan |
| Pembaca umum | Artikel, opini, kajian, berita | Membaca dan membagikan tulisan |
| Penulis/kontributor | Pedoman artikel dan proses pengiriman naskah | Mengirim naskah sesuai kebijakan redaksi |
| Pengelola BARISMA | Konten, artikel, data tim, kegiatan, leads kerja sama | Mengelola dan memperbarui website |

### 3.3 Prioritas pengalaman pengguna

- Pengunjung harus memahami dalam beberapa detik siapa BARISMA, apa fokusnya, dan apa yang dapat dilakukan bersama lembaga.
- Pembaca harus dapat menemukan artikel berdasarkan topik, kata kunci, penulis, dan tanggal.
- Calon mitra harus menemukan informasi kerja sama dan kanal kontak tanpa harus mencari di banyak halaman.
- Admin harus dapat memperbarui konten melalui antarmuka yang mudah dipahami dan memiliki kontrol persetujuan.

---

## 4. Positioning, Pesan, dan Identitas Visual

### 4.1 Positioning yang direkomendasikan

**Badan Riset Maqāṣid (BARISMA) adalah lembaga riset dan pengembangan kapasitas akademik di lingkungan LSQ Ar-Rohmah yang mengembangkan tradisi penelitian, publikasi ilmiah, dan kolaborasi keilmuan, dengan fokus pada studi keislaman dan ranah sosial-humaniora.**

Ini adalah rumusan positioning untuk kebutuhan website, bukan kutipan visi-misi resmi. Redaksi final harus disetujui pimpinan lembaga.

### 4.2 Pesan utama homepage

Usulan headline:

> **Mengembangkan Tradisi Riset, Memproduksi Pengetahuan, dan Memperluas Dampak Keilmuan.**

Usulan subheadline:

> Badan Riset Maqāṣid LSQ Ar-Rohmah mengembangkan kapasitas akademik melalui pendampingan riset, publikasi ilmiah, pelatihan metodologi, dan kolaborasi sosial-humaniora dengan penekanan pada studi keislaman.

CTA utama:

- **Jelajahi Program Riset** → `/program`
- **Baca Publikasi** → `/publikasi`

CTA sekunder:

- **Ajukan Kolaborasi** → `/kontak` atau `/kemitraan`

### 4.3 Arah visual

Arah visual diambil dari karakter brosur: hijau, aksen emas, putih/krem, dan elemen geometris Islami. Website menerjemahkannya menjadi tampilan editorial yang modern, tenang, dan profesional.

| Token | Nilai awal (usulan) | Penggunaan |
|---|---|---|
| Forest Green | `#173F2B` | Header, footer, tombol utama, heading tertentu |
| Deep Green | `#0F2D20` | Area hero/kontras tinggi |
| Muted Gold | `#B69A5A` | Aksen, garis, label, ikon |
| Warm Ivory | `#F7F6F0` | Latar alternatif |
| Paper White | `#FFFFFF` | Kartu dan area artikel |
| Ink | `#202720` | Teks utama |
| Slate | `#66716A` | Teks sekunder |
| Border | `#E4E8E3` | Garis pemisah dan border |

**Catatan:** kode warna di atas adalah usulan desain, bukan hasil ekstraksi kode warna resmi. Cocokkan kembali dengan file logo dan master brand yang disahkan.

### 4.4 Tipografi dan komponen

- Heading: serif editorial yang elegan atau sans-serif humanis dengan karakter akademik.
- Body: sans-serif yang sangat terbaca untuk artikel panjang.
- Bahasa utama: Bahasa Indonesia. Nama program, istilah akademik, dan istilah Arab mengikuti ejaan/diakritik yang disepakati lembaga.
- Ornamen geometris digunakan sebagai aksen latar yang sangat halus, tidak menutupi teks.
- Foto kegiatan/peneliti menggunakan gaya dokumenter autentik; hindari stok foto generik jika tersedia dokumentasi asli.
- Komponen utama: navbar, breadcrumb, tombol, kartu artikel, kartu program, profil peneliti, statistik yang terverifikasi, daftar mitra, pagination, filter, form, dan footer.

### 4.5 Responsif

- Desktop: navigasi penuh, grid 12 kolom, area editorial luas.
- Tablet: navigasi ringkas, grid 6–8 kolom.
- Mobile: menu drawer, konten satu kolom, CTA mudah dijangkau, filter dalam panel/accordion.

---

## 5. Sitemap

### 5.1 Struktur navigasi publik

```text
/
├── /tentang
│   ├── /tentang/sejarah
│   ├── /tentang/arah-keilmuan
│   ├── /tentang/struktur-organisasi
│   └── /tentang/identitas-lsq-ar-rohmah
│
├── /riset
│   ├── /riset/fokus-kajian
│   ├── /riset/hasil-riset
│   └── /riset/kolaborasi-riset
│
├── /program
│   ├── /program/klinik-proposal
│   ├── /program/pendampingan-artikel-jurnal
│   ├── /program/buku-antologi-bunga-rampai
│   ├── /program/write-space
│   ├── /program/inkubasi-pascasarjana
│   ├── /program/jusma
│   └── /program/workshop-dan-pelatihan
│
├── /publikasi
│   ├── /publikasi/artikel
│   │   ├── /publikasi/artikel/{slug}
│   │   └── /publikasi/penulis/{slug}
│   ├── /publikasi/kajian
│   ├── /publikasi/laporan-riset
│   ├── /publikasi/policy-brief
│   ├── /publikasi/buku
│   └── /publikasi/jusma
│
├── /peneliti
│   ├── /peneliti/akademisi/{slug}
│   ├── /peneliti/mentor/{slug}
│   └── /peneliti/tim-barisma
│
├── /kemitraan
│   ├── /kemitraan/mitra
│   ├── /kemitraan/rekam-jejak
│   └── /kemitraan/ajukan-kolaborasi
│
├── /berita-kegiatan
│   ├── /berita-kegiatan/{slug}
│   └── /agenda
│
├── /kontak
├── /pedoman-kontributor
├── /kebijakan-privasi
└── /aksesibilitas
```

> Catatan: struktur di atas adalah usulan. Beberapa halaman seperti policy brief, laporan riset, agenda, dan pedoman kontributor dapat ditunda jika belum ada konten atau proses internal yang mendukung.

### 5.2 Area admin (tidak tampil di navigasi publik)

```text
/admin
├── /admin/dashboard
├── /admin/konten
│   ├── /admin/konten/halaman
│   ├── /admin/konten/artikel
│   ├── /admin/konten/berita
│   ├── /admin/konten/kajian
│   └── /admin/konten/media
├── /admin/akademik
│   ├── /admin/akademik/program
│   ├── /admin/akademik/peneliti
│   ├── /admin/akademik/mentor
│   └── /admin/akademik/mitra
├── /admin/publikasi
│   ├── /admin/publikasi/jusma
│   ├── /admin/publikasi/buku
│   └── /admin/publikasi/luaran-peserta
├── /admin/interaksi
│   ├── /admin/interaksi/pesan-kontak
│   └── /admin/interaksi/permintaan-kolaborasi
├── /admin/pengguna
├── /admin/menu-dan-taksonomi
├── /admin/pengaturan
└── /admin/log-aktivitas
```

### 5.3 Prioritas halaman

| Prioritas | Halaman |
|---|---|
| MVP | Beranda, Tentang, Program, Publikasi/Artikel, Detail Artikel, Peneliti, Kemitraan, Berita/Kegiatan, Kontak, Admin |
| Tahap 2 | Fokus riset per tema, laporan riset, buku, JUSMA terintegrasi, agenda, pedoman kontributor |
| Tahap 3 | Pengiriman naskah, pendaftaran program, dashboard dampak, pencarian lanjutan, bilingual Indonesia–Inggris/Arab bila dibutuhkan |

---

## 6. Wireframe Homepage

### 6.1 Wireframe desktop (urutan dari atas ke bawah)

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ TOP BAR: LSQ Ar-Rohmah | Yogyakarta | Email/WhatsApp (setelah diverifikasi)  │
├──────────────────────────────────────────────────────────────────────────────┤
│ LOGO BARISMA     Beranda Tentang Riset Program Publikasi Peneliti Kemitraan  │
│                                                               [Kontak]       │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  HERO:                                                                        │
│  [Eyebrow: BADAN RISET MAQĀṢID — LSQ AR-ROHMAH]       [Foto autentik          │
│  Mengembangkan tradisi riset,                             kegiatan/ruang      │
│  memproduksi pengetahuan, dan                              akademik]          │
│  memperluas dampak keilmuan.                                                 │
│  Deskripsi singkat lembaga                                                   │
│  [Jelajahi Program] [Baca Publikasi]                                         │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ TRUST STRIP: Berdiri sejak 2016* | Fokus sosial-humaniora | Studi keislaman  │
│ *Tampilkan setelah informasi tahun berdiri disahkan                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ TENTANG BARISMA                                                              │
│ Ringkasan positioning (2 kolom)                    [Baca profil lengkap →]   │
├──────────────────────────────────────────────────────────────────────────────┤
│ FOKUS KEILMUAN                                                               │
│ [Al-Qur'an & Tafsir] [Hadis] [Maqāṣid] [Sosial-Humaniora] [Metodologi Riset]  │
├──────────────────────────────────────────────────────────────────────────────┤
│ PROGRAM UNGGULAN                                                             │
│ [Klinik Proposal] [Artikel Jurnal] [Buku/Antologi]                           │
│ [Write Space] [Inkubasi Pascasarjana] [Workshop]                             │
│                                             [Semua Program →]                │
├──────────────────────────────────────────────────────────────────────────────┤
│ PUBLIKASI TERBARU                                                            │
│ [Artikel utama besar]       [Artikel 2] [Artikel 3]                          │
│ [Kategori, tanggal, penulis, ringkasan]                                      │
│                                             [Lihat Semua Artikel →]          │
├──────────────────────────────────────────────────────────────────────────────┤
│ RISET & DAMPAK                                                               │
│ [Laporan/luaran terverifikasi] [Kisah kolaborasi] [Karya peserta]             │
├──────────────────────────────────────────────────────────────────────────────┤
│ AKADEMISI & MENTOR                                                           │
│ [Profil pakar 1] [Profil pakar 2] [Profil mentor 1]                           │
│                                             [Kenali Tim →]                   │
├──────────────────────────────────────────────────────────────────────────────┤
│ KEMITRAAN                                                                    │
│ Logo/nama mitra yang sudah memperoleh izin dan diverifikasi                  │
│ [Ajukan Kolaborasi]                                                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ BERITA & KEGIATAN                                                            │
│ [Kartu kegiatan 1] [Kartu kegiatan 2] [Kartu kegiatan 3]                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ CTA PENUTUP: Mari membangun kolaborasi riset yang berdampak                  │
│ [Hubungi BARISMA]                                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: profil ringkas | menu | kontak | media sosial | legal                │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Spesifikasi tiap section

| Section | Konten | Komponen/aksi |
|---|---|---|
| Top bar | Identitas afiliasi dan kontak yang disahkan | Tautan cepat |
| Navbar | Logo dan menu utama | Sticky header; dropdown jika diperlukan |
| Hero | Headline, deskripsi, foto asli | CTA Program dan Publikasi |
| Trust strip | Tahun berdiri/fokus/indikator yang valid | Angka hanya jika punya sumber jelas |
| Tentang | Ringkasan identitas dan positioning | Link ke profil lengkap |
| Fokus keilmuan | Tema riset | Kartu topik |
| Program | 4–6 kartu program utama | Link detail program |
| Publikasi | Artikel terbaru/unggulan | Kartu artikel dan kategori |
| Riset & dampak | Luaran terverifikasi | Tautan laporan/portofolio |
| Tim | Pakar dan mentor pilihan | Kartu profil |
| Kemitraan | Mitra yang disetujui untuk ditampilkan | CTA kemitraan |
| Berita | Kegiatan terbaru | Daftar berita |
| CTA akhir | Ajakan kolaborasi | Kontak/form |
| Footer | Navigasi, alamat, sosial, legal | Tautan eksternal |

### 6.3 Wireframe mobile

```text
┌──────────────────────────────┐
│ LOGO BARISMA          [☰]    │
├──────────────────────────────┤
│ BADAN RISET MAQĀṢID          │
│ Headline 2–4 baris           │
│ Deskripsi singkat            │
│ [Jelajahi Program]           │
│ [Baca Publikasi]             │
│ [Foto kegiatan]              │
├──────────────────────────────┤
│ Tentang BARISMA              │
│ Ringkasan + [Selengkapnya]   │
├──────────────────────────────┤
│ Fokus Keilmuan               │
│ [Topik] [Topik]              │
│ [Topik] [Topik]              │
├──────────────────────────────┤
│ Program Unggulan             │
│ [Kartu program]              │
│ [Kartu program]              │
│ [Semua Program]              │
├──────────────────────────────┤
│ Publikasi Terbaru            │
│ [Kartu artikel]              │
│ [Kartu artikel]              │
│ [Semua Artikel]              │
├──────────────────────────────┤
│ Tim & Mitra                  │
├──────────────────────────────┤
│ Berita & Kegiatan            │
├──────────────────────────────┤
│ CTA Kolaborasi               │
├──────────────────────────────┤
│ Footer                       │
└──────────────────────────────┘
```

### 6.4 Catatan interaksi homepage

- Navbar tetap ringkas dan tidak menutupi area hero.
- Artikel unggulan dapat dipilih manual oleh editor; selain itu tampilkan artikel paling baru.
- Program yang belum dibuka pendaftarannya diberi label informatif seperti “Informasi program” atau “Hubungi tim”, bukan tombol pendaftaran palsu.
- Data jumlah mitra, peserta, publikasi, atau capaian hanya muncul setelah angka diverifikasi dan memiliki periode/perhitungan yang jelas.

---

## 7. Rancangan Halaman Profil Lembaga

### 7.1 Tujuan halaman

Menyampaikan kepada pengunjung siapa BARISMA, latar belakang pendiriannya, hubungan kelembagaan dengan LSQ Ar-Rohmah, fokus keilmuan, orientasi akademik, struktur organisasi, dan cara bekerja sama.

### 7.2 Struktur halaman

1. **Page hero:** judul “Tentang Badan Riset Maqāṣid” dan ringkasan satu paragraf.
2. **Profil singkat:** identitas lembaga, afiliasi, lokasi, tahun berdiri (setelah validasi).
3. **Latar belakang:** transformasi LSQ Ar-Rohmah sebagai ruang produksi dan reproduksi pengetahuan akademik; peran BARISMA sebagai instrumen strategis untuk mengartikulasikan visi keilmuan ke praktik akademik.
4. **Arah keilmuan:** sosial-humaniora dan studi keislaman berbasis riset.
5. **Pendekatan kerja:** pelatihan metodologi, praktik penelitian, mentoring, penulisan, publikasi, dan diseminasi.
6. **Visi dan misi:** hanya dipasang setelah menerima rumusan resmi.
7. **Nilai kelembagaan:** usulan redaksi untuk ditinjau—integritas ilmiah, keterbukaan dialog, kedisiplinan metodologis, kolaborasi, dan kebermanfaatan sosial.
8. **Struktur organisasi:** direktur, ketua/pengelola, divisi, dan personel sesuai struktur yang disahkan.
9. **Afiliasi dan ekosistem:** hubungan BARISMA dengan LSQ Ar-Rohmah dan JUSMA, dengan batas peran yang jelas.
10. **CTA:** kolaborasi atau konsultasi program.

### 7.3 Draft narasi profil (untuk disunting dan disetujui)

> Badan Riset Maqāṣid (BARISMA) merupakan unit pengembangan riset dan kapasitas akademik di lingkungan Pondok Pesantren Lingkar Studi Qur’an (LSQ) Ar-Rohmah. BARISMA mengembangkan kegiatan akademik di ranah sosial-humaniora dengan penekanan pada studi keislaman berbasis riset. Melalui pelatihan metodologi, pendampingan penelitian, pengembangan penulisan ilmiah, publikasi, dan kolaborasi, BARISMA mendorong mahasiswa dan komunitas akademik untuk berperan aktif dalam produksi serta diseminasi pengetahuan.

> Draft ini dirumuskan dari proposal kerja sama 2026 dan bukan pernyataan resmi final. Pimpinan lembaga perlu memeriksa redaksi, status unit kelembagaan, dan istilah yang digunakan sebelum diterbitkan.

### 7.4 Modul konten profil

| Modul | Field konten | Validasi |
|---|---|---|
| Identitas | Nama resmi, singkatan, afiliasi, lokasi | Pimpinan |
| Sejarah | Tahun, tonggak, peristiwa | Dokumen/arsip lembaga |
| Arah keilmuan | Fokus kajian dan pendekatan | Pimpinan/koordinator akademik |
| Visi-misi | Redaksi resmi | Pengesahan lembaga |
| Struktur | Nama, jabatan, periode | Pengurus |
| Nilai | Definisi nilai dan perilaku | Pimpinan |
| Foto | Logo, gedung, kegiatan, pimpinan | Izin penggunaan |

---

## 8. Rancangan Portal Artikel dan Publikasi

### 8.1 Tujuan

Portal publikasi menjadi pusat pengetahuan BARISMA. Portal harus mendukung tulisan panjang, kategori yang jelas, metadata penulis, referensi, pencarian, dan keterhubungan artikel dengan program/peneliti terkait.

### 8.2 Struktur halaman indeks publikasi

```text
┌──────────────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Beranda / Publikasi                                      │
│ PUBLIKASI BARISMA                                                     │
│ Artikel, kajian, dan gagasan untuk memahami persoalan keislaman       │
│ dan sosial-humaniora secara kritis dan kontekstual.                   │
├──────────────────────────────────────────────────────────────────────┤
│ [Cari artikel, penulis, atau topik........................] [Cari]    │
├──────────────────────────────────────────────────────────────────────┤
│ [Semua] [Al-Qur'an & Tafsir] [Hadis] [Maqāṣid] [Sosial-Humaniora]     │
│ Filter: Tipe Konten ▼  Tahun ▼  Penulis ▼                             │
├──────────────────────────────────────────────────────────────────────┤
│ ARTIKEL UNGGULAN                                                      │
│ [Gambar lebar] Judul, abstrak ringkas, penulis, tanggal, [Baca]      │
├──────────────────────────────────────────────────────────────────────┤
│ ARTIKEL TERBARU                                                       │
│ [Kartu] [Kartu] [Kartu]                                               │
│ [Kartu] [Kartu] [Kartu]                                               │
│ [Pagination / Muat lebih banyak]                                      │
├──────────────────────────────────────────────────────────────────────┤
│ PILIHAN EDITOR / SERI TEMATIK / JUSMA                                 │
└──────────────────────────────────────────────────────────────────────┘
```

### 8.3 Taksonomi editorial awal

**Tipe konten:**

- Artikel akademik/populer
- Opini dan analisis
- Kajian tematik
- Berita riset/kegiatan
- Laporan riset
- Policy brief (jika diterbitkan)
- Buku/bunga rampai
- Pengumuman/call for papers

**Kategori/topik awal** (berdasarkan fokus yang muncul di proposal; dapat diedit):

- Studi Al-Qur’an dan Tafsir
- Tafsir Maqāṣidi / Maqāṣid Studies
- Studi Hadis dan Living Hadis
- Hukum Islam dan Pemikiran Islam Kontemporer
- Hermeneutika dan Metodologi Tafsir
- Sosial-Humaniora dan Sosiologi Agama
- Psikologi Islam
- Filologi, Manuskrip, dan Tafsir Nusantara
- Agama, Media, dan Lingkungan
- Metodologi Penelitian

Kategori baru tidak perlu dibuat hanya karena satu artikel; editor perlu menjaga taksonomi agar tidak terlalu terfragmentasi.

### 8.4 Kartu artikel

Setiap kartu memuat:

- Gambar sampul/thumbnail dengan rasio konsisten.
- Label kategori atau tipe tulisan.
- Judul artikel.
- Ringkasan 1–2 kalimat.
- Nama penulis.
- Tanggal terbit atau tanggal pembaruan.
- Estimasi waktu baca (opsional, dihitung otomatis).
- Link “Baca selengkapnya”.

### 8.5 Halaman detail artikel

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Breadcrumb: Beranda / Publikasi / Kategori                            │
│ [Kategori]                                                            │
│ Judul artikel yang jelas dan informatif                               │
│ Penulis | Tanggal terbit | Waktu baca                                 │
│ [Gambar utama / caption / kredit]                                     │
├──────────────────────────────────┬───────────────────────────────────┤
│ KONTEN ARTIKEL                   │ SIDEBAR (desktop)                 │
│ - Lead/paragraf pembuka          │ - Daftar isi                       │
│ - Heading/subheading             │ - Profil penulis                  │
│ - Paragraf                       │ - Artikel terkait                 │
│ - Kutipan/gambar/tabel           │ - Bagikan                          │
│ - Catatan kaki/referensi         │                                   │
├──────────────────────────────────┴───────────────────────────────────┤
│ TENTANG PENULIS                                                        │
│ ARTIKEL TERKAIT                                                        │
│ AJAKAN BERLANGGANAN/IKUTI KANAL (opsional, perlu sistem dan izin)     │
└──────────────────────────────────────────────────────────────────────┘
```

**Metadata wajib artikel:**

- Judul dan slug unik.
- Ringkasan/excerpt.
- Isi artikel (rich text/editor blok).
- Penulis utama dan kontributor (relasi ke profil penulis).
- Kategori dan tag.
- Gambar utama, caption, dan kredit.
- Tanggal publikasi dan tanggal pembaruan.
- Status editorial.
- SEO title, meta description, canonical URL (dapat diisi otomatis dengan override).
- Referensi/sumber, catatan kaki, atau daftar pustaka jika relevan.
- Alt text untuk gambar.

**Fitur pembaca:**

- Daftar isi otomatis dari heading.
- Tipografi nyaman untuk bacaan panjang.
- Link referensi yang jelas.
- Tombol berbagi.
- Artikel terkait.
- Mode cetak yang bersih (opsional).
- Komentar tidak perlu diaktifkan pada MVP untuk mengurangi spam dan beban moderasi.

### 8.6 Aturan editorial

- Artikel harus memiliki penulis dan penanggung jawab editorial.
- Bedakan tanggal terbit dengan tanggal pembaruan.
- Koreksi substansial diberi catatan pembaruan; jangan mengubah isi ilmiah tanpa jejak.
- Kutipan, gambar, data, dan tabel harus memiliki sumber/keterangan yang memadai.
- Pastikan izin penulis dan izin publikasi sebelum menerbitkan naskah.
- Jangan menyebut tulisan sebagai artikel jurnal peer-reviewed kecuali proses dan statusnya memang demikian.

### 8.7 Integrasi JUSMA

JUSMA sebaiknya memiliki landing page tersendiri yang berisi deskripsi, fokus dan ruang lingkup, informasi penerbitan, dewan editor, pedoman penulis, arsip edisi, dan tombol menuju sistem jurnal (OJS) bila tersedia.

Untuk MVP, bila portal JUSMA belum siap diintegrasikan, tampilkan profil ringkas dan tautan eksternal yang telah diverifikasi. Jangan menampilkan klaim ISSN, akreditasi, indeksasi, atau periode terbit terkini tanpa verifikasi.

---

## 9. Rancangan Halaman Program Riset

### 9.1 Halaman indeks program

Tampilkan intro singkat, filter jenis program, kartu layanan, sasaran peserta, bentuk pendampingan, dan CTA untuk bertanya. Informasi tarif dan jadwal hanya ditayangkan setelah disahkan.

### 9.2 Struktur halaman detail program

1. Nama program dan ringkasan manfaat.
2. Latar belakang/kebutuhan yang dijawab.
3. Sasaran peserta.
4. Materi/kurikulum dan tahapan.
5. Bentuk pendampingan dan peran mentor.
6. Luaran yang diharapkan.
7. Durasi dan model pelaksanaan (jika masih berlaku).
8. Persyaratan/ketentuan.
9. FAQ.
10. CTA konsultasi atau permintaan proposal.

### 9.3 Program yang tercantum dalam proposal 2026

| Program | Ringkasan berdasarkan proposal | Luaran/hasil yang disebut |
|---|---|---|
| Klinik Proposal / Praktik Penulisan Proposal Tugas Akhir | Pelatihan dan pendampingan proposal skripsi/tesis; target peserta mencakup mahasiswa S1 semester 5 ke atas dan S2 semester 3 ke atas | Proposal siap diajukan/diseminarkan |
| Praktik Penulisan Artikel Jurnal | Pelatihan penulisan dan pendampingan submission ke jurnal nasional/internasional | Artikel tersubmit; outcome yang dituju artikel published |
| Buku Antologi/Bunga Rampai | Penentuan tema, pembagian subtopik, penulisan, editing, layout, penerbitan | Buku ber-ISBN |
| Write Space | Bimbingan tahap awal penulisan ilmiah, teknis dan substansi | Draft artikel awal |
| Inkubasi Pascasarjana | Pendampingan intensif tesis/disertasi dengan model uzlah akademik dan konsultasi berkala | Akselerasi penulisan tesis/disertasi |
| JUSMA | Publikasi jurnal terkait Maqāṣid Studies | Artikel diterbitkan melalui jurnal, mengikuti ketentuan editorial jurnal |
| Workshop/KKL | Pelatihan metodologi studi Al-Qur’an dan Hadis, teori/pendekatan Maqāṣidi, dan riset berbasis AI | Pengetahuan dan keterampilan sesuai materi kegiatan |

**Catatan:** deskripsi, syarat peserta, target luaran, dan istilah program pada tabel diambil dari proposal 2026. Tim BARISMA perlu memeriksa apakah seluruh program dan detailnya masih berlaku untuk periode publikasi website.

---

## 10. Rancangan Halaman Peneliti dan Mitra

### 10.1 Halaman peneliti/akademisi

Setiap profil idealnya memuat:

- Foto resmi dan nama lengkap.
- Gelar akademik (setelah diverifikasi).
- Peran di BARISMA: direktur, pengurus, mentor, narasumber, atau mitra ahli—pilih sesuai status yang benar.
- Bidang kepakaran.
- Afiliasi/institusi.
- Ringkasan biografi.
- Pendidikan/riwayat akademik (opsional).
- Publikasi pilihan (tautan yang dapat diverifikasi).
- Kontak profesional hanya jika diizinkan.

Daftar narasumber dan mentor dalam proposal tidak boleh otomatis dianggap sebagai daftar pengurus. Admin harus dapat mengatur jenis relasi dan status aktif tiap profil.

### 10.2 Halaman kemitraan

Konten yang disarankan:

- Narasi ajakan kolaborasi.
- Jenis kerja sama: pendampingan riset, pelatihan, publikasi, seminar/webinar, pengabdian, atau kolaborasi riset—sesuaikan dengan penawaran resmi.
- Mekanisme kerja sama yang dijelaskan dalam proposal: peninjauan kebutuhan/proposal, presentasi, penyelarasan ruang lingkup, MoU, pembentukan tim teknis, pelaksanaan, dan monitoring.
- Daftar mitra yang telah disetujui untuk dipublikasikan.
- Studi kasus/luaran kerja sama dengan bukti dan izin.
- Formulir permintaan kolaborasi.

### 10.3 Data luaran peserta

Proposal mencantumkan contoh database artikel peserta yang diterbitkan di jurnal eksternal. Website dapat menyajikan portofolio secara selektif dengan field: nama penulis, judul artikel, jurnal, tahun, afiliasi, status/indeks jurnal pada waktu publikasi, dan tautan DOI/URL.

Jangan tampilkan data personal peserta tanpa persetujuan. Pastikan tautan publik dapat diakses dan label indeks jurnal merujuk pada status yang benar, bukan klaim umum.

---

## 11. Sistem Dashboard Admin

### 11.1 Tujuan dashboard

Dashboard admin digunakan untuk mengelola keseluruhan isi website tanpa intervensi developer untuk pekerjaan editorial harian. Sistem harus memberikan kontrol akses, alur persetujuan, pengelolaan media, dan jejak perubahan.

### 11.2 Wireframe dashboard

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ BARISMA CMS                              [Cari] [Notifikasi] [Profil Admin]  │
├──────────────────────┬───────────────────────────────────────────────────────┤
│ SIDEBAR              │ DASHBOARD                                              │
│ ▸ Dashboard          │ Selamat datang, [Nama]                                 │
│ ▸ Artikel            │                                                       │
│ ▸ Berita/Kegiatan    │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────────┐ │
│ ▸ Halaman            │ │ Draft    │ │ Review   │ │ Terbit   │ │ Pesan Masuk │ │
│ ▸ Program            │ │   08     │ │   03     │ │   42     │ │     05      │ │
│ ▸ Peneliti/Mentor    │ └──────────┘ └──────────┘ └──────────┘ └─────────────┘ │
│ ▸ Mitra              │                                                       │
│ ▸ Publikasi/JUSMA    │ ARTIKEL TERBARU / PERLU TINDAKAN                       │
│ ▸ Media              │ ┌───────────────────────────────────────────────────┐ │
│ ▸ Pesan/Kolaborasi   │ │ Judul | Penulis | Status | Diperbarui | Aksi      │ │
│ ▸ Pengguna & Peran   │ └───────────────────────────────────────────────────┘ │
│ ▸ Menu & Kategori    │                                                       │
│ ▸ Pengaturan         │ JADWAL PUBLIKASI / AKTIVITAS EDITORIAL                 │
│ ▸ Log Aktivitas      │ ┌───────────────────────────────────────────────────┐ │
│                      │ │ Perubahan terbaru, artikel terjadwal, pesan baru  │ │
│                      │ └───────────────────────────────────────────────────┘ │
└──────────────────────┴───────────────────────────────────────────────────────┘
```

### 11.3 Modul dashboard

| Modul | Fungsi | Prioritas |
|---|---|---|
| Dashboard ringkasan | Statistik konten, antrian review, pesan baru, aktivitas | MVP |
| Artikel | Buat, edit, pratinjau, revisi, jadwalkan, terbitkan, arsipkan | MVP |
| Halaman | Mengelola halaman profil, kontak, kebijakan, landing page | MVP |
| Kategori & tag | Mengatur taksonomi publikasi | MVP |
| Media library | Upload, alt text, caption, kredit, folder/tag | MVP |
| Penulis/peneliti/mentor | Profil dan relasi penulis | MVP |
| Program | Program, detail, status tayang, CTA | MVP |
| Berita/kegiatan | Berita, agenda, dokumentasi | MVP |
| Mitra | Data mitra, logo, deskripsi, izin tampil | MVP |
| Pesan kontak | Inbox form kontak dan status tindak lanjut | MVP |
| Permintaan kolaborasi | Leads, institusi, kebutuhan, PIC, status | Tahap 2 |
| JUSMA/buku/luaran | Metadata edisi, buku, portofolio karya | Tahap 2 |
| Pengguna dan peran | Kelola akun, peran, izin | MVP |
| Pengaturan | Identitas, SEO default, sosial, kontak, menu | MVP |
| Log aktivitas | Catatan tindakan penting admin/editor | MVP |
| Analitik | Ringkasan pengunjung dan konten populer | Tahap 2 |

### 11.4 Peran pengguna dan hak akses

| Peran | Hak utama | Batasan |
|---|---|---|
| Super Admin | Semua konfigurasi, pengguna, peran, semua konten | Akun sangat terbatas; wajib MFA |
| Admin Website | Mengelola halaman, menu, media, program, mitra, dan akun sesuai izin | Tidak dapat mengubah peran super admin |
| Managing Editor | Menugaskan editor/penulis, mengelola antrian, menyetujui dan menerbitkan artikel | Tidak mengelola konfigurasi sistem sensitif |
| Editor | Menyunting, memberi catatan, mengembalikan naskah, menjadwalkan sesuai izin | Tidak mengelola pengguna |
| Author/Contributor | Membuat dan mengedit naskah miliknya, mengirim untuk review | Tidak bisa menerbitkan sendiri kecuali diberi izin khusus |
| Reviewer (opsional) | Membaca naskah yang ditugaskan dan mengirim rekomendasi/catatan | Tidak memiliki akses ke konten lain |
| Viewer/Analyst | Melihat laporan/analitik dan konten internal sesuai ruang lingkup | Tidak dapat mengubah data |

**Prinsip keamanan:** gunakan least privilege. Setiap akun adalah milik individu; jangan berbagi satu akun editor. Aktifkan autentikasi multifaktor untuk peran istimewa.

### 11.5 Status konten

Status standar:

1. **Draft** — naskah belum siap ditinjau.
2. **Submitted** — penulis mengirim naskah untuk pemeriksaan.
3. **In Review** — editor sedang meninjau.
4. **Needs Revision** — penulis diminta melakukan revisi.
5. **Approved** — konten disetujui untuk diterbitkan.
6. **Scheduled** — memiliki tanggal/jam publikasi.
7. **Published** — tampil di website.
8. **Archived** — tidak lagi tampil di daftar publik, tetapi tetap tersimpan.

Untuk halaman statis dan berita singkat, alur dapat dibuat lebih sederhana sesuai peran.

### 11.6 Fitur editor artikel

- Editor rich text atau block editor.
- Autosave dan indikator perubahan tersimpan.
- Preview desktop/mobile.
- Slug otomatis dengan kemampuan edit.
- Metadata SEO dan Open Graph.
- Penetapan penulis, editor, kategori, tag, dan gambar utama.
- Daftar isi otomatis dari heading.
- Referensi/catatan kaki.
- Riwayat revisi dan pemulihan versi.
- Jadwal terbit.
- Peringatan bila alt text, penulis, kategori, atau ringkasan belum terisi.

### 11.7 Inbox pesan dan permintaan kolaborasi

Setiap pesan menyimpan nama, organisasi (opsional), email/telepon, subjek, isi pesan, persetujuan privasi, tanggal masuk, PIC, status tindak lanjut, dan catatan internal. Status dapat berupa `Baru`, `Dibaca`, `Ditindaklanjuti`, `Selesai`, atau `Spam`.

Batasi akses pesan berdasarkan tugas. Data tidak boleh digunakan untuk newsletter tanpa persetujuan terpisah.

---

## 12. Model Data dan Relasi Konten

Model berikut bersifat konseptual dan dapat diterapkan pada relational database atau CMS yang mendukung content types dan relasi.

### 12.1 Entitas inti

| Entitas | Field penting | Relasi utama |
|---|---|---|
| `users` | id, name, email, password/auth_provider, status, last_login | roles, activity_logs |
| `roles` | id, name, permissions | users |
| `pages` | id, title, slug, body, status, SEO fields, updated_by | media, activity_logs |
| `articles` | id, title, slug, excerpt, body, cover_media_id, status, published_at, updated_at, SEO fields | authors, categories, tags, references, media |
| `authors` | id, display_name, bio, photo_id, affiliation, public_contact, status | articles |
| `research_profiles` | id, name, title, role_type, expertise, biography, education, photo_id, visibility | programs, publications (opsional) |
| `programs` | id, title, slug, summary, audience, curriculum, outputs, duration, status, CTA | mentors, media |
| `events` | id, title, slug, summary, location, starts_at, ends_at, cover_id, status | media, programs |
| `partners` | id, name, description, logo_id, website, approval_status, display_order | collaborations |
| `collaboration_requests` | id, contact_name, institution, email, phone, topic, message, status, assigned_to | users |
| `contact_messages` | id, name, email, subject, message, consent, status, assigned_to | users |
| `categories` | id, name, slug, description, parent_id | articles |
| `tags` | id, name, slug | articles |
| `media` | id, file_url, file_type, alt_text, caption, credit, uploaded_by | pages, articles, profiles, partners |
| `references` | id, article_id, citation_text, url, sort_order | articles |
| `publications` | id, title, publication_type, year, publisher/journal, identifier, url, status | authors/research_profiles |
| `activity_logs` | id, user_id, action, entity_type, entity_id, timestamp, metadata | users |

### 12.2 Relasi inti

```text
users ──< activity_logs
users ── roles (many-to-many)
articles >──< authors (many-to-many)
articles >──< categories (many-to-many atau satu kategori utama + tag)
articles >──< tags (many-to-many)
articles ──< references
articles ── media (cover image)
programs >──< research_profiles (mentor/narasumber)
partners ──< collaboration_records (opsional)
events ── programs (opsional)
contact_messages ── assigned_to users
collaboration_requests ── assigned_to users
```

### 12.3 Aturan data

- Gunakan slug unik dan URL stabil.
- Simpan tanggal dalam format standar database; tampilkan sesuai zona waktu Indonesia yang dipilih pengelola.
- Simpan status persetujuan publikasi foto/logo dan data pribadi.
- Gunakan soft delete atau arsip untuk konten publik, dengan kebijakan retensi yang jelas.
- Hindari menyimpan data peserta yang tidak dibutuhkan untuk fungsi website publik.
- Simpan riwayat perubahan untuk artikel, halaman, pengaturan, dan tindakan admin penting.

---

## 13. Alur Editorial dan Publikasi

### 13.1 Workflow standar

```text
Author membuat draft
        │
        ▼
Author melengkapi metadata dan mengirim naskah
        │
        ▼
Editor memeriksa relevansi, format, sumber, dan kelayakan publikasi
        │
        ├── Perlu revisi ──► Author memperbaiki ──► Editor meninjau ulang
        │
        ▼
Managing Editor menyetujui
        │
        ▼
Jadwalkan atau terbitkan
        │
        ▼
Pantau, koreksi bila perlu, dan arsipkan jika sudah tidak relevan
```

### 13.2 Checklist sebelum terbit

- [ ] Judul jelas dan tidak menyesatkan.
- [ ] Penulis dan afiliasi telah dikonfirmasi.
- [ ] Naskah sudah disunting.
- [ ] Klaim, kutipan, data, dan referensi dapat ditelusuri.
- [ ] Hak cipta/izin gambar dan materi pihak ketiga telah diperiksa.
- [ ] Kategori dan tag sesuai.
- [ ] Gambar utama memiliki alt text, caption, dan kredit.
- [ ] Ringkasan/excerpt tersedia.
- [ ] SEO title dan meta description tersedia.
- [ ] Preview desktop dan mobile telah diperiksa.
- [ ] Persetujuan penerbitan tercatat.

### 13.3 Kebijakan koreksi

Jika terjadi kekeliruan, editor dapat memperbarui konten dengan menyimpan versi sebelumnya. Koreksi substansial pada artikel akademik sebaiknya disertai catatan koreksi dan tanggal. Konten tidak dihapus tanpa alasan dan persetujuan yang dapat dipertanggungjawabkan.

---

## 14. Kebutuhan Nonfungsional

### 14.1 Keamanan

- HTTPS wajib.
- Password tidak disimpan dalam bentuk teks; gunakan penyedia autentikasi yang aman.
- MFA untuk super admin/admin/editor.
- Pembatasan percobaan login, proteksi CSRF/XSS/SQL injection, dan validasi server-side.
- Validasi tipe/ukuran file upload dan pemindaian file jika infrastruktur mendukung.
- Backup database dan media terjadwal; uji proses restore.
- Audit log untuk login, perubahan peran, publikasi, penghapusan, dan pengaturan sensitif.
- Kebijakan sesi dan logout otomatis untuk dashboard.
- Pisahkan lingkungan development, staging, dan production.

### 14.2 Kinerja

- Optimasi ukuran gambar dan gunakan format modern seperti WebP/AVIF bila didukung.
- Lazy loading untuk gambar di bawah fold.
- Cache halaman publik dan aset statis.
- Pagination untuk daftar artikel dan data admin.
- Hindari memasang banyak skrip pihak ketiga.
- Pantau Core Web Vitals dan performa mobile.

### 14.3 Aksesibilitas

- Kontras warna yang memadai.
- Navigasi dapat digunakan dengan keyboard.
- Struktur heading berurutan.
- Alt text pada gambar informatif.
- Label form jelas dan pesan error dapat dipahami.
- Fokus keyboard terlihat.
- Jangan menyampaikan informasi hanya dengan warna.

### 14.4 Privasi dan kepatuhan

- Sediakan kebijakan privasi dan pemberitahuan pengumpulan data form.
- Kumpulkan hanya data yang diperlukan.
- Sediakan persetujuan terpisah untuk publikasi foto/testimoni/data peserta.
- Batasi masa simpan data pesan dan permintaan kolaborasi.
- Sediakan kanal permintaan koreksi/penghapusan data sesuai kebijakan lembaga dan peraturan yang berlaku.

---

## 15. SEO, Analitik, dan Pengukuran Dampak

### 15.1 SEO teknis dan editorial

- Setiap halaman memiliki title dan meta description unik.
- URL singkat, deskriptif, dan konsisten.
- Sitemap XML dan robots.txt.
- Canonical URL untuk mencegah duplikasi.
- Open Graph/Twitter metadata untuk berbagi.
- Schema.org yang sesuai: Organization, Article, Person, Event, BreadcrumbList. Gunakan data faktual saja.
- Internal linking antara artikel, topik, profil penulis, program, dan halaman riset.
- Gambar diberi nama file dan alt text yang deskriptif.
- Halaman yang belum siap tidak diindeks sampai disetujui.

### 15.2 Analitik yang disarankan

- Pengunjung dan sesi.
- Sumber trafik.
- Artikel/halaman paling banyak dibaca.
- Kata kunci pencarian internal yang menghasilkan/tidak menghasilkan hasil.
- Klik CTA program dan kontak.
- Pengiriman form dan permintaan kolaborasi.
- Unduhan dokumen publik.
- Performa per kategori dan penulis.

Gunakan analitik yang menghormati privasi dan sampaikan penggunaan cookie/tracking bila diperlukan.

### 15.3 Indikator keberhasilan

| Area | Indikator |
|---|---|
| Profil lembaga | Kelengkapan halaman dan jumlah kunjungan ke halaman Tentang |
| Publikasi | Artikel terbit, pembaca per artikel, waktu baca, sumber rujukan |
| Program | Klik CTA, pertanyaan masuk, permintaan proposal/kolaborasi |
| Kemitraan | Permintaan kolaborasi yang valid dan tindak lanjut |
| Operasional | Waktu dari draft ke publikasi, konten tertunda, error publikasi |
| Kualitas | Proporsi artikel dengan metadata dan referensi lengkap |

Jangan menetapkan target angka sebelum baseline analitik dan kapasitas produksi konten diketahui.

---

## 16. Tahapan Implementasi

### Tahap 0 — Validasi kebutuhan dan konten

- Tetapkan nama resmi, ejaan, logo, tagline, positioning.
- Konfirmasi visi-misi dan struktur organisasi.
- Konfirmasi domain/subdomain dan pemilik akun hosting.
- Validasi kontak, alamat, daftar mitra, nama narasumber/mentor, serta status JUSMA.
- Tentukan siapa yang menyetujui artikel dan siapa yang mengelola website.

**Output:** content brief final, brand assets, daftar halaman, matriks penanggung jawab.

### Tahap 1 — UX/UI dan prototipe

- Buat user flow dan sitemap final.
- Buat wireframe desktop/mobile.
- Buat desain visual homepage, artikel, profil, program, dan dashboard.
- Uji prototipe dengan perwakilan pimpinan, editor, dan calon pembaca.

**Output:** design system, prototype, daftar revisi yang disetujui.

### Tahap 2 — Pengembangan MVP

- Bangun frontend publik responsif.
- Bangun CMS/admin dan autentikasi.
- Implementasikan model konten, workflow editorial, media library, SEO dasar, form kontak.
- Masukkan konten profil/program awal yang telah disetujui.

**Output:** website staging yang dapat diuji.

### Tahap 3 — Pengisian konten dan QA

- Migrasi artikel, berita, foto, profil, dan portofolio yang telah mendapat izin.
- Uji fungsi, keamanan dasar, aksesibilitas, performa, dan SEO.
- Latih admin/editor.
- Siapkan backup, monitoring, dan prosedur pemulihan.

**Output:** kandidat rilis dan dokumentasi admin.

### Tahap 4 — Peluncuran

- Hubungkan domain dan HTTPS.
- Periksa redirect, sitemap, analytics, form, email notifikasi, dan backup.
- Publikasikan pengumuman peluncuran.
- Pantau error dan pertanyaan pengguna.

**Output:** website production.

### Tahap 5 — Pengembangan lanjutan

- Integrasi JUSMA/OJS jika disetujui.
- Portal pengiriman naskah/kontributor.
- Pendaftaran program atau formulir intake.
- Arsip buku dan laporan riset.
- Versi bahasa tambahan bila kebutuhan dan sumber daya tersedia.
- Dashboard analitik dampak.

---

## 17. Konten dan Aset yang Perlu Disiapkan

### 17.1 Identitas kelembagaan

- [ ] Logo resmi versi SVG/PNG transparan.
- [ ] Panduan penggunaan logo dan warna (jika ada).
- [ ] Nama resmi lembaga dan singkatan yang disahkan.
- [ ] Tagline resmi (jika ada).
- [ ] Visi dan misi formal.
- [ ] Profil/sejarah yang telah disetujui.
- [ ] Struktur organisasi terkini beserta periode jabatan.
- [ ] Alamat lengkap dan titik peta.
- [ ] Email resmi, nomor WhatsApp, dan kanal sosial resmi.

### 17.2 Profil dan tim

- [ ] Foto resmi pengurus/pimpinan.
- [ ] Biodata pendek dan panjang.
- [ ] Jabatan/status yang benar (pengurus, mentor, narasumber, mitra ahli).
- [ ] Bidang keahlian dan afiliasi.
- [ ] Riwayat pendidikan/publikasi pilihan (dengan verifikasi).
- [ ] Izin penayangan foto dan biografi.

### 17.3 Program

- [ ] Deskripsi terbaru tiap program.
- [ ] Sasaran peserta dan persyaratan.
- [ ] Kurikulum/tahapan.
- [ ] Durasi dan format pelaksanaan.
- [ ] Luaran yang dijanjikan dan batasan hasil.
- [ ] Jadwal dan status pendaftaran.
- [ ] Tarif terbaru yang disahkan (bila akan dipublikasikan).
- [ ] FAQ dan kontak PIC.

### 17.4 Publikasi

- [ ] Minimal 5–10 artikel awal yang telah mendapat izin publikasi.
- [ ] Nama penulis dan afiliasi.
- [ ] Ringkasan, kategori, tanggal, referensi.
- [ ] Foto/ilustrasi dan hak penggunaannya.
- [ ] Metadata buku dan tautan penerbit.
- [ ] Informasi resmi JUSMA: ISSN, OJS, editor, pedoman, edisi, DOI, status akreditasi/indeksasi jika ada.

### 17.5 Dokumentasi dan portofolio

- [ ] Foto kegiatan beresolusi cukup.
- [ ] Caption, waktu, lokasi, dan pihak yang terlibat.
- [ ] Logo mitra dengan izin penggunaan.
- [ ] Bukti luaran publikasi dan tautan permanen.
- [ ] Testimoni hanya jika ada persetujuan narasumber.

---

## 18. Risiko, Validasi, dan Keputusan Terbuka

| Isu | Risiko jika tidak dikonfirmasi | Keputusan yang diperlukan |
|---|---|---|
| Ejaan/nama resmi BARISMA | Identitas digital tidak konsisten | Tetapkan satu penulisan resmi |
| Visi-misi | Website mengklaim rumusan yang tidak disahkan | Minta dokumen/rumusan resmi |
| Direktur, ketua, dan struktur | Jabatan atau relasi organisasi keliru | Validasi struktur terkini dan periode |
| Daftar pakar/mentor | Profil orang ditampilkan tanpa status/izin tepat | Verifikasi status dan persetujuan profil |
| Daftar mitra | Klaim kemitraan berlebihan atau tidak akurat | Konfirmasi nama, bentuk kerja sama, izin logo |
| Data publikasi peserta | Tautan atau indeksasi tidak valid | Verifikasi artikel, jurnal, tahun, DOI/URL |
| JUSMA | Klaim jurnal tidak sesuai status aktual | Validasi sistem, ISSN, editorial, indeksasi |
| Tarif dan RAB | Pengunjung mendapat informasi harga yang salah | Tetapkan daftar tarif publik terbaru |
| Domain `lsqarrohmah.com` | Salah arah implementasi/domain | Putuskan domain, subdomain, dan pengelola DNS |
| Kontak personal | Spam atau publikasi data pribadi | Gunakan kanal resmi dan persetujuan |
| Foto/arsip | Pelanggaran hak cipta/privasi | Pastikan izin penggunaan |
| Platform CMS | Biaya dan kompleksitas tidak sesuai kemampuan tim | Pilih setelah kebutuhan admin dan anggaran ditetapkan |

### Keputusan teknis yang belum ditetapkan

- Domain: domain baru atau subdomain dari domain LSQ Ar-Rohmah.
- CMS: WordPress, headless CMS, atau aplikasi khusus.
- Hosting dan anggaran operasional.
- Bahasa website.
- Integrasi email/notifikasi.
- Integrasi JUSMA/OJS.
- Kebijakan pendaftaran program dan penerimaan naskah.
- Pemilik data dan penanggung jawab keamanan.

**Rekomendasi platform:** pilih CMS yang nyaman digunakan editor nonteknis, memiliki role-based access control, workflow draft/review/publish, riwayat revisi, SEO, dan backup. WordPress dapat menjadi opsi praktis untuk portal editorial; headless CMS + frontend khusus dapat dipilih bila dibutuhkan fleksibilitas desain dan integrasi lebih kompleks. Pemilihan akhir harus mempertimbangkan anggaran, kemampuan teknis tim, dan pemeliharaan jangka panjang.

---

## 19. Kriteria Penerimaan

Website tahap pertama dapat dinyatakan siap uji/launch apabila:

### Publik

- [ ] Semua halaman prioritas MVP memiliki konten yang telah disetujui.
- [ ] Navigasi berfungsi di desktop dan mobile.
- [ ] Profil lembaga tidak memuat visi-misi atau klaim yang belum disahkan.
- [ ] Program memiliki deskripsi, sasaran, dan CTA yang benar.
- [ ] Daftar artikel dapat dicari dan difilter.
- [ ] Halaman artikel menampilkan penulis, tanggal, kategori, gambar, dan referensi bila diperlukan.
- [ ] Tautan eksternal dan kontak telah diuji.
- [ ] Form kontak memiliki validasi, anti-spam, dan pemberitahuan privasi.

### Admin

- [ ] Admin dapat login dengan aman.
- [ ] Hak akses sesuai peran.
- [ ] Author dapat membuat draft dan mengirim review.
- [ ] Editor dapat memberi revisi dan menyetujui.
- [ ] Konten yang belum disetujui tidak muncul di publik.
- [ ] Admin dapat mengelola media, kategori, program, profil, mitra, dan berita.
- [ ] Riwayat perubahan konten utama tersedia.
- [ ] Backup dan pemulihan telah diuji.

### Kualitas teknis

- [ ] Tidak ada tautan rusak pada navigasi utama.
- [ ] Layout responsif dan dapat digunakan keyboard.
- [ ] Gambar teroptimasi dan memiliki alt text.
- [ ] HTTPS, metadata SEO, sitemap, dan robots.txt aktif.
- [ ] Analitik dipasang sesuai kebijakan privasi.
- [ ] Tidak ada data dummy, klaim yang belum diverifikasi, atau placeholder yang tampil tanpa penanda.

---

## 20. Lampiran: Contoh Struktur Navigasi dan Label

### Label menu yang direkomendasikan

| Label navigasi | URL | Keterangan |
|---|---|---|
| Beranda | `/` | Ringkasan lembaga |
| Tentang Kami | `/tentang` | Identitas, sejarah, arah keilmuan |
| Riset & Program | `/program` | Program dan fokus riset |
| Publikasi | `/publikasi` | Portal artikel dan karya |
| Peneliti | `/peneliti` | Akademisi, mentor, tim |
| Kemitraan | `/kemitraan` | Kerja sama dan rekam jejak |
| Berita | `/berita-kegiatan` | Kegiatan dan pengumuman |
| Kontak | `/kontak` | Kanal komunikasi |

### CTA konsisten

- Jelajahi Program
- Baca Publikasi
- Kenali Tim Peneliti
- Ajukan Kolaborasi
- Hubungi BARISMA
- Kirim Pertanyaan

### Catatan penamaan

- Gunakan “Maqāṣid” secara konsisten pada identitas visual/editorial jika itu penulisan resmi yang disahkan.
- “Maqashid” dapat dipakai pada metadata pencarian atau variasi ejaan bila dipandang perlu untuk SEO, tanpa mengubah nama resmi tampilan.
- Tentukan gaya penulisan istilah Arab, transliterasi, dan tanda diakritik dalam pedoman editorial.

---

## Penutup

Blueprint ini menjadi dokumen kerja awal untuk mengubah materi kelembagaan BARISMA menjadi pengalaman website yang terstruktur. Prioritas terdekat adalah memvalidasi identitas dan konten resmi, mengesahkan sitemap, menyusun desain visual berdasarkan logo/brosur, lalu mengembangkan MVP dengan CMS yang mendukung kerja editorial.

**Prinsip akhirnya:** website BARISMA harus memperlihatkan lembaga yang serius dalam riset, bertanggung jawab dalam publikasi, terbuka terhadap kolaborasi, dan konsisten dalam membangun tradisi produksi pengetahuan.

---

## Sumber Internal

- *Revisi Brosur Badan Riset Maqāṣid LSQ Ar-Rohmah (Tahun 2026).* Dokumen visual yang diberikan dalam percakapan ini.
- *Proposal Kerja Sama Badan Riset Maqāṣid Pondok Pesantren LSQ Ar-Rohmah Yogyakarta: Kerja Sama Pendampingan Riset, Publikasi Ilmiah, dan Pengembangan Kapasitas Akademik* (2026). Dokumen 42 halaman yang diberikan dalam percakapan ini.

**Catatan penggunaan:** Dokumen ini merupakan blueprint produk/website, bukan pengesahan data kelembagaan. Seluruh nama, jabatan, kontak, daftar mitra, tarif, status jurnal, capaian, dan konten personal harus melalui pemeriksaan dan persetujuan BARISMA sebelum dipublikasikan.
