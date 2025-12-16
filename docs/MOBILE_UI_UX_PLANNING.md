# 📱 Rancangan UI/UX: KREANOVA Mobile App (Jagoan Bunda)

> 🎨 **Dokumen ini adalah panduan desain visual dan pengalaman pengguna (UI/UX).**
> Dokumen ini **TIDAK** memuat rincian teknis kode (seperti React Native, API, Database, dll), melainkan fokus pada estetika, alur, dan struktur visual untuk keperluan pembuatan mockup (Google Stitch).

---

## 1. 🌟 Konsep & Identitas Visual

### **Filosofi Desain**
- **Tema**: "Ceria, Bersih, Terpercaya".
- **Target Pengguna**: Orang tua (Ibu/Ayah) dengan anak balita (usia 0-5 tahun).
- **Nuansa**: Menggabungkan nuansa medis/kesehatan yang terpercaya dengan sentuhan playful yang ramah anak. Tidak kaku, namun tetap profesional.
- **Emosi**: Memberikan rasa tenang, semangat, dan "empowered" bagi orang tua dalam memantau tumbuh kembang anak.

### **Color Palette (Panduan Warna)**
Gunakan kode warna ini saat men-generate mockup:
- **Primary Green**: `#4CAF50` (Sehat, Pertumbuhan, Alam) - *Gunakan untuk tombol utama, header aktif, grafik positif.*
- **Action Orange**: `#FF9800` (Perhatian, Aksi, Energi) - *Gunakan untuk notifikasi penting, tombol sekunder, status "perlu perhatian".*
- **Background**: `#F9FAFB` (Off-white bersih) - *Hindari putih total untuk background utama agar tidak melelahkan mata.*
- **Surface White**: `#FFFFFF` - *Untuk kartu (cards) dan elemen kontainer.*
- **Text Dark**: `#1F2937` - *Teks utama (hampir hitam).*
- **Text Grey**: `#6B7280` - *Teks sekunder/keterangan.*

### **Typography Style**
- **Headings**: Modern Sans-serif (seperti Inter, Poppins, atau Nunito). Rounded corner sedikit diperbolehkan untuk kesan ramah.
- **Body**: Sangat mudah dibaca (high legibility).

---

## 2. 🗺️ Struktur Navigasi (Sitemap)

Aplikasi menggunakan navigasi berbasis **Bottom Bar** (Tab Bar) untuk akses cepat ke fitur utama.

1.  **🏠 Beranda (Home)**: Dashboard utama, ringkasan status anak, tugas harian.
2.  **📝 Input Data**: Menu cepat untuk mencatat makan, berat/tinggi badan, dan cek kesehatan.
3.  **📊 Grafik (Progress)**: Kurva pertumbuhan (KMS digital) dan analisis gizi.
4.  **📚 Edukasi**: Artikel dan tips kesehatan sesuai usia anak.
5.  **👤 Profil**: Pengaturan akun orang tua dan data anak.

---

## 3. 🎨 Spesifikasi Layar & Prompt Stitch

Gunakan prompt di bawah ini untuk menghasilkan mockup UI yang akurat.


### **SCREEN 1: Login / Onboarding**
Kesan pertama yang ramah dan menyambut.

