export type ContactInfo = {
    label: string;
    detail: string;
    href?: string;
    iconPaths: string[];
};

export type ContactData = {
    eyebrow: string;
    title: string;
    description: string;
    formTitle: string;
    formDescription: string;
    successMessage: string;
};

export const contact: ContactData = {
    eyebrow: "Contact",
    title: "Get in touch",
    description:
        "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
    formTitle: "Contact us",
    formDescription: "Fill out the fields and we will get in touch.",
    successMessage: "Thanks! Your message was sent. We will reply within 24 hours.",
};

export const contactInfo: ContactInfo[] = [
    {
        label: "Email",
        detail: "contact@luma.com",
        href: "mailto:contact@luma.com",
        iconPaths: [
            "M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z",
            // three dots inside the chat bubble (zero-length lines with round caps)
            "M8 11.5h.01",
            "M12 11.5h.01",
            "M16 11.5h.01",
        ],
    },
    {
        label: "Response Time",
        detail: "Up to 24 hours on business days",
        iconPaths: [
            "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
            "M12 7v5l3 2",
        ],
    },
];
