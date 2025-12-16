import { ReactNode } from "react";

interface StatCardProps {
    icon: string;
    iconBgColor: string;
    iconColor: string;
    value: string | number;
    label: string;
    trend?: {
        value: string;
        isPositive: boolean;
    };
    children?: ReactNode;
}

export function StatCard({ icon, iconBgColor, iconColor, value, label, trend }: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
                <div className={`size-12 rounded-xl ${iconBgColor} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-2xl ${iconColor}`}>{icon}</span>
                </div>
                {trend && (
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${trend.isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}>
                        {trend.isPositive ? "↑" : "↓"} {trend.value}
                    </span>
                )}
            </div>
            <div className="mt-4">
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
        </div>
    );
}
