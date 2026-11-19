type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
};

const alignClasses = {
    left: "max-w-[560px]",
    center: "mx-auto text-center",
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
    return (
        <div className={alignClasses[align]}>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                {eyebrow}
            </p>
            <h2 className="mt-4 font-heading text-[32px] leading-10 font-extrabold tracking-tight md:text-[48px] md:leading-[56px]">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-lg text-muted">
                    {description}
                </p>
            )}
        </div>
    );
}
