import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedCourse from "@/components/FeaturedCourse";

export default function Home() {
  return (
    <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedCourse />
    </main>
  );
}