*   **Elemen Kunci**:
    *   Logo aplikasi (KREANOVA / Jagoan Bunda).
    *   Ilustrasi vektor flat modern (ibu dan anak bahagia).
    *   Input: Nomor HP atau Email.
    *   Tombol: "Masuk" dan "Daftar".
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  [Status Bar]                   12:30  │
    ├────────────────────────────────────────┤
    │                                        │
    │         ( Logo KREANOVA )              │
    │                                        │
    │        [ Ilustrasi Ibu &               │
    │          Anak Bahagia ]                │
    │                                        │
    │  Selamat Datang, Bunda!                │
    │  Pantau tumbuh kembang si kecil.       │
    │                                        │
    │  ┌──────────────────────────────────┐  │
    │  │ 📱 Nomor HP / Email              │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  ┌──────────────────────────────────┐  │
    │  │ 🔒 Kata Sandi                    │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  [ Lupa Kata Sandi? ]                  │
    │                                        │
    │  ┌──────────────────────────────────┐  │
    │  │           MASUK                  │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Belum punya akun? [Daftar]            │
    │                                        │
    └────────────────────────────────────────┘
    ```
*   **Stitch Prompt**:
    > "A clean and welcoming mobile app login screen for a child health monitoring app. Top section features a friendly flat illustration of a happy mother holding a baby, soft green background themes. Middle section has modern rounded input fields for 'Phone Number' and 'Password'. Bottom section has a large, pill-shaped primary button colored #4CAF50 with text 'Masuk'. Minimalist, airy, modern UI with plenty of whitespace."


---

### **SCREEN 1B: Registrasi Akun**
Formulir pendaftaran untuk pengguna baru.

*   **Layout**: Sederhana dan fokus pada data esensial.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  < Kembali       Buat Akun Baru        │
    ├────────────────────────────────────────┤
    │  Halo Bunda! 👋                        │
    │  Yuk gabung ke komunitas Jagoan Bunda. │
    │                                        │
    │  Nama Lengkap                          │
    │  ┌──────────────────────────────────┐  │
    │  │ Nama Bunda                       │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Nomor Telepon (WhatsApp)              │
    │  ┌──────────────────────────────────┐  │
    │  │ 0812-xxxx-xxxx                   │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Buat Kata Sandi                       │
    │  ┌──────────────────────────────────┐  │
    │  │ ••••••••                         │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Konfirmasi Kata Sandi                 │
    │  ┌──────────────────────────────────┐  │
    │  │ ••••••••                         │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  [          DAFTAR SEKARANG         ]  │
    │                                        │
    │  Dengan mendaftar, Bunda setuju S&K.   │
    └────────────────────────────────────────┘
    ```
*   **Elemen Kunci**:
    *   **Input Fields**: Nama Lengkap, No HP, Password, Confirm Password.
    *   **Visual**: Header teks yang menyapa ramah.
    *   **Button**: "Daftar Sekarang" (Primary).
*   **Stitch Prompt**:
    > "Mobile app registration screen. Header says 'Create New Account'. Form fields with rounded corners for 'Full Name', 'Phone Number', 'Password', and 'Confirm Password'. A primary green button '#4CAF50' at the bottom labeled 'Register'. Clean white background, modern typography, simple layout."



---


### **SCREEN 2: Dashboard (Beranda)**
Pusat informasi. Harus informatif tapi tidak padat (cluttered).

