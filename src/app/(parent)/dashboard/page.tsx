import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from "@/components/ui";

// Mock data for demonstration
const childData = {
    name: "Budi Santoso",
    gender: "Laki-laki",
    age: "2 Tahun 3 Bulan",
    status: "Gizi Baik",
    pmtRecipient: true,
    measurements: {
        weight: 12.5,
        height: 88,
        zScoreBBU: -0.5,
        zScoreTBU: -0.2,
        zScoreBBTB: -0.3,
    },
};

const dailyTasks = [
    { id: 1, title: "Sarapan Pagi (Budi)", time: "07:00 AM", detail: "Bubur Ayam + Telur", completed: true },
    { id: 2, title: "Makan Siang", time: "12:30 PM", detail: "Rekomendasi: Nasi + Ikan + Sayur Bayam", completed: false, important: true },
    { id: 3, title: "Pemberian Vitamin A", time: "", detail: "Cek jadwal posyandu terdekat", completed: false },
    { id: 4, title: "Input Berat Badan Mingguan", time: "", detail: "Target kenaikan: 200gr", completed: false },
];

const nutritionData = {
    protein: 80,
    carbohydrate: 65,
    fat: 40,
};

export default function ParentDashboardPage() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="space-y-10">
            {/* Greeting Section */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                        Selamat Pagi, Bunda!
                    </h1>
                    <p className="text-gray-500 mt-2 text-lg flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">
                            calendar_today
                        </span>
                        {formattedDate}
                    </p>
                </div>
            </section>

            {/* Child Status Section */}
            <section>
                <div className="flex items-center justify-between mb-4 px-1">
                    <h3 className="text-lg font-bold text-gray-900">Status Gizi Anak</h3>
                    <Link
                        href="/child-profile"
                        className="text-sm font-medium text-[#388E3C] hover:underline flex items-center gap-1"
                    >
                        Detail Lengkap
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>

                <Card padding="lg" className="hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                        {/* Child Avatar */}
                        <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
                            <div className="relative">
                                <div className="size-28 md:size-32 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-green-50 shadow-sm">
                                    <span className="material-symbols-outlined text-5xl text-primary">
                                        child_care
                                    </span>
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-sm border border-gray-100">
                                    <div className="bg-green-100 p-1.5 rounded-full">
                                        <span className="material-symbols-outlined text-green-600 text-lg">
                                            check_circle
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center gap-2 mb-1">
                                    <h2 className="text-2xl font-bold text-gray-900">{childData.name}</h2>
                                    {childData.pmtRecipient && (
                                        <Badge variant="warning" size="sm" className="rounded-full px-3">
                                            Penerima PMT
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-gray-500 font-medium mb-4">
                                    {childData.gender} • {childData.age}
                                </p>

                                {childData.pmtRecipient && (
                                    <Link href="/pmt">
                                        <Button
                                            size="sm"
                                            className="bg-orange-500 hover:bg-orange-600 text-white shadow-orange-100 shadow-lg border-none"
                                        >
                                            <span className="material-symbols-outlined text-lg mr-2">monitor_heart</span>
                                            Pantau PMT
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Measurements Grid */}
                        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Status Banner */}
                            <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-green-50 rounded-xl p-4 border border-green-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg text-[#388E3C]">
                                        <span className="material-symbols-outlined">health_and_safety</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-green-800 font-semibold uppercase tracking-wider">
                                            Status Gizi Anak
                                        </p>
                                        <p className="text-lg font-bold text-green-900">{childData.status}</p>
                                    </div>
                                </div>
                                <Badge variant="success">Normal</Badge>
                            </div>

                            {/* BB/U */}
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-gray-500 mb-1">
                                    <span className="material-symbols-outlined text-lg">monitor_weight</span>
                                    <span className="text-xs font-semibold uppercase">BB / U</span>
                                </div>
                                <p className="text-xl font-bold text-gray-900">{childData.measurements.weight} kg</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="inline-block size-2 rounded-full bg-green-500" />
                                    <span className="text-xs font-medium text-gray-600">
                                        Z-Score: <span className="text-gray-900 font-bold">{childData.measurements.zScoreBBU} SD</span>
                                    </span>
                                </div>
                            </div>

                            {/* TB/U */}
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-gray-500 mb-1">
                                    <span className="material-symbols-outlined text-lg">height</span>
                                    <span className="text-xs font-semibold uppercase">TB / U</span>
                                </div>
                                <p className="text-xl font-bold text-gray-900">{childData.measurements.height} cm</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="inline-block size-2 rounded-full bg-green-500" />
                                    <span className="text-xs font-medium text-gray-600">
                                        Z-Score: <span className="text-gray-900 font-bold">{childData.measurements.zScoreTBU} SD</span>
                                    </span>
                                </div>
                            </div>

                            {/* BB/TB */}
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-gray-500 mb-1">
                                    <span className="material-symbols-outlined text-lg">straighten</span>
                                    <span className="text-xs font-semibold uppercase">BB / TB</span>
                                </div>
                                <p className="text-xl font-bold text-gray-900">Ideal</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="inline-block size-2 rounded-full bg-green-500" />
                                    <span className="text-xs font-medium text-gray-600">
                                        Z-Score: <span className="text-gray-900 font-bold">{childData.measurements.zScoreBBTB} SD</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Quick Actions */}
            <section>
                <h3 className="text-lg font-bold mb-4 px-1 text-gray-900">Aksi Cepat</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Link href="/input-food">
                        <Card hover padding="md" className="h-full flex flex-col gap-3 group">
                            <div className="size-12 rounded-full bg-green-50 flex items-center justify-center text-[#388E3C] group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl">restaurant</span>
                            </div>
                            <div>
                                <span className="block font-bold text-gray-900 group-hover:text-[#388E3C]">
                                    Input Asupan
                                </span>
                                <span className="text-xs text-gray-500">Catat makan harian</span>
                            </div>
                        </Card>
                    </Link>

                    <Link href="/input-antropometri">
                        <Card hover padding="md" className="h-full flex flex-col gap-3 group">
                            <div className="size-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl">straighten</span>
                            </div>
                            <div>
                                <span className="block font-bold text-gray-900 group-hover:text-orange-600">
                                    Input BB/TB
                                </span>
                                <span className="text-xs text-gray-500">Update pertumbuhan</span>
                            </div>
                        </Card>
                    </Link>

                    <Link href="/asq3">
                        <Card hover padding="md" className="h-full flex flex-col gap-3 group">
                            <div className="size-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl">assignment_turned_in</span>
                            </div>
                            <div>
                                <span className="block font-bold text-gray-900 group-hover:text-pink-600">
                                    Skrining ASQ-3
                                </span>
                                <span className="text-xs text-gray-500">Cek perkembangan</span>
                            </div>
                        </Card>
                    </Link>
                </div>
            </section>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Daily Tasks */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-50 rounded-lg text-[#388E3C]">
                                    <span className="material-symbols-outlined">checklist</span>
                                </div>
                                <CardTitle>Tugas Harian</CardTitle>
                            </div>
                            <Badge variant="neutral">1/4 Selesai</Badge>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                            {dailyTasks.map((task) => (
                                <label
                                    key={task.id}
                                    className={`flex items-center p-3 rounded-lg border cursor-pointer gap-4 transition-all ${task.completed
                                        ? "border-gray-100 bg-gray-50"
                                        : "border-gray-100 bg-white hover:border-primary/50 hover:shadow-sm"
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        defaultChecked={task.completed}
                                        className="size-5 rounded border-gray-300 text-primary focus:ring-primary/50 cursor-pointer"
                                    />
                                    <div className="flex-1">
                                        <span
                                            className={`block text-sm font-medium ${task.completed
                                                ? "text-gray-500 line-through"
                                                : "font-bold text-gray-900"
                                                }`}
                                        >
                                            {task.title}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {task.time ? `${task.time} • ` : ""}
                                            {task.detail}
                                        </span>
                                    </div>
                                    {task.important && (
                                        <Badge variant="warning" size="sm">
                                            PENTING
                                        </Badge>
                                    )}
                                </label>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Nutrition Summary */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>Nutrisi Minggu Ini</CardTitle>
                        <button className="text-[#388E3C] hover:bg-green-50 p-1 rounded transition-colors">
                            <span className="material-symbols-outlined text-xl">more_horiz</span>
                        </button>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        {/* Protein */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="font-medium text-gray-600">Protein</span>
                                <span className="font-bold text-gray-900">{nutritionData.protein}%</span>
                            </div>
                            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: `${nutritionData.protein}%` }}
                                />
                            </div>
                        </div>

                        {/* Carbohydrate */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="font-medium text-gray-600">Karbohidrat</span>
                                <span className="font-bold text-gray-900">{nutritionData.carbohydrate}%</span>
                            </div>
                            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-400 rounded-full"
                                    style={{ width: `${nutritionData.carbohydrate}%` }}
                                />
                            </div>
                        </div>

                        {/* Fat */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="font-medium text-gray-600">Lemak</span>
                                <span className="font-bold text-gray-900">{nutritionData.fat}%</span>
                            </div>
                            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-orange-400 rounded-full"
                                    style={{ width: `${nutritionData.fat}%` }}
                                />
                            </div>
                        </div>

                        {/* Tip */}
                        <div className="mt-2 p-4 bg-green-50 rounded-xl border border-green-100 flex gap-3">
                            <span className="material-symbols-outlined text-[#388E3C]">tips_and_updates</span>
                            <p className="text-xs text-gray-700 leading-relaxed">
                                <span className="font-bold text-[#388E3C]">Tips:</span> Tambahkan porsi
                                lemak sehat seperti alpukat atau minyak kelapa untuk Budi minggu ini.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
