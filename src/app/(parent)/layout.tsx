"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/dashboard", label: "Home", icon: "home" },
    { href: "/input-food", label: "Input", icon: "edit_note" },
    { href: "/child-profile", label: "Anak", icon: "child_care" },
];

export default function ParentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-[#f6f8f7] flex flex-col pb-20 md:pb-0">
            {/* Desktop Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-xl">spa</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-[#388E3C]">
                                KREANOVA
                            </h2>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1 bg-gray-50 px-2 py-1.5 rounded-full border border-gray-100">
                            {navItems.map((item) => {
                                const isActive = pathname?.startsWith(item.href);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive
                                            ? "bg-primary shadow-sm text-white"
                                            : "text-gray-600 hover:text-primary hover:bg-white"
                                            }`}
                                    >
                                        <span
                                            className={`material-symbols-outlined text-[20px] ${isActive ? "filled" : ""
                                                }`}
                                            style={
                                                isActive
                                                    ? { fontVariationSettings: "'FILL' 1" }
                                                    : undefined
                                            }
                                        >
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* User Actions */}
                        <div className="flex items-center gap-4">
                            <button className="size-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full ring-2 ring-white" />
                            </button>
                            <Link
                                href="/profile"
                                className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-white transition-all"
                            >
                                <span className="text-sm font-medium hidden sm:block">
                                    Bunda Sarah
                                </span>
                                <div className="bg-primary/20 rounded-full size-10 ring-2 ring-primary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">
                                        person
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 py-3 px-6 flex justify-between items-center z-50">
                {navItems.map((item) => {
                    const isActive = pathname?.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-gray-400"
                                }`}
                        >
                            <span
                                className={`material-symbols-outlined text-2xl ${isActive ? "filled" : ""
                                    }`}
                                style={
                                    isActive ? { fontVariationSettings: "'FILL' 1" } : undefined
                                }
                            >
                                {item.icon}
                            </span>
                            <span
                                className={`text-[10px] ${isActive ? "font-bold" : "font-medium"
                                    }`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
