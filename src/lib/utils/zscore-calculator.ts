/**
 * Z-Score Calculator based on PMK No. 2 Tahun 2020
 * Calculates Z-Score for BB/U, TB/U, and BB/TB indices
 */

import type {
    NutritionStatus,
    HeightStatus,
    WeightStatus,
} from "@/types";

// WHO Growth Standards Reference Data (simplified)
// In production, this would be loaded from a comprehensive dataset
const WHO_STANDARDS = {
    // Male BB/U reference (age in months -> { median, sd })
    BBU_MALE: {
        0: { median: 3.3, sd: 0.4 },
        12: { median: 9.6, sd: 1.0 },
        24: { median: 12.2, sd: 1.3 },
        36: { median: 14.3, sd: 1.5 },
        48: { median: 16.3, sd: 1.8 },
        60: { median: 18.3, sd: 2.1 },
    },
    // Male TB/U reference
    TBU_MALE: {
        0: { median: 49.9, sd: 1.9 },
        12: { median: 75.7, sd: 2.6 },
        24: { median: 87.1, sd: 3.0 },
        36: { median: 96.1, sd: 3.4 },
        48: { median: 103.3, sd: 3.8 },
        60: { median: 110.0, sd: 4.1 },
    },
    // Female BB/U reference
    BBU_FEMALE: {
        0: { median: 3.2, sd: 0.4 },
        12: { median: 8.9, sd: 1.0 },
        24: { median: 11.5, sd: 1.3 },
        36: { median: 13.9, sd: 1.5 },
        48: { median: 16.1, sd: 1.8 },
        60: { median: 18.2, sd: 2.1 },
    },
    // Female TB/U reference
    TBU_FEMALE: {
        0: { median: 49.1, sd: 1.9 },
        12: { median: 74.0, sd: 2.6 },
        24: { median: 85.7, sd: 3.0 },
        36: { median: 95.1, sd: 3.4 },
        48: { median: 102.7, sd: 3.8 },
        60: { median: 109.4, sd: 4.1 },
    },
};

type Gender = "male" | "female";
type IndexType = "BBU" | "TBU" | "BBTB";

/**
 * Get the closest reference data point for a given age
 */
function getReference(
    type: IndexType,
    gender: Gender,
    ageMonths: number
): { median: number; sd: number } | null {
    const key = type === "BBU"
        ? (gender === "male" ? "BBU_MALE" : "BBU_FEMALE")
        : type === "TBU"
            ? (gender === "male" ? "TBU_MALE" : "TBU_FEMALE")
            : null;

    if (!key) return null;

    const standards = WHO_STANDARDS[key] as Record<number, { median: number; sd: number }>;

    // Find closest age
    const ages = Object.keys(standards).map(Number);
    const closestAge = ages.reduce((prev, curr) =>
        Math.abs(curr - ageMonths) < Math.abs(prev - ageMonths) ? curr : prev
    );

    return standards[closestAge];
}

/**
 * Calculate Z-Score using the formula: Z = (X - median) / SD
 */
export function calculateZScore(
    type: IndexType,
    gender: Gender,
    ageMonths: number,
    measurement: number
): number {
    const reference = getReference(type, gender, ageMonths);
    if (!reference) return 0;

    const zScore = (measurement - reference.median) / reference.sd;
    return Math.round(zScore * 100) / 100; // Round to 2 decimal places
}

/**
 * Get Weight-for-Age status (BB/U) based on PMK No.2/2020
 */
export function getStatusBBU(zScore: number): WeightStatus {
    if (zScore < -3) return "berat_badan_sangat_kurang";
    if (zScore < -2) return "berat_badan_kurang";
    if (zScore <= 1) return "berat_badan_normal";
    return "risiko_berat_badan_lebih";
}

/**
 * Get Height-for-Age status (TB/U) based on PMK No.2/2020
 */
export function getStatusTBU(zScore: number): HeightStatus {
    if (zScore < -3) return "sangat_pendek";
    if (zScore < -2) return "pendek";
    if (zScore <= 3) return "normal";
    return "tinggi";
}

/**
 * Get Weight-for-Height status (BB/TB) based on PMK No.2/2020
 */
export function getStatusBBTB(zScore: number): NutritionStatus {
    if (zScore < -3) return "gizi_buruk";
    if (zScore < -2) return "gizi_kurang";
    if (zScore <= 1) return "gizi_baik";
    if (zScore <= 2) return "berisiko_gizi_lebih";
    if (zScore <= 3) return "gizi_lebih";
    return "obesitas";
}

/**
 * Get display label for status
 */
export function getStatusLabel(
    status: WeightStatus | HeightStatus | NutritionStatus
): string {
    const labels: Record<string, string> = {
        // Weight status
        berat_badan_sangat_kurang: "Berat Badan Sangat Kurang",
        berat_badan_kurang: "Berat Badan Kurang",
        berat_badan_normal: "Berat Badan Normal",
        risiko_berat_badan_lebih: "Risiko Berat Badan Lebih",
        // Height status
        sangat_pendek: "Sangat Pendek",
        pendek: "Pendek",
        normal: "Normal",
        tinggi: "Tinggi",
        // Nutrition status
        gizi_buruk: "Gizi Buruk",
        gizi_kurang: "Gizi Kurang",
        gizi_baik: "Gizi Baik",
        berisiko_gizi_lebih: "Berisiko Gizi Lebih",
        gizi_lebih: "Gizi Lebih",
        obesitas: "Obesitas",
    };
    return labels[status] || status;
}

/**
 * Get color for Z-Score visualization
 */
export function getZScoreColor(zScore: number): string {
    if (zScore < -3) return "#F44336"; // Red - Danger
    if (zScore < -2) return "#FF9800"; // Orange - Warning
    if (zScore <= 1) return "#4CAF50"; // Green - Normal
    if (zScore <= 2) return "#FFC107"; // Yellow - Attention
    return "#FF9800"; // Orange - Warning
}

/**
 * Get variant for Badge component
 */
export function getZScoreVariant(
    zScore: number
): "success" | "warning" | "danger" | "info" {
    if (zScore < -3) return "danger";
    if (zScore < -2) return "warning";
    if (zScore <= 1) return "success";
    return "warning";
}
