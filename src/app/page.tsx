import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center bg-background">
      <Container className="">
        <h1>Hero Section</h1>
        <Button variant="primary" href="#">Explore courses</Button>
        <Button variant="secondary" href="#">See how it works</Button>
      </Container>
    </main>

  );
}