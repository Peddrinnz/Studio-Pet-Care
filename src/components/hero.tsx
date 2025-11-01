import catImage from '../assets/cat.png';
import { FaBone, FaPaw } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${catImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          filter: 'brightness(0.9) saturate(1.4)',
        }}
      />

      <div className="relative z-20 max-w-[1440px] mx-auto h-full flex items-center">
        <div className="px-8 max-w-xl">
          <h1 className="text-5xl font-semibold mb-4">
            Cuidamos do seu pet com amor e dedicação
          </h1>
          <p className="text-xl mb-8 font-regular">
            Banho | Tosa | Consultas
          </p>
          <button className="bg-(--button-primary) text-(--color-primary) px-8 py-3 rounded-md hover:bg-(--color-hover) transition-colors cursor-pointer">
            Agendar horário
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="relative w-full h-full">
          <FaPaw className="hidden md:block absolute top-16 right-150 w-12 h-12 text-(--color-primary) rotate-320" />
          <FaBone className="hidden md:block absolute top-120 right-160 w-12 h-12 text-(--color-primary) rotate-45" />
          <FaPaw className="hidden md:block absolute top-48 right-16 w-12 h-12 text-(--color-primary) rotate-45" />
          <FaBone className="hidden md:block absolute top-48 right-180 w-12 h-12 text-(--color-primary) rotate-320" />
        </div>
      </div>
    </section>
  )
}