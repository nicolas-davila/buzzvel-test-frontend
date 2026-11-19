import { links } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="relative border-b border-line">
            <Container className="flex h-[70px] items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
                <Link href="/">
                    <Image src="/luma.svg" alt="Luma" width={54} height={17} />
                </Link>
                <nav aria-label="Main" className="hidden lg:block">
                    <ul className="flex gap-8">
                        {links.map((link) => <li key={link.label}><a href={link.href} className="text-sm leading-6 text-muted">{link.label}</a></li>)}
                    </ul>
                </nav>
                <div className="hidden items-center justify-self-end gap-2 lg:flex">
                    <a href="#" className="px-5 py-2.5 text-sm leading-6 text-muted">
                        Log in
                    </a>
                    <Button variant="primary" href="#" size="sm">
                        Start learning
                    </Button>
                </div>
                <MobileMenu />
            </Container>

        </header>
    );
}
