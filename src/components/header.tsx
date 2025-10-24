"use client"

import Logo from "../assets/Logotipo.svg"

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center h-14 px-8">
          <div className="flex-shrink-0">
            <img className="h-9 w-auto" src={Logo} alt="Studio Pet Care" />
          </div>
          
          <nav className="flex items-center space-x-8">
            <a 
              href="/inicio" 
              className="inline-flex text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-hover)]"
            >
              Inicio
            </a>
            
            <div className="relative inline-flex items-center">
              <a 
                href="/servicos"
                className="inline-flex items-center text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-hover)]"
              >
                <span>Serviços</span>
                <svg 
                  className="ml-1.5 w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>

            <a 
              href="/galeria"
              className="inline-flex text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-hover)]"
            >
              Galeria
            </a>

            <a 
              href="/sobre"
              className="inline-flex text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-hover)]"
            >
              Sobre
            </a>

            <a 
              href="/contato"
              className="inline-flex text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-hover)]"
            >
              Contato
            </a>

            <button className="inline-flex items-center bg-[var(--button-primary)] text-white text-[15px] font-medium px-5 py-1.5 rounded-md hover:bg-[var(--color-hover)]">
              Agendar agora
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}