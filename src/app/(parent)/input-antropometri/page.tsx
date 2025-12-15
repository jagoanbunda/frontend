"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { GrowthChart } from "@/components/charts/GrowthChart";

// Mock child data
const childData = {
    name: "Budi Santoso",
    age: "24 Bulan",
    gender: "Laki-laki",
    lastMeasurement: "12 Jan 2024",
};

// Z-Score status configuration
const getZScoreStatus = (zScore: number) => {
    if (zScore < -3) return { status: "Gizi Buruk", color: "red", icon: "error" };
    if (zScore < -2) return { status: "Gizi Kurang", color: "orange", icon: "warning" }; // specific for stunting logic might vary
    if (zScore <= 1 && zScore >= -2) return { status: "Normal", color: "green", icon: "check_circle" };
    if (zScore > 1 && zScore <= 2) return { status: "Berisiko Lebih", color: "orange", icon: "warning" };
    if (zScore > 2) return { status: "Gizi Lebih", color: "red", icon: "error" };
    return { status: "Normal", color: "green", icon: "check_circle" };
};

const statusColors: Record<string, { bg: string; text: string; border: string; iconColor: string }> = {
    green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-100", iconColor: "text-green-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100", iconColor: "text-orange-600" },
    red: { bg: "bg-red-50", text: "text-red-700", border: "border-red-100", iconColor: "text-red-600" },
};

