import { contact, contactInfo } from "@/data/contact";
import Container from "./Container";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="border-y border-line bg-white py-16 md:py-25">
            <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-10 lg:w-[480px]">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                            {contact.eyebrow}
                        </p>
                        <h2 className="mt-4 font-heading text-[32px] leading-10 font-extrabold tracking-tight md:text-[40px] md:leading-[48px]">
                            {contact.title}
                        </h2>
                        <p className="mt-4 text-base leading-7 text-muted">
                            {contact.description}
                        </p>
                    </div>

                    <ul className="flex flex-col gap-4">
                        {contactInfo.map((info) => (
                            <li
                                key={info.label}
                                className="flex items-center gap-4 rounded-xl bg-background px-5 py-6"
                            >
                                <span
                                    className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft p-2.5 text-primary"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="size-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {info.iconPaths.map((path) => (
                                            <path key={path} d={path} />
                                        ))}
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-xs leading-4 font-bold">{info.label}</p>
                                    {info.href ? (
                                        <a href={info.href} className="text-sm leading-6 text-primary">
                                            {info.detail}
                                        </a>
                                    ) : (
                                        <p className="text-sm leading-6 text-muted">{info.detail}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <ContactForm />
            </Container>
        </section>
    );
}
