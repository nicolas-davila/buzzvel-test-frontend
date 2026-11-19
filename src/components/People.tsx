import Image from "next/image";
import { people, photoColumns } from "@/data/people";
import Container from "./Container";
import Button from "./Button";

export default function People() {
    return (
        <section id="people" className="overflow-x-clip py-16 md:py-25">
            <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-15">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                        {people.eyebrow}
                    </p>
                    <h2 className="mt-2 font-heading text-[32px] leading-10 font-extrabold tracking-tight md:text-[48px] md:leading-[56px]">
                        {people.title}
                    </h2>
                    <p className="mt-8 text-lg text-muted">
                        {people.description}
                    </p>
                    <div className="mt-8">
                        <Button variant="secondary" href={people.buttonHref}>
                            {people.buttonLabel}
                        </Button>
                    </div>
                </div>

                <div className="relative mx-auto h-[325px] w-[325px] sm:h-[500px] sm:w-[500px] lg:mr-0 lg:ml-auto">
                    <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 scale-[0.65] sm:scale-100">
                        <div className="absolute inset-0 rounded-full bg-accent-soft" aria-hidden="true" />
                        <div className="absolute inset-0 flex items-center justify-center gap-4">
                            {photoColumns.map((column, columnIndex) => (
                                <div key={columnIndex} className="flex flex-col items-end gap-3">
                                    {column.map((photo) => (
                                        <Image
                                            key={photo.src}
                                            src={photo.src}
                                            alt={photo.alt}
                                            width={photo.width}
                                            height={photo.height}
                                            className="rounded-sm object-cover shadow-[0_0_3px_rgba(0,0,0,0.07),0_3px_5px_-1px_rgba(0,0,0,0.1)]"
                                            style={{ width: photo.width, height: photo.height }}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
