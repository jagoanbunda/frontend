"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Card, Input } from "@/components/ui";

// Mock user data
const userData = {
    name: "Sarah Wijaya",
    email: "sarah.wijaya@gmail.com",
    phone: "081234567890",
    address: "Jl. Mawar No. 15, Jakarta Selatan",
    photoUrl: null,
};

export default function ProfilePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<"profile" | "security" | "notifications">("profile");
    const [formData, setFormData] = useState({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
    });
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [notifications, setNotifications] = useState({
        dailyReminder: true,
        weeklyReport: true,
        monthlyScreening: true,
        pmtReminder: false,
        emailNotif: true,
        pushNotif: true,
    });

    const handleProfileSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setIsLoading(false);
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setIsLoading(false);
        setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    };

    const handleNotificationSubmit = async () => {
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 1000));
        setIsLoading(false);
    };

    const tabs = [
        { id: "profile", label: "Profil Saya", icon: "person" },
        { id: "security", label: "Keamanan", icon: "lock" },
        { id: "notifications", label: "Notifikasi", icon: "notifications" },
    ];

    return (
        <div className="max-w-[900px] mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Link
                        href="/dashboard"
                        className="p-2 -ml-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                            Pengaturan Akun
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">
                            Kelola informasi akun dan preferensi Anda
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as typeof activeTab)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id
                            ? "bg-primary text-white shadow-md"
                            : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        <span
                            className={`material-symbols-outlined text-lg ${activeTab === tab.id ? "" : ""
                                }`}
                            style={
                                activeTab === tab.id
                                    ? { fontVariationSettings: "'FILL' 1" }
                                    : undefined
                            }
                        >
                            {tab.icon}
                        </span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Profile Tab */}
            {activeTab === "profile" && (
                <Card padding="none" className="overflow-hidden">
                    {/* Photo Section */}
                    <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col items-center sm:flex-row gap-6 md:gap-8">
                        <div className="relative group">
                            <div className="size-28 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-green-50 shadow-sm">
                                <span className="material-symbols-outlined text-5xl text-primary">
                                    person
                                </span>
                            </div>
                            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-gray-100 text-gray-600 hover:text-primary transition-colors group-hover:scale-110">
                                <span className="material-symbols-outlined text-xl">photo_camera</span>
                            </button>
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Foto Profil</h3>
                            <p className="text-sm text-gray-500 mb-4 max-w-xs">
                                Gunakan foto wajah yang jelas. Format JPG atau PNG, maksimal 2MB.
                            </p>
                            <div className="flex gap-3 justify-center sm:justify-start">
                                <button className="px-4 py-2 text-sm font-medium text-primary border border-green-100 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    Upload Foto Baru
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-gray-500 border border-transparent rounded-lg hover:bg-gray-50 hover:text-red-500 transition-colors">
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <form onSubmit={handleProfileSubmit}>
                        <div className="p-6 md:p-8 space-y-6">
                            {/* Nama Lengkap */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Nama Lengkap
                                </label>
                                <Input
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Masukkan nama lengkap"
                                    leftIcon={<span className="material-symbols-outlined text-xl">badge</span>}
                                />
                            </div>

                            {/* Grid: Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="email@example.com"
                                        leftIcon={<span className="material-symbols-outlined text-xl">mail</span>}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Nomor Telepon
                                    </label>
                                    <Input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="08xxxxxxxxxx"
                                        leftIcon={<span className="material-symbols-outlined text-xl">phone</span>}
                                    />
                                </div>
                            </div>

                            {/* Alamat */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Alamat
                                </label>
                                <textarea
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    placeholder="Masukkan alamat lengkap"
                                    rows={3}
                                    className="w-full rounded-xl border-gray-200 bg-gray-50/50 p-3 text-sm text-gray-900 focus:border-primary focus:ring-primary shadow-sm resize-none"
                                />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100 flex flex-col-reverse sm:flex-row items-center justify-end gap-4">
                            <Link
                                href="/dashboard"
                                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm font-semibold hover:bg-gray-100 transition-all text-center"
                            >
                                Batal
                            </Link>
                            <Button
                                type="submit"
                                isLoading={isLoading}
                                className="w-full sm:w-auto px-6"
                                leftIcon={<span className="material-symbols-outlined text-lg">save</span>}
                            >
                                Simpan Perubahan
                            </Button>
                        </div>
                    </form>
                </Card>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
                <div className="space-y-6">
                    {/* Change Password */}
                    <Card padding="none" className="overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-blue-600">key</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Ubah Password</h3>
                                    <p className="text-sm text-gray-500">Pastikan password baru Anda kuat dan unik</p>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handlePasswordSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Password Saat Ini
                                </label>
                                <Input
                                    type="password"
                                    value={passwordData.currentPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                    placeholder="Masukkan password saat ini"
                                    leftIcon={<span className="material-symbols-outlined text-xl">lock</span>}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Password Baru
                                    </label>
                                    <Input
                                        type="password"
                                        value={passwordData.newPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                        placeholder="Minimal 8 karakter"
                                        leftIcon={<span className="material-symbols-outlined text-xl">lock</span>}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Konfirmasi Password Baru
                                    </label>
                                    <Input
                                        type="password"
                                        value={passwordData.confirmPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                        placeholder="Ulangi password baru"
                                        leftIcon={<span className="material-symbols-outlined text-xl">lock</span>}
                                    />
                                </div>
                            </div>
                            <div className="pt-4">
                                <Button type="submit" isLoading={isLoading}>
                                    <span className="material-symbols-outlined text-lg">key</span>
                                    Ubah Password
                                </Button>
                            </div>
                        </form>
                    </Card>

                    {/* Logout */}
                    <Card padding="md">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-red-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-red-600">logout</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Keluar dari Akun</h3>
                                    <p className="text-sm text-gray-500">Anda akan keluar dari semua perangkat</p>
                                </div>
                            </div>
                            <button className="px-4 py-2.5 rounded-xl border border-red-200 bg-white text-red-600 text-sm font-semibold hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-lg">logout</span>
                                Keluar
                            </button>
                        </div>
                    </Card>
                </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
                <div className="space-y-6">
                    <Card padding="none" className="overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="font-bold text-gray-900">Pengingat Aplikasi</h3>
                            <p className="text-sm text-gray-500">Atur notifikasi yang ingin Anda terima</p>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { key: "dailyReminder", label: "Pengingat Harian", desc: "Ingatkan untuk mencatat asupan makan anak" },
                                { key: "weeklyReport", label: "Laporan Mingguan", desc: "Ringkasan perkembangan anak setiap minggu" },
                                { key: "monthlyScreening", label: "Jadwal Skrining", desc: "Ingatkan jadwal skrining ASQ-3 bulanan" },
                                { key: "pmtReminder", label: "Pengingat PMT", desc: "Ingatkan konsumsi PMT jika anak terdaftar" },
                            ].map((item) => (
                                <div key={item.key} className="p-4 sm:p-6 flex items-center justify-between gap-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{item.label}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={notifications[item.key as keyof typeof notifications]}
                                            onChange={(e) =>
                                                setNotifications({ ...notifications, [item.key]: e.target.checked })
                                            }
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card padding="none" className="overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="font-bold text-gray-900">Kanal Notifikasi</h3>
                            <p className="text-sm text-gray-500">Pilih cara Anda menerima notifikasi</p>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { key: "emailNotif", label: "Email", desc: "Terima notifikasi via email", icon: "mail" },
                                { key: "pushNotif", label: "Push Notification", desc: "Terima notifikasi di browser/app", icon: "notifications" },
                            ].map((item) => (
                                <div key={item.key} className="p-4 sm:p-6 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-gray-600">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{item.label}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={notifications[item.key as keyof typeof notifications]}
                                            onChange={(e) =>
                                                setNotifications({ ...notifications, [item.key]: e.target.checked })
                                            }
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 p-6 border-t border-gray-100">
                            <Button onClick={handleNotificationSubmit} isLoading={isLoading}>
                                <span className="material-symbols-outlined text-lg">save</span>
                                Simpan Pengaturan
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
}
