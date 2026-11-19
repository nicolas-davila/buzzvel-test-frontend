import { steps } from "@/data/howItWorks";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 md:py-25">
            <Container>
                <SectionHeading
                    align="center"
                    eyebrow="How Luma works"
                    title="Less browsing. More learning."
                />
                <ol className="mt-12 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-10 md:pb-8 lg:gap-20">
                    {steps.map((step, index) => (
                        <li key={step.number} className="relative">
                            <span className="relative block size-14" aria-hidden="true">
                                <span className={`absolute inset-0 ${step.boxClassName}`} />
                                <span className={`absolute ${step.shapeClassName}`} />
                            </span>
                            {index < steps.length - 1 && (
                                <span
                                    className="absolute top-7 left-14 hidden h-px w-[calc(100%-16px)] bg-line md:block lg:w-[calc(100%+24px)]"
                                    aria-hidden="true"
                                />
                            )}
                            <p className="mt-6 text-xs leading-4 font-semibold uppercase tracking-[0.12em] text-muted">
                                Step {step.number}
                            </p>
                            <h3 className="mt-2 font-heading text-xl leading-8 font-bold">
                                {step.title}
                            </h3>
                            <p className="mt-3.5 text-base leading-7 text-muted">
                                {step.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
