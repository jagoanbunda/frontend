import Link from "next/link";
import { Badge } from "@/components/ui";

// Mock PMT data
const pmtCases = [
    { id: "1", name: "Budi Santoso", age: "3 thn 2 bln", day: 15, duration: 90, compliance: 93, status: "active" },
    { id: "2", name: "Citra Dewi", age: "1 thn 5 bln", day: 45, duration: 90, compliance: 87, status: "active" },
    { id: "3", name: "Ahmad Fauzi", age: "3 thn 7 bln", day: 78, duration: 90, compliance: 95, status: "active" },
    { id: "4", name: "Rudi Hermawan", age: "2 thn 3 bln", day: 90, duration: 90, compliance: 88, status: "review" },
    { id: "5", name: "Dewi Lestari", age: "1 thn 11 bln", day: 90, duration: 90, compliance: 92, status: "completed" },
];

const stats = {
    active: 3,
    pendingReview: 1,
    completedThisMonth: 2,
};

function getStatusBadge(status: string) {
    switch (status) {
        case "active":
            return <Badge variant="success">Aktif</Badge>;
        case "review":
            return <Badge variant="warning">Review</Badge>;
        case "completed":
            return <Badge variant="neutral">Selesai</Badge>;
        default:
            return <Badge variant="neutral">{status}</Badge>;
    }
}

function getComplianceColor(value: number) {
    if (value >= 90) return "text-green-600";
    if (value >= 70) return "text-orange-600";
    return "text-red-600";
}

export default function PmtManagementPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Program PMT</h1>
                <p className="text-sm text-gray-500 mt-1">Kelola program Pemberian Makanan Tambahan</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="size-12 bg-green-50 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-green-600">restaurant</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
                            <p className="text-sm text-gray-500">PMT Aktif</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="size-12 bg-orange-50 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-orange-600">pending_actions</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{stats.pendingReview}</p>
                            <p className="text-sm text-gray-500">Perlu Review</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="size-12 bg-blue-50 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-blue-600">check_circle</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{stats.completedThisMonth}</p>
                            <p className="text-sm text-gray-500">Selesai Bulan Ini</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PMT Cases List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">Daftar Program PMT</h3>
                    <div className="flex gap-2">
                        <select className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg">
                            <option>Semua Status</option>
                            <option>Aktif</option>
                            <option>Review</option>
                            <option>Selesai</option>
                        </select>
                    </div>
                </div>

                <div className="divide-y divide-gray-100">
                    {pmtCases.map((pmt) => (
                        <div key={pmt.id} className="p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">child_care</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{pmt.name}</p>
                                        <p className="text-sm text-gray-500">{pmt.age}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8">
                                    {/* Progress */}
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Progress</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full"
                                                    style={{ width: `${(pmt.day / pmt.duration) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700">
                                                {pmt.day}/{pmt.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Compliance */}
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Kepatuhan</p>
                                        <p className={`font-bold ${getComplianceColor(pmt.compliance)}`}>
                                            {pmt.compliance}%
                                        </p>
                                    </div>

                                    {/* Status */}
                                    <div className="w-20">
                                        {getStatusBadge(pmt.status)}
                                    </div>

                                    {/* Action */}
                                    <Link
                                        href={`/nakes/pmt/${pmt.id}`}
                                        className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                                    >
                                        Detail
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
