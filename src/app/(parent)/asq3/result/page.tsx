"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

// Mock screening result data
const screeningResult = {
    childName: "Budi Santoso",
    childAge: 36,
    screeningDate: new Date().toLocaleDateString("id-ID"),
    totalScore: 270,
    maxScore: 300,
    status: "Sesuai Tahapan",
    nextScreeningDate: "24 Des 2023",
    domains: [
        { id: "communication", name: "Komunikasi", score: 55, maxScore: 60, cutoffPercent: 30 },
        { id: "gross_motor", name: "Motorik Kasar", score: 60, maxScore: 60, cutoffPercent: 35 },
        { id: "fine_motor", name: "Motorik Halus", score: 50, maxScore: 60, cutoffPercent: 32 },
        { id: "problem_solving", name: "Pemecahan Masalah", score: 55, maxScore: 60, cutoffPercent: 28 },
        { id: "personal_social", name: "Personal Sosial", score: 50, maxScore: 60, cutoffPercent: 38 },
    ],
    recommendations: [
        {
            title: "Stimulasi Motorik Halus",
            description: "Ajak anak bermain menyusun balok atau memasukkan benda kecil ke dalam botol untuk melatih jari-jari.",
        },
        {
            title: "Sosialisasi",
            description: "Dorong anak untuk bermain dengan teman sebaya guna meningkatkan kemampuan berbagi dan interaksi.",
        },
    ],
};

export default function ASQ3ResultPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
                <span className="material-symbols-outlined text-base">chevron_right</span>
                <Link href="/asq3" className="hover:text-primary">ASQ-3</Link>
                <span className="material-symbols-outlined text-base">chevron_right</span>
                <span className="text-gray-900 font-medium">Hasil</span>
            </div>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                        Hasil Skrining ASQ-3
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Ringkasan perkembangan ananda{" "}
                        <span className="font-semibold text-gray-900">{screeningResult.childName}</span>{" "}
                        ({screeningResult.childAge} Bulan)
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-xl">calendar_month</span>
                        Jadwal Ulang
                    </button>
                    <Button className="shadow-md">
                        <span className="material-symbols-outlined text-xl">download</span>
                        Unduh Laporan
                    </Button>
                </div>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Score */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/20 rounded-lg text-[#388E3C]">
                            <span className="material-symbols-outlined">analytics</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Total Skor
                        </span>
                    </div>
                    <div>
                        <span className="text-4xl font-black text-gray-900">{screeningResult.totalScore}</span>
                        <span className="text-sm text-gray-500 ml-1">/ {screeningResult.maxScore}</span>
                    </div>
                </div>

                {/* Status */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute right-0 top-0 p-10 opacity-5 pointer-events-none">
                        <span className="material-symbols-outlined text-9xl">check_circle</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/20 rounded-lg text-[#388E3C]">
                            <span className="material-symbols-outlined">health_and_safety</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Status
                        </span>
                    </div>
                    <div>
                        <span className="text-2xl font-bold text-gray-900 block">{screeningResult.status}</span>
                        <span className="text-sm text-gray-500">Tidak ada keterlambatan terdeteksi</span>
                    </div>
                </div>

                {/* Next Screening */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/20 rounded-lg text-[#388E3C]">
                            <span className="material-symbols-outlined">event</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Jadwal Berikutnya
                        </span>
                    </div>
                    <div>
                        <span className="text-2xl font-bold text-gray-900 block">
                            {screeningResult.nextScreeningDate}
                        </span>
                        <span className="text-sm text-primary font-medium">Dalam 2 Bulan</span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Section */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Analisis Domain Perkembangan</h3>
                            <p className="text-sm text-gray-500">
                                Perbandingan skor anak vs ambang batas (cutoff)
                            </p>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-medium">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-primary" />
                                <span className="text-gray-900">Skor Anak</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-gray-300" />
                                <span className="text-gray-500">Ambang Batas</span>
                            </div>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="flex flex-col gap-6">
                        {screeningResult.domains.map((domain) => {
                            const percentage = Math.round((domain.score / domain.maxScore) * 100);
                            return (
                                <div
                                    key={domain.id}
                                    className="grid grid-cols-1 sm:grid-cols-[160px_1fr] items-center gap-2 sm:gap-6 group"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-900">{domain.name}</span>
                                        <span className="text-xs text-gray-500">
                                            Skor: {domain.score} / {domain.maxScore}
                                        </span>
                                    </div>
                                    <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden flex items-center">
                                        {/* Cutoff line */}
                                        <div
                                            className="absolute top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-400 z-10"
                                            style={{ left: `${domain.cutoffPercent}%` }}
                                            title="Ambang Batas (Cutoff)"
                                        />
                                        {/* Score bar */}
                                        <div
                                            className="h-full bg-primary rounded-r-lg relative group-hover:bg-opacity-90 transition-all"
                                            style={{ width: `${percentage}%` }}
                                        >
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#0f5c32]">
                                                {percentage}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gray-400" />
                            Garis putus-putus menandakan ambang batas minimal untuk kategori aman.
                        </div>
                    </div>
                </div>

                {/* Recommendations Sidebar */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    {/* Recommendation Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-primary/20 p-2 rounded-full text-[#388E3C]">
                                <span className="material-symbols-outlined">lightbulb</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Rekomendasi</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            {screeningResult.recommendations.map((rec, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-lg bg-gray-50 border-l-4 border-primary"
                                >
                                    <h4 className="font-bold text-sm text-gray-900 mb-1">{rec.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{rec.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-2.5 text-primary text-sm font-bold hover:bg-primary/10 rounded-lg transition-colors flex items-center justify-center gap-2">
                            Lihat Semua Saran
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>

                    {/* Next Steps Card */}
                    <div className="bg-gray-900 rounded-xl shadow-md p-6 text-white relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                        <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                        <h3 className="text-lg font-bold mb-2 relative z-10">Punya Pertanyaan?</h3>
                        <p className="text-sm text-gray-300 mb-6 relative z-10 leading-relaxed">
                            Jika Anda memiliki kekhawatiran mengenai hasil ini, konsultasikan dengan dokter anak kami.
                        </p>
                        <button className="w-full bg-white text-gray-900 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors relative z-10">
                            Chat Dokter Sekarang
                        </button>
                    </div>
                </div>
            </div>

            {/* Back to Dashboard */}
            <div className="flex justify-center pt-4">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                    Kembali ke Dashboard
                </Link>
            </div>
        </div>
    );
}
