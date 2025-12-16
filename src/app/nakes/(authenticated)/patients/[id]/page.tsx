import Link from "next/link";
import { Badge, Button } from "@/components/ui";
import { GrowthChart } from "@/components/charts/GrowthChart";

// Mock child data
const childData = {
    id: "1",
    name: "Budi Santoso",
    age: "3 tahun 2 bulan",
    ageMonths: 38,
    gender: "Laki-laki",
    birthDate: "15 Oktober 2021",
    address: "Jl. Merdeka No. 45, Kel. Sukamaju",
    parentName: "Ibu Sri Wahyuni",
    parentPhone: "0812-3456-7890",
    measurements: {
        weight: 10.5,
        height: 85,
        bbu: -3.2,
        tbu: -2.1,
        bbtb: -2.5,
        lastMeasured: "10 Desember 2025",
    },
    status: "buruk",
    pmtStatus: "active", // active, pending, none, completed
    pmtDay: 15,
};

function getStatusBadge(status: string) {
    switch (status) {
        case "normal":
            return <Badge variant="success">Gizi Normal</Badge>;
        case "kurang":
            return <Badge variant="warning">Gizi Kurang</Badge>;
        case "buruk":
            return <Badge variant="danger">Gizi Buruk</Badge>;
        default:
            return <Badge variant="neutral">{status}</Badge>;
    }
}

function getZScoreStatus(value: number) {
    if (value < -3) return { label: "Buruk", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" };
    if (value < -2) return { label: "Kurang", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" };
    return { label: "Normal", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" };
}

export default function PatientDetailPage({ params }: { params: { id: string } }) {
    const bbuStatus = getZScoreStatus(childData.measurements.bbu);
    const tbuStatus = getZScoreStatus(childData.measurements.tbu);
    const bbtbStatus = getZScoreStatus(childData.measurements.bbtb);

    return (
        <div className="space-y-6">
            {/* Breadcrumb & Actions */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/nakes/patients" className="hover:text-primary">Data Anak</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-gray-900 font-medium">{childData.name}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href={`/nakes/patients/${params.id}/intervention`}
                        className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                    >
                        <span className="material-symbols-outlined">edit_note</span>
                        Intervensi
                    </Link>
                </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Avatar & Basic Info */}
                    <div className="flex items-start gap-4">
                        <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary text-4xl">child_care</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-2xl font-bold text-gray-900">{childData.name}</h1>
                                {getStatusBadge(childData.status)}
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                                <p><span className="text-gray-500">Usia:</span> {childData.age}</p>
                                <p><span className="text-gray-500">Jenis Kelamin:</span> {childData.gender}</p>
                                <p><span className="text-gray-500">Tanggal Lahir:</span> {childData.birthDate}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="md:ml-auto md:text-right space-y-2">
                        <p className="text-sm text-gray-600">
                            <span className="text-gray-500">Orang Tua:</span> {childData.parentName}
                        </p>
                        <p className="text-sm text-gray-600">
                            <span className="text-gray-500">Telepon:</span> {childData.parentPhone}
                        </p>
                        <p className="text-sm text-gray-600">
                            <span className="text-gray-500">Alamat:</span> {childData.address}
                        </p>
                    </div>
                </div>

                {/* PMT Status */}
                {childData.pmtStatus === "active" && (
                    <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-orange-600">restaurant</span>
                            <div>
                                <p className="font-semibold text-gray-900">Program PMT Aktif</p>
                                <p className="text-sm text-gray-600">Hari ke-{childData.pmtDay} dari 90 hari</p>
                            </div>
                        </div>
                        <Link
                            href={`/nakes/pmt/${params.id}`}
                            className="text-sm font-medium text-orange-600 hover:underline flex items-center gap-1"
                        >
                            Lihat Progress
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                )}
            </div>

            {/* Z-Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* BB/U */}
                <div className={`p-5 rounded-2xl border ${bbuStatus.bg} ${bbuStatus.border}`}>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-500 uppercase">BB / U</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${bbuStatus.bg} ${bbuStatus.color}`}>
                            {bbuStatus.label}
                        </span>
                    </div>
                    <p className={`text-3xl font-bold ${bbuStatus.color}`}>{childData.measurements.bbu} SD</p>
                    <p className="text-sm text-gray-500 mt-1">Berat: {childData.measurements.weight} kg</p>
                </div>

                {/* TB/U */}
                <div className={`p-5 rounded-2xl border ${tbuStatus.bg} ${tbuStatus.border}`}>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-500 uppercase">TB / U</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${tbuStatus.bg} ${tbuStatus.color}`}>
                            {tbuStatus.label}
                        </span>
                    </div>
                    <p className={`text-3xl font-bold ${tbuStatus.color}`}>{childData.measurements.tbu} SD</p>
                    <p className="text-sm text-gray-500 mt-1">Tinggi: {childData.measurements.height} cm</p>
                </div>

                {/* BB/TB */}
                <div className={`p-5 rounded-2xl border ${bbtbStatus.bg} ${bbtbStatus.border}`}>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-500 uppercase">BB / TB</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${bbtbStatus.bg} ${bbtbStatus.color}`}>
                            {bbtbStatus.label}
                        </span>
                    </div>
                    <p className={`text-3xl font-bold ${bbtbStatus.color}`}>{childData.measurements.bbtb} SD</p>
                    <p className="text-sm text-gray-500 mt-1">Terakhir: {childData.measurements.lastMeasured}</p>
                </div>
            </div>

            {/* Growth Chart */}
            <GrowthChart />

            {/* Nutrition Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">restaurant</span>
                    Ringkasan Asupan (7 Hari Terakhir)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-500">Rata-rata Energi</p>
                        <p className="text-xl font-bold text-gray-900">850 <span className="text-sm font-normal">kkal/hari</span></p>
                        <p className="text-xs text-orange-600 mt-1">↓ 15% dari target</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-500">Rata-rata Protein</p>
                        <p className="text-xl font-bold text-gray-900">25 <span className="text-sm font-normal">g/hari</span></p>
                        <p className="text-xs text-green-600 mt-1">✓ Sesuai target</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-500">Frekuensi Makan</p>
                        <p className="text-xl font-bold text-gray-900">3x <span className="text-sm font-normal">/hari</span></p>
                        <p className="text-xs text-gray-500 mt-1">Termasuk snack</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-500">Kepatuhan PMT</p>
                        <p className="text-xl font-bold text-gray-900">93%</p>
                        <p className="text-xs text-green-600 mt-1">14/15 hari lapor</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
                <Link
                    href={`/nakes/screening/${params.id}`}
                    className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                    <span className="material-symbols-outlined">assignment</span>
                    Skrining ASQ-3
                </Link>
                <Link
                    href={`/nakes/patients/${params.id}/history`}
                    className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                    <span className="material-symbols-outlined">history</span>
                    Riwayat Lengkap
                </Link>
                <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                    <span className="material-symbols-outlined">print</span>
                    Cetak Laporan
                </button>
            </div>
        </div>
    );
}
