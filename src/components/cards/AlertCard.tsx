import Link from "next/link";

interface AlertItem {
    id: string;
    childName: string;
    age: string;
    indicator: string;
    value: number;
    status: "buruk" | "kurang";
}

interface AlertCardProps {
    title: string;
    count: number;
    items: AlertItem[];
    viewAllHref: string;
}

export function AlertCard({ title, count, items, viewAllHref }: AlertCardProps) {
    const getStatusStyle = (status: "buruk" | "kurang") => {
        if (status === "buruk") {
            return {
                bg: "bg-red-100",
                text: "text-red-700",
                label: "GIZI BURUK",
                dot: "bg-red-500",
            };
        }
        return {
            bg: "bg-orange-100",
            text: "text-orange-700",
            label: "GIZI KURANG",
            dot: "bg-orange-500",
        };
    };

    return (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-orange-200">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-600">warning</span>
                    <h3 className="font-bold text-gray-900">{title}</h3>
                </div>
                <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {count}
                </span>
            </div>

            {/* Items */}
            <div className="divide-y divide-orange-100">
                {items.map((item) => {
                    const style = getStatusStyle(item.status);
                    return (
                        <div key={item.id} className="p-4 bg-white hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 bg-gray-100 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-gray-500">child_care</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{item.childName}</p>
                                        <p className="text-xs text-gray-500">{item.age}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-600">{item.indicator}:</span>
                                        <span className="text-sm font-bold text-gray-900">{item.value}</span>
                                    </div>
                                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                                        <span className={`size-1.5 rounded-full ${style.dot}`}></span>
                                        {style.label}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3 flex gap-2 justify-end">
                                <Link
                                    href={`/nakes/patients/${item.id}`}
                                    className="text-xs font-medium text-primary hover:underline"
                                >
                                    Review
                                </Link>
                                <span className="text-gray-300">|</span>
                                <Link
                                    href={`/nakes/patients/${item.id}/intervention`}
                                    className="text-xs font-medium text-orange-600 hover:underline"
                                >
                                    Intervensi
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer */}
            <div className="p-3 bg-white border-t border-orange-100">
                <Link
                    href={viewAllHref}
                    className="text-sm font-medium text-primary hover:underline flex items-center justify-center gap-1"
                >
                    Lihat Semua
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
}
