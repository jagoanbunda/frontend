import Link from "next/link";
import { Button } from "@/components/ui";

// Mock stats
const reportStats = {
    totalChildren: 125,
    normalPercentage: 85,
    underweightPercentage: 10,
    severelyUnderweightPercentage: 5,
    activePmt: 15,
    completedPmt: 8,
};

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Laporan</h1>
                    <p className="text-sm text-gray-500 mt-1">Ringkasan data dan ekspor laporan</p>
                </div>
                <Link href="/nakes/reports/generate">
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
                        <span className="material-symbols-outlined mr-2">add</span>
                        Buat Laporan
                    </Button>
                </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Total Anak Terdaftar</p>
                    <p className="text-3xl font-bold text-gray-900">{reportStats.totalChildren}</p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Status Normal</p>
                    <p className="text-3xl font-bold text-green-600">{reportStats.normalPercentage}%</p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">PMT Aktif</p>
                    <p className="text-3xl font-bold text-orange-600">{reportStats.activePmt}</p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">PMT Selesai</p>
                    <p className="text-3xl font-bold text-blue-600">{reportStats.completedPmt}</p>
                </div>
            </div>

            {/* Export Options */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Ekspor Cepat</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors text-left">
                        <span className="material-symbols-outlined text-green-600 text-2xl">table_view</span>
                        <div>
                            <p className="font-semibold text-gray-900">Data Anak (Excel)</p>
                            <p className="text-xs text-gray-500">Semua data anak terdaftar</p>
                        </div>
                    </button>
                    <button className="flex items-center gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-left">
                        <span className="material-symbols-outlined text-red-600 text-2xl">picture_as_pdf</span>
                        <div>
                            <p className="font-semibold text-gray-900">Laporan Bulanan (PDF)</p>
                            <p className="text-xs text-gray-500">Ringkasan bulan ini</p>
                        </div>
                    </button>
                    <button className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors text-left">
                        <span className="material-symbols-outlined text-orange-600 text-2xl">restaurant</span>
                        <div>
                            <p className="font-semibold text-gray-900">Data PMT (Excel)</p>
                            <p className="text-xs text-gray-500">Rekap program PMT</p>
                        </div>
                    </button>
                </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Laporan Terakhir</h3>
                <div className="space-y-3">
                    {[
                        { name: "Laporan Bulanan November 2025", date: "1 Des 2025", type: "PDF" },
                        { name: "Data Anak Q4 2025", date: "28 Nov 2025", type: "Excel" },
                        { name: "Rekap PMT Nov 2025", date: "25 Nov 2025", type: "Excel" },
                    ].map((report, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <span className={`material-symbols-outlined ${report.type === "PDF" ? "text-red-500" : "text-green-500"}`}>
                                    {report.type === "PDF" ? "picture_as_pdf" : "table_view"}
                                </span>
                                <div>
                                    <p className="font-medium text-gray-900">{report.name}</p>
                                    <p className="text-xs text-gray-500">{report.date}</p>
                                </div>
                            </div>
                            <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">download</span>
                                Unduh
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
