"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function GenerateReportPage() {
    const [reportType, setReportType] = useState("monthly");
    const [dateRange, setDateRange] = useState({ start: "", end: "" });
    const [filters, setFilters] = useState({
        status: "semua",
        kelurahan: "semua",
        includeCharts: true,
        includePmt: true,
    });
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        setIsGenerating(true);
        await new Promise((r) => setTimeout(r, 2000));
        setIsGenerating(false);
        // Would download the report
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/nakes/reports" className="hover:text-primary">Laporan</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-gray-900 font-medium">Buat Laporan</span>
            </div>

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Buat Laporan</h1>
                <p className="text-gray-500 mt-1">Pilih jenis laporan dan filter yang diinginkan</p>
            </div>

            {/* Report Type */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">Jenis Laporan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { id: "monthly", name: "Laporan Bulanan", icon: "calendar_month", desc: "Ringkasan data per bulan" },
                        { id: "quarterly", name: "Laporan Triwulan", icon: "date_range", desc: "Ringkasan 3 bulan terakhir" },
                        { id: "custom", name: "Rentang Kustom", icon: "tune", desc: "Pilih tanggal sendiri" },
                    ].map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setReportType(type.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${reportType === type.id
                                    ? "border-primary bg-green-50"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <span className={`material-symbols-outlined text-2xl ${reportType === type.id ? "text-primary" : "text-gray-400"}`}>
                                {type.icon}
                            </span>
                            <p className={`font-semibold mt-2 ${reportType === type.id ? "text-primary" : "text-gray-900"}`}>
                                {type.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{type.desc}</p>
                        </button>
                    ))}
                </div>

                {reportType === "custom" && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                        <p className="font-medium text-gray-700 mb-3">Pilih Rentang Tanggal</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Dari</label>
                                <input
                                    type="date"
                                    value={dateRange.start}
                                    onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-500 mb-1">Sampai</label>
                                <input
                                    type="date"
                                    value={dateRange.end}
                                    onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">Filter Data</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Status Gizi</label>
                        <select
                            value={filters.status}
                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                            <option value="semua">Semua Status</option>
                            <option value="normal">Normal</option>
                            <option value="kurang">Gizi Kurang</option>
                            <option value="buruk">Gizi Buruk</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Kelurahan</label>
                        <select
                            value={filters.kelurahan}
                            onChange={(e) => setFilters({ ...filters, kelurahan: e.target.value })}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                            <option value="semua">Semua Kelurahan</option>
                            <option value="sukamaju">Sukamaju</option>
                            <option value="cikaret">Cikaret</option>
                            <option value="bojong">Bojong</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 space-y-3">
                    <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.includeCharts}
                            onChange={(e) => setFilters({ ...filters, includeCharts: e.target.checked })}
                            className="size-5 rounded border-gray-300 text-primary focus:ring-primary/50"
                        />
                        <div>
                            <p className="font-medium text-gray-900">Sertakan Grafik</p>
                            <p className="text-xs text-gray-500">Tambahkan chart distribusi dan trend</p>
                        </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.includePmt}
                            onChange={(e) => setFilters({ ...filters, includePmt: e.target.checked })}
                            className="size-5 rounded border-gray-300 text-primary focus:ring-primary/50"
                        />
                        <div>
                            <p className="font-medium text-gray-900">Sertakan Data PMT</p>
                            <p className="text-xs text-gray-500">Tambahkan rekap program PMT</p>
                        </div>
                    </label>
                </div>
            </div>

            {/* Output Format */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">Format Output</h2>
                <div className="flex gap-4">
                    <button className="flex-1 p-4 border-2 border-red-200 bg-red-50 rounded-xl flex items-center justify-center gap-3">
                        <span className="material-symbols-outlined text-red-600 text-2xl">picture_as_pdf</span>
                        <span className="font-semibold text-gray-900">PDF</span>
                    </button>
                    <button className="flex-1 p-4 border-2 border-gray-200 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50">
                        <span className="material-symbols-outlined text-green-600 text-2xl">table_view</span>
                        <span className="font-semibold text-gray-900">Excel</span>
                    </button>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4">
                <Link
                    href="/nakes/reports"
                    className="text-gray-600 font-medium hover:text-gray-900"
                >
                    Batal
                </Link>
                <Button
                    onClick={handleGenerate}
                    isLoading={isGenerating}
                    className="bg-primary hover:bg-primary/90 text-white font-bold px-8"
                >
                    <span className="material-symbols-outlined mr-2">download</span>
                    Generate Laporan
                </Button>
            </div>
        </div>
    );
}
