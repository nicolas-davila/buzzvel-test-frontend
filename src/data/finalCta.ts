export type FinalCtaData = {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
};

export const finalCta: FinalCtaData = {
    title: "What will you learn next?",
    description: "Start with one course. Build from there.",
    primaryLabel: "Explore all courses",
    primaryHref: "#",
    secondaryLabel: "Join Luma",
    secondaryHref: "#",
};

// Simple decorative shapes (position, size and look of each one).
// Positions come from the Figma frame (1280px wide, 469px tall).
// They only show from the tablet size up (see FinalCTA.tsx).
export const shapes: string[] = [
    // outlined circle, top left
    "top-5 left-6 size-[107px] rounded-full border-[1.5px] border-accent",
    // outlined rounded square, top
    "top-11 left-80 size-[62px] rotate-[8deg] rounded-2xl border-[1.5px] border-accent",
    // small outlined circle, top right
    "top-11 right-[29%] size-7 rounded-full border-[1.5px] border-accent",
    // big filled square, top right corner
    "top-0 -right-1 h-[112px] w-32 rotate-[8deg] rounded-2xl bg-accent",
    // filled rounded square cut by the left edge
    "top-[247px] -left-9 size-14 -rotate-12 rounded-lg bg-accent",
    // small circle with border, left
    "top-[217px] left-[144px] size-[27px] rounded-full border-[1.5px] border-accent bg-accent/80",
    // big filled circle, bottom left
    "top-[350px] left-14 size-[120px] rounded-full bg-accent",
    // "B" shaped block, bottom
    "top-[395px] left-[318px] h-12 w-7 -rotate-[15deg] rounded-l-md rounded-r-[14px] bg-accent",
    // small outlined circle, bottom right
    "top-[430px] right-8 size-[30px] rounded-full border-[1.5px] border-accent",
];
