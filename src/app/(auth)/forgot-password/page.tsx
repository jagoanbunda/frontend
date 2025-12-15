"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: Implement forgot password logic
        await new Promise((r) => setTimeout(r, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            {/* Main Card Container */}
            <div className="w-full max-w-[440px] bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border border-gray-100">
                {/* Header Image Section */}
                <div className="relative h-48 w-full">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-green-100 to-green-50" />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#102217]/20 to-white" />
                    {/* Branding */}
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-[#102217]">
                            <span className="material-symbols-outlined text-[24px]">medical_services</span>
                        </div>
                        <span className="text-gray-900 font-bold text-xl tracking-wide">KREANOVA</span>
                    </div>
                    {/* Decorative Icon */}
                    <div className="absolute bottom-6 right-6">
                        <span className="material-symbols-outlined text-6xl text-primary/30">lock_reset</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-8 pb-10 pt-2 flex flex-col relative z-10">
                    {!isSubmitted ? (
                        <>
                            {/* Headlines */}
                            <div className="text-center mb-8">
                                <h1 className="text-gray-900 text-3xl font-bold leading-tight mb-3 tracking-tight">
                                    Lupa Kata Sandi?
                                </h1>
                                <p className="text-gray-500 text-sm font-normal leading-relaxed max-w-[90%] mx-auto">
                                    Masukkan email atau nomor HP yang terdaftar untuk menerima instruksi reset kata sandi.
                                </p>
                            </div>

                            {/* Input Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email/Phone Input */}
                                <div className="space-y-2">
                                    <label className="block text-gray-900 text-sm font-semibold pl-4">
                                        Email / Nomor HP
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">
                                                mail
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="contoh@email.com"
                                            required
                                            className="block w-full rounded-full border border-gray-200 bg-gray-50 text-gray-900 h-14 pl-12 pr-6 placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-base"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    size="lg"
                                    isLoading={isLoading}
                                    className="w-full shadow-lg shadow-primary/25"
                                    rightIcon={
                                        !isLoading && (
                                            <span className="material-symbols-outlined text-xl">send</span>
                                        )
                                    }
                                >
                                    Kirim Link Reset
                                </Button>
                            </form>
                        </>
                    ) : (
                        /* Success State */
                        <div className="text-center py-6">
                            <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-3xl text-primary">mark_email_read</span>
                            </div>
                            <h2 className="text-gray-900 text-2xl font-bold mb-2">Email Terkirim!</h2>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto mb-6">
                                Kami telah mengirim instruksi reset kata sandi ke <strong className="text-gray-900">{email}</strong>. Silakan cek inbox atau folder spam Anda.
                            </p>
                            <Button
                                variant="secondary"
                                onClick={() => setIsSubmitted(false)}
                                className="mx-auto"
                            >
                                Kirim Ulang
                            </Button>
                        </div>
                    )}

                    {/* Footer / Back Link */}
                    <div className="mt-8 text-center">
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors py-2 px-4 rounded-full hover:bg-gray-50"
                        >
                            <span className="material-symbols-outlined text-lg">arrow_back</span>
                            <span>Kembali ke Masuk</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Elements (Background Blobs) */}
            <div className="fixed top-[-10%] right-[-5%] w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-[-1]" />
            <div className="fixed bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />
        </div>
    );
}