*   **Layout**: Header sapaan, Kartu Profil Anak (Card), Widget Tugas/Reminder, Ringkasan Status.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  Hai, Bunda Ani! 👋              🔔 ●  │
    ├────────────────────────────────────────┤
    │                                        │
    │  ┌──────────────────────────────────┐  │
    │  │  [Foto]  Ahmad (2 thn)           │  │
    │  │          Status: Gizi Baik 🟢    │  │
    │  │  ------------------------------  │  │
    │  │   12 kg   │  85 cm   │  24 bln   │  │
    │  │   Berat   │  Tinggi  │  Umur     │  │
    │  └──────────────────────────────────┘  │
    │      ● ○ (indikator swipe anak)        │
    │                                        │
    │  📌 Tugas Hari Ini                     │
    │  ┌──────────────────────────────────┐  │
    │  │ [ ] Input Makan Siang            │  │
    │  │ [✓] Cek Imunisasi                │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  📊 Ringkasan Gizi (Mingguan)          │
    │  Energi  [▓▓▓▓▓▓▓▓░░] 80%              │
    │  Protein [▓▓▓▓▓▓░░░░] 60%              │
    │                                        │
    ├────────────────────────────────────────┤
    │  🏠    📝    📊     📚    👤           │
    │ Home  Input Graph  Edu   Profil        │
    └────────────────────────────────────────┘
    ```
*   **Detail Visual**:
    *   **Header**: "Selamat Pagi, Bunda [Nama]!" dengan ikon notifikasi.
    *   **Main Card (Anak)**: Kartu dengan bayangan halus (soft shadow), foto profil anak bulat, status gizi (e.g., "Gizi Baik" badge hijau).
    *   **Quick Stats**: 3 kolom kecil dalam kartu untuk Berat, Tinggi, dan Umur.
    *   **Todo List**: Daftar checklist sederhana ("Input makan siang", "Jadwal imunisasi").
*   **Stitch Prompt**:
    > "Mobile app dashboard UI for parenting app. Light grey background. Top header says 'Selamat Pagi, Bunda!'. Include a prominent, elevated white card displaying a child's profile photo, name 'Ahmad', and a green badge 'Status: Gizi Baik'. Inside the card, show small icons for Weight, Height, and Age. Below the card, a section titled 'Tugas Hari Ini' with a checklist UI: 'Input Makan Siang' (unchecked) and 'Cek Imunisasi' (checked). Bottom navigation bar with 5 icons: Home, Input, Chart, Education, Profile. Use green #4CAF50 accents."


---


### **SCREEN 3: Input Asupan Makan (Food Log)**
Fitur paling sering digunakan. Fokus pada kemudahan dan kecepatan.

*   **Layout**: Pencarian di atas, daftar kategori (Pagi, Siang, Malam), dan ringkasan nutrisi di bawah.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  < Kembali       Input Makan           │
    ├────────────────────────────────────────┤
    │  [ 🔍 Cari Makanan...                ] │
    │                                        │
    │  Waktu Makan:                          │
    │  ( Pagi ) ( Siang ) ( Malam ) (Snack)  │
    │     👆                                 │
    │                                        │
    │  Makanan Terpilih:                     │
    │  ┌──────────────────────────────────┐  │
    │  │ 🍚 Nasi Putih              [ x ] │  │
    │  │    [- 1 +] Piring (100g)         │  │
    │  └──────────────────────────────────┘  │
    │  ┌──────────────────────────────────┐  │
    │  │ 🍗 Ayam Goreng             [ x ] │  │
    │  │    [- 1 +] Potong (50g)          │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │       ( + Tambah Makanan Lain )        │
    │                                        │
    ├────────────────────────────────────────┤
    │  Total: 450 kkal                       │
    │  [            SIMPAN DATA           ]  │
    └────────────────────────────────────────┘
    ```
*   **Elemen Kunci**:
    *   Search bar besar: "Cari makanan..."
    *   Waktu makan: Pilihan pill/chips (Pagi, Siang, Sore).
    *   List Makanan: Tampilan list dengan thumbnail gambar makanan kecil, nama makanan, dan porsi.
    *   Floating Action atau Bottom Bar Summary: Menampilkan total kalori sementara.
*   **Stitch Prompt**:
    > "Mobile app food tracking screen. Clean interface. Top search bar 'Cari makanan...'. Horizontal scrollable chips for meal time: 'Pagi', 'Siang', 'Malam'. A list of food items below, each with a small square photo, title like 'Nasi Putih', and a stepper control for portion size. A fixed bottom panel showing a summary: 'Total: 450 kkal' with a 'Simpan' button in green #4CAF50. Modern, bright, and easy to tap."


---


### **SCREEN 4: Input Antropometri (Ukur Badan)**
Formulir input berat dan tinggi badan.

