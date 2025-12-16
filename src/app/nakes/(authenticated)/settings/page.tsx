"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

// Mock facility data
const facilityData = {
    name: "Puskesmas Sehat Sejahtera",
    code: "PKM-001",
    address: "Jl. Kesehatan No. 1, Kel. Sukamaju, Kec. Bogor Utara",
    phone: "(0251) 123-4567",
    email: "puskesmas.sehatsejahtera@dinkes.go.id",
};

export default function SettingsPage() {
    const [notifications, setNotifications] = useState({
        criticalAlerts: true,
        pmtReminders: true,
        weeklyReport: false,
        newRegistration: true,
    });

    return (
        <div className="max-w-3xl space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Pengaturan</h1>
                <p className="text-sm text-gray-500 mt-1">Kelola informasi fasilitas dan preferensi notifikasi</p>
            </div>

            {/* Facility Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">local_hospital</span>
                    Informasi Fasilitas
                </h3>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Nama Fasilitas</label>
                            <p className="text-gray-900 font-semibold">{facilityData.name}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Kode Fasilitas</label>
                            <p className="text-gray-900 font-semibold">{facilityData.code}</p>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Alamat</label>
                        <p className="text-gray-900">{facilityData.address}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Telepon</label>
                            <p className="text-gray-900">{facilityData.phone}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                            <p className="text-gray-900">{facilityData.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">notifications</span>
                    Preferensi Notifikasi
                </h3>
                <div className="space-y-4">
                    {[
                        { key: "criticalAlerts", label: "Peringatan Kasus Kritis", desc: "Notifikasi saat ada anak dengan status gizi buruk" },
                        { key: "pmtReminders", label: "Pengingat PMT", desc: "Notifikasi harian untuk monitoring PMT" },
                        { key: "weeklyReport", label: "Laporan Mingguan", desc: "Ringkasan data setiap akhir pekan" },
                        { key: "newRegistration", label: "Pendaftaran Baru", desc: "Notifikasi saat ada anak baru terdaftar" },
                    ].map((item) => (
                        <label key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                            <div>
                                <p className="font-semibold text-gray-900">{item.label}</p>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notifications[item.key as keyof typeof notifications]}
                                onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                                className="size-5 rounded border-gray-300 text-primary focus:ring-primary/50"
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Account */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">person</span>
                    Akun
                </h3>
                <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-gray-500">lock</span>
                            <span className="font-medium text-gray-900">Ubah Kata Sandi</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-left">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-red-500">logout</span>
                            <span className="font-medium text-red-600">Keluar</span>
                        </div>
                        <span className="material-symbols-outlined text-red-400">chevron_right</span>
                    </button>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                    <span className="material-symbols-outlined mr-2">save</span>
                    Simpan Pengaturan
                </Button>
            </div>
        </div>
    );
}
