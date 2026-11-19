import Image from "next/image";
import { featuredCourse } from "@/data/featuredCourse";
import Container from "./Container";
import Button from "./Button";

export default function FeaturedCourse() {
    return (
        <section id="featured-course" className="bg-primary py-16 text-white md:py-25">
            <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-15">
                <div className="relative aspect-[538/408]">
                    <Image
                        src={featuredCourse.image.src}
                        alt={featuredCourse.image.alt}
                        fill
                        sizes="(min-width: 1024px) 538px, 100vw"
                        className="rounded-2xl object-cover"
                    />
                    <span className="absolute -top-3 -left-4 rounded-md bg-highlight px-3 py-1.5 text-xs leading-4 font-semibold uppercase tracking-[0.12em] text-foreground">
                        {featuredCourse.label}
                    </span>
                </div>

                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em]">
                        {featuredCourse.eyebrow}
                    </p>
                    <h2 className="mt-4 font-heading text-[32px] leading-10 font-extrabold tracking-tight md:text-[48px] md:leading-[56px]">
                        {featuredCourse.title}
                    </h2>
                    <p className="mt-5 text-base leading-7">
                        {featuredCourse.description}
                    </p>
                    <p className="mt-6 text-base leading-7">
                        {featuredCourse.instructor}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-3">
                        {featuredCourse.details.map((detail) => (
                            <li
                                key={detail}
                                className="rounded-lg border border-line px-3.5 py-1.5 text-sm leading-6"
                            >
                                {detail}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Button variant="accent" href={featuredCourse.primaryHref}>
                            View course
                        </Button>
                        <a
                            href={featuredCourse.secondaryHref}
                            className="inline-flex items-center gap-2 px-4 py-3.5 text-sm leading-6 font-bold"
                        >
                            Browse all courses
                            <svg
                                viewBox="0 0 24 24"
                                className="size-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