*   **Layout**: Fokus pada input angka.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  < Kembali       Ukur Anak             │
    ├────────────────────────────────────────┤
    │  Tanggal Pengukuran:                   │
    │  [ 📅 16 Desember 2025              ]  │
    │                                        │
    │  Berat Badan (kg)                      │
    │  ┌──────────────────────────────────┐  │
    │  │  12.5                            │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Tinggi Badan (cm)                     │
    │  ┌──────────────────────────────────┐  │
    │  │  88.0                            │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Posisi Pengukuran:                    │
    │  (o) Terlentang    ( ) Berdiri         │
    │                                        │
    │  LILA (Lingkar Lengan) - Opsional      │
    │  ┌──────────────────────────────────┐  │
    │  │  Termasuk input...               │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │                                        │
    │  [           SIMPAN DATA            ]  │
    └────────────────────────────────────────┘
    ```
*   **Elemen Kunci**:
    *   Input besar untuk Berat Badan (kg) dan Tinggi Badan (cm).
    *   Tanggal pengukuran (DatePicker).
    *   Toggle/Switch: "Posisi Diukur" (Berdiri/Terlentang).
    *   Ilustrasi kecil pengukuran yang benar (opsional).
*   **Stitch Prompt**:
    > "Mobile app screen for entering child growth data. Minimalist form. Large, bold numeric input fields for 'Berat Badan (kg)' and 'Tinggi Badan (cm)'. a Date picker field showing '15 Des 2025'. A visual toggle switch for measurement position 'Berdiri' vs 'Terlentang'. A primary green button at the bottom 'Simpan Data'. Clean white background with soft shadows."


---


### **SCREEN 5: Grafik Pertumbuhan (Growth Chart)**
Visualisasi data yang kompleks menjadi sederhana.

*   **Layout**: Grafik garis (Line Chart) di tengah.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  Status Pertumbuhan                    │
    ├────────────────────────────────────────┤
    │  [ BB/U ]  [ TB/U ]  [ BB/TB ]         │
    │     👆                                 │
    │                                        │
    │  Berat Badan vs Umur                   │
    │  kg                                    │
    │  15 │         .-. (Anak)               │
    │     │       ./                         │
    │  10 │~~~~~~/~~~~~~ (Garis Normal)      │
    │     │     /                            │
    │   5 │----/-----------------------      │
    │     └──────────────────────────── bln  │
    │      0    6    12   18   24            │
    │                                        │
    │  Status Saat Ini:                      │
    │  🟢 GIZI BAIK                          │
    │  Anak tumbuh sesuai jalur hijau.       │
    │                                        │
    │  Riwayat Terakhir:                     │
    │  • 12 Des: 12.5 kg (+0.5)              │
    │  • 12 Nov: 12.0 kg                     │
    └────────────────────────────────────────┘
    ```
*   **Elemen Kunci**:
    *   Header: Dropdown pilih kurva (BB/U, TB/U, BB/TB).
    *   Grafik: Area diarsir untuk zona normal (hijau muda), zona peringatan (kuning). Garis data anak (titik-titik yang terhubung).
    *   Legend/Keterangan di bawah grafik (e.g., "Normal", "Kurang", "Lebih").
    *   Insight Text: Teks singkat di bawah grafik, misal "Pertumbuhan Ahmad sesuai jalur normal."
*   **Stitch Prompt**:
    > "Mobile app growth chart screen. A clean line chart visualizing child growth. The chart background has colored bands: soft green/teal area for 'Normal' range, soft yellow for 'Warning'. A dark bold line plots the child's data points connected by dots. Below the chart, a clear text summary card: 'Status: Normal'. Top tabs to switch between 'Berat/Umur' and 'Tinggi/Umur'. Analytics style UI but friendly."


---


### **SCREEN 6: Skrining Perkembangan (Checklist)**
Ceklis milestone perkembangan anak.

