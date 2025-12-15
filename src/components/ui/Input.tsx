import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = "",
            label,
            error,
            hint,
            leftIcon,
            rightIcon,
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

        const baseInputStyles =
            "w-full h-10 text-sm text-gray-900 bg-gray-50 border rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-xs placeholder:font-normal placeholder:text-gray-400";

        const errorStyles = error
            ? "border-red-500 focus:ring-red-500/50 focus:border-red-500"
            : "border-gray-200";

        const paddingStyles = leftIcon
            ? "pl-11 pr-4"
            : rightIcon
                ? "pl-4 pr-11"
                : "px-5";

        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-xs font-semibold text-gray-700 ml-1"
                    >
                        {label}
                    </label>
                )}
                <div className="relative group">
                    {leftIcon && (
                        <span className="absolute left-3 inset-y-0 flex items-center text-gray-400 group-focus-within:text-primary transition-colors">
                            {leftIcon}
                        </span>
                    )}
                    <input
                        ref={ref}
                        id={inputId}
                        className={`${baseInputStyles} ${errorStyles} ${paddingStyles} ${className}`}
                        {...props}
                    />
                    {rightIcon && (
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            {rightIcon}
                        </span>
                    )}
                </div>
                {error && (
                    <p className="text-xs text-red-500 ml-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">error</span>
                        {error}
                    </p>
                )}
                {hint && !error && (
                    <p className="text-xs text-gray-500 ml-1">{hint}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
