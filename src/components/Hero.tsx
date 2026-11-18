import { avatars } from "@/data/hero"
import Image from "next/image"
import Container from "./Container"
import Button from "./Button"

export default function Hero() {
    return (
        <section className="py-25">
            <Container className="grid gap-15 lg:grid-cols-[560fr_500fr] lg:items-start">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">LEARN AT YOUR OWN PACE</p>
                    <h1 className="font-heading text-[64px] leading-[70px] font-extrabold tracking-tight mt-4">
                        Build skills that actually move you forward.
                    </h1>
                    <p className="mt-6 max-w-[480px] text-lg text-muted">
                        Practical courses taught by people who do the work every day.
                        Learn design, technology, business and more — one focused lesson at a time.
                    </p>
                    <div className="mt-8 flex gap-3">
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
                <div className="relative aspect-[500/520]">
                    <div className="absolute top-6 right-[-39px] h-[468px] w-[89px] rounded-2xl bg-accent" aria-hidden="true">
                    </div>
                    <Image
                        src="/hero.jpg"
                        alt="Smiling woman with glasses working on a laptop"
                        fill
                        sizes="(min-width: 1024px) 500px, 100vw"
                        className="rounded-3xl object-cover"
                        preload
                    />
                </div>
            </Container>
        </section>
    )
}