*   **Layout**: List pertanyaan dengan jawaban Ya/Tidak.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  < Kembali    Skrining 24 Bulan        │
    ├────────────────────────────────────────┤
    │  Progress: 3/10 Pertanyaan             │
    │  [▓▓▓░░░░░░░] 30%                      │
    │                                        │
    │  KATEGORI: MOTORIK KASAR               │
    │                                        │
    │  3. Apakah anak dapat menendang        │
    │     bola kecil ke depan tanpa          │
    │     berpegangan?                       │
    │                                        │
    │      [  ⚽ Gambar Ilustrasi ]          │
    │                                        │
    │  ┌────────┐  ┌────────┐  ┌────────┐    │
    │  │   YA   │  │ KADANG │  │ TIDAK  │    │
    │  │   😊   │  │   😐   │  │   ☹️   │    │
    │  └────────┘  └────────┘  └────────┘    │
    │                                        │
    │  [< Sebelumnya]       [Selanjutnya >]  │
    └────────────────────────────────────────┘
    ```
*   **Elemen Kunci**:
    *   Progress bar di atas (e.g., "Usia 24 Bulan").
    *   Pertanyaan: "Apakah anak dapat menyusun 4 balok?"
    *   Opsi Jawaban: Tombol besar "Ya", "Kadang", "Belum".
    *   Visualisasi lucu/ikon untuk setiap kategori (Motorik, Bicara, dll).
*   **Stitch Prompt**:
    > "Mobile app developmental screening questionnaire. Friendly, quiz-like interface. Top progress bar. A card displaying a question: 'Can the child stack 4 blocks?'. Three large choice buttons: 'Ya' (green), 'Kadang' (orange), 'Belum' (grey). Small icon illustrating block stacking. Soft, playful typography. Step-by-step wizard feel."



---

### **SCREEN 7: Laporan PMT (Pemberian Makanan Tambahan)**
Fitur untuk penerima bantuan PMT melaporkan konsumsi harian.

*   **Layout**: Fokus pada bukti foto dan checklist sederhana.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  < Kembali   Laporan PMT (Hari 15)     │
    ├────────────────────────────────────────┤
    │  Hari ke-15 (16 Des 2025)              │
    │  Status: 🔴 Belum Lapor                │
    │                                        │
    │  1. Upload Foto Bukti Makan:           │
    │  ┌──────────────────────────────────┐  │
    │  │                                  │  │
    │  │       [ 📷 Ambil Foto ]          │  │
    │  │                                  │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  2. Apakah makanan dihabiskan?         │
    │  [ (o) Ya, Habis  ]                    │
    │  [ ( ) Sisa 1/2   ]                    │
    │  [ ( ) Sisa Banyak/Tidak Dimakan ]     │
    │                                        │
    │  3. Catatan / Keluhan (Opsional)       │
    │  ┌──────────────────────────────────┐  │
    │  │ Tulis catatan...                 │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  [          KIRIM LAPORAN           ]  │
    └────────────────────────────────────────┘
    ```
*   **Elemen Kunci**:
    *   Header Status: "Hari ke-X" dan status (Belum Lapor/Sudah).
    *   Upload Area: Placeholder besar untuk foto kamera.
    *   Radio Button: Porsi yang dihabiskan (Habis/Sisa).
    *   Tombol Aksi: Primary Button "Kirim Laporan".
*   **Stitch Prompt**:
    > "Mobile app screen for reporting supplementary feeding (PMT). Clean form layout. Top section shows 'Day 15' and status 'Pending'. A large dashed placeholder area for uploading a photo with a camera icon. Below, a question 'Was the food finished?' with radio button options: 'Yes, Finished', 'Half Left', 'Did not eat'. A text area for notes. A large green primary button 'Submit Report'. Simple, easy to use interface for parents."


---

### **SCREEN 8: Riwayat & Monitoring PMT**
Halaman untuk melihat rekapitulasi kepatuhan konsumsi PMT.

