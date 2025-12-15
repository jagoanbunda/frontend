import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "success" | "warning" | "danger" | "info" | "neutral";
    size?: "sm" | "md";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className = "", variant = "neutral", size = "md", children, ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center font-semibold rounded-full";

        const variants = {
            success: "bg-green-50 text-green-700 border border-green-100",
            warning: "bg-orange-50 text-orange-700 border border-orange-100",
            danger: "bg-red-50 text-red-700 border border-red-100",
            info: "bg-blue-50 text-blue-700 border border-blue-100",
            neutral: "bg-gray-100 text-gray-600 border border-gray-200",
        };

        const sizes = {
            sm: "px-2 py-0.5 text-[10px]",
            md: "px-3 py-1 text-xs",
        };

        return (
            <span
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = "Badge";

export { Badge };
