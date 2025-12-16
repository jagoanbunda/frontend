"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { icon: "dashboard", label: "Dashboard", href: "/nakes/dashboard" },
    { icon: "groups", label: "Data Anak", href: "/nakes/patients" },
    { icon: "restaurant", label: "Program PMT", href: "/nakes/pmt" },
    { icon: "assignment", label: "Skrining", href: "/nakes/screening" },
    { icon: "bar_chart", label: "Laporan", href: "/nakes/reports" },
    { icon: "settings", label: "Pengaturan", href: "/nakes/settings" },
];

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/nakes/dashboard") {
            return pathname === href || pathname === "/nakes";
        }
        return pathname.startsWith(href);
    };

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 flex flex-col z-40 transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
                }`}
        >
            {/* Logo & Toggle */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100">
                <Link href="/nakes/dashboard" className="flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-xl">local_hospital</span>
                    </div>
                    {!isCollapsed && (
                        <span className="font-bold text-lg text-gray-900 whitespace-nowrap">KREANOVA</span>
                    )}
                </Link>
                <button
                    onClick={onToggle}
                    className="size-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                    title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <span className="material-symbols-outlined text-xl">
                        {isCollapsed ? "chevron_right" : "chevron_left"}
                    </span>
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            title={isCollapsed ? item.label : undefined}
                            className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${active
                                    ? "bg-green-50 text-primary border-l-4 border-primary"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                } ${isCollapsed ? "justify-center" : ""}`}
                        >
                            <span className={`material-symbols-outlined text-xl ${active ? "text-primary" : "text-gray-400"}`}>
                                {item.icon}
                            </span>
                            {!isCollapsed && <span>{item.label}</span>}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            {!isCollapsed && (
                <div className="p-4 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                            <span className="material-symbols-outlined text-sm">calendar_today</span>
                            {new Date().toLocaleDateString("id-ID", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            <span id="sidebar-time">--:--</span> WIB
                        </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                        <span className="material-symbols-outlined text-sm text-green-500">sync</span>
                        Sync: baru saja
                    </div>
                </div>
            )}

            {/* Collapsed Footer */}
            {isCollapsed && (
                <div className="p-3 border-t border-gray-100 flex justify-center">
                    <span className="material-symbols-outlined text-sm text-green-500">sync</span>
                </div>
            )}
        </aside>
    );
}
