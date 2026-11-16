import {links} from "@/data/navigation";

export default function Header() {
    return (
        <nav aria-label="Main">
            <ul className="flex flex-row flex-wrap">
                {links.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}
            </ul>
        </nav>
    );
}
