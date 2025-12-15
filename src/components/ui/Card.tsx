import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "elevated" | "outlined" | "filled";
    padding?: "none" | "sm" | "md" | "lg";
    hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            className = "",
            variant = "elevated",
            padding = "md",
            hover = false,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles = "rounded-2xl transition-all duration-200";

        const variants = {
            elevated:
                "bg-white border border-gray-100 shadow-sm",
            outlined:
                "bg-transparent border border-gray-200",
            filled:
                "bg-gray-50 border border-transparent",
        };

        const paddings = {
            none: "",
            sm: "p-4",
            md: "p-6",
            lg: "p-8",
        };

        const hoverStyles = hover
            ? "hover:shadow-md hover:border-primary/20 cursor-pointer"
            : "";

        return (
            <div
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

// Card Header Component
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> { }

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className = "", children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`flex items-center justify-between mb-4 ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

CardHeader.displayName = "CardHeader";

// Card Title Component
interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4";
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className = "", as: Tag = "h3", children, ...props }, ref) => {
        return (
            <Tag
                ref={ref}
                className={`font-bold text-lg text-gray-900 ${className}`}
                {...props}
            >
                {children}
            </Tag>
        );
    }
);

CardTitle.displayName = "CardTitle";

// Card Content Component
interface CardContentProps extends HTMLAttributes<HTMLDivElement> { }

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ className = "", children, ...props }, ref) => {
        return (
            <div ref={ref} className={className} {...props}>
                {children}
            </div>
        );
    }
);

CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
