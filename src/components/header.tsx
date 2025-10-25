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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsOpen(true)
  }

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 140)
  }

  const handleButtonClick = () => setIsOpen((s) => !s)

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [])

  return (
    <header className="bg-(--color-background) border-b border-(--color-border)/20 shadow-sm">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between h-24 px-8">
          <img src={Logo} alt="Studio Pet Care" />

          <nav className="flex items-center space-x-12">
            <a href="/inicio" className="text-[18px] text-(--color-text) hover:text-(--color-hover)">
              Início
            </a>

            <div
              ref={containerRef}
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button
                onClick={handleButtonClick}
                className="inline-flex items-center text-[18px] text-(--color-text) hover:text-(--color-hover)"
              >
                <span>Serviços</span>
                <svg className="ml-1.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-(--color-primary) rounded-md shadow-lg z-50">
                  <div className="py-2 divide-y divide-gray-100">
                    {servicos.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-(--color-text) hover:bg-(--color-hover)/10"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/galeria" className="text-[18px] text-(--color-text) hover:text-(--color-hover)">Galeria</a>
            <a href="/sobre" className="text-[18px] text-(--color-text) hover:text-(--color-hover)">Sobre</a>
            <a href="/contato" className="text-[18px] text-(--color-text) hover:text-(--color-hover)">Contato</a>
          </nav>

          <button className="bg-(--button-primary) text-(--color-text) text-[18px] px-8 py-2 rounded-md hover:bg-(--color-hover) cursor-pointer">
            Agendar agora
          </button>
        </div>
      </div>
    </header>
  )
}