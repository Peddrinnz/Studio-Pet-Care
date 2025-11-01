"use client"

import { useState, useRef, useEffect } from "react"
import Logo from "../assets/Logotipo.svg"

const servicos = [
  { label: "Banho e Tosa", href: "/servicos/banho-tosa" },
  { label: "Veterinário", href: "/servicos/veterinario" },
  { label: "Hotel Pet", href: "/servicos/hotel" },
  { label: "Alimentação", href: "/servicos/alimentacao" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsOpen(true)
  }

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 140)
  }

  return (
     <header className={`fixed top-0 left-0 right-0 z-50 bg-(--color-background) border-b border-(--color-border)/30 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          <img src={Logo} alt="Studio Pet Care" className="h-16 w-auto" />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-base text-(--color-text) hover:text-(--color-hover)">
              Início
            </a>

            <div
              ref={containerRef}
              className="relative group"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="inline-flex items-center text-base hover:text-(--color-hover)">
                <span>Serviços</span>
                <svg
                  className={`ml-1.5 w-4 h-4 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg">
                  <div className="py-2">
                    {servicos.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-(--color-hover)/10"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/galeria" className="text-base hover:text-(--color-hover)">
              Galeria
            </a>
            <a href="/sobre" className="text-base hover:text-(--color-hover)">
              Sobre
            </a>
            <a href="/contato" className="text-base hover:text-(--color-hover)">
              Contato
            </a>
          </nav>

          <button className="hidden lg:block bg-(--button-primary) text-base px-6 py-2 rounded-md hover:bg-(--color-hover) transition-colors cursor-pointer">
            Agendar agora
          </button>

          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-(--color-background) border-b border-(--color-border)/30 shadow-lg">
              <nav className="flex flex-col py-4">
                <a href="/" className="px-4 py-2 text-base hover:bg-(--color-hover)/10">
                  Início
                </a>
                {servicos.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-base hover:bg-(--color-hover)/10"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="/galeria" className="px-4 py-2 text-base hover:bg-(--color-hover)/10">
                  Galeria
                </a>
                <a href="/sobre" className="px-4 py-2 text-base hover:bg-(--color-hover)/10">
                  Sobre
                </a>
                <a href="/contato" className="px-4 py-2 text-base hover:bg-(--color-hover)/10">
                  Contato
                </a>
                <button className="mx-4 mt-4 bg-(--button-primary) text-base px-6 py-2 rounded-md hover:bg-(--color-hover) transition-colors">
                  Agendar agora
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}