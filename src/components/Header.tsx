import { links } from "@/data/navigation";
import Container from "./Container";

export default function Header() {
    return (
        <header className="border-b border-line">
            <Container className="grid h-[70px] grid-cols-[1fr_auto_1fr] items-center">
                <a href="/">Luma.</a>
                <nav aria-label="Main">
                    <ul className="flex gap-8">
                        {links.map((link) => <li key={link.label}><a href={link.href} className="text-sm leading-6 text-muted">{link.label}</a></li>)}
                    </ul>
                </nav>
                <div>
                    Log in
                </div>
            </Container>

        </header>
    );
}
