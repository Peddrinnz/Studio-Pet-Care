import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-(--color-background)">
      <Header />
      <Hero />

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#0A3D62] mb-4">Bem-vindo ao Studio Pet Care</h1>
      </main>
    </div>
  )
}