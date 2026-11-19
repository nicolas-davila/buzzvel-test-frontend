import Image from "next/image";
import { testimonial, stats } from "@/data/testimonial";
import Container from "./Container";

export default function Testimonial() {
    return (
        <section id="testimonial" className="bg-white py-16 md:py-25">
            <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
                <figure className="max-w-[600px]">
                    <svg
                        viewBox="0 0 24 22"
                        className="h-[22px] w-6 fill-primary"
                        aria-hidden="true"
                    >
                        <polygon points="1,0 10,0 7,13 4,13" />
                        <polygon points="14,0 23,0 20,13 17,13" />
                    </svg>
                    <blockquote className="mt-4 font-heading text-[22px] leading-8 font-semibold tracking-tight md:text-[30px] md:leading-11 md:tracking-[-0.025em]">
                        <p>{testimonial.quote}</p>
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                        <Image
                            src={testimonial.author.image.src}
                            alt={testimonial.author.image.alt}
                            width={48}
                            height={48}
                            className="size-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-base leading-7 font-bold">{testimonial.author.name}</p>
                            <p className="text-sm leading-6 text-muted">{testimonial.author.role}</p>
                        </div>
                    </figcaption>
                </figure>

                <ul className="flex flex-col gap-5 lg:w-[401px] lg:border-l lg:border-line lg:pl-12">
                    {stats.map((stat) => (
                        <li key={stat.label}>
                            <p className="font-heading text-[40px] leading-[48px] font-extrabold tracking-tight text-primary md:text-[64px] md:leading-[70px]">
                                {stat.value}
                            </p>
                            <p className="text-sm leading-6 text-subtle">{stat.label}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
