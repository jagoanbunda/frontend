"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input } from "@/components/ui";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: Implement register logic
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="w-full max-w-[960px] mx-auto py-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                {/* Left Side: Heading & Info */}
                <div className="flex-1 flex flex-col gap-8 lg:sticky lg:top-32">
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 self-start">
                            <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">Pendaftaran Aman</span>
                        </div>
                        <h1 className="text-gray-900 text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight">
                            Mulai Perjalanan <span className="text-primary">Kesehatan</span> Keluarga Anda
                        </h1>
                        <p className="text-gray-600 text-lg font-normal leading-relaxed max-w-md">
                            Daftarkan diri Anda sekarang untuk akses layanan kesehatan terpadu, konsultasi dokter, dan pantauan medis real-time.
                        </p>
                    </div>
                    {/* Feature List */}
                    <div className="hidden lg:flex flex-col gap-6 mt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center size-12 rounded-full bg-green-50 border border-green-100 text-primary">
                                <span className="material-symbols-outlined">monitor_heart</span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Monitoring Real-time</p>
                                <p className="text-sm text-gray-500">Pantau vital kesehatan kapan saja</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center size-12 rounded-full bg-green-50 border border-green-100 text-primary">
                                <span className="material-symbols-outlined">medical_services</span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Layanan Terpadu</p>
                                <p className="text-sm text-gray-500">Terhubung dengan faskes terdekat</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Registration Form */}
                <div className="w-full lg:max-w-[400px] flex-shrink-0">
                    <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                        <h3 className="text-lg font-bold mb-4 text-gray-900">Lengkapi Data Diri</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            {/* Nama Lengkap */}
                            <Input
                                label="Nama Lengkap"
                                type="text"
                                placeholder="Masukkan nama lengkap Anda"
                                required
                                leftIcon={<span className="material-symbols-outlined text-lg">person</span>}
                            />

                            {/* Nomor HP */}
                            <Input
                                label="Nomor HP"
                                type="tel"
                                placeholder="Contoh: 08123456789"
                                required
                                leftIcon={<span className="material-symbols-outlined text-lg">smartphone</span>}
                            />

                            {/* Email */}
                            <Input
                                label="Email"
                                type="email"
                                placeholder="nama@email.com"
                                required
                                leftIcon={<span className="material-symbols-outlined text-lg">mail</span>}
                            />

                            {/* Password */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-semibold text-gray-700 ml-1">Password</label>
                                <div className="relative group">
                                    <span className="absolute left-3 inset-y-0 flex items-center text-gray-400 group-focus-within:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">lock</span>
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Minimal 8 karakter"
                                        required
                                        className="w-full h-10 bg-gray-50 border border-gray-200 rounded-full pl-10 pr-10 text-sm placeholder:text-xs placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-gray-400 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 inset-y-0 flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
                                    >
                                        <span className="material-symbols-outlined text-lg">
                                            {showPassword ? "visibility_off" : "visibility"}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Konfirmasi Password */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-semibold text-gray-700 ml-1">Konfirmasi Password</label>
                                <div className="relative group">
                                    <span className="absolute left-3 inset-y-0 flex items-center text-gray-400 group-focus-within:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">lock_reset</span>
                                    </span>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Ulangi password"
                                        required
                                        className="w-full h-10 bg-gray-50 border border-gray-200 rounded-full pl-10 pr-10 text-sm placeholder:text-xs placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-gray-400 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 inset-y-0 flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
                                    >
                                        <span className="material-symbols-outlined text-lg">
                                            {showConfirmPassword ? "visibility_off" : "visibility"}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <label className="flex items-start gap-3 mt-2 cursor-pointer group">
                                <div className="relative flex items-center mt-0.5">
                                    <input
                                        type="checkbox"
                                        checked={agreeTerms}
                                        onChange={(e) => setAgreeTerms(e.target.checked)}
                                        className="size-4 cursor-pointer appearance-none rounded-md border border-gray-300 bg-gray-50 checked:bg-primary checked:border-primary transition-all"
                                    />
                                    <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none transition-opacity ${agreeTerms ? 'opacity-100' : 'opacity-0'}`}>
                                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                                    </span>
                                </div>
                                <span className="text-xs text-gray-500 leading-tight">
                                    Saya menyetujui <a className="text-primary hover:underline font-medium" href="#">Syarat &amp; Ketentuan</a> serta <a className="text-primary hover:underline font-medium" href="#">Kebijakan Privasi</a> KREANOVA.
                                </span>
                            </label>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="md"
                                isLoading={isLoading}
                                disabled={!agreeTerms}
                                className="mt-2 w-full shadow-lg shadow-primary/25"
                            >
                                Daftar Sekarang
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600 text-sm">
                                Sudah punya akun?{" "}
                                <Link className="text-primary font-bold hover:underline ml-1" href="/login">
                                    Masuk disini
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
