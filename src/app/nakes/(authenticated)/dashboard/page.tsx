import { StatCard } from "@/components/cards/StatCard";
import { AlertCard } from "@/components/cards/AlertCard";
import { DonutChart } from "@/components/charts/DonutChart";
import { TrendChart } from "@/components/charts/TrendChart";
import Link from "next/link";

// Mock data
const facilityData = {
    name: "Puskesmas Sehat Sejahtera",
    code: "PKM-001",
};

const stats = {
    totalChildren: 125,
    criticalCases: 8,
    activePmt: 15,
};

const urgentAlerts = [
    { id: "1", childName: "Budi Santoso", age: "3 tahun 2 bulan", indicator: "BB/U", value: -3.2, status: "buruk" as const },
    { id: "2", childName: "Citra Dewi", age: "1 tahun 5 bulan", indicator: "BB/TB", value: -2.5, status: "kurang" as const },
    { id: "3", childName: "Andi Pratama", age: "2 tahun 8 bulan", indicator: "TB/U", value: -2.8, status: "kurang" as const },
];

const nutritionDistribution = [
    { name: "Normal", value: 106, color: "#4CAF50" },
    { name: "Kurang", value: 12, color: "#FF9800" },
    { name: "Buruk", value: 7, color: "#F44336" },
];

const monthlyTrend = [
    { month: "Jul", normal: 95, kurang: 18, buruk: 12 },
    { month: "Agu", normal: 98, kurang: 16, buruk: 11 },
    { month: "Sep", normal: 100, kurang: 15, buruk: 10 },
    { month: "Okt", normal: 102, kurang: 14, buruk: 9 },
    { month: "Nov", normal: 104, kurang: 13, buruk: 8 },
    { month: "Des", normal: 106, kurang: 12, buruk: 7 },
];

const recentActivities = [
    { id: "1", action: "Antropometri diperbarui", child: "Budi Santoso", time: "2 jam yang lalu", icon: "straighten" },
    { id: "2", action: "PMT dimulai", child: "Citra Dewi", time: "Kemarin", icon: "restaurant" },
    { id: "3", action: "Skrining ASQ-3 selesai", child: "Andi Pratama", time: "2 hari lalu", icon: "assignment_turned_in" },
    { id: "4", action: "Data anak ditambahkan", child: "Siti Aminah", time: "3 hari lalu", icon: "person_add" },
];

export default function NakesDashboardPage() {
    return (
        <div className="space-y-6">
            {/* Facility Info */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">local_hospital</span>
                </div>
                <div>
                    <h2 className="font-bold text-gray-900">{facilityData.name}</h2>
                    <p className="text-sm text-gray-500">Kode: {facilityData.code}</p>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    icon="groups"
                    iconBgColor="bg-blue-50"
                    iconColor="text-blue-600"
                    value={stats.totalChildren}
                    label="Total Anak Terdaftar"
                    trend={{ value: "+5 bulan ini", isPositive: true }}
                />
                <StatCard
                    icon="warning"
                    iconBgColor="bg-red-50"
                    iconColor="text-red-600"
                    value={stats.criticalCases}
                    label="Kasus Kritis (Perlu Review)"
                    trend={{ value: "-2 dari bulan lalu", isPositive: true }}
                />
                <StatCard
                    icon="restaurant"
                    iconBgColor="bg-orange-50"
                    iconColor="text-orange-600"
                    value={stats.activePmt}
                    label="Program PMT Aktif"
                />
            </div>

            {/* Urgent Alerts */}
            <AlertCard
                title="Perlu Tindakan Segera"
                count={urgentAlerts.length}
                items={urgentAlerts}
                viewAllHref="/nakes/patients?status=critical"
            />

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DonutChart
                    title="Distribusi Status Gizi"
                    data={nutritionDistribution}
                />
                <TrendChart
                    title="Trend Bulanan (6 Bulan Terakhir)"
                    data={monthlyTrend}
                />
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">history</span>
                        Aktivitas Terbaru
                    </h3>
                    <Link href="/nakes/activities" className="text-sm font-medium text-primary hover:underline">
                        Lihat Semua
                    </Link>
                </div>
                <div className="space-y-3">
                    {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="size-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-500">{activity.icon}</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">
                                    <span className="font-semibold">{activity.child}</span>
                                    {" - "}
                                    {activity.action}
                                </p>
                                <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
