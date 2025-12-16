import Link from "next/link";
import { Badge, Button } from "@/components/ui";

// Mock screening results
const screeningResults = {
    childName: "Budi Santoso",
    childAge: "24 bulan",
    screeningDate: "16 Desember 2025",
    overallStatus: "normal", // normal, monitor, refer
    domains: [
        { id: "communication", name: "Komunikasi", score: 55, cutoff: 30, status: "normal" },
        { id: "gross_motor", name: "Motorik Kasar", score: 50, cutoff: 35, status: "normal" },
        { id: "fine_motor", name: "Motorik Halus", score: 35, cutoff: 40, status: "monitor" },
        { id: "problem_solving", name: "Pemecahan Masalah", score: 45, cutoff: 35, status: "normal" },
        { id: "personal_social", name: "Personal Sosial", score: 60, cutoff: 30, status: "normal" },
    ],
    recommendations: [
        "Latih motorik halus dengan kegiatan meronce manik-manik",
        "Ajak anak bermain puzzle sederhana",
        "Biarkan anak menggambar dan mewarnai secara mandiri",
    ],
};

function getStatusBadge(status: string) {
    switch (status) {
        case "normal":
            return <Badge variant="success">Normal</Badge>;
        case "monitor":
            return <Badge variant="warning">Pantau</Badge>;
        case "refer":
            return <Badge variant="danger">Rujuk</Badge>;
        default:
            return <Badge variant="neutral">{status}</Badge>;
    }
}

function getStatusColor(status: string) {
    switch (status) {
        case "normal":
            return "bg-green-500";
        case "monitor":
            return "bg-orange-500";
        case "refer":
            return "bg-red-500";
        default:
            return "bg-gray-500";
    }
}

export default function ScreeningReviewPage({ params }: { params: { id: string } }) {
    const overallNormal = screeningResults.domains.every((d) => d.status === "normal");
    const hasMonitor = screeningResults.domains.some((d) => d.status === "monitor");

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/nakes/patients" className="hover:text-primary">Data Anak</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <Link href={`/nakes/screening/${params.id}`} className="hover:text-primary">Skrining</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-gray-900 font-medium">Hasil</span>
            </div>

            {/* Overall Status Card */}
            <div className={`rounded-2xl p-6 ${overallNormal ? "bg-green-50 border border-green-200" : hasMonitor ? "bg-orange-50 border border-orange-200" : "bg-red-50 border border-red-200"}`}>
                <div className="flex items-center gap-4">
                    <div className={`size-16 rounded-2xl flex items-center justify-center ${overallNormal ? "bg-green-100" : hasMonitor ? "bg-orange-100" : "bg-red-100"}`}>
                        <span className={`material-symbols-outlined text-3xl ${overallNormal ? "text-green-600" : hasMonitor ? "text-orange-600" : "text-red-600"}`}>
                            {overallNormal ? "check_circle" : hasMonitor ? "warning" : "error"}
                        </span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            {overallNormal ? "Perkembangan Sesuai" : hasMonitor ? "Perlu Pemantauan" : "Perlu Rujukan"}
                        </h1>
                        <p className="text-gray-600">
                            {overallNormal
                                ? "Anak berkembang dengan baik sesuai usianya."
                                : hasMonitor
                                    ? "Beberapa aspek memerlukan stimulasi tambahan."
                                    : "Anak memerlukan evaluasi lebih lanjut oleh spesialis."}
                        </p>
                    </div>
                </div>
            </div>

            {/* Child Info */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">child_care</span>
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">{screeningResults.childName}</p>
                        <p className="text-sm text-gray-500">Usia {screeningResults.childAge}</p>
                    </div>
                </div>
                <p className="text-sm text-gray-500">Tanggal: {screeningResults.screeningDate}</p>
            </div>

            {/* Domain Results */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4">Hasil Per Domain</h2>
                <div className="space-y-4">
                    {screeningResults.domains.map((domain) => (
                        <div key={domain.id} className="p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-gray-900">{domain.name}</span>
                                {getStatusBadge(domain.status)}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${getStatusColor(domain.status)}`}
                                        style={{ width: `${(domain.score / 60) * 100}%` }}
                                    />
                                </div>
                                <span className="text-sm font-bold text-gray-700 w-16 text-right">
                                    {domain.score}/60
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                Batas: {domain.cutoff} (Skor di bawah batas = perlu perhatian)
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">lightbulb</span>
                    Rekomendasi Stimulasi
                </h2>
                <ul className="space-y-3">
                    {screeningResults.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                            <span className="material-symbols-outlined text-green-600 shrink-0">check_circle</span>
                            <span className="text-gray-700">{rec}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
                    <span className="material-symbols-outlined mr-2">download</span>
                    Unduh Laporan
                </Button>
                <Link
                    href={`/nakes/patients/${params.id}`}
                    className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                    <span className="material-symbols-outlined">person</span>
                    Kembali ke Profil Anak
                </Link>
            </div>
        </div>
    );
}
