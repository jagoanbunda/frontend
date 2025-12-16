"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui";

// Mock data
const patientsData = [
    { id: "1", name: "Budi Santoso", age: "3 thn 2 bln", ageMonths: 38, bbu: -3.2, tbu: -2.1, bbtb: -2.5, status: "buruk", kelurahan: "Sukamaju" },
    { id: "2", name: "Citra Dewi", age: "1 thn 5 bln", ageMonths: 17, bbu: -2.5, tbu: -1.8, bbtb: -2.2, status: "kurang", kelurahan: "Sukamaju" },
    { id: "3", name: "Andi Pratama", age: "2 thn 8 bln", ageMonths: 32, bbu: -1.2, tbu: -0.8, bbtb: -0.5, status: "normal", kelurahan: "Cikaret" },
    { id: "4", name: "Siti Aminah", age: "4 thn 1 bln", ageMonths: 49, bbu: -0.5, tbu: 0.2, bbtb: -0.3, status: "normal", kelurahan: "Cikaret" },
    { id: "5", name: "Rudi Hermawan", age: "2 thn 3 bln", ageMonths: 27, bbu: -2.8, tbu: -2.5, bbtb: -2.0, status: "kurang", kelurahan: "Bojong" },
    { id: "6", name: "Dewi Lestari", age: "1 thn 11 bln", ageMonths: 23, bbu: -0.2, tbu: 0.5, bbtb: 0.1, status: "normal", kelurahan: "Bojong" },
    { id: "7", name: "Ahmad Fauzi", age: "3 thn 7 bln", ageMonths: 43, bbu: -3.5, tbu: -3.0, bbtb: -2.8, status: "buruk", kelurahan: "Sukamaju" },
    { id: "8", name: "Putri Rahayu", age: "2 thn 0 bln", ageMonths: 24, bbu: -1.0, tbu: -0.5, bbtb: -0.8, status: "normal", kelurahan: "Cikaret" },
];

const kelurahanOptions = ["Semua", "Sukamaju", "Cikaret", "Bojong"];
const statusOptions = ["Semua", "normal", "kurang", "buruk"];
const ageOptions = ["Semua", "0-12 bln", "12-24 bln", "24-36 bln", "36-60 bln"];

function getStatusBadge(status: string) {
    switch (status) {
        case "normal":
            return <Badge variant="success">Normal</Badge>;
        case "kurang":
            return <Badge variant="warning">Kurang</Badge>;
        case "buruk":
            return <Badge variant="danger">Buruk</Badge>;
        default:
            return <Badge variant="neutral">{status}</Badge>;
    }
}

function getZScoreColor(value: number) {
    if (value < -3) return "text-red-600 font-bold";
    if (value < -2) return "text-orange-600 font-semibold";
    return "text-gray-700";
}

export default function PatientsPage() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Semua");
    const [kelurahanFilter, setKelurahanFilter] = useState("Semua");
    const [ageFilter, setAgeFilter] = useState("Semua");

    const filteredPatients = patientsData.filter((patient) => {
        const matchesSearch = patient.name.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "Semua" || patient.status === statusFilter;
        const matchesKelurahan = kelurahanFilter === "Semua" || patient.kelurahan === kelurahanFilter;

        let matchesAge = true;
        if (ageFilter !== "Semua") {
            const [min, max] = ageFilter.replace(" bln", "").split("-").map(Number);
            matchesAge = patient.ageMonths >= min && patient.ageMonths < max;
        }

        return matchesSearch && matchesStatus && matchesKelurahan && matchesAge;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Data Anak</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola dan pantau data anak terdaftar</p>
                </div>
                <Link
                    href="/nakes/patients/add"
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">person_add</span>
                    Tambah Anak
                </Link>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input
                            type="text"
                            placeholder="Cari nama anak..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                    </div>

                    {/* Status Filter */}
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                        {statusOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt === "Semua" ? "Status: Semua" : `Status: ${opt.charAt(0).toUpperCase() + opt.slice(1)}`}
                            </option>
                        ))}
                    </select>

                    {/* Kelurahan Filter */}
                    <select
                        value={kelurahanFilter}
                        onChange={(e) => setKelurahanFilter(e.target.value)}
                        className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                        {kelurahanOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt === "Semua" ? "Kelurahan: Semua" : opt}
                            </option>
                        ))}
                    </select>

                    {/* Age Filter */}
                    <select
                        value={ageFilter}
                        onChange={(e) => setAgeFilter(e.target.value)}
                        className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                        {ageOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt === "Semua" ? "Usia: Semua" : opt}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nama</th>
                                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Usia</th>
                                <th className="text-center py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">BB/U</th>
                                <th className="text-center py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">TB/U</th>
                                <th className="text-center py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">BB/TB</th>
                                <th className="text-center py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="text-center py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredPatients.map((patient) => (
                                <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <span className="material-symbols-outlined text-primary">child_care</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">{patient.name}</p>
                                                <p className="text-xs text-gray-500">{patient.kelurahan}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-gray-700">{patient.age}</td>
                                    <td className={`py-4 px-4 text-sm text-center ${getZScoreColor(patient.bbu)}`}>{patient.bbu}</td>
                                    <td className={`py-4 px-4 text-sm text-center ${getZScoreColor(patient.tbu)}`}>{patient.tbu}</td>
                                    <td className={`py-4 px-4 text-sm text-center ${getZScoreColor(patient.bbtb)}`}>{patient.bbtb}</td>
                                    <td className="py-4 px-4 text-center">{getStatusBadge(patient.status)}</td>
                                    <td className="py-4 px-4 text-center">
                                        <Link
                                            href={`/nakes/patients/${patient.id}`}
                                            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                                        >
                                            Detail
                                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Menampilkan {filteredPatients.length} dari {patientsData.length} anak
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                            Sebelumnya
                        </button>
                        <button className="px-3 py-1.5 text-sm bg-primary text-white rounded-lg">1</button>
                        <button className="px-3 py-1.5 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
