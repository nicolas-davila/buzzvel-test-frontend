export type FeaturedCourseData = {
    label: string;
    eyebrow: string;
    title: string;
    description: string;
    instructor: string;
    details: string[];
    image: {
        src: string;
        alt: string;
    };
    primaryHref: string;
    secondaryHref: string;
};

export const featuredCourse: FeaturedCourseData = {
    label: "Featured course",
    eyebrow: "Most popular this month",
    title: "Designing products people understand.",
    description:
        "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
    instructor: "with Maya Chen · Senior Product Designer",
    details: ["8 lessons", "2h 40min", "Intermediate"],
    image: {
        src: "/course.jpg",
        alt: "Designer working on product prototypes at a desk",
    },
    primaryHref: "#",
    secondaryHref: "#",
};
