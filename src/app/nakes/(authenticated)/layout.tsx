"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import Link from "next/link";

// Mock user data
const userData = {
    name: "dr. Sari Dewi",
    role: "Dokter Puskesmas",
    facility: "Puskesmas Sehat Sejahtera",
    facilityCode: "PKM-001",
};

export default function NakesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            {/* Sidebar */}
            <Sidebar
                isCollapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />

            {/* Main Content */}
            <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-64"}`}>
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full"></span>
                        </button>

                        {/* Profile */}
                        <Link href="/nakes/settings" className="flex items-center gap-3 hover:bg-gray-50 rounded-xl px-3 py-2 transition-colors">
                            <div className="size-9 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">person</span>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-gray-900">{userData.name}</p>
                                <p className="text-xs text-gray-500">{userData.role}</p>
                            </div>
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
