import { categories } from "@/data/categories";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import CategoryCard from "./CategoryCard";

export default function Categories() {
    return (
        <section id="categories" className="bg-white py-16 md:py-25">
            <Container className="flex flex-col gap-10">
                <SectionHeading
                    eyebrow="Find your next skill"
                    title="Learn something worth knowing."
                    description="Short, practical courses designed around skills you can put to work immediately."
                />
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <li key={category.number} className="flex">
                            <CategoryCard
                                number={category.number}
                                title={category.title}
                                description={category.description}
                                href={category.href}
                            />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
