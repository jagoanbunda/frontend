"use client";

import { useState } from "react";
import Link from "next/link";

interface Task {
    id: string;
    title: string;
    description: string;
    time: string;
    calories: string;
    status: "done" | "pending";
    extra?: string; // e.g., "Vit A"
}

export default function PMTPage() {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: "1",
            title: "Makan Siang PMT",
            description: "Menu: Bubur Kacang Hijau + Telur Rebus",
            time: "12:00 WIB",
            calories: "350 kkal",
            status: "done",
        },
        {
            id: "2",
            title: "Kudapan Sore",
            description: "Menu: Biskuit PMT 2 Keping",
            time: "15:30 WIB",
            calories: "120 kkal",
            status: "done",
        },
        {
            id: "3",
            title: "Makan Malam & Vitamin",
            description: "Menu: Nasi Tim Sayur + Vitamin A",
            time: "18:30 WIB",
            calories: "Vit A",
            status: "pending",
            extra: "Vit A",
        },
    ]);

    const handleToggleTask = (id: string) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, status: task.status === "done" ? "pending" : "done" }
                    : task
            )
        );
    };

    // Calendar Mock Data
    const days = [
        { day: "Sen", date: 21, active: false },
        { day: "Sel", date: 22, active: false },
        { day: "Rab", date: 23, active: false },
        { day: "Kam", date: 24, active: true },
        { day: "Jum", date: 25, active: false },
        { day: "Sab", date: 26, active: false },
        { day: "Min", date: 27, active: false },
    ];

    const completedTasks = tasks.filter((t) => t.status === "done").length;
    const progressPercentage = Math.round((completedTasks / tasks.length) * 100);

    return (
        <div className="max-w-[1200px] mx-auto space-y-6 lg:space-y-8">
            {/* Page Header & Back Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-col gap-2">
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium mb-1"
                    >
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        Kembali ke Dashboard
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                        Pelacakan PMT
                    </h1>
                    <p className="text-gray-500 text-base">
                        Pantau asupan gizi dan kemajuan program 90 hari anak Anda
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className="size-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                        <span className="material-symbols-outlined">print</span>
                    </button>
                    <button className="size-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Sidebar: Stats & Progress (Left Column) */}
                <aside className="lg:col-span-4 flex flex-col gap-6">
                    {/* Progress Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-900 font-bold text-lg">Status Program</h3>
                            <span className="px-3 py-1 rounded-full bg-green-50 text-green-800 text-xs font-bold">
                                Aktif
                            </span>
                        </div>
                        <div className="relative size-48 mx-auto mb-6">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                {/* Background Circle */}
                                <path
                                    className="text-gray-100"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                ></path>
                                {/* Progress Circle (50%) */}
                                <path
                                    className="text-primary drop-shadow-md transition-all duration-1000 ease-out"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeDasharray="50, 100"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                ></path>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold text-gray-900">50%</span>
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                    Selesai
                                </span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Durasi Program</span>
                                <span className="font-bold text-gray-900">90 Hari</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div
                                    className="bg-primary h-2 rounded-full"
                                    style={{ width: "50%" }}
                                ></div>
                            </div>
                            <p className="text-center text-gray-500 text-sm">Hari ke-45 dari 90</p>
                        </div>
                    </div>

                    {/* Mini Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-center">
                            <div className="size-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-lg">
                                    calendar_today
                                </span>
                            </div>
                            <p className="text-gray-500 text-xs font-medium">Sisa Hari</p>
                            <p className="text-gray-900 text-xl font-bold">45</p>
                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-center">
                            <div className="size-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-lg">verified</span>
                            </div>
                            <p className="text-gray-500 text-xs font-medium">Kepatuhan</p>
                            <p className="text-gray-900 text-xl font-bold">98%</p>
                        </div>
                    </div>

                    {/* Tip Card */}
                    <div className="bg-gradient-to-br from-[#102217] to-[#1a3826] rounded-2xl p-6 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl">lightbulb</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3 text-primary">
                            <span className="material-symbols-outlined">tips_and_updates</span>
                            <span className="text-xs font-bold uppercase tracking-widest">
                                Tips Hari Ini
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-200 mb-4">
                            Berikan makanan tambahan sedikit tapi sering jika nafsu makan anak sedang
                            menurun. Variasi warna makanan dapat meningkatkan selera makan.
                        </p>
                        <button className="text-xs font-bold text-primary hover:text-white transition-colors flex items-center gap-1">
                            Baca Selengkapnya
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </aside>

                {/* Main Content: Calendar & Checklist (Right Column) */}
                <section className="lg:col-span-8 flex flex-col gap-6">
                    {/* Weekly Calendar Strip */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-gray-900 font-bold text-lg">Oktober 2023</h3>
                            <div className="flex gap-2">
                                <button className="size-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="size-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-2 md:gap-4 text-center">
                            {days.map((d, i) => (
                                <div
                                    key={i}
                                    className={`flex flex-col items-center gap-2 group cursor-pointer ${d.active ? "" : ""
                                        }`}
                                >
                                    <span
                                        className={`text-xs font-medium transition-colors ${d.active
                                                ? "text-primary font-bold"
                                                : "text-gray-500 group-hover:text-primary"
                                            }`}
                                    >
                                        {d.day}
                                    </span>
                                    <div
                                        className={`size-10 md:size-12 rounded-xl flex items-center justify-center text-sm font-medium transition-all ${d.active
                                                ? "bg-primary text-gray-900 shadow-lg shadow-green-200 ring-2 ring-primary ring-offset-2 font-bold text-base"
                                                : "bg-green-50 text-gray-900 border border-transparent group-hover:border-primary"
                                            }`}
                                    >
                                        {d.date}
                                    </div>
                                    {d.active && <div className="size-1.5 rounded-full bg-primary" />}
                                    {!d.active && i < 3 && (
                                        <div className="size-1.5 rounded-full bg-primary" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Daily Checklist Header */}
                    <div className="flex items-end justify-between px-2">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Aktivitas Hari Ini</h2>
                            <p className="text-gray-500 text-sm">Kamis, 24 Oktober 2023</p>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-medium text-gray-500">
                                Progress Harian
                            </span>
                            <div className="flex items-center gap-2">
                                <div className="w-24 bg-gray-200 rounded-full h-1.5">
                                    <div
                                        className="bg-primary h-1.5 rounded-full transition-all duration-500"
                                        style={{ width: `${progressPercentage}%` }}
                                    ></div>
                                </div>
                                <span className="text-xs font-bold text-gray-900">
                                    {completedTasks}/{tasks.length}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Checklist Items */}
                    <div className="flex flex-col gap-4">
                        {tasks.map((task) => (
                            <label
                                key={task.id}
                                className={`group relative flex items-start gap-4 p-5 bg-white rounded-2xl border shadow-sm cursor-pointer hover:shadow-md transition-all ${task.status === "done"
                                        ? "border-primary/30"
                                        : "border-gray-200 hover:border-primary"
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={task.status === "done"}
                                    onChange={() => handleToggleTask(task.id)}
                                    className="peer sr-only"
                                />
                                <div
                                    className={`flex-none mt-1 size-6 rounded-md border-2 flex items-center justify-center transition-colors ${task.status === "done"
                                            ? "bg-primary border-primary text-gray-900"
                                            : "bg-transparent border-gray-300 text-transparent group-hover:border-primary"
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-base font-bold">
                                        check
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4
                                            className={`text-base font-bold text-gray-900 decoration-primary decoration-2 transition-opacity ${task.status === "done"
                                                    ? "line-through opacity-70"
                                                    : "opacity-100"
                                                }`}
                                        >
                                            {task.title}
                                        </h4>
                                        <span
                                            className={`text-xs font-bold px-2 py-1 rounded-md ${task.status === "done"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-gray-100 text-gray-500"
                                                }`}
                                        >
                                            {task.status === "done" ? "Selesai" : "Belum"}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-3">{task.description}</p>
                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">
                                                schedule
                                            </span>
                                            {task.time}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">
                                                {task.extra ? "medication" : "restaurant"}
                                            </span>
                                            {task.calories}
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent peer-checked:ring-primary/20 pointer-events-none"></div>
                            </label>
                        ))}
                    </div>

                    {/* Empty State / Motivation */}
                    {progressPercentage < 100 && (
                        <div className="mt-4 flex items-center justify-center p-6 border border-dashed border-gray-300 rounded-2xl bg-gray-50/50">
                            <div className="text-center max-w-sm">
                                <div className="mx-auto size-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                                    <span className="material-symbols-outlined text-yellow-500">
                                        star
                                    </span>
                                </div>
                                <h4 className="text-sm font-bold text-gray-900">
                                    Hebat! Hampir Selesai
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                    Selesaikan satu tugas lagi untuk mencapai target harian Anda.
                                    Konsistensi adalah kunci pertumbuhan anak.
                                </p>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
