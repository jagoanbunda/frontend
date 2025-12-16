"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

// ASQ-3 domains and questions
const asqDomains = [
    {
        id: "communication",
        name: "Komunikasi",
        icon: "record_voice_over",
        color: "blue",
        questions: [
            "Apakah anak menunjuk sesuatu yang diinginkan?",
            "Apakah anak mengucapkan 2-3 kata bermakna?",
            "Apakah anak mengikuti perintah sederhana?",
            "Apakah anak menyebutkan nama benda?",
            "Apakah anak menggabungkan 2 kata?",
            "Apakah anak bertanya dengan kata tanya?",
        ],
    },
    {
        id: "gross_motor",
        name: "Motorik Kasar",
        icon: "directions_run",
        color: "green",
        questions: [
            "Apakah anak bisa berjalan tanpa pegangan?",
            "Apakah anak bisa berlari?",
            "Apakah anak bisa menendang bola?",
            "Apakah anak bisa melompat dengan dua kaki?",
            "Apakah anak bisa naik tangga dengan berpegangan?",
            "Apakah anak bisa berdiri satu kaki sesaat?",
        ],
    },
    {
        id: "fine_motor",
        name: "Motorik Halus",
        icon: "pan_tool",
        color: "purple",
        questions: [
            "Apakah anak bisa memegang pensil?",
            "Apakah anak bisa mencoret-coret kertas?",
            "Apakah anak bisa menyusun 4 balok?",
            "Apakah anak bisa membuka halaman buku?",
            "Apakah anak bisa memasukkan benda ke lubang?",
            "Apakah anak bisa menggambar garis?",
        ],
    },
    {
        id: "problem_solving",
        name: "Pemecahan Masalah",
        icon: "psychology",
        color: "orange",
        questions: [
            "Apakah anak menunjuk gambar yang diminta?",
            "Apakah anak bermain pura-pura?",
            "Apakah anak mengenal bagian tubuh?",
            "Apakah anak meniru pekerjaan rumah?",
            "Apakah anak bermain dengan benda sesuai fungsi?",
            "Apakah anak mengelompokkan benda?",
        ],
    },
    {
        id: "personal_social",
        name: "Personal Sosial",
        icon: "groups",
        color: "pink",
        questions: [
            "Apakah anak makan sendiri dengan sendok?",
            "Apakah anak minum dari gelas?",
            "Apakah anak melepas pakaian sendiri?",
            "Apakah anak bermain dengan anak lain?",
            "Apakah anak menunjukkan rasa sayang?",
            "Apakah anak mengikuti aturan permainan?",
        ],
    },
];

type Answer = "ya" | "kadang" | "belum" | null;

export default function ScreeningPage({ params }: { params: { id: string } }) {
    const [currentDomain, setCurrentDomain] = useState(0);
    const [answers, setAnswers] = useState<Record<string, Answer[]>>(() => {
        const initial: Record<string, Answer[]> = {};
        asqDomains.forEach((domain) => {
            initial[domain.id] = Array(domain.questions.length).fill(null);
        });
        return initial;
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const domain = asqDomains[currentDomain];
    const domainAnswers = answers[domain.id];
    const answeredCount = domainAnswers.filter((a) => a !== null).length;
    const allAnswered = answeredCount === domain.questions.length;

    const handleAnswer = (questionIndex: number, answer: Answer) => {
        setAnswers((prev) => ({
            ...prev,
            [domain.id]: prev[domain.id].map((a, i) => (i === questionIndex ? answer : a)),
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 1500));
        // Would redirect to results
        window.location.href = `/nakes/screening/${params.id}/review`;
    };

    const totalDomains = asqDomains.length;
    const allDomainsComplete = Object.values(answers).every((domainAnswers) =>
        domainAnswers.every((a) => a !== null)
    );

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/nakes/patients" className="hover:text-primary">Data Anak</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-gray-900 font-medium">Skrining ASQ-3</span>
            </div>

            {/* Header */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h1 className="text-2xl font-bold text-gray-900">Skrining Perkembangan ASQ-3</h1>
                <p className="text-gray-500 mt-1">Usia 24 Bulan</p>

                {/* Domain Progress */}
                <div className="mt-6 flex gap-2">
                    {asqDomains.map((d, i) => (
                        <button
                            key={d.id}
                            onClick={() => setCurrentDomain(i)}
                            className={`flex-1 p-3 rounded-xl border-2 transition-all ${i === currentDomain
                                    ? "border-primary bg-green-50"
                                    : answers[d.id].every((a) => a !== null)
                                        ? "border-green-200 bg-green-50"
                                        : "border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <span className={`material-symbols-outlined ${i === currentDomain ? "text-primary" : "text-gray-400"}`}>
                                {d.icon}
                            </span>
                            <p className="text-xs font-medium mt-1 truncate">{d.name}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Questions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">{domain.icon}</span>
                        {domain.name}
                    </h2>
                    <span className="text-sm text-gray-500">{answeredCount}/{domain.questions.length} terjawab</span>
                </div>

                <div className="space-y-4">
                    {domain.questions.map((question, qIndex) => (
                        <div key={qIndex} className="p-4 bg-gray-50 rounded-xl">
                            <p className="font-medium text-gray-900 mb-3">
                                {qIndex + 1}. {question}
                            </p>
                            <div className="flex gap-2">
                                {(["ya", "kadang", "belum"] as Answer[]).map((answer) => (
                                    <button
                                        key={answer}
                                        onClick={() => handleAnswer(qIndex, answer)}
                                        className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-all ${domainAnswers[qIndex] === answer
                                                ? answer === "ya"
                                                    ? "bg-green-500 text-white"
                                                    : answer === "kadang"
                                                        ? "bg-orange-500 text-white"
                                                        : "bg-red-500 text-white"
                                                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        {answer === "ya" ? "Ya" : answer === "kadang" ? "Kadang-kadang" : "Belum"}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <button
                        onClick={() => setCurrentDomain((prev) => Math.max(0, prev - 1))}
                        disabled={currentDomain === 0}
                        className="text-gray-600 font-medium hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                        Sebelumnya
                    </button>

                    {currentDomain < totalDomains - 1 ? (
                        <button
                            onClick={() => setCurrentDomain((prev) => prev + 1)}
                            disabled={!allAnswered}
                            className="bg-primary text-white font-bold px-6 py-2.5 rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                        >
                            Selanjutnya
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            disabled={!allDomainsComplete}
                            isLoading={isSubmitting}
                            className="bg-primary text-white font-bold px-6"
                        >
                            <span className="material-symbols-outlined mr-2">check</span>
                            Selesai & Lihat Hasil
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
