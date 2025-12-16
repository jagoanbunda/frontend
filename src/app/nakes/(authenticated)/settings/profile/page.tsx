"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

// Mock user profile data
const initialProfile = {
    name: "dr. Sari Dewi",
    nip: "198505152010012001",
    email: "sari.dewi@puskesmas.go.id",
    phone: "0812-3456-7890",
    role: "Dokter Umum",
    specialization: "Gizi Anak",
    facility: "Puskesmas Sehat Sejahtera",
    facilityCode: "PKM-001",
    address: "Jl. Kesehatan No. 1, Kel. Sukamaju",
    joinDate: "1 Januari 2020",
};

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState(initialProfile);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        setIsSaving(true);
        await new Promise((r) => setTimeout(r, 1500));
        setIsSaving(false);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setProfile(initialProfile);
        setIsEditing(false);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/nakes/settings" className="hover:text-primary">Pengaturan</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-gray-900 font-medium">Profil Saya</span>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Profil Saya</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola informasi akun dan data pribadi</p>
                </div>
                {!isEditing && (
                    <Button
                        onClick={() => setIsEditing(true)}
                        className="bg-primary hover:bg-primary/90 text-white font-bold"
                    >
                        <span className="material-symbols-outlined mr-2">edit</span>
                        Edit Profil
                    </Button>
                )}
            </div>

            {/* Profile Photo Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <div className="size-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-5xl">person</span>
                        </div>
                        {isEditing && (
                            <button className="absolute -bottom-2 -right-2 size-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90">
                                <span className="material-symbols-outlined text-sm">photo_camera</span>
                            </button>
                        )}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                        <p className="text-gray-500">{profile.role}</p>
                        <p className="text-sm text-gray-400 mt-1">Bergabung sejak {profile.joinDate}</p>
                    </div>
                </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">badge</span>
                    Informasi Pribadi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Nama Lengkap</label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={profile.name}
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            />
                        ) : (
                            <p className="text-gray-900 font-medium py-2.5">{profile.name}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">NIP</label>
                        <p className="text-gray-900 font-medium py-2.5">{profile.nip}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Jabatan</label>
                        {isEditing ? (
                            <select
                                value={profile.role}
                                onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                <option>Dokter Umum</option>
                                <option>Bidan</option>
                                <option>Perawat</option>
                                <option>Ahli Gizi</option>
                            </select>
                        ) : (
                            <p className="text-gray-900 font-medium py-2.5">{profile.role}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Spesialisasi</label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={profile.specialization}
                                onChange={(e) => setProfile({ ...profile, specialization: e.target.value })}
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            />
                        ) : (
                            <p className="text-gray-900 font-medium py-2.5">{profile.specialization}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">contact_mail</span>
                    Informasi Kontak
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                        {isEditing ? (
                            <input
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            />
                        ) : (
                            <p className="text-gray-900 font-medium py-2.5">{profile.email}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">No. Telepon</label>
                        {isEditing ? (
                            <input
                                type="tel"
                                value={profile.phone}
                                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            />
                        ) : (
                            <p className="text-gray-900 font-medium py-2.5">{profile.phone}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Facility Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">local_hospital</span>
                    Informasi Fasilitas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Nama Fasilitas</label>
                        <p className="text-gray-900 font-medium py-2.5">{profile.facility}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Kode Fasilitas</label>
                        <p className="text-gray-900 font-medium py-2.5">{profile.facilityCode}</p>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-500 mb-1">Alamat</label>
                        <p className="text-gray-900 font-medium py-2.5">{profile.address}</p>
                    </div>
                </div>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">lock</span>
                    Keamanan Akun
                </h3>
                <Link
                    href="/nakes/settings/change-password"
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                    <div>
                        <p className="font-medium text-gray-900">Ubah Kata Sandi</p>
                        <p className="text-sm text-gray-500">Perbarui kata sandi akun Anda</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </Link>
            </div>

            {/* Action Buttons */}
            {isEditing && (
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button
                        onClick={handleCancel}
                        className="text-gray-600 font-medium hover:text-gray-900"
                    >
                        Batal
                    </button>
                    <Button
                        onClick={handleSave}
                        isLoading={isSaving}
                        className="bg-primary hover:bg-primary/90 text-white font-bold px-8"
                    >
                        <span className="material-symbols-outlined mr-2">save</span>
                        Simpan Perubahan
                    </Button>
                </div>
            )}
        </div>
    );
}
