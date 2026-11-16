import { footerColumns } from "@/data/footer";

export default function Footer() {
    return (
        <footer>
            <div>
                <a href="#">Luma. Slogan</a>
                <p>Practical learning for curious people.</p>
            </div>
            <nav aria-label="Footer">
                {footerColumns.map((footerColumn) =>
                        <div key={footerColumn.title}>
                            <h3>{footerColumn.title}</h3>
                            <ul>
                                {footerColumn.links.map((link) =>
                                        <li key={link.label}>
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
            </nav>
            <p>© 2026 Luma Learning</p>
        </footer>
    );
}