*   **Layout**: Ringkasan progress bar di atas, diikuti daftar riwayat harian.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  < Kembali       Riwayat PMT           │
    ├────────────────────────────────────────┤
    │  Ringkasan Program (90 Hari)           │
    │  ┌──────────────────────────────────┐  │
    │  │  Hari ke-15 / 90                 │  │
    │  │  [▓▓░░░░░░░░] 16%                │  │
    │  │                                  │  │
    │  │  Kepatuhan: 100% (Sangat Baik)   │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Riwayat Harian:                       │
    │  ┌──────────────────────────────────┐  │
    │  │ 📅 16 Des (Hari 15)              │  │
    │  │ 🟢 Habis       [ Foto ]      >   │  │
    │  └──────────────────────────────────┘  │
    │  ┌──────────────────────────────────┐  │
    │  │ 📅 15 Des (Hari 14)              │  │
    │  │ 🟡 Sisa 1/2    [ Foto ]      >   │  │
    │  └──────────────────────────────────┘  │
    │  ┌──────────────────────────────────┐  │
    │  │ 📅 14 Des (Hari 13)              │  │
    │  │ 🔴 Tidak Dimakan [ Foto ]    >   │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    └────────────────────────────────────────┘
    ```
*   **Elemen Kunci**:
    *   **Progress Card**: Menunjukkan durasi program (misal 90 hari) dan persentase kepatuhan.
    *   **List Item**: Tanggal, Status (Habis/Sisa/Tidak), dan thumbnail foto kecil.
    *   **Color Coding**: Hijau (Habis), Kuning (Sisa), Merah (Tidak dimakan/Lupa lapor).
*   **Stitch Prompt**:
    > "Mobile app PMT history screen. Top card shows a progress bar 'Day 15 of 90' and a compliance score '100%'. Below is a vertical list of daily reports. Each item has a date '16 Dec', a status badge 'Finished' (Green) or 'Leftovers' (Yellow), and a small thumbnail of the uploaded food photo. Clean list UI with chevron icons."

---

### **SCREEN 9: Hasil Skikring ASQ-3 (Overall Result)**
Halaman ringkasan setelah orang tua selesai mengisi checklist ASQ-3.

*   **Layout**: Kartu status utama di atas, diikuti rincian per kategori.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  Hasil Skrining (24 Bulan)             │
    ├────────────────────────────────────────┤
    │  Status Umum:                          │
    │  ┌──────────────────────────────────┐  │
    │  │  🎉 PERKEMBANGAN SESUAI          │  │
    │  │  Anak berkembang dengan baik.    │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Rincian Per Domain:                   │
    │  ┌──────────────────────────────────┐  │
    │  │ 🗣️ Komunikasi                    │  │
    │  │    [▓▓▓▓▓▓▓▓▓▓] 60/60 (Normal)   │  │
    │  └──────────────────────────────────┘  │
    │  ┌──────────────────────────────────┐  │
    │  │ 🏃 Motorik Kasar                 │  │
    │  │    [▓▓▓▓▓▓▓▓░░] 50/60 (Normal)   │  │
    │  └──────────────────────────────────┘  │
    │  ┌──────────────────────────────────┐  │
    │  │ ✋ Motorik Halus                 │  │
    │  │    [▓▓▓▓░░░░░░] 35/60 (Pantau)   │  │
    │  └──────────────────────────────────┘  │
    │   ... (Problem Solving & Sosial)       │
    │                                        │
    │  Rekomendasi:                          │
    │  "Latih motorik halus dengan kegiatan  │
    │  meronce manik-manik."                 │
    │                                        │
    │  [    LIHAT AKTIVITAS STIMULASI     ]  │
    └────────────────────────────────────────┘
    ```
*   **Elemen Kunci**:
    *   **Result Card**: Card besar dengan warna status (Hijau = Aman, Abu-abu = Monitor, Hitam/Merah = Refer).
    *   **Score Bars**: Visualisasi skor tiap domain dibanding cut-off point.
    *   **Action Button**: Mengarahkan ke saran aktivitas/edukasi.
