import type {NavigationLink} from "@/data/navigation"

export type FooterColumn = {
    title: string;
    links: NavigationLink[];
}

export const footerColumns: FooterColumn[] = [
    {
        title: "Explore",
        links: [
            { label: "Courses", href: "#" },
            { label: "Categories", href: "#" },
            { label: "Instructors", href: "#" },
            { label: "For Teams", href: "#" },
        ],
    },

    {
        title: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Journal", href: "#" },
        ],
    },

    {
        title: "Support",
        links: [
            { label: "Help Center", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
        ],
    },
];