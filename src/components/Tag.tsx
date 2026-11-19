import type { ReactNode } from "react";

type TagProps = {
    children: ReactNode;
    size?: "sm" | "md";
};

const baseClasses = "inline-flex items-center bg-accent-soft font-bold text-primary";

const sizeClasses = {
    sm: "h-6 rounded-md px-2 text-xs leading-4",
    md: "h-8 rounded-lg px-1 text-sm leading-6",
};

export default function Tag({ children, size = "md" }: TagProps) {
    return (
        <span className={`${baseClasses} ${sizeClasses[size]}`}>
            {children}
        </span>
    );
}
