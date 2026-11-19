import type { ReactNode } from "react";

type ButtonProps = {
    variant: "primary" | "secondary";
    size?: "sm" | "md";
    children: ReactNode;
    href?: string; 
};

const baseClasses = "inline-block rounded-lg text-center text-sm leading-6 font-bold transition-colors duration-200 motion-reduce:transition-none";

const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-white text-foreground border border-line hover:bg-background",
};

const sizeClasses = {
    sm: "px-5 py-2.5",
    md: "px-7 py-3.5",
};

export default function Button( {variant, size="md", children, href="#"}: ButtonProps) {
    return (
        <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
            {children}
        </a>
    );
}