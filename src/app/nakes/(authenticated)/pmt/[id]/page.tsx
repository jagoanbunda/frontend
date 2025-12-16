import Link from "next/link";
import { Badge } from "@/components/ui";

// Mock PMT data
const pmtData = {
    id: "1",
    childName: "Budi Santoso",
    childAge: "3 tahun 2 bulan",
    parentName: "Ibu Sri Wahyuni",
    startDate: "1 Desember 2025",
    duration: 90,
    currentDay: 15,
    compliance: 93,
    status: "active",
    dailyRecords: [
        { day: 15, date: "15 Des", status: "completed", consumed: "habis", hasPhoto: true },
        { day: 14, date: "14 Des", status: "completed", consumed: "habis", hasPhoto: true },
        { day: 13, date: "13 Des", status: "completed", consumed: "sisa", hasPhoto: true },
        { day: 12, date: "12 Des", status: "completed", consumed: "habis", hasPhoto: true },
        { day: 11, date: "11 Des", status: "missed", consumed: null, hasPhoto: false },
        { day: 10, date: "10 Des", status: "completed", consumed: "habis", hasPhoto: true },
    ],
    weeklyStats: [
        { week: 1, compliance: 100 },
        { week: 2, compliance: 85 },
        { week: 3, compliance: 93 },
    ],
};

function getConsumedBadge(consumed: string | null) {
    if (!consumed) return <Badge variant="danger">Tidak Lapor</Badge>;
    if (consumed === "habis") return <Badge variant="success">Habis</Badge>;
    return <Badge variant="warning">Sisa</Badge>;
}

export default function PmtDetailPage({ params }: { params: { id: string } }) {
    const progressPercent = (pmtData.currentDay / pmtData.duration) * 100;

    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/nakes/pmt" className="hover:text-primary">Program PMT</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-gray-900 font-medium">{pmtData.childName}</span>
            </div>

            {/* Header Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="size-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-orange-600 text-3xl">restaurant</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{pmtData.childName}</h1>
                            <p className="text-gray-500">{pmtData.childAge} • Orang tua: {pmtData.parentName}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Badge variant="success" size="lg">PMT Aktif</Badge>
                        <Link
                            href={`/nakes/patients/${params.id}`}
                            className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                        >
                            Lihat Profil Anak
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>

                {/* Progress */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress Program</span>
                        <span className="text-sm font-bold text-gray-900">Hari {pmtData.currentDay} / {pmtData.duration}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span>Mulai: {pmtData.startDate}</span>
                        <span>Sisa: {pmtData.duration - pmtData.currentDay} hari</span>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Total Kepatuhan</p>
                    <p className="text-3xl font-bold text-green-600">{pmtData.compliance}%</p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Laporan Diterima</p>
                    <p className="text-3xl font-bold text-gray-900">{pmtData.currentDay - 1} <span className="text-lg font-normal text-gray-500">/ {pmtData.currentDay}</span></p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Makanan Dihabiskan</p>
                    <p className="text-3xl font-bold text-primary">12 <span className="text-lg font-normal text-gray-500">hari</span></p>
                </div>
            </div>

            {/* Daily Records */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900">Riwayat Harian</h3>
                </div>
                <div className="divide-y divide-gray-100">
                    {pmtData.dailyRecords.map((record) => (
                        <div key={record.day} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`size-10 rounded-xl flex items-center justify-center ${record.status === "completed" ? "bg-green-100" : "bg-red-100"
                                    }`}>
                                    <span className={`material-symbols-outlined ${record.status === "completed" ? "text-green-600" : "text-red-600"
                                        }`}>
                                        {record.status === "completed" ? "check_circle" : "cancel"}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Hari ke-{record.day}</p>
                                    <p className="text-sm text-gray-500">{record.date} 2025</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                {getConsumedBadge(record.consumed)}
                                {record.hasPhoto && (
                                    <button className="text-sm text-primary hover:underline flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">photo</span>
                                        Foto
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
