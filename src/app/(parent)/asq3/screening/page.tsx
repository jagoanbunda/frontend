"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

// ASQ-3 Domains and Questions for 24 months
const domains = [
    {
        id: "communication",
        name: "Komunikasi",
        icon: "chat_bubble",
        questions: [
            {
                id: "q1",
                text: "Tanpa bantuan Anda, apakah anak dapat menunjuk setidaknya dua bagian tubuhnya ketika Anda memintanya?",
                example: 'Contoh: "Mana hidungmu?" atau "Mana matamu?"',
            },
            {
                id: "q2",
                text: "Apakah anak dapat menggabungkan dua kata menjadi kalimat sederhana yang bermakna?",
                example: 'Contoh: "Mau minum", "Mama pergi", "Bola jatuh".',
            },
            {
                id: "q3",
                text: "Tanpa Anda memberi isyarat atau menunjuk, apakah anak dapat mengikuti perintah sederhana yang tidak rutin?",
                example: 'Contoh: "Tolong ambilkan sepatu di rak" (jika sedang tidak bersiap pergi).',
            },
            {
                id: "q4",
                text: "Jika Anda menunjukkan gambar bola, kucing, atau cangkir, apakah anak dapat menyebutkan nama benda tersebut?",
            },
            {
                id: "q5",
                text: 'Apakah anak menggunakan kata "saya" atau "aku" untuk merujuk pada dirinya sendiri?',
                example: "Bukan menyebut namanya sendiri.",
            },
            {
                id: "q6",
                text: 'Tanpa bantuan gesture, apakah anak dapat menjawab pertanyaan sederhana seperti "Siapa namamu?" atau "Anak laki-laki atau perempuan?"',
            },
        ],
    },
    {
        id: "gross_motor",
        name: "Motorik Kasar",
        icon: "directions_run",
        questions: [
            { id: "q7", text: "Apakah anak dapat berjalan lancar tanpa jatuh atau goyah?" },
            { id: "q8", text: "Apakah anak dapat berlari dengan baik tanpa terjatuh?" },
            { id: "q9", text: "Apakah anak dapat menendang bola ke depan?" },
            { id: "q10", text: "Apakah anak dapat melompat dengan kedua kaki terangkat dari tanah?" },
            { id: "q11", text: "Apakah anak dapat naik tangga dengan berpegangan?" },
            { id: "q12", text: "Apakah anak dapat melempar bola dengan tangan ke arah tertentu?" },
        ],
    },
    {
        id: "fine_motor",
        name: "Motorik Halus",
        icon: "edit",
        questions: [
            { id: "q13", text: "Apakah anak dapat menyusun 4 atau lebih balok/kubus ke atas?" },
            { id: "q14", text: "Apakah anak dapat memasukkan koin atau benda kecil ke dalam toples?" },
            { id: "q15", text: "Apakah anak dapat mencoret-coret dengan krayon atau pensil?" },
            { id: "q16", text: "Apakah anak dapat membalik halaman buku satu per satu?" },
            { id: "q17", text: "Apakah anak dapat menggunakan sendok untuk makan sendiri?" },
            { id: "q18", text: "Apakah anak dapat memegang gelas dengan kedua tangan dan minum tanpa banyak tumpah?" },
        ],
    },
    {
        id: "problem_solving",
        name: "Pemecahan Masalah",
        icon: "psychology",
        questions: [
            { id: "q19", text: "Apakah anak dapat menunjuk gambar yang tepat ketika Anda bertanya 'Mana kucing?'" },
            { id: "q20", text: "Apakah anak dapat menyortir benda berdasarkan warna atau bentuk?" },
            { id: "q21", text: "Apakah anak dapat menyelesaikan puzzle sederhana (2-3 keping)?" },
            { id: "q22", text: "Apakah anak mengerti konsep 'satu' dan 'banyak'?" },
            { id: "q23", text: "Apakah anak dapat meniru garis vertikal yang Anda gambar?" },
            { id: "q24", text: "Apakah anak dapat bermain pura-pura, seperti memberi makan boneka?" },
        ],
    },
    {
        id: "personal_social",
        name: "Personal Sosial",
        icon: "diversity_3",
        questions: [
            { id: "q25", text: "Apakah anak dapat melepas pakaian sendiri (kaus kaki, topi, celana)?" },
            { id: "q26", text: "Apakah anak menunjukkan minat bermain dengan anak lain?" },
            { id: "q27", text: "Apakah anak dapat menyatakan keinginannya dengan kata-kata, bukan hanya menangis?" },
            { id: "q28", text: "Apakah anak dapat mencuci dan mengeringkan tangannya dengan bantuan minimal?" },
            { id: "q29", text: "Apakah anak dapat memberitahu ketika popoknya basah atau ingin buang air?" },
            { id: "q30", text: "Apakah anak dapat bekerja sama saat dipakaikan baju (mengangkat tangan, kaki)?" },
        ],
    },
];

type Answer = "yes" | "sometimes" | "not_yet" | null;

