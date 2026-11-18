import type { ReactNode } from "react";

type ButtonProps = {
    variant: "primary" | "secondary";
    children: ReactNode;
    href?: string; 
};

const baseClasses = "inline-block rounded-lg px-7 py-3.5 text-center text-sm leading-6 font-bold";

const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-white text-foreground border border-line",
};

export default function Button( {variant, children, href}: ButtonProps) {
    return (
        <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </a>
    );
}