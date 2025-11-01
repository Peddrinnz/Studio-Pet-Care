import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-(--color-background)">
      <Header />
      <Hero />
      <Services />
    </div>
  )
}