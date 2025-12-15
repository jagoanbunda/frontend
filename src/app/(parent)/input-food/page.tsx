"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

// Mock food database with icons
const foodDatabase = [
    { id: "1", name: "Bubur Ayam", unit: "porsi", kkal: 240, icon: "rice_bowl", iconBg: "orange" },
    { id: "2", name: "Telur Rebus", unit: "butir", kkal: 78, icon: "egg", iconBg: "yellow" },
    { id: "3", name: "Sayur Bayam Bening", unit: "mangkok", kkal: 45, icon: "eco", iconBg: "green" },
    { id: "4", name: "Nasi Putih", unit: "centong", kkal: 175, icon: "rice_bowl", iconBg: "orange" },
    { id: "5", name: "Ayam Goreng", unit: "potong", kkal: 150, icon: "set_meal", iconBg: "yellow" },
    { id: "6", name: "Ikan Bandeng", unit: "potong", kkal: 120, icon: "set_meal", iconBg: "blue" },
    { id: "7", name: "Tempe Goreng", unit: "potong", kkal: 75, icon: "lunch_dining", iconBg: "orange" },
    { id: "8", name: "Tahu Goreng", unit: "potong", kkal: 60, icon: "lunch_dining", iconBg: "yellow" },
];

interface SelectedFood {
    id: string;
    name: string;
    unit: string;
    kkal: number;
    icon: string;
    iconBg: string;
    portion: number;
}

const mealTimes = [
    { id: "breakfast", label: "Pagi", icon: "wb_twilight" },
    { id: "lunch", label: "Siang", icon: "wb_sunny" },
    { id: "snack", label: "Sore", icon: "cloud" },
    { id: "dinner", label: "Malam", icon: "bedtime" },
];

const iconBgColors: Record<string, string> = {
    orange: "bg-orange-50 border-orange-100 text-orange-400",
    yellow: "bg-yellow-50 border-yellow-100 text-yellow-500",
    green: "bg-green-50 border-green-100 text-green-500",
    blue: "bg-blue-50 border-blue-100 text-blue-500",
};

