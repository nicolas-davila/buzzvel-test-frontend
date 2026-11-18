import type { ReactNode } from "react";

type BadgeProps = {
    children: ReactNode;
    className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
    return (
        <div className={`rounded-xl bg-white px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.1)] ${className ?? ""}`}>
            {children}
        </div>
    );
}
