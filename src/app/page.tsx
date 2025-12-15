import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white text-[#111814] antialiased selection:bg-primary selection:text-[#111814]">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-[#25c265]">
                <span className="material-symbols-outlined">health_and_safety</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#111814]">KREANOVA</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-[#25c265] transition-colors" href="#beranda">Beranda</a>
              <a className="text-sm font-medium hover:text-[#25c265] transition-colors" href="#fitur">Fitur</a>
              <a className="text-sm font-medium hover:text-[#25c265] transition-colors" href="#tentang">Tentang Kami</a>
              <a className="text-sm font-medium hover:text-[#25c265] transition-colors" href="#kontak">Kontak</a>
            </div>
            {/* Auth Buttons */}
            <div className="hidden md:flex gap-3">
              <Link href="/login" className="px-5 py-2 text-sm font-bold text-[#111814] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                Masuk
              </Link>
              <Link href="/register" className="px-5 py-2 text-sm font-bold text-[#111814] bg-primary hover:bg-[#25c265]/20 rounded-lg transition-colors shadow-sm shadow-primary/20">
                Daftar
              </Link>
            </div>
            {/* Mobile Menu Icon */}
            <button className="md:hidden p-2 text-[#111814]">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32" id="beranda">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 w-fit mx-auto lg:mx-0">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-green-800 uppercase tracking-wide">Platform Kesehatan Terpercaya</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111814] leading-[1.1] tracking-tight">
                Pantau Tumbuh Kembang Anak, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">Lebih Mudah &amp; Akurat</span>
              </h1>
              <p className="text-lg text-gray-600 md:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Solusi kesehatan terpadu untuk orang tua dan tenaga medis Indonesia. Kami membantu Anda memantau nutrisi dan kesehatan anak dengan data yang presisi demi masa depan yang lebih cerah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                <Link href="/register" className="flex items-center justify-center gap-2 h-12 px-8 bg-primary hover:bg-[#22d86c] text-[#111814] text-base font-bold rounded-lg transition-all shadow-lg shadow-green-200 hover:shadow-green-300 transform hover:-translate-y-0.5">
                  Mulai Sekarang
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </Link>
                <button className="flex items-center justify-center gap-2 h-12 px-8 bg-white border border-gray-200 hover:border-primary/50 text-[#111814] text-base font-semibold rounded-lg transition-all hover:bg-gray-50">
                  <span className="material-symbols-outlined text-primary">play_circle</span>
                  Pelajari Cara Kerja
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#111814]">10rb+</span>
                  <span className="text-xs text-gray-500 font-medium">Orang Tua</span>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#111814]">500+</span>
                  <span className="text-xs text-gray-500 font-medium">Fasilitas Medis</span>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#111814]">4.9/5</span>
                  <span className="text-xs text-gray-500 font-medium">Rating Aplikasi</span>
                </div>
              </div>
            </div>
            {/* Image/Visual */}
            <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100/50 via-blue-50/50 to-transparent rounded-full blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 border-4 border-white">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center bg-green-100"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuU3Ud2u9eAERsPqaqNYMJGjW4x4vj-LaBLrhExdzbY2_RyKx5Hu6GCahD-19FVpfNfF6pYpOxKTvBElIiWd2A_6Aytf_pkhdizZydmh540cduethAXyqvBLXr1rdxiGbgB5nUn6jKmU01vfthYNkMP6bp1Bl0ck_THIaFn_8IpSRIgVBhEL7VZO1k6Mt0y9h2kZYoEFq7vb9KEcL39aMwTuhpiTkwx6KSAOxBdzrM54NHUuwf7GTs5rGl_b6y2uJaMvQk4jpf55R_')" }}
                />
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
                  <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111814]">Status Pertumbuhan: Normal</p>
                    <p className="text-xs text-gray-500">Update terakhir: 2 jam yang lalu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Parents */}
      <section className="py-20 bg-[#f8f9fa]" id="fitur">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Section Header */}
            <div className="md:w-1/3 md:sticky md:top-24">
              <div className="inline-flex items-center gap-2 mb-4 text-green-700 font-semibold bg-green-100 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Untuk Orang Tua
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#111814] mb-4 leading-tight">
                Teman Setia dalam Mengasuh Buah Hati
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kami menyediakan alat lengkap yang mudah digunakan untuk memastikan anak Anda mendapatkan nutrisi dan perawatan terbaik setiap hari.
              </p>
              <button className="hidden md:flex items-center gap-2 text-[#25c265] font-bold hover:gap-3 transition-all">
                Pelajari Fitur Orang Tua <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            {/* Cards Grid */}
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-primary group-hover:text-[#111814] transition-colors">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <h3 className="text-lg font-bold text-[#111814] mb-2">Input Asupan</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Catat menu makan harian dan hitung kalori serta nutrisi secara otomatis untuk mencegah stunting.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-primary group-hover:text-[#111814] transition-colors">
                  <span className="material-symbols-outlined">show_chart</span>
                </div>
                <h3 className="text-lg font-bold text-[#111814] mb-2">Grafik Tumbuh Kembang</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Visualisasi kurva pertumbuhan berat dan tinggi badan sesuai standar WHO dengan mudah.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-primary group-hover:text-[#111814] transition-colors">
                  <span className="material-symbols-outlined">event_available</span>
                </div>
                <h3 className="text-lg font-bold text-[#111814] mb-2">Jadwal Imunisasi</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Pengingat otomatis jadwal vaksinasi agar Anda tidak pernah melewatkan momen kesehatan penting.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:bg-primary group-hover:text-[#111814] transition-colors">
                  <span className="material-symbols-outlined">forum</span>
                </div>
                <h3 className="text-lg font-bold text-[#111814] mb-2">Konsultasi Ahli</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Tanya jawab langsung dengan dokter spesialis anak terpercaya melalui fitur chat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Medical */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
            {/* Section Header */}
            <div className="md:w-1/3 md:sticky md:top-24">
              <div className="inline-flex items-center gap-2 mb-4 text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                Untuk Tenaga Medis
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#111814] mb-4 leading-tight">
                Efisiensi Layanan Posyandu &amp; Klinik
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Digitalisasi data kesehatan untuk mempermudah pemantauan populasi, pelaporan, dan pengambilan keputusan medis yang cepat.
              </p>
              <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                Lihat Solusi Medis <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            {/* Cards Grid */}
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h3 className="text-lg font-bold text-[#111814] mb-2">Monitoring Pasien</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Database terpusat untuk memantau ratusan data anak di wilayah kerja Anda dalam satu dashboard.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="text-lg font-bold text-[#111814] mb-2">Laporan Analitik</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Hasilkan laporan statistik stunting dan gizi buruk secara otomatis untuk dinas kesehatan.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <h3 className="text-lg font-bold text-[#111814] mb-2">Rekam Medis Digital</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Akses riwayat kesehatan anak secara paperless, aman, dan mudah dicari.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">notifications_active</span>
                </div>
                <h3 className="text-lg font-bold text-[#111814] mb-2">Sistem Peringatan Dini</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Notifikasi otomatis jika ditemukan anomali pada data pertumbuhan anak binaan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#102217] to-[#1a3826] text-white overflow-hidden relative" id="tentang">
        {/* Abstract Background Pattern */}
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <svg height="400" viewBox="0 0 200 200" width="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,96.5,-4.9C94.9,9.4,85.1,23.1,74.2,34.4C63.3,45.7,51.3,54.6,39.3,62.8C27.3,71,15.3,78.5,1.9,75.2C-11.5,71.9,-26.3,57.9,-40.4,46.3C-54.5,34.7,-67.9,25.5,-73.9,12.5C-79.9,-0.5,-78.5,-17.3,-70.5,-31.8C-62.5,-46.3,-47.9,-58.5,-32.8,-65.2C-17.7,-71.9,-2.1,-73.1,12.5,-74.6L27.1,-76.1Z" fill="#2bee79" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Mewujudkan Generasi Emas Indonesia</h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            KREANOVA lahir dari kepedulian terhadap tingginya angka stunting di Indonesia. Kami menggabungkan teknologi modern dengan kearifan medis untuk memberdayakan setiap orang tua dan petugas kesehatan. Misi kami sederhana: memastikan tidak ada satupun anak Indonesia yang tertinggal dalam tumbuh kembangnya.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-12">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white/10 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
              </div>
              <h4 className="font-bold text-lg">Data Aman</h4>
              <p className="text-sm text-gray-400">Enkripsi standar medis untuk privasi data keluarga.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white/10 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              </div>
              <h4 className="font-bold text-lg">Berbasis Sains</h4>
              <p className="text-sm text-gray-400">Dikembangkan berdasarkan panduan WHO dan IDAI.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white/10 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">devices</span>
              </div>
              <h4 className="font-bold text-lg">Akses Mudah</h4>
              <p className="text-sm text-gray-400">Dapat diakses dari perangkat apapun, kapanpun.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 bg-[#f8f9fa]" id="kontak">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 rounded-full bg-black opacity-5" />
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#111814] mb-4">Siap Memantau Tumbuh Kembang Si Kecil?</h2>
              <p className="text-[#111814]/80 text-lg mb-8 max-w-lg">Bergabunglah dengan ribuan orang tua cerdas lainnya. Daftar sekarang gratis untuk fitur dasar.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="px-8 py-3 bg-[#111814] text-white font-bold rounded-lg hover:bg-black transition-colors shadow-lg text-center">
                  Daftar Gratis
                </Link>
                <button className="px-8 py-3 bg-white/30 backdrop-blur-sm text-[#111814] font-bold rounded-lg hover:bg-white/40 transition-colors border border-black/5">
                  Hubungi Kami
                </button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md relative z-10 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4">Punya Pertanyaan?</h3>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                  <input className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="nama@email.com" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Pesan</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tulis pesan Anda..." rows={3} />
                </div>
                <button className="w-full py-2 bg-[#111814] text-white font-bold rounded-lg hover:bg-gray-800 transition-colors" type="button">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2 flex flex-col gap-4 pr-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-[#25c265]">
                  <span className="material-symbols-outlined">health_and_safety</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-[#111814]">KREANOVA</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Platform kesehatan digital terdepan untuk keluarga Indonesia. Membantu menciptakan masa depan yang lebih sehat.
              </p>
              <div className="flex gap-4 mt-2">
                <a className="size-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-[#111814] transition-colors text-gray-600" href="#">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
                <a className="size-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-[#111814] transition-colors text-gray-600" href="#">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#111814]">Fitur</h4>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Jurnal Nutrisi</a>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Grafik Pertumbuhan</a>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Konsultasi</a>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Vaksinasi</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#111814]">Perusahaan</h4>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Tentang Kami</a>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Karir</a>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Blog</a>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Kontak</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#111814]">Legal</h4>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Kebijakan Privasi</a>
              <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Syarat &amp; Ketentuan</a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 KREANOVA. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">language</span> Bahasa Indonesia
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