export default function FoodInputPage() {
    const [selectedMeal, setSelectedMeal] = useState("breakfast");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFoods, setSelectedFoods] = useState<SelectedFood[]>([
        { ...foodDatabase[0], portion: 1 },
        { ...foodDatabase[1], portion: 1 },
        { ...foodDatabase[2], portion: 1 },
    ]);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
    const [isLoading, setIsLoading] = useState(false);

    const filteredFoods = foodDatabase.filter((food) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const addFood = (food: typeof foodDatabase[0]) => {
        const existing = selectedFoods.find((f) => f.id === food.id);
        if (existing) return;
        setSelectedFoods([...selectedFoods, { ...food, portion: 1 }]);
        setSearchQuery("");
    };

    const updatePortion = (id: string, portion: number) => {
        setSelectedFoods(
            selectedFoods.map((f) => (f.id === id ? { ...f, portion } : f))
        );
    };

    const removeFood = (id: string) => {
        setSelectedFoods(selectedFoods.filter((f) => f.id !== id));
    };

    // Calculate totals
    const totalKkal = selectedFoods.reduce((acc, food) => acc + food.kkal * food.portion, 0);
    const dailyTarget = 1200;
    const percentage = Math.round((totalKkal / dailyTarget) * 100);

    // Mock nutrition breakdown
    const nutrition = {
        protein: { value: 20, percent: 30 },
        fat: { value: 12, percent: 25 },
        carb: { value: 45, percent: 40 },
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setIsLoading(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard"
                        className="size-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-primary transition-all group"
                    >
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-primary">
                            arrow_back
                        </span>
                    </Link>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Input Asupan Makan
                        </h1>
                        <p className="text-gray-500 text-sm">Catat nutrisi harian si kecil</p>
                    </div>
                </div>
                <div className="relative min-w-[240px]">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-primary text-xl">
                            calendar_month
                        </span>
                    </div>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="block w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 shadow-sm focus:ring-primary focus:border-primary sm:text-sm font-medium"
                    />
                </div>
            </section>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Column - Food Selection */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Meal Time Selector */}
                    <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex flex-wrap sm:flex-nowrap gap-2">
                        {mealTimes.map((meal) => (
                            <button
                                key={meal.id}
                                onClick={() => setSelectedMeal(meal.id)}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${selectedMeal === meal.id
                                        ? "bg-green-50 text-[#388E3C] font-bold border border-green-100 shadow-sm"
                                        : "text-gray-500 hover:bg-gray-50"
                                    }`}
                            >
                                <span
                                    className={`material-symbols-outlined text-lg ${selectedMeal === meal.id ? "filled" : ""
                                        }`}
                                    style={
                                        selectedMeal === meal.id
                                            ? { fontVariationSettings: "'FILL' 1" }
                                            : undefined
                                    }
                                >
                                    {meal.icon}
                                </span>
                                {meal.label}
                            </button>
                        ))}
                    </div>

                    {/* Food Search */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400">search</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Cari makanan (misal: Bubur Ayam)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        {/* Search Results Dropdown */}
                        {searchQuery && filteredFoods.length > 0 && (
                            <div className="absolute z-20 w-full mt-2 bg-white rounded-xl border border-gray-200 shadow-lg max-h-60 overflow-y-auto">
                                {filteredFoods.map((food) => (
                                    <button
                                        key={food.id}
                                        onClick={() => addFood(food)}
                                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`size-10 rounded-lg flex items-center justify-center border ${iconBgColors[food.iconBg]}`}
                                            >
                                                <span className="material-symbols-outlined">
                                                    {food.icon}
                                                </span>
                                            </div>
                                            <div className="text-left">
                                                <p className="font-medium text-gray-900">{food.name}</p>
                                                <p className="text-xs text-gray-400">
                                                    {food.kkal} kkal per {food.unit}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-300">
                                            add_circle
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Selected Foods List */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-700">Menu Terpilih</h3>
                            <span className="text-xs font-semibold bg-green-100 text-[#388E3C] px-2 py-1 rounded">
                                {selectedFoods.length} Item
                            </span>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {selectedFoods.map((food) => (
                                <div
                                    key={food.id}
                                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 group hover:bg-gray-50 transition-colors"
                                >
                                    <div
                                        className={`size-16 rounded-xl flex items-center justify-center shrink-0 border ${iconBgColors[food.iconBg]}`}
                                    >
                                        <span className="material-symbols-outlined text-3xl">
                                            {food.icon}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-gray-900 truncate">{food.name}</h4>
                                        <p className="text-sm text-gray-500">
                                            {food.kkal} kkal per {food.unit}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                                        <select
                                            value={food.portion}
                                            onChange={(e) =>
                                                updatePortion(food.id, Number(e.target.value))
                                            }
                                            className="block w-full sm:w-32 rounded-lg border-gray-200 text-sm focus:border-primary focus:ring-primary bg-gray-50"
                                        >
                                            <option value={0.5}>1/2 {food.unit}</option>
                                            <option value={1}>1 {food.unit}</option>
                                            <option value={2}>2 {food.unit}</option>
                                        </select>
                                        <button
                                            onClick={() => removeFood(food.id)}
                                            className="size-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                                        >
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-gray-100 bg-gray-50/30">
                            <button className="w-full py-3 border-2 border-dashed border-primary/30 rounded-xl text-[#388E3C] font-medium hover:bg-green-50 hover:border-primary transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">add_circle</span>
                                Tambah Makanan Lain
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Nutrition Summary */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sticky top-24">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary text-2xl">
                                nutrition
                            </span>
                            <h3 className="font-bold text-lg text-gray-800">Ringkasan Nutrisi</h3>
                        </div>

                        {/* Circular Progress */}
                        <div className="text-center mb-8 relative">
                            <svg
                                className="size-32 mx-auto transform -rotate-90"
                                viewBox="0 0 36 36"
                            >
                                <path
                                    className="text-gray-100"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3.5"
                                />
                                <path
                                    className="text-primary"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeDasharray={`${percentage}, 100`}
                                    strokeLinecap="round"
                                    strokeWidth="3.5"
                                />
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="block text-3xl font-extrabold text-gray-900">
                                    {totalKkal}
                                </span>
                                <span className="text-xs text-gray-500 font-medium">
                                    dari {dailyTarget} Kkal
                                </span>
                            </div>
                        </div>

                        {/* Nutrition Bars */}
                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="font-medium text-gray-600">Protein</span>
                                    <span className="font-bold text-gray-900">
                                        {nutrition.protein.value}g ({nutrition.protein.percent}%)
                                    </span>
                                </div>
                                <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 rounded-full transition-all"
                                        style={{ width: `${nutrition.protein.percent}%` }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="font-medium text-gray-600">Lemak</span>
                                    <span className="font-bold text-gray-900">
                                        {nutrition.fat.value}g ({nutrition.fat.percent}%)
                                    </span>
                                </div>
                                <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-orange-400 rounded-full transition-all"
                                        style={{ width: `${nutrition.fat.percent}%` }}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="font-medium text-gray-600">Karbohidrat</span>
                                    <span className="font-bold text-gray-900">
                                        {nutrition.carb.value}g ({nutrition.carb.percent}%)
                                    </span>
                                </div>
                                <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-yellow-400 rounded-full transition-all"
                                        style={{ width: `${nutrition.carb.percent}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 space-y-3">
                            <Button
                                size="lg"
                                className="w-full shadow-lg shadow-green-200"
                                onClick={handleSubmit}
                                isLoading={isLoading}
                                disabled={selectedFoods.length === 0}
                            >
                                <span className="material-symbols-outlined">save</span>
                                Simpan Asupan
                            </Button>
                            <Link
                                href="/dashboard"
                                className="w-full py-3.5 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                Batal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
