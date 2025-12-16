"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

// Mock child data
const childData = {
    id: "1",
    name: "Budi Santoso",
    age: "3 tahun 2 bulan",
    status: "buruk",
    bbu: -3.2,
    tbu: -2.1,
    bbtb: -2.5,
};

export default function InterventionPage({ params }: { params: { id: string } }) {
    const [decision, setDecision] = useState<"pmt" | "monitor" | "rujuk" | "">("");
    const [notes, setNotes] = useState("");
    const [pmtDuration, setPmtDuration] = useState("90");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1500));
        setIsSubmitting(false);
        // Would redirect or show success
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/nakes/patients" className="hover:text-primary">Data Anak</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <Link href={`/nakes/patients/${params.id}`} className="hover:text-primary">{childData.name}</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-gray-900 font-medium">Intervensi</span>
            </div>

            {/* Header */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Keputusan Intervensi</h1>
                <p className="text-gray-600">Tentukan tindakan untuk anak berdasarkan hasil pemantauan.</p>

                {/* Child Summary */}
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center gap-4">
                        <div className="size-12 bg-red-100 rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-red-600">child_care</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-gray-900">{childData.name}</p>
                            <p className="text-sm text-gray-600">{childData.age} • Status: <span className="text-red-600 font-semibold">Gizi Buruk</span></p>
                        </div>
                        <div className="text-right">
                            <div className="flex gap-4 text-sm">
                                <span className="text-red-600 font-bold">BB/U: {childData.bbu}</span>
                                <span className="text-orange-600 font-bold">TB/U: {childData.tbu}</span>
                                <span className="text-orange-600 font-bold">BB/TB: {childData.bbtb}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decision Form */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
                <div>
                    <h3 className="font-bold text-gray-900 mb-4">Pilih Tindakan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* PMT Option */}
                        <button
                            type="button"
                            onClick={() => setDecision("pmt")}
                            className={`p-5 rounded-xl border-2 text-left transition-all ${decision === "pmt"
                                    ? "border-orange-500 bg-orange-50"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <span className={`material-symbols-outlined text-3xl mb-3 ${decision === "pmt" ? "text-orange-500" : "text-gray-400"}`}>
                                restaurant
                            </span>
                            <p className={`font-bold ${decision === "pmt" ? "text-orange-700" : "text-gray-900"}`}>
                                Berikan PMT
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Daftarkan ke program Pemberian Makanan Tambahan
                            </p>
                        </button>

                        {/* Monitor Option */}
                        <button
                            type="button"
                            onClick={() => setDecision("monitor")}
                            className={`p-5 rounded-xl border-2 text-left transition-all ${decision === "monitor"
                                    ? "border-blue-500 bg-blue-50"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <span className={`material-symbols-outlined text-3xl mb-3 ${decision === "monitor" ? "text-blue-500" : "text-gray-400"}`}>
                                visibility
                            </span>
                            <p className={`font-bold ${decision === "monitor" ? "text-blue-700" : "text-gray-900"}`}>
                                Pantau Berkala
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Lanjutkan pemantauan tanpa intervensi khusus
                            </p>
                        </button>

                        {/* Rujuk Option */}
                        <button
                            type="button"
                            onClick={() => setDecision("rujuk")}
                            className={`p-5 rounded-xl border-2 text-left transition-all ${decision === "rujuk"
                                    ? "border-red-500 bg-red-50"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <span className={`material-symbols-outlined text-3xl mb-3 ${decision === "rujuk" ? "text-red-500" : "text-gray-400"}`}>
                                local_hospital
                            </span>
                            <p className={`font-bold ${decision === "rujuk" ? "text-red-700" : "text-gray-900"}`}>
                                Rujuk ke RS
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Kondisi memerlukan penanganan medis lanjutan
                            </p>
                        </button>
                    </div>
                </div>

                {/* PMT Duration (conditional) */}
                {decision === "pmt" && (
                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                        <label className="block font-semibold text-gray-900 mb-3">Durasi Program PMT</label>
                        <div className="flex gap-4">
                            {["30", "60", "90"].map((days) => (
                                <button
                                    key={days}
                                    type="button"
                                    onClick={() => setPmtDuration(days)}
                                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${pmtDuration === days
                                            ? "bg-orange-500 text-white"
                                            : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
                                        }`}
                                >
                                    {days} Hari
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Notes */}
                <div>
                    <label className="block font-semibold text-gray-900 mb-3">Catatan Tambahan</label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tuliskan catatan atau observasi tambahan..."
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                    />
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link
                        href={`/nakes/patients/${params.id}`}
                        className="text-gray-600 font-medium hover:text-gray-900"
                    >
                        Batal
                    </Link>
                    <Button
                        size="lg"
                        onClick={handleSubmit}
                        isLoading={isSubmitting}
                        disabled={!decision}
                        className="bg-primary hover:bg-primary/90 text-white font-bold px-8"
                    >
                        <span className="material-symbols-outlined mr-2">save</span>
                        Simpan Keputusan
                    </Button>
                </div>
            </div>
        </div>
    );
}
