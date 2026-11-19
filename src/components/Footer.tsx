import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/data/footer";
import Container from "./Container";

export default function Footer() {
    return (
        <footer className="bg-foreground pt-16 pb-10 text-white md:pt-20">
            <Container>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 md:gap-10 lg:grid-cols-[446px_240px_240px_1fr]">
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/" aria-label="Luma home">
                            <Image
                                src="/luma.svg"
                                alt="Luma"
                                width={54}
                                height={17}
                                className="brightness-0 invert"
                            />
                        </Link>
                        <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/60">
                            Practical learning for curious people.
                        </p>
                    </div>

                    {footerColumns.map((footerColumn) => (
                        <nav key={footerColumn.title} aria-label={footerColumn.title}>
                            <h3 className="text-xs leading-4 font-semibold uppercase tracking-[0.12em]">
                                {footerColumn.title}
                            </h3>
                            <ul className="mt-5 flex flex-col gap-3">
                                {footerColumn.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm leading-6 text-white/60 transition-colors hover:text-white motion-reduce:transition-none"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                <p className="mt-12 border-t border-white/15 pt-8 text-center text-xs leading-4 text-white/60 md:mt-16 md:text-left">
                    © 2026 Luma Learning
                </p>
            </Container>
        </footer>
    );
}
