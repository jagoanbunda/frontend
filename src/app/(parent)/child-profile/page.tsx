"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Card } from "@/components/ui";

// Mock child data
const childData = {
    id: "1",
    name: "Budi Santoso",
    birthDate: "2021-08-14",
    gender: "male" as const,
    photoUrl: null,
};

export default function ChildProfilePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<{
        name: string;
        birthDate: string;
        gender: "male" | "female";
    }>({
        name: childData.name,
        birthDate: childData.birthDate,
        gender: childData.gender,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: Implement save logic
        await new Promise((r) => setTimeout(r, 1500));
        setIsLoading(false);
    };

    return (
        <div className="max-w-[800px] mx-auto space-y-6">
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
                            Pengaturan Profil Anak
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">
                            Perbarui informasi data diri anak anda
                        </p>
                    </div>
                </div>
            </div>

            {/* Profile Card */}
            <Card padding="none" className="overflow-hidden">
                {/* Photo Section */}
                <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col items-center sm:flex-row gap-6 md:gap-8">
                    <div className="relative group">
                        <div className="size-28 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-green-50 shadow-sm">
                            <span className="material-symbols-outlined text-5xl text-primary">
                                child_care
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
                <form onSubmit={handleSubmit}>
                    <div className="p-6 md:p-8 space-y-6">
                        {/* Nama Lengkap */}
                        <div>
                            <label
                                className="block text-sm font-semibold text-gray-900 mb-2"
                                htmlFor="childName"
                            >
                                Nama Lengkap Anak
                            </label>
                            <div className="relative">
                                <input
                                    id="childName"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    placeholder="Masukkan nama lengkap anak"
                                    className="w-full rounded-xl border-gray-200 bg-gray-50/50 p-3 text-sm focus:border-primary focus:ring-primary shadow-sm transition-all"
                                />
                                <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400">
                                    badge
                                </span>
                            </div>
                        </div>

                        {/* Grid: Birth Date & Gender */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Tanggal Lahir */}
                            <div>
                                <label
                                    className="block text-sm font-semibold text-gray-900 mb-2"
                                    htmlFor="birthDate"
                                >
                                    Tanggal Lahir
                                </label>
                                <input
                                    id="birthDate"
                                    type="date"
                                    value={formData.birthDate}
                                    onChange={(e) =>
                                        setFormData({ ...formData, birthDate: e.target.value })
                                    }
                                    className="w-full rounded-xl border-gray-200 bg-gray-50/50 p-3 text-sm focus:border-primary focus:ring-primary shadow-sm text-gray-600"
                                />
                            </div>

                            {/* Jenis Kelamin */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Jenis Kelamin
                                </label>
                                <div className="flex gap-4 h-[46px] items-center">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={formData.gender === "male"}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    gender: e.target.value as "male" | "female",
                                                })
                                            }
                                            className="size-4 text-primary focus:ring-primary border-gray-300"
                                        />
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                                            Laki-laki
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={formData.gender === "female"}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    gender: e.target.value as "male" | "female",
                                                })
                                            }
                                            className="size-4 text-primary focus:ring-primary border-gray-300"
                                        />
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                                            Perempuan
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                        <button
                            type="button"
                            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-red-200 bg-white text-red-600 text-sm font-semibold hover:bg-red-50 hover:border-red-300 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
                                delete
                            </span>
                            Hapus Profil Anak
                        </button>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Link
                                href="/dashboard"
                                className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm font-semibold hover:bg-gray-100 hover:text-gray-900 transition-all text-center"
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
                    </div>
                </form>
            </Card>
        </div>
    );
}
