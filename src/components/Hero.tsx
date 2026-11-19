import { avatars } from "@/data/hero"
import Image from "next/image"
import Container from "./Container"
import Button from "./Button"
import Badge from "./Badge"
import Tag from "./Tag"

export default function Hero() {
    return (
        <section className="overflow-x-clip py-10 md:py-16 lg:py-25">
            <Container className="grid gap-10 lg:grid-cols-[560fr_500fr] lg:gap-15 lg:items-start">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">LEARN AT YOUR OWN PACE</p>
                    <h1 className="font-heading text-[40px] leading-[44px] font-extrabold tracking-tight mt-4 md:text-[52px] md:leading-[58px] lg:text-[64px] lg:leading-[70px]">
                        Build skills that actually move you forward.
                    </h1>
                    <p className="mt-6 max-w-[480px] text-lg text-muted">
                        Practical courses taught by people who do the work every day.
                        Learn design, technology, business and more — one focused lesson at a time.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button variant="primary" href="#">Explore courses</Button>
                        <Button variant="secondary" href="#">See how it works</Button>
                    </div>
                    <div className="mt-8 flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {avatars.map((avatar) => (
                                <Image
                                    key={avatar.src}
                                    src={avatar.src}
                                    alt=""
                                    className="rounded-full border-2 border-background"
                                    width={32}
                                    height={32}
                                />
                            ))}
                        </div>
                        <p className="text-sm leading-6 text-muted"><strong className="text-foreground">Trusted by 24,000+</strong> learners</p>
                    </div>
                </div>
                {/* On mobile the photo comes first (order-first); the HTML keeps the h1 first */}
                <div className="relative order-first aspect-[500/520] w-full max-w-[500px] justify-self-center lg:order-none lg:justify-self-auto">
                    <div className="absolute top-6 -right-3 h-[88%] w-[60px] rounded-2xl bg-accent lg:right-[-39px] lg:h-[468px] lg:w-[89px]" aria-hidden="true">
                    </div>
                    <div className="absolute top-[76%] -left-4 size-20 rounded-full bg-accent-soft lg:top-[403px] lg:-left-[45px] lg:size-[106px]" aria-hidden="true"></div>
                    <Image
                        src="/hero.jpg"
                        alt="Smiling woman with glasses working on a laptop"
                        fill
                        sizes="(min-width: 1024px) 500px, 100vw"
                        className="rounded-3xl object-cover"
                        preload
                    />
                    <Badge className="absolute top-3 -left-1 flex items-center gap-3 lg:top-4 lg:-left-[22px]">
                        <Tag>120+</Tag>
                        <span className="text-sm leading-6 text-foreground">expert-led courses</span>
                    </Badge>
                    <Badge className="absolute -right-2 bottom-4 flex items-center gap-2 lg:-right-[57px] lg:bottom-[35px]">
                        <span className="flex gap-0.5" aria-hidden="true">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <svg key={index} viewBox="0 0 24 24" className="size-3.5 fill-current text-yellow-400 p-0.5" aria-hidden="true">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </span>
                        <span className="text-sm leading-6 text-foreground">4.9 avg rating</span>
                    </Badge>
                </div>
            </Container>
        </section>
    )
}