import doctorImage from "../assets/doctor.png";

export default function Veterinary() {
  return (
    <section className="relative w-full overflow-hidden py-16">
      <div
        className="absolute inset-0 bg-(--color-secondary)"
        style={{
          clipPath: "ellipse(65% 45% at 50% 50%)",
        }}
      ></div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="lg:hidden relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Plantão Veterinário
          </h2>
          <h3 className="text-xl md:text-2xl mb-6">
            24 horas, 7 dias na semana!
          </h3>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Na nossa clínica veterinária, a saúde e bem estar do seu animal de
            estimação são nossa prioridade. Oferecemos atendimento de emergência
            24 horas por dia, 7 dias por semana, para garantir que seu pet
            receba cuidados médicos imediatos, mesmo nos momentos mais críticos.
            Conte conosco para cuidar do seu pet, sua saúde e seu bem-estar e o
            conforto do seu querido companheiro são nossa maior missão.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-2 items-center">
          <div className="relative z-10">
            <h2 className="text-4xl font-semibold mb-4">
              Plantão Veterinário
            </h2>
            <h3 className="text-2xl mb-6">
              24 horas, 7 dias na semana!
            </h3>
            <p className="text-lg leading-relaxed">
              Na nossa clínica veterinária, a saúde e bem estar do seu animal de
              estimação são nossa prioridade. Oferecemos atendimento de emergência
              24 horas por dia, 7 dias por semana, para garantir que seu pet
              receba cuidados médicos imediatos, mesmo nos momentos mais críticos.
              Conte conosco para cuidar do seu pet, sua saúde e seu bem-estar e o
              conforto do seu querido companheiro são nossa maior missão.
            </p>
          </div>

          <div className="relative z-10 flex justify-end items-end h-full">
            <div 
              className="relative overflow-hidden"
              style={{
                clipPath: "ellipse(100% 51% at 45% 51%)"
              }}
            >
              <img
                src={doctorImage}
                alt="Veterinário com cachorro"
                className="w-full h-full object-cover"
                style={{
                  transform: "scale(1.0)",
                  transformOrigin: "bottom center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}