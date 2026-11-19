"use client";

import { useEffect, useState } from "react";
import { links } from "@/data/navigation";
import Button from "./Button";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    // Close the menu with the Escape key
    useEffect(() => {
        if (!open) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open]);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex size-9 items-center justify-center rounded-lg p-1.5"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                >
                    {open ? (
                        <path d="M6 6l12 12M18 6L6 18" />
                    ) : (
                        <path d="M3 7h18M3 12h18M3 17h18" />
                    )}
                </svg>
            </button>

            <div
                id="mobile-menu"
                hidden={!open}
                className="absolute top-full right-0 left-0 z-20 border-b border-line bg-background px-4 pt-2 pb-6 md:px-8"
            >
                <nav aria-label="Mobile">
                    <ul className="flex flex-col">
                        {links.map((link) => (
                            <li key={link.label} className="border-b border-line last:border-b-0">
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-4 text-base leading-7 font-medium"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-4 flex flex-col gap-3">
                    <Button variant="secondary" href="#">
                        Log in
                    </Button>
                    <Button variant="primary" href="#">
                        Start learning
                    </Button>
                </div>
            </div>
        </div>
    );
}
