import { links } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";

export default function Header() {
    return (
        <header className="border-b border-line">
            <Container className="grid h-[70px] grid-cols-[1fr_auto_1fr] items-center">
                <Link href="/">
                    <Image src="/luma.svg" alt="Luma" width={54} height={17} />
                </Link>
                <nav aria-label="Main">
                    <ul className="flex gap-8">
                        {links.map((link) => <li key={link.label}><a href={link.href} className="text-sm leading-6 text-muted">{link.label}</a></li>)}
                    </ul>
                </nav>
                <div className="flex items-center justify-self-end gap-2">
                    <a href="#" className="px-5 py-2.5 text-sm leading-6 text-muted">
                        Log in
                    </a>
                    <Button variant="primary" href="#" size="sm">
                        Start learning
                    </Button>
                </div>
            </Container>

        </header>
    );
}
