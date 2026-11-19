export type Stat = {
    value: string;
    label: string;
};

export type TestimonialData = {
    quote: string;
    author: {
        name: string;
        role: string;
        image: {
            src: string;
            alt: string;
        };
    };
};

export const testimonial: TestimonialData = {
    quote: "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
    author: {
        name: "Alex Morgan",
        role: "Product Manager",
        image: {
            src: "/avatar-alex.jpg",
            alt: "Alex Morgan",
        },
    },
};

export const stats: Stat[] = [
    { value: "24K+", label: "active learners" },
    { value: "120+", label: "expert-led courses" },
    { value: "92%", label: "complete their first course" },
];
