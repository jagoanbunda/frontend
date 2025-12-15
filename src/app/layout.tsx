import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KREANOVA - Monitoring Tumbuh Kembang Anak",
  description:
    "Aplikasi monitoring tumbuh kembang anak usia 0-5 tahun dengan fitur pencatatan gizi, antropometri, dan pemantauan intervensi PMT berdasarkan standar PMK No. 2 Tahun 2020",
  keywords: [
    "stunting",
    "gizi anak",
    "tumbuh kembang",
    "antropometri",
    "PMT",
    "posyandu",
  ],
  authors: [{ name: "KREANOVA Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2bee79",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-sans antialiased bg-background text-text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}

