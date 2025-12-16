"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface DonutChartProps {
    data: {
        name: string;
        value: number;
        color: string;
    }[];
    title: string;
}

export function DonutChart({ data, title }: DonutChartProps) {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height={250} minWidth={200}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={2}
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                            labelLine={false}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => [`${value} anak`, ""]}
                            contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="mt-4 space-y-2">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <span className="size-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                            <span className="text-gray-600">{item.name}</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                            {item.value} ({((item.value / total) * 100).toFixed(0)}%)
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