export default function InputAntropometriPage() {
    const [measurementDate, setMeasurementDate] = useState("2024-12-02");
    const [weight, setWeight] = useState(12.5);
    const [height, setHeight] = useState(88.0);
    const [heightMode, setHeightMode] = useState<"berdiri" | "telentang">("berdiri");
    const [isLoading, setIsLoading] = useState(false);

    // Mock Z-Score calculations
    const [zScores, setZScores] = useState({
        bbu: -0.5,
        tbu: -2.8,
        bbtb: 0.1,
        bbuLabel: "Normal",
        tbuLabel: "Stunting", // Hardcoded for demo matching image
        bbtbLabel: "Gizi Baik",
    });

    useEffect(() => {
        // In a real app, calculate based on standards.
        // For this UI demo, we'll keep the values somewhat static or simple dynamic
        // to match the visual provided.
    }, [weight, height]);

    const handleSubmit = async () => {
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setIsLoading(false);
    };

    const weightMin = 5;
    const weightMax = 25;
    const heightMin = 60;
    const heightMax = 120;

    const weightPercent = ((weight - weightMin) / (weightMax - weightMin)) * 100;
    const heightPercent = ((height - heightMin) / (heightMax - heightMin)) * 100;

    return (
        <div className="min-h-screen bg-[#F9FAFB] p-6 lg:p-10 font-sans text-slate-800">
            <div className="max-w-[1200px] mx-auto space-y-6">

                {/* Page Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Input Data Bulanan</h1>
                    <p className="text-gray-500 mt-1 max-w-3xl">
                        Masukkan data pengukuran terbaru untuk memantau status gizi anak sesuai standar <Link href="#" className="text-blue-500 hover:underline">PMK No. 2 Tahun 2020</Link>.
                    </p>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            {/* Simple Avatar Placeholder */}
                            <span className="material-symbols-outlined text-[28px]">face_5</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Profil Anak Saat Ini</p>
                            <h2 className="text-lg font-bold text-gray-900">{childData.name}</h2>
                            <p className="text-sm text-gray-600 font-medium">{childData.gender} • {childData.age}</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl px-5 py-3 border border-gray-100">
                        <p className="text-xs text-gray-400 font-medium">Pengukuran Terakhir</p>
                        <p className="text-sm font-bold text-gray-900">{childData.lastMeasurement}</p>
                    </div>
                </div>

                {/* Growth Chart (KMS) */}
                <GrowthChart />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Form */}
                    <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-8">

                        {/* Date Picker */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-800">Tanggal Pengukuran</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={measurementDate}
                                    onChange={(e) => setMeasurementDate(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 pr-10"
                                />
                                { /* Calendar Icon overlay if needed, usually browser date picker has one. 
                                     The design shows a calendar icon on the right. 
                                     We can force custom styling or trust the browser default + padding. 
                                     Design has icon on right commonly for inputs. */ }
                            </div>
                        </div>

                        {/* Weight Input */}
                        <div className="p-1 rounded-xl">
                            <div className="flex items-center justify-between mb-6 bg-white border border-gray-200 rounded-xl p-2 pr-4 shadow-sm">
                                <div className="flex items-center gap-3 pl-2">
                                    <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[18px]">scale</span>
                                    </div>
                                    <span className="font-bold text-gray-800">Berat Badan (kg)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(parseFloat(e.target.value))}
                                        className="w-20 text-right text-xl font-bold border-none focus:ring-0 p-0 text-gray-900"
                                    />
                                    <span className="text-gray-500 font-medium">kg</span>
                                </div>
                            </div>

                            {/* Slider */}
                            <div className="px-1 relative pb-2">
                                <div className="relative w-full h-2 bg-gray-200 rounded-full mb-8">
                                    <div
                                        className="absolute h-full bg-green-500 rounded-full"
                                        style={{ width: `${Math.min(Math.max(weightPercent, 0), 100)}%` }}
                                    />
                                    {/* Thumb */}
                                    <div
                                        className="absolute w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow top-1/2 -translate-y-1/2 -ml-2.5 cursor-grab"
                                        style={{ left: `${Math.min(Math.max(weightPercent, 0), 100)}%` }}
                                    ></div>
                                </div>
                                <input
                                    type="range"
                                    min={weightMin}
                                    max={weightMax}
                                    step="0.1"
                                    value={weight}
                                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                                    className="absolute inset-0 w-full h-8 opacity-0 cursor-pointer z-10 -top-2"
                                />
                                <div className="flex justify-between text-xs text-gray-400 font-medium mt-1">
                                    <span>{weightMin} kg</span>
                                    <span>15 kg</span>
                                    <span>{weightMax} kg</span>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Height Input */}
                        <div className="p-1 rounded-xl">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-500">height</span>
                                    <span className="font-bold text-gray-800">Tinggi Badan (cm)</span>
                                </div>

                                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-1 pr-4 shadow-sm">
                                    {/* Toggle */}
                                    <div className="bg-gray-100 rounded-lg p-1 flex text-xs font-medium">
                                        <button
                                            onClick={() => setHeightMode("berdiri")}
                                            className={`px-3 py-1.5 rounded-md transition-all ${heightMode === "berdiri" ? "bg-blue-500 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                                        >
                                            Berdiri
                                        </button>
                                        <button
                                            onClick={() => setHeightMode("telentang")}
                                            className={`px-3 py-1.5 rounded-md transition-all ${heightMode === "telentang" ? "bg-blue-500 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                                        >
                                            Telentang
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
                                        <input
                                            type="number"
                                            value={height}
                                            onChange={(e) => setHeight(parseFloat(e.target.value))}
                                            className="w-16 text-right text-xl font-bold border-none focus:ring-0 p-0 text-gray-900"
                                        />
                                        <span className="text-gray-500 font-medium">cm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Slider */}
                            <div className="px-1 relative pb-2">
                                <div className="relative w-full h-2 bg-gray-200 rounded-full mb-8">
                                    <div
                                        className="absolute h-full bg-green-500 rounded-full"
                                        style={{ width: `${Math.min(Math.max(heightPercent, 0), 100)}%` }}
                                    />
                                    {/* Thumb */}
                                    <div
                                        className="absolute w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow top-1/2 -translate-y-1/2 -ml-2.5 cursor-grab"
                                        style={{ left: `${Math.min(Math.max(heightPercent, 0), 100)}%` }}
                                    ></div>
                                </div>
                                <input
                                    type="range"
                                    min={heightMin}
                                    max={heightMax}
                                    step="0.1"
                                    value={height}
                                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                                    className="absolute inset-0 w-full h-8 opacity-0 cursor-pointer z-10 -top-2"
                                />
                                <div className="flex justify-between text-xs text-gray-400 font-medium mt-1">
                                    <span>{heightMin} cm</span>
                                    <span>90 cm</span>
                                    <span>{heightMax} cm</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 flex items-center justify-between gap-4">
                            <Button
                                size="lg"
                                onClick={handleSubmit}
                                isLoading={isLoading}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 rounded-xl shadow-lg shadow-emerald-100 transition-all"
                            >
                                <span className="material-symbols-outlined mr-2">save</span>
                                Simpan Data
                            </Button>
                            <button className="text-gray-500 font-medium px-6 hover:text-gray-800 transition-colors">
                                Batal
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Status */}
                    <div className="lg:col-span-5 space-y-6">

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="font-bold text-green-700 text-lg">Status Gizi (Live)</h3>
                                <span className="material-symbols-outlined text-blue-400">analytics</span>
                            </div>

                            <div className="p-4 space-y-4">
                                {/* BB/U */}
                                <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex justify-between items-start">
                                    <div>
                                        <p className="text-sm text-gray-600 font-medium mb-1">Berat Badan menurut Umur (BB/U)</p>
                                        <div className="bg-[#D1FAE5] text-[#047857] text-[10px] font-bold px-2 py-0.5 rounded-full w-fit">
                                            Z-Score: -0.5 SD
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xl font-bold text-[#047857] mb-1">Normal</div>
                                        <span className="material-symbols-outlined text-[#047857]">check_circle</span>
                                    </div>
                                </div>

                                {/* TB/U */}
                                <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 flex justify-between items-start">
                                    <div>
                                        <p className="text-sm text-gray-600 font-medium mb-1">Tinggi Badan menurut Umur (TB/U)</p>
                                        <div className="bg-[#FFE4E6] text-[#BE123C] text-[10px] font-bold px-2 py-0.5 rounded-full w-fit">
                                            Z-Score: -2.8 SD
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xl font-bold text-[#BE123C] mb-1">Stunting</div>
                                        <span className="material-symbols-outlined text-[#BE123C]">warning</span>
                                    </div>
                                </div>

                                {/* BB/TB */}
                                <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex justify-between items-start">
                                    <div>
                                        <p className="text-sm text-gray-600 font-medium mb-1">BB menurut Tinggi Badan (BB/TB)</p>
                                        <div className="bg-[#D1FAE5] text-[#047857] text-[10px] font-bold px-2 py-0.5 rounded-full w-fit">
                                            Z-Score: 0.1 SD
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xl font-bold text-[#047857] mb-1">Gizi Baik</div>
                                        <span className="material-symbols-outlined text-[#047857] font-bold">sentiment_satisfied</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                            <h4 className="font-bold text-sm text-gray-900 mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">info</span>
                                Keterangan Warna
                            </h4>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-green-50 p-2 rounded-lg text-center">
                                    <div className="text-xs font-bold text-green-700">Hijau</div>
                                    <div className="text-[10px] text-green-600">Normal</div>
                                </div>
                                <div className="bg-orange-50 p-2 rounded-lg text-center">
                                    <div className="text-xs font-bold text-orange-700">Oranye</div>
                                    <div className="text-[10px] text-orange-600">Kurang/Resiko</div>
                                </div>
                                <div className="bg-red-50 p-2 rounded-lg text-center">
                                    <div className="text-xs font-bold text-red-700">Merah</div>
                                    <div className="text-[10px] text-red-600">Buruk/Stunting</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-[10px] text-gray-400">
                                Standar Perhitungan: PMK No. 2 Tahun 2020 tentang Standar Antropometri Anak
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}
