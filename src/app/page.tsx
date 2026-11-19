import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedCourse from "@/components/FeaturedCourse";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import People from "@/components/People";

export default function Home() {
  return (
    <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <People />
    </main>
  );
}