*   **Stitch Prompt**:
    > "Mobile app ASQ-3 screening result screen. Top summary card says 'Development on Track' with a confetti icon and soft green background. Below is a detailed list of 5 developmental areas (Communication, Motor, etc.). Each item shows a score progress bar and a status tag like 'Normal' (Green) or 'Monitor' (Yellow). A section for 'Quick Recommendations' at the bottom. A primary button 'See Stimulation Activities'. Clear, encouraging UI."


---

### **SCREEN 10: Data Anak (Tambah/Edit)**
Formulir untuk mengisi atau mengubah data identitas anak.

*   **Layout**: Form vertikal dengan upload foto di tengah atas.
*   **Wireframe Sketsa**:
    ```text
    ┌────────────────────────────────────────┐
    │  < Kembali       Data Anak             │
    ├────────────────────────────────────────┤
    │          ( 📷 Upload Foto )            │
    │                                        │
    │  Nama Lengkap Anak                     │
    │  ┌──────────────────────────────────┐  │
    │  │ Ahmad Zaki                       │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Tanggal Lahir                         │
    │  ┌──────────────────────────────────┐  │
    │  │ 📅 12 Januari 2023               │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  Jenis Kelamin                         │
    │  (o) Laki-laki     ( ) Perempuan       │
    │                                        │
    │  Data Lahir (Opsional)                 │
    │  ┌───────────────┐  ┌───────────────┐  │
    │  │ Berat (kg)    │  │ Tinggi (cm)   │  │
    │  └───────────────┘  └───────────────┘  │
    │                                        │
    │  NIK (Opsional)                        │
    │  ┌──────────────────────────────────┐  │
    │  │ 3201xxxxxxxxxxxx                 │  │
    │  └──────────────────────────────────┘  │
    │                                        │
    │  [           SIMPAN DATA            ]  │
    └────────────────────────────────────────┘
    ```
*   **Elemen Kunci**:
    *   **Foto Profile**: Lingkaran dengan ikon kamera.
    *   **Jenis Kelamin**: Radio button atau chips besar.
    *   **Form**: Nama, Tanggal Lahir (DatePicker), Berat/Tinggi Lahir, NIK.
*   **Stitch Prompt**:
    > "Mobile app screen for adding or editing child profile. Clean form UI. Top center shows a circular photo placeholder with a camera icon. Below are input fields for 'Child Name', 'Birth Date' (with calendar icon), and 'Gender' selection (Male/Female toggles). Smaller side-by-side inputs for 'Birth Weight' and 'Birth Height'. A large primary green button 'Save Profile' at the bottom."



---



## 4. 🧩 Komponen UI Reusable (Design System)

Untuk menjaga konsistensi mockup:

1.  **Cards**: Sudut membulat (border-radius 12px-16px), shadow tipis (elevation 2), background putih.
2.  **Buttons**:
    *   Primary: Hijau `#4CAF50`, rounded, teks putih tebal.
    *   Secondary: Outline hijau atau abu-abu.
3.  **Inputs**: Background abu-abu sangat muda (`#F3F4F6`), border radius 8px, padding nyaman.
4.  **Icons**: Gunakan style outline atau duotone yang konsisten (misal: Lucide Icons, Heroicons).
5.  **Bottom Navigation**: Putih, ikon abu-abu saat tidak aktif, ikon hijau saat aktif + label teks.

---

## 5. 💡 Tips Prompting Tambahan

*   **Vibe**: Selalu tambahkan kata kunci *"Modern mobile UI, iOS style, high fidelity, dribbble aesthetic"* untuk hasil yang cantik.
*   **Kejelasan**: Jika mockup terlalu ramai, tambahkan *"Minimalist, ample whitespace"*.
*   **Konsistensi**: Sebutkan *"Consistent with Material Design 3"* atau *"iOS Human Interface Guidelines"* agar elemen UI-nya standar dan familiar.
