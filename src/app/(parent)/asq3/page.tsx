"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

// Mock ASQ-3 result data
const asqResult = {
    childName: "Budi Santoso",
    childAge: "54 Tahun 3 Bulan",
    screeningDate: "20 Mar 2024",
    status: "Lengkap",
    domains: [
        {
            id: "communication",
            name: "Komunikasi",
            icon: "chat_bubble",
            description: "Berbicara, mendengarkan, dan mengerti perintah.",
            score: 55,
            maxScore: 60,
            status: "on_track", // on_track, monitoring, below_cutoff
        },
        {
            id: "gross_motor",
            name: "Motorik Kasar",
            icon: "directions_run",
            description: "Gerakan tubuh besar (berjalan, lari, lompat).",
            score: 50,
            maxScore: 60,
            status: "on_track",
        },
        {
            id: "fine_motor",
            name: "Motorik Halus",
            icon: "edit",
            description: "Koordinasi tangan dan mata (menggambar, menyusun).",
            score: 35,
            maxScore: 60,
            status: "monitoring",
        },
        {
            id: "problem_solving",
            name: "Pemecahan Masalah",
            icon: "psychology",
            description: "Belajar dan memecahkan masalah sederhana.",
            score: 50,
            maxScore: 60,
            status: "on_track",
        },
        {
            id: "personal_social",
            name: "Personal Sosial",
            icon: "diversity_3",
            description: "Kemandirian dan interaksi sosial dengan orang lain.",
            score: 25,
            maxScore: 60,
            status: "below_cutoff",
        },
    ],
};

const statusColors: Record<string, { bg: string; text: string; border: string; label: string }> = {
    on_track: { bg: "bg-green-50", text: "text-green-600", border: "bg-green-500", label: "Sesuai" },
    monitoring: { bg: "bg-yellow-50", text: "text-yellow-600", border: "bg-yellow-400", label: "Pemantauan" },
    below_cutoff: { bg: "bg-red-50", text: "text-red-600", border: "bg-red-500", label: "Rujukan" },
};

const statusBadgeColors: Record<string, string> = {
    on_track: "bg-green-100 text-green-700",
    monitoring: "bg-yellow-100 text-yellow-800",
    below_cutoff: "bg-red-100 text-red-700",
};

export default function ASQ3DetailPage() {
    return (
        <div className="max-w-[900px] mx-auto space-y-8">
            {/* Header */}
            <div>
                <div className="flex flex-col gap-1 mb-6">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-2 w-fit"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        <span>Kembali ke Dashboard</span>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Skrining Perkembangan (ASQ-3)
                    </h1>
                    <p className="text-gray-500">
                        Hasil deteksi dini tumbuh kembang anak usia 24 bulan.
                    </p>
                </div>

                {/* Child Info Card */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="relative">
                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-green-50">
                            <span className="material-symbols-outlined text-primary text-3xl">
                                child_care
                            </span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                            <span
                                className="material-symbols-outlined text-primary text-base"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                check_circle
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{asqResult.childName}</h2>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                            <span className="material-symbols-outlined text-base">cake</span>
                            <span>{asqResult.childAge}</span>
                        </div>
                    </div>
                    <div className="ml-auto hidden sm:block">
                        <span className="px-3 py-1 bg-green-50 text-[#388E3C] text-xs font-bold rounded-full border border-green-100">
                            {asqResult.status}
                        </span>
                    </div>
                </div>
            </div>

            {/* Start Screening Button */}
            <div className="flex gap-4">
                <Link href="/asq3/screening" className="flex-1">
                    <Button size="lg" className="w-full shadow-lg shadow-green-200">
                        <span className="material-symbols-outlined">assignment</span>
                        Mulai Skrining Baru
                    </Button>
                </Link>
            </div>

            {/* Domain Results */}
            <section className="space-y-4">
                <h3 className="font-bold text-lg text-gray-900">Hasil Per Domain</h3>
                {asqResult.domains.map((domain) => {
                    const colors = statusColors[domain.status];
                    return (
                        <div
                            key={domain.id}
                            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-hidden group"
                        >
                            {/* Status indicator bar */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${colors.border}`} />

                            {/* Icon */}
                            <div
                                className={`size-14 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                            >
                                <span className="material-symbols-outlined text-3xl">{domain.icon}</span>
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-center sm:text-left w-full">
                                <h3 className="font-bold text-lg text-gray-900">{domain.name}</h3>
                                <p className="text-sm text-gray-500">{domain.description}</p>
                            </div>

                            {/* Score */}
                            <div className="flex flex-col items-center sm:items-end gap-1 w-full sm:w-auto">
                                <div className="text-2xl font-bold text-gray-900">
                                    {domain.score}
                                    <span className="text-sm text-gray-400 font-medium">
                                        /{domain.maxScore}
                                    </span>
                                </div>
                                <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${statusBadgeColors[domain.status]}`}
                                >
                                    {colors.label}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* Status Legend */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Keterangan Status
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                        <span className="mt-1 size-3 rounded-full bg-green-500 shadow-sm ring-2 ring-green-100" />
                        <div>
                            <span className="block text-sm font-bold text-gray-900">Sesuai Harapan</span>
                            <p className="text-xs text-gray-500 mt-1">
                                Nilai di atas ambang batas. Perkembangan anak sesuai usianya.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-1 size-3 rounded-full bg-yellow-400 shadow-sm ring-2 ring-yellow-100" />
                        <div>
                            <span className="block text-sm font-bold text-gray-900">Perlu Pemantauan</span>
                            <p className="text-xs text-gray-500 mt-1">
                                Nilai dekat dengan batas. Berikan stimulasi lebih sering.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-1 size-3 rounded-full bg-red-500 shadow-sm ring-2 ring-red-100" />
                        <div>
                            <span className="block text-sm font-bold text-gray-900">Perlu Rujukan</span>
                            <p className="text-xs text-gray-500 mt-1">
                                Nilai di bawah batas. Segera konsultasikan ke dokter anak.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
