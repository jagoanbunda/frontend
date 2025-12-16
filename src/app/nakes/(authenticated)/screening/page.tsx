import Link from "next/link";
import { Badge } from "@/components/ui";

// Mock screening data
const screeningData = [
    { id: "1", name: "Budi Santoso", age: "24 bulan", lastScreening: "10 Des 2025", status: "completed", result: "normal" },
    { id: "2", name: "Citra Dewi", age: "18 bulan", lastScreening: "5 Des 2025", status: "completed", result: "monitor" },
    { id: "3", name: "Andi Pratama", age: "36 bulan", lastScreening: null, status: "pending", result: null },
    { id: "4", name: "Siti Aminah", age: "24 bulan", lastScreening: null, status: "pending", result: null },
    { id: "5", name: "Rudi Hermawan", age: "30 bulan", lastScreening: "1 Nov 2025", status: "due", result: "normal" },
    { id: "6", name: "Dewi Lestari", age: "12 bulan", lastScreening: "15 Sep 2025", status: "completed", result: "normal" },
];

function getStatusBadge(status: string, result: string | null) {
    switch (status) {
        case "completed":
            if (result === "monitor") return <Badge variant="warning">Pantau</Badge>;
            return <Badge variant="success">Selesai</Badge>;
        case "pending":
            return <Badge variant="neutral">Belum Skrining</Badge>;
        case "due":
            return <Badge variant="warning">Perlu Skrining Ulang</Badge>;
        default:
            return <Badge variant="neutral">{status}</Badge>;
    }
}

export default function ScreeningListPage() {
    const pendingCount = screeningData.filter((s) => s.status === "pending" || s.status === "due").length;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Skrining Perkembangan</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola skrining ASQ-3 untuk anak terdaftar</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="size-12 bg-orange-50 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-orange-600">pending_actions</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{pendingCount}</p>
                            <p className="text-sm text-gray-500">Perlu Skrining</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="size-12 bg-green-50 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-green-600">check_circle</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">
                                {screeningData.filter((s) => s.status === "completed").length}
                            </p>
                            <p className="text-sm text-gray-500">Selesai Bulan Ini</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="size-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-yellow-600">visibility</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">
                                {screeningData.filter((s) => s.result === "monitor").length}
                            </p>
                            <p className="text-sm text-gray-500">Perlu Dipantau</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Screening List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">Daftar Anak</h3>
                    <select className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg">
                        <option>Semua Status</option>
                        <option>Perlu Skrining</option>
                        <option>Selesai</option>
                        <option>Perlu Dipantau</option>
                    </select>
                </div>

                <div className="divide-y divide-gray-100">
                    {screeningData.map((child) => (
                        <div key={child.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">child_care</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{child.name}</p>
                                    <p className="text-sm text-gray-500">Usia: {child.age}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">
                                        {child.lastScreening ? `Terakhir: ${child.lastScreening}` : "Belum pernah"}
                                    </p>
                                </div>
                                {getStatusBadge(child.status, child.result)}
                                <Link
                                    href={child.status === "completed" ? `/nakes/screening/${child.id}/review` : `/nakes/screening/${child.id}`}
                                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                                >
                                    {child.status === "completed" ? "Lihat Hasil" : "Mulai Skrining"}
                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
