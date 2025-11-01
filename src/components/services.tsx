import { FaBath, FaStethoscope, FaHouseMedical, FaBone, FaPaw } from 'react-icons/fa6';

export default function Services() {
    return (
        <section className="relative max-w-[1440px] mx-auto px-8 py-16 overflow-hidden">
            <h2 className="text-4xl font-semibold mb-4 text-center">Nossos Serviços</h2>
            <p className="text-2xl mb-12 text-center">
                Tudo que seu pet precisa em um só lugar!
            </p>

            <FaPaw className="hidden md:block absolute bottom-64 left-1/2 w-8 h-8 text-(--color-icons) opacity-80 rotate-[-20deg] z-0" />
            <FaPaw className="hidden md:block absolute bottom-66 left-1/20 w-10 h-10 text-(--color-icons) opacity-80 rotate-[-20deg] z-0" />
            <FaPaw className="hidden md:block absolute bottom-16 right-1/4 w-8 h-8 text-(--color-icons) opacity-80 rotate-[-25deg] z-0" />
            <FaPaw className="hidden md:block absolute bottom-8 left-1/3 w-10 h-10 text-(--color-icons) opacity-80 rotate-[-15deg] z-0" />
            <FaPaw className="hidden md:block absolute bottom-40 right-1 w-9 h-9 text-(--color-icons) opacity-80 rotate-[-15deg] z-0" />
            <FaPaw className="hidden md:block absolute bottom-8 left-1/20 w-8 h-8 text-(--color-icons) opacity-80 rotate-[-15deg] z-0" />
            <FaPaw className="hidden md:block absolute bottom-4 right-8/20 w-10 h-10 text-(--color-icons) opacity-80 rotate-[-30deg] z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
                <div className="relative bg-(--color-primary) p-8 rounded-xl shadow-md border border-(--color-border)/30 flex flex-col items-center transition-transform hover:-translate-y-1">
                    <FaBath className="w-12 h-12 text-(--color-icons) mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Banho e Tosa</h3>
                    <p className="text-sm">
                        Cuidados especiais com seu pet e muito carinho.
                    </p>
                </div>

                <div className="relative bg-(--color-primary) p-8 rounded-xl shadow-md border border-(--color-border)/30 flex flex-col items-center transition-transform hover:-translate-y-1">
                    <FaStethoscope className="w-12 h-12 text-(--color-icons) mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Consultas Veterinárias</h3>
                    <p className="text-sm">
                        Atendimento completo com profissionais qualificados.
                    </p>
                </div>

                <div className="relative bg-(--color-primary) p-8 rounded-xl shadow-md border border-(--color-border)/30 flex flex-col items-center transition-transform hover:-translate-y-1">
                    <FaHouseMedical className="w-12 h-12 text-(--color-icons) mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Hospedagem</h3>
                    <p className="text-sm">
                        Conforto para o seu pet enquanto você viaja.
                    </p>
                </div>

                <div className="relative bg-(--color-primary) p-8 rounded-xl shadow-md border border-(--color-border)/30 flex flex-col items-center transition-transform hover:-translate-y-1">
                    <FaBone className="w-12 h-12 text-(--color-icons) mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Alimentação</h3>
                    <p className="text-sm">
                        Refeições balanceadas para o seu amigo de quatro patas.
                    </p>
                </div>
            </div>
        </section>
    );
}