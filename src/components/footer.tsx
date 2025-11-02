import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import Logo from "../assets/Logotipo.svg";

export default function Footer() {
    return (
        <footer className="bg-(--color-background) py-12" role="contentinfo">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <img
                            src={Logo}
                            alt="Studio Pet Care"
                            className="h-20 w-auto mb-6"
                        />
                        <div className="flex items-start mb-4">
                            <FaMapMarkerAlt className="text-(--color-icons) text-lg mt-1 mr-3 shrink-0" />
                            <address className="not-italic text-sm">
                                Av. Marechal Rondon, 265<br />
                                Corumbá, Mato Grosso do Sul
                            </address>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Atendimento</h3>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <FaWhatsapp className="text-green-500 text-lg mr-3" />
                                <a
                                    href="https://wa.me/5567999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-(--color-hover) transition-colors duration-200 text-sm"
                                >
                                    Atendimento para clientes
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-(--color-icons) text-lg mr-3" />
                                <a
                                    href="mailto:contato@studiopetcare.com"
                                    className="hover:text-(--color-hover) transition-colors duration-200 text-sm"
                                >
                                    Contato empresa
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Legal</h3>
                        <nav aria-label="Links legais">
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="/termos-de-uso"
                                        className="hover:text-(--color-hover) transition-colors duration-200 block text-sm"
                                    >
                                        Termos de uso
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/politica-de-privacidade"
                                        className="hover:text-(--color-hover) transition-colors duration-200 block text-sm"
                                    >
                                        Política de privacidade
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Navegação</h3>
                        <nav aria-label="Navegação principal">
                            <div className="space-y-3">
                                <a
                                    href="/servicos"
                                    className="hover:text-(--color-hover) transition-colors duration-200 font-medium block text-sm"
                                >
                                    Serviços
                                </a>
                                <a
                                    href="/galeria"
                                    className="hover:text-(--color-hover) transition-colors duration-200 font-medium block text-sm"
                                >
                                    Galeria
                                </a>
                                <a
                                    href="/sobre"
                                    className="hover:text-(--color-hover) transition-colors duration-200 font-medium block text-sm"
                                >
                                    Sobre
                                </a>
                                <a
                                    href="/contato"
                                    className="hover:text-(--color-hover) transition-colors duration-200 font-medium block text-sm"
                                >
                                    Contato
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://www.facebook.com/studiopetcare"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="text-(--color-icons) text-lg mr-1 hover:text-(--color-hover) transition-colors duration-200" />
                        </a>
                        <a
                            href="https://www.instagram.com/studiopetcare"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="text-(--color-icons) text-lg mr-1 hover:text-(--color-hover) transition-colors duration-200" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@studiopetcare"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                        >
                            <FaTiktok className="text-(--color-icons) text-lg mr-1 hover:text-(--color-hover) transition-colors duration-200" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-(--color-border)/30 my-8"></div>

                <div className="text-center">
                    <p className="text-sm text-(--color-text)/70">
                        Copyright 2025 © Todos os direitos reservados à Studio Pet Care.
                    </p>
                </div>
            </div>
        </footer>
    );
}