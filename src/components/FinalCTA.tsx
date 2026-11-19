import Image from "next/image";
import { avatars } from "@/data/hero";
import { finalCta, shapes } from "@/data/finalCta";
import Container from "./Container";
import Button from "./Button";

// All icons share the same drawing style: orange line, 1.5px, round ends
const iconProps = {
    fill: "none",
    stroke: "var(--color-accent)",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
};

export default function FinalCTA() {
    return (
        <section id="final-cta" className="relative overflow-hidden bg-[#FFF1C2] py-16 md:py-25">
            {shapes.map((shape) => (
                <span
                    key={shape}
                    className={`pointer-events-none absolute hidden md:block ${shape}`}
                    aria-hidden="true"
                />
            ))}

            {/* Spark icon: a drop with small rays around it (61 x 61) */}
            <svg
                viewBox="0 0 61 61"
                className="pointer-events-none absolute top-[77px] right-[16%] hidden size-[61px] md:block"
                {...iconProps}
            >
                <path
                    d="M30.7 28.1C34 33 38.4 37 38.4 41a7.7 7.7 0 0 1-15.4 0c0-4 4.4-8 7.7-12.9z"
                    fill="var(--color-accent)"
                />
                <path d="M30.7 10.2v10.2M5 43.5h10.2M46 43.5h10.2M9 19.2l7.7 7.7M52.4 19.2l-7.7 7.7" />
            </svg>

            {/* Cube icon (80 x 80) */}
            <svg
                viewBox="0 0 80 80"
                className="pointer-events-none absolute top-[220px] right-[6%] hidden size-20 md:block"
                {...iconProps}
            >
                <path d="M40 10l30 15v30L40 70 10 55V25z" />
                <path d="M10 25l30 15 30-15M40 40v30" />
            </svg>

            {/* Columns icon (48 x 48) */}
            <svg
                viewBox="0 0 48 48"
                className="pointer-events-none absolute top-[381px] right-[21%] hidden size-12 md:block"
                {...iconProps}
            >
                <rect x="4" y="10" width="40" height="28" rx="3" />
                <rect x="10" y="18.6" width="4" height="10.1" rx="2" strokeWidth={1} />
                <rect x="34" y="18.6" width="4" height="10.1" rx="2" strokeWidth={1} />
            </svg>

            <Container className="relative max-w-[720px] text-center">
                <div className="flex justify-center -space-x-2" aria-hidden="true">
                    {avatars.map((avatar) => (
                        <Image
                            key={avatar.src}
                            src={avatar.src}
                            alt=""
                            width={40}
                            height={40}
                            className="size-10 rounded-full border-2 border-[#FFF1C2]"
                        />
                    ))}
                </div>
                <h2 className="mt-6 font-heading text-[36px] leading-[44px] font-extrabold tracking-tight md:text-[56px] md:leading-[64px]">
                    {finalCta.title}
                </h2>
                <p className="mt-4 text-lg">{finalCta.description}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button variant="primary" href={finalCta.primaryHref}>
                        {finalCta.primaryLabel}
                    </Button>
                    <Button variant="secondary" href={finalCta.secondaryHref}>
                        {finalCta.secondaryLabel}
                    </Button>
                </div>
            </Container>
        </section>
    );
}
