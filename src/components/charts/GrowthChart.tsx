"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
    ComposedChart,
    ReferenceArea
} from "recharts";

// Mock Data for Standard Growth Chart (Simplified KMS Boys 0-24 months)
// In a real app, this should be accurate WHO data
const standardData = Array.from({ length: 25 }, (_, month) => ({
    month,
    // Approximate WHO standards for boys
    sd3neg: 2.5 + month * 0.4, // -3 SD
    sd2neg: 3.0 + month * 0.5, // -2 SD (Gizi Kurang boundary)
    median: 3.3 + month * 0.7, // Median
    sd2pos: 4.0 + month * 0.9, // +2 SD
    sd3pos: 4.5 + month * 1.0, // +3 SD
}));

// Mock Child Data (Budi's history)
const childHistory = [
    { month: 0, weight: 3.2 },
    { month: 1, weight: 4.5 },
    { month: 2, weight: 5.6 },
    { month: 6, weight: 7.8 },
    { month: 12, weight: 9.6 },
    { month: 18, weight: 11.0 },
    { month: 24, weight: 12.5 }, // Current input
];

export function GrowthChart() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-gray-900 text-lg">Grafik Pertumbuhan (KMS)</h3>
                    <p className="text-sm text-gray-500">Berat Badan menurut Umur (0-24 Bulan)</p>
                </div>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-green-100 border border-green-500 rounded-sm"></span>
                        <span className="text-gray-600">Normal Area</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-600">Anak Anda</span>
                    </div>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={standardData}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorNormal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="month"
                            type="number"
                            domain={[0, 24]}
                            tickCount={13}
                            stroke="#9CA3AF"
                            fontSize={12}
                            unit=" bln"
                        />
                        <YAxis
                            domain={[0, 20]} // Fixed domain for better view
                            stroke="#9CA3AF"
                            fontSize={12}
                            unit=" kg"
                            width={40}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />

                        {/* KMS Bands - Simplified visual approach using slightly hacky stacked Areas or just specific lines */}
                        {/* Green Zone (Normal: -2SD to +2SD approx for visual simplicity) */}
                        <Area
                            type="monotone"
                            dataKey="sd2pos"
                            stroke="none"
                            fill="#dcfce7" // Green-100
                            fillOpacity={0.5}
                        />
                        <Area
                            type="monotone"
                            dataKey="sd2neg"
                            stroke="none"
                            fill="#ffffff" // Cut out bottom to make band
                            fillOpacity={1}
                        />

                        {/* Reference Lines for visual context (can be improved with accurate WHO Z-score bands) */}
                        <Line type="monotone" dataKey="median" stroke="#16a34a" strokeDasharray="5 5" strokeWidth={1} dot={false} name="Median" />

                        {/* Child Data Line */}
                        {/* We map childHistory separately or merge it. For simple Composability, let's just create a secondary data array or use the same X-axis if points align. 
                Since X-axis is numeric 'month', we can plot a separate Line if we pass the data correctly.
                However, Recharts likes one data source usually. Let's try passing `childHistory` as a separate Scatter or Line if possible, 
                or better, standard Recharts way: merge data? 
                Actually, simpler to just use ComposedChart with default data=standard, and a second Line that uses `childHistory`? 
                Recharts `Line` can take `data` prop directly! */}
                        <Line
                            data={childHistory}
                            type="monotone"
                            dataKey="weight"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            dot={{ r: 4, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
                            activeDot={{ r: 6 }}
                            name="Anak Anda"
                            connectNulls
                        />

                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
