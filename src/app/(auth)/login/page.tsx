"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Input } from "@/components/ui";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock login - redirect to parent dashboard after short delay
        setTimeout(() => {
            router.push("/dashboard");
        }, 1000);
    };

    return (
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16">
            {/* Left Column: Marketing (Hidden on mobile) */}
            <div className="hidden lg:flex flex-1 flex-col justify-start max-w-sm">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-2xl">
                    {/* Network/Constellation Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a2f] via-[#0f2920] to-[#0a1f17]" />

                    {/* SVG Network Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Connecting lines */}
                        <line x1="50" y1="80" x2="150" y2="120" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.4" />
                        <line x1="150" y1="120" x2="280" y2="60" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.3" />
                        <line x1="280" y1="60" x2="350" y2="140" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.4" />
                        <line x1="150" y1="120" x2="200" y2="200" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.5" />
                        <line x1="200" y1="200" x2="100" y2="280" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.3" />
                        <line x1="200" y1="200" x2="320" y2="250" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.4" />
                        <line x1="320" y1="250" x2="380" y2="180" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.3" />
                        <line x1="100" y1="280" x2="180" y2="350" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.4" />
                        <line x1="180" y1="350" x2="300" y2="320" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.3" />
                        <line x1="300" y1="320" x2="350" y2="400" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.4" />
                        <line x1="50" y1="180" x2="100" y2="280" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.3" />
                        <line x1="30" y1="350" x2="100" y2="280" stroke="#2bee79" strokeWidth="0.5" strokeOpacity="0.4" />

                        {/* Glowing dots/nodes */}
                        <circle cx="50" cy="80" r="3" fill="#2bee79" fillOpacity="0.8" />
                        <circle cx="150" cy="120" r="4" fill="#2bee79" fillOpacity="0.9" />
                        <circle cx="280" cy="60" r="3" fill="#2bee79" fillOpacity="0.6" />
                        <circle cx="350" cy="140" r="2" fill="#2bee79" fillOpacity="0.7" />
                        <circle cx="200" cy="200" r="5" fill="#2bee79" fillOpacity="1" />
                        <circle cx="100" cy="280" r="4" fill="#2bee79" fillOpacity="0.8" />
                        <circle cx="320" cy="250" r="3" fill="#2bee79" fillOpacity="0.7" />
                        <circle cx="380" cy="180" r="2" fill="#2bee79" fillOpacity="0.5" />
                        <circle cx="180" cy="350" r="3" fill="#2bee79" fillOpacity="0.8" />
                        <circle cx="300" cy="320" r="4" fill="#2bee79" fillOpacity="0.6" />
                        <circle cx="350" cy="400" r="3" fill="#2bee79" fillOpacity="0.7" />
                        <circle cx="50" cy="180" r="2" fill="#2bee79" fillOpacity="0.5" />
                        <circle cx="30" cy="350" r="3" fill="#2bee79" fillOpacity="0.6" />

                        {/* Extra small ambient dots */}
                        <circle cx="80" cy="150" r="1.5" fill="#2bee79" fillOpacity="0.4" />
                        <circle cx="240" cy="140" r="1.5" fill="#2bee79" fillOpacity="0.3" />
                        <circle cx="160" cy="250" r="1.5" fill="#2bee79" fillOpacity="0.4" />
                        <circle cx="260" cy="380" r="1.5" fill="#2bee79" fillOpacity="0.3" />
                        <circle cx="70" cy="400" r="1.5" fill="#2bee79" fillOpacity="0.4" />
                        <circle cx="370" cy="300" r="1.5" fill="#2bee79" fillOpacity="0.3" />
                    </svg>

                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f17]/95 via-transparent to-transparent" />

                    {/* Testimonial Card */}
                    <div className="absolute bottom-5 left-5 right-5">
                        <div className="bg-primary/15 backdrop-blur-md p-4 rounded-xl border border-primary/25">
                            <p className="text-white/90 text-sm font-normal leading-relaxed">
                                &quot;KREANOVA membantu kami memantau kesehatan pasien dengan lebih efisien.&quot;
                            </p>
                            <p className="text-primary text-xs mt-2 font-semibold">
                                — Dr. Andi Susanto, Sp.PD
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold leading-tight mb-3 text-gray-900">
                    Solusi Kesehatan Terpadu untuk Keluarga Indonesia
                </h2>
                <p className="text-gray-500 text-base">
                    Akses rekam medis, jadwalkan konsultasi, dan pantau kesehatan Anda dalam satu dashboard yang aman.
                </p>
            </div>

            {/* Right Column: Login Form */}
            <div className="w-full max-w-[400px] flex-1">
                <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 relative overflow-hidden">
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 -mt-12 -mr-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col gap-4">
                        {/* Header */}
                        <div className="text-center sm:text-left">
                            <h2 className="text-2xl font-black tracking-tight text-gray-900 mb-1">
                                Selamat Datang
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Masuk untuk mengakses dashboard kesehatan anak Anda.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Email Input */}
                            <Input
                                label="Email atau Nomor Telepon"
                                type="text"
                                placeholder="nama@email.com"
                                leftIcon={
                                    <span className="material-symbols-outlined text-lg">mail</span>
                                }
                            />

                            {/* Password Input */}
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-center ml-1">
                                    <span className="text-xs font-semibold text-gray-700">
                                        Kata Sandi
                                    </span>
                                    <Link
                                        href="/forgot-password"
                                        className="text-xs font-medium text-primary hover:text-green-400 transition-colors"
                                    >
                                        Lupa Password?
                                    </Link>
                                </div>
                                <div className="relative group">
                                    <span className="absolute left-3 inset-y-0 flex items-center text-gray-400 group-focus-within:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">lock</span>
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
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

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="md"
                                isLoading={isLoading}
                                className="mt-2 w-full shadow-lg shadow-primary/25"
                                rightIcon={
                                    !isLoading && (
                                        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    )
                                }
                            >
                                Masuk
                            </Button>
                        </form>

                        {/* Divider */}
                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-gray-200" />
                            <span className="flex-shrink-0 mx-4 text-xs font-medium text-gray-400">
                                ATAU
                            </span>
                            <div className="flex-grow border-t border-gray-200" />
                        </div>

                        {/* Social Login & Register */}
                        <div className="flex flex-col gap-4 text-center">
                            <Button variant="secondary" size="md" className="w-full gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Masuk dengan Google
                            </Button>

                            <p className="text-sm text-gray-500 mt-2">
                                Belum punya akun?{" "}
                                <Link
                                    href="/register"
                                    className="text-primary font-bold hover:underline decoration-2 underline-offset-4"
                                >
                                    Daftar Sekarang
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Footer Links */}
                <div className="mt-8 flex justify-center gap-6 text-xs text-gray-400 lg:hidden">
                    <a href="#" className="hover:text-primary">
                        Privasi
                    </a>
                    <a href="#" className="hover:text-primary">
                        Syarat & Ketentuan
                    </a>
                    <a href="#" className="hover:text-primary">
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </div>
    );
}
