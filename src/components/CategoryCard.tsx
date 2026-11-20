import Tag from "./Tag";

type CategoryCardProps = {
    number: string;
    title: string;
    description: string;
    href: string;
};

export default function CategoryCard({ number, title, description, href }: CategoryCardProps) {
    return (
        <a
            href={href}
            className="group flex min-h-[260px] w-full flex-col justify-between rounded-2xl border border-line bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_24px_rgba(23,27,44,0.06)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
            <div>
                <Tag size="sm">{number}</Tag>
                <h3 className="mt-4 font-heading text-xl leading-8 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </div>
            <span className="mt-6 flex items-center gap-2 text-sm leading-6 font-bold">
                Explore
                <svg
                    viewBox="0 0 24 24"
                    className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
            </span>
        </a>
    );
}
