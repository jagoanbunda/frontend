"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TrendChartProps {
    data: {
        month: string;
        normal: number;
        kurang: number;
        buruk: number;
    }[];
    title: string;
}

export function TrendChart({ data, title }: TrendChartProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height={250} minWidth={200}>
                    <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="month"
                            stroke="#9CA3AF"
                            fontSize={12}
                            tickLine={false}
                        />
                        <YAxis
                            stroke="#9CA3AF"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="normal"
                            stroke="#4CAF50"
                            strokeWidth={2}
                            dot={{ fill: "#4CAF50", strokeWidth: 0, r: 4 }}
                            name="Normal"
                        />
                        <Line
                            type="monotone"
                            dataKey="kurang"
                            stroke="#FF9800"
                            strokeWidth={2}
                            dot={{ fill: "#FF9800", strokeWidth: 0, r: 4 }}
                            name="Kurang"
                        />
                        <Line
                            type="monotone"
                            dataKey="buruk"
                            stroke="#F44336"
                            strokeWidth={2}
                            dot={{ fill: "#F44336", strokeWidth: 0, r: 4 }}
                            name="Buruk"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-[#4CAF50]"></span>
                    <span className="text-gray-600">Normal</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-[#FF9800]"></span>
                    <span className="text-gray-600">Kurang</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-[#F44336]"></span>
                    <span className="text-gray-600">Buruk</span>
                </div>
            </div>
        </div>
    );
}
