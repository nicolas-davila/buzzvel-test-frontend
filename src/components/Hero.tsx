import { avatars } from "@/data/hero"
import Image from "next/image"
import Container from "./Container"
import Button from "./Button"

export default function Hero() {
    return (
        <section>
            <Container>
                <p>LEARN AT YOUR OWN PACE</p>
                <h1>Build skills that actually move you forward.</h1>
                <p>
                    Practical courses taught by people who do the work every day.
                    Learn design, technology, business and more — one focused lesson at a time.
                </p>
                <div>
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

            </Container>
        </section>
    )
}