export default function ASQ3ScreeningPage() {
    const router = useRouter();
    const [currentDomain, setCurrentDomain] = useState(0);
    const [answers, setAnswers] = useState<Record<string, Answer>>({});
    const [isLoading, setIsLoading] = useState(false);

    const domain = domains[currentDomain];
    const totalQuestions = domains.reduce((acc, d) => acc + d.questions.length, 0);
    const answeredCount = Object.keys(answers).length;
    const progress = Math.round((answeredCount / totalQuestions) * 100);

    const handleAnswer = (questionId: string, answer: Answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const goToNextDomain = () => {
        if (currentDomain < domains.length - 1) {
            setCurrentDomain(currentDomain + 1);
            window.scrollTo(0, 0);
        }
    };

    const goToPrevDomain = () => {
        if (currentDomain > 0) {
            setCurrentDomain(currentDomain - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 2000));
        router.push("/asq3/result");
    };

    const isLastDomain = currentDomain === domains.length - 1;
    const currentDomainQuestions = domain.questions;
    const currentDomainAnswered = currentDomainQuestions.filter((q) => answers[q.id]).length;

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-0 z-20 bg-[#f6f8f7] py-2">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                        <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
                        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                        <Link href="/asq3" className="hover:text-primary">ASQ-3</Link>
                        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                        <span>Skrining</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                        Formulir Skrining ASQ-3
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Isi kuesioner berdasarkan pengamatan langsung pada anak.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex flex-col items-end mr-2">
                        <span className="text-sm font-semibold text-gray-900">Progres Skrining</span>
                        <span className="text-xs text-gray-500">
                            {answeredCount} dari {totalQuestions} terjawab
                        </span>
                    </div>
                    <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-sm">save</span>
                        <span className="text-sm font-medium hidden sm:inline">Simpan Draft</span>
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Child Info */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-2xl">child_care</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Budi Santoso</h3>
                        <p className="text-sm text-gray-500">Laki-laki • 24 Bulan</p>
                    </div>
                </div>
                <div className="h-8 w-px bg-gray-200 hidden md:block" />
                <div className="flex gap-6 text-sm">
                    <div>
                        <span className="text-xs text-gray-500 block">Tanggal Lahir</span>
                        <span className="font-medium text-gray-900">12 Jan 2022</span>
                    </div>
                    <div>
                        <span className="text-xs text-gray-500 block">Tanggal Skrining</span>
                        <span className="font-medium text-gray-900">
                            {new Date().toLocaleDateString("id-ID")}
                        </span>
                    </div>
                </div>
            </div>

            {/* Domain Tabs */}
            <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
                {domains.map((d, index) => (
                    <button
                        key={d.id}
                        onClick={() => setCurrentDomain(index)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${currentDomain === index
                            ? "bg-primary text-white shadow-md"
                            : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
                            }`}
                    >
                        {d.name}
                    </button>
                ))}
            </div>

            {/* Questions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Domain Header */}
                <div className="p-6 border-b border-gray-100 bg-green-50/50">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-[#388E3C] font-bold">
                            {currentDomain + 1}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{domain.name}</h2>
                    </div>
                    <p className="text-gray-500 text-sm ml-11">
                        {currentDomainAnswered} dari {currentDomainQuestions.length} pertanyaan terjawab
                    </p>
                </div>

                {/* Questions List */}
                <div className="p-6 flex flex-col gap-8">
                    {domain.questions.map((question, qIndex) => (
                        <div
                            key={question.id}
                            className="flex flex-col gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                        >
                            <div className="flex gap-4">
                                <span className="text-sm font-bold text-gray-400">{qIndex + 1}.</span>
                                <div className="flex-1">
                                    <p className="text-gray-900 font-medium mb-1">{question.text}</p>
                                    {question.example && (
                                        <p className="text-sm text-gray-500 italic">{question.example}</p>
                                    )}
                                </div>
                            </div>

                            {/* Answer Options */}
                            <div className="ml-8 grid grid-cols-1 md:grid-cols-3 gap-3">
                                {[
                                    { value: "yes", label: "Ya" },
                                    { value: "sometimes", label: "Kadang-kadang" },
                                    { value: "not_yet", label: "Belum" },
                                ].map((option) => (
                                    <label key={option.value} className="cursor-pointer relative group">
                                        <input
                                            type="radio"
                                            name={question.id}
                                            value={option.value}
                                            checked={answers[question.id] === option.value}
                                            onChange={() => handleAnswer(question.id, option.value as Answer)}
                                            className="sr-only"
                                        />
                                        <div
                                            className={`p-3 rounded-lg border transition-all flex items-center gap-3 ${answers[question.id] === option.value
                                                ? "border-primary bg-green-50 text-[#388E3C]"
                                                : "border-gray-200 hover:border-primary/50 bg-white text-gray-700"
                                                }`}
                                        >
                                            <span
                                                className={`relative size-5 rounded-full border-2 flex items-center justify-center shrink-0 ${answers[question.id] === option.value
                                                    ? "border-primary bg-primary"
                                                    : "border-gray-300"
                                                    }`}
                                            >
                                                {answers[question.id] === option.value && (
                                                    <span className="size-2.5 bg-white rounded-full" />
                                                )}
                                            </span>
                                            <span className="text-sm font-medium text-gray-900">{option.label}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 py-4">
                <button
                    onClick={goToPrevDomain}
                    disabled={currentDomain === 0}
                    className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                    Sebelumnya
                </button>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link
                        href="/asq3"
                        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white border border-primary text-primary font-medium hover:bg-green-50 transition-colors text-center"
                    >
                        Simpan & Lanjut Nanti
                    </Link>

                    {isLastDomain ? (
                        <Button
                            size="lg"
                            onClick={handleSubmit}
                            isLoading={isLoading}
                            className="w-full sm:w-auto shadow-lg shadow-green-200"
                        >
                            Selesai & Lihat Hasil
                            <span className="material-symbols-outlined">check</span>
                        </Button>
                    ) : (
                        <button
                            onClick={goToNextDomain}
                            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-[#388E3C] transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2"
                        >
                            Lanjut: {domains[currentDomain + 1]?.name}
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
