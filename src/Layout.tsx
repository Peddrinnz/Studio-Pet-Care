import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Veterinary from "./components/veterinary";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-(--color-background)">
      <Header />
      <Hero />
      <Services />
      <Veterinary />
      <Reviews />
    </div>
  )
}