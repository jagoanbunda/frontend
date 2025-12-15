// Child Types
export interface Child {
    id: string;
    name: string;
    birthDate: Date;
    gender: "male" | "female";
    parentId: string;
    createdAt: Date;
    updatedAt: Date;
}

// Anthropometry Types
export type NutritionStatus =
    | "gizi_buruk"
    | "gizi_kurang"
    | "gizi_baik"
    | "berisiko_gizi_lebih"
    | "gizi_lebih"
    | "obesitas";

export type HeightStatus = "sangat_pendek" | "pendek" | "normal" | "tinggi";

export type WeightStatus =
    | "berat_badan_sangat_kurang"
    | "berat_badan_kurang"
    | "berat_badan_normal"
    | "risiko_berat_badan_lebih";

export interface AnthropometryRecord {
    id: string;
    childId: string;
    date: Date;
    weight: number; // kg
    height: number; // cm
    zScoreBBU: number;
    zScoreTBU: number;
    zScoreBBTB: number;
    statusBBU: WeightStatus;
    statusTBU: HeightStatus;
    statusBBTB: NutritionStatus;
    createdBy: string;
}

// Nutrition Types
export type MealTime = "breakfast" | "lunch" | "snack" | "dinner";

export interface FoodItem {
    foodId: string;
    name: string;
    portion: string;
    weightGram: number;
    nutrition: NutritionContent;
}

export interface NutritionContent {
    energy: number; // kkal
    protein: number; // gram
    fat: number; // gram
    carbohydrate: number; // gram
}

export interface FoodIntake {
    id: string;
    childId: string;
    date: Date;
    mealTime: MealTime;
    foods: FoodItem[];
    totalNutrition: NutritionContent;
    createdBy: string;
}

// PMT Types
export type PMTStatus = "active" | "completed" | "cancelled";

export interface PMTProgram {
    id: string;
    childId: string;
    startDate: Date;
    endDate: Date; // startDate + 90 days
    status: PMTStatus;
    nakesId: string;
    notes: string;
}

export interface PMTDailyRecord {
    id: string;
    pmtProgramId: string;
    date: Date;
    consumed: boolean;
    reportedBy: string;
    reportedAt: Date;
}

// Screening Types (ASQ-3)
export type ASQ3Domain =
    | "communication"
    | "gross_motor"
    | "fine_motor"
    | "problem_solving"
    | "personal_social";

export type ASQ3Result = "on_track" | "monitoring" | "refer";

export interface ASQ3Answer {
    questionId: string;
    question: string;
    answer: "yes" | "sometimes" | "not_yet";
    score: number; // 10, 5, or 0
}

export interface ASQ3DomainResult {
    domain: ASQ3Domain;
    score: number;
    maxScore: number;
    result: ASQ3Result;
}

export interface ASQ3Screening {
    id: string;
    childId: string;
    date: Date;
    ageMonths: number;
    domainResults: ASQ3DomainResult[];
    answers: ASQ3Answer[];
    overallResult: ASQ3Result;
    notes: string;
    createdBy: string;
}

// KPSP Screening Types
export type KPSPResult = "sesuai" | "meragukan" | "penyimpangan";

export interface KPSPAnswer {
    questionId: string;
    question: string;
    answer: boolean;
}

export interface KPSPScreening {
    id: string;
    childId: string;
    date: Date;
    ageMonths: number;
    answers: KPSPAnswer[];
    totalYes: number;
    result: KPSPResult;
    notes: string;
    nakesId: string;
    followUpDate?: Date;
}

// User Types
export type UserRole = "parent" | "nakes" | "admin";

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    phone?: string;
    avatar?: string;
    createdAt: Date;
}

export interface ParentUser extends User {
    role: "parent";
    children: string[]; // Child IDs
}

export interface NakesUser extends User {
    role: "nakes";
    facilityId: string;
    facilityName: string;
    title?: string; // e.g., "Bidan", "dr."
}
