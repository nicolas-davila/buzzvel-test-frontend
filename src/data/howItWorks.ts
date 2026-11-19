export type Step = {
    number: string;
    title: string;
    description: string;
    boxClassName: string;
    shapeClassName: string;
};

export const steps: Step[] = [
    {
        number: "01",
        title: "Choose your focus",
        description: "Find courses based on the skill you want to build, not endless content categories.",
        boxClassName: "rounded-full bg-accent-soft",
        shapeClassName: "top-2 left-2 size-6 rounded-md bg-primary",
    },
    {
        number: "02",
        title: "Learn from experience",
        description: "Follow concise lessons created by professionals who use these skills.",
        boxClassName: "-rotate-12 rounded-xl bg-accent",
        shapeClassName: "top-6 left-6 size-7 rounded-full bg-[#FF704D]",
    },
    {
        number: "03",
        title: "Put it into practice",
        description: "Every course includes practical exercises designed to turn knowledge into action.",
        boxClassName: "rounded-xl bg-[#FFF1C2]",
        shapeClassName: "top-7 left-2 size-5 rounded-full bg-[#E9D659]",
    },
];
