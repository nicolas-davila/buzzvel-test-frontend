import type { ReactNode } from "react";

type TagProps = {
    children: ReactNode;
};

export default function Tag({ children }: TagProps) {
    return (
        <span className="inline-flex h-8 items-center rounded-lg bg-accent-soft px-1 text-sm leading-6 font-bold text-primary">
            {children}
        </span>
    );
}
