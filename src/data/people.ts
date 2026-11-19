export type PeoplePhoto = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type PeopleData = {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
};

export const people: PeopleData = {
    eyebrow: "The people",
    title: "Meet international students & teachers",
    description:
        "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
    buttonLabel: "Explore teachers and students",
    buttonHref: "#",
};

// Each inner array is one column of the collage (sizes in px, from the Figma)
export const photoColumns: PeoplePhoto[][] = [
    [
        { src: "/people-1.jpg", alt: "Student raising a hand in class", width: 103, height: 154 },
        { src: "/people-2.jpg", alt: "Two students working together at a table", width: 138, height: 207 },
    ],
    [
        { src: "/people-3.jpg", alt: "Student reading a book with an apple", width: 103, height: 170 },
        { src: "/people-4.jpg", alt: "Teacher and student with sheet music", width: 103, height: 170 },
        { src: "/people-5.jpg", alt: "Man studying with a book and a laptop", width: 103, height: 128 },
    ],
    [
        { src: "/people-6.jpg", alt: "Graduate holding a diploma", width: 103, height: 137 },
        { src: "/people-7.jpg", alt: "Woman studying at a desk", width: 103, height: 138 },
        { src: "/people-8.jpg", alt: "Teacher in an online class on a computer", width: 103, height: 155 },
    ],
    [
        { src: "/people-9.jpg", alt: "Smiling student holding books", width: 128, height: 204 },
        { src: "/people-10.jpg", alt: "Woman in a hijab holding a coffee cup", width: 128, height: 133 },
    ],
];
