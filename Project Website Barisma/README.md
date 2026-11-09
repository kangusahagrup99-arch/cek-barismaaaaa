# Website Resmi BARISMA (Badan Riset Maqāṣid)
### Pondok Pesantren Lingkar Studi Qur'an (LSQ) Ar-Rohmah Yogyakarta

[![Status](https://img.shields.io/badge/Status-Live%20Production-166534.svg)](https://github.com)
[![License](https://img.shields.io/badge/Hak%20Cipta-PP%20LSQ%20Ar--Rohmah-D97706.svg)](https://github.com)

Repositori ini memuat kode sumber website resmi **Badan Riset Maqāṣid (BARISMA)** — lembaga *think-tank* riset keislaman, kajian sosial-humaniora, dan pusat diseminasi artikel ilmiah populer berbasis metodologi **Tafsir Maqāṣidi**.

---

## 🏛️ Struktur Halaman Publik

1. `index.html` — Beranda Utama dengan desain Modern Corporate, hero, pilar aktivitas, publikasi, profil pakar, JUSMA, mitra, dan kontak
2. `tentang.html` — Profil Kelembagaan, Visi-Misi 2030, dan Dewan Pakar
3. `publikasi.html` — Indeks Artikel (Opini Populer, Policy Brief, Working Paper, Resensi Buku) dengan Live Search
4. `artikel-detail.html` — Tata Letak Editorial Naskah Lengkap & Profil Penulis
5. `program.html` — Katalog 6 Layanan (Klinik Proposal, Uzlah Akademik, Buku Antologi, Workshop)
6. `kemitraan.html` — Informasi Kemitraan Kampus, Fakultas, dan Pesantren
7. `kontak.html` — Kanal Korespondensi Sekretariat & Chat WhatsApp
8. `admin.html` — Antarmuka CMS & Manajemen Antrean Editorial

---

## 📂 Struktur Aset

```
Project Website Barisma/
├── assets/
│   ├── css/
│   │   ├── style.css            # Stylesheet halaman publik selain beranda
│   │   └── home.css             # Design system khusus beranda BARISMA
│   ├── images/
│   │   ├── logo-full.png        # File logo asli
│   │   ├── logo-horizontal.png  # Logo horizontal hasil crop untuk beranda
│   │   └── logo-icon.png        # Logo emblem & favicon
│   └── js/
│       └── main.js              # Navigasi drawer, live filter, search, & toast
├── index.html
├── tentang.html
├── publikasi.html
├── artikel-detail.html
├── program.html
├── kemitraan.html
├── kontak.html
├── admin.html
├── .nojekyll                    # Optimasi GitHub Pages static engine
└── README.md
```

---

## Catatan Redesign Beranda

Beranda menggunakan `home.css` dan `home.js` secara terpisah agar perubahan visualnya tidak mengubah stylesheet maupun interaksi halaman lain. Halaman beranda menggunakan HTML, CSS, dan JavaScript vanilla; halaman lain tetap memakai aset dan struktur awal proyek.

---

## 📬 Kontak Sekretariat Resmi

* **Institusi Induk**: Pondok Pesantren LSQ Ar-Rohmah Yogyakarta
* **Email Pengelola**: [badanrisetmaqasidlsq.yk@gmail.com](mailto:badanrisetmaqasidlsq.yk@gmail.com)
* **Narahubung WhatsApp**: Rifki ([0857-0282-9379](https://wa.me/6285702829379))
* **Portal Jurnal OJS**: Jurnal Studi Maqashid Ar-Rohmah (JUSMA)

---
*© 2026 Badan Riset Maqāṣid (BARISMA). Seluruh hak cipta dilindungi.*

