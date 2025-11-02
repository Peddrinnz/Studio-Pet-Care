'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaGoogle } from 'react-icons/fa6';

const reviewsData = [
    {
        id: 1,
        name: "Cleber Machado",
        text: "Excelente, ótimo atendimento e dúvidas respondidas.",
        rating: 5
    },
    {
        id: 2,
        name: "Rayssa Monteiro",
        text: "Está de parabéns, ótimo trabalho dos veterinários e excelente serviço de banho e tosa!",
        rating: 5
    },
    {
        id: 3,
        name: "Raúl Gonçalves",
        text: "Atendimento 24 horas muito bem, fui bem recebido e meu cachorro também, recomendo muito!",
        rating: 4
    },
    {
        id: 4,
        name: "Maria S.",
        text: "A equipe do Studio Pet Care é incrível! Meu gato sempre volta para casa feliz e bem cuidado.",
        rating: 5
    },
    {
        id: 5,
        name: "João P.",
        text: "Serviço excepcional! Recomendo a todos que amam seus pets.",
        rating: 4
    },
    {
        id: 6,
        name: "Ana Costa",
        text: "Profissionais muito atenciosos e preços justos. Meu pet adora!",
        rating: 5
    }
];

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                    key={star}
                    className={`w-4 h-4 ${star <= rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                        }`}
                />
            ))}
        </div>
    );
};

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [cardsPerView, setCardsPerView] = useState(3);

    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth < 768) {
                setCardsPerView(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2);
            } else {
                setCardsPerView(3);
            }
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    const totalGroups = Math.ceil(reviewsData.length / cardsPerView);

    const nextReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalGroups - 1 ? 0 : prevIndex + 1
        );
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalGroups - 1 : prevIndex - 1
        );
    };

    const goToReview = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextReview();
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex, cardsPerView]);

    return (
        <section
            className="relative max-w-[1440px] mx-auto px-12 py-16 overflow-x-hidden overflow-y-visible"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <h2 className="text-4xl font-semibold text-center mb-12">Depoimento dos clientes:</h2>

            <div className="relative z-10">
                <div className="overflow-x-hidden overflow-y-visible">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                            <div
                                key={groupIndex}
                                className="w-full shrink-0"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-4">
                                    {reviewsData
                                        .slice(groupIndex * cardsPerView, groupIndex * cardsPerView + cardsPerView)
                                        .map((review) => (
                                            <div
                                                key={review.id}
                                                className="bg-(--color-primary) p-6 rounded-xl shadow-md border border-(--color-border)/30 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="flex-1">
                                                        <StarRating rating={review.rating} />
                                                    </div>
                                                    <FaGoogle className="w-5 h-5 ml-2" />
                                                </div>

                                                <p className="text-sm flex-1 mb-4 italic">
                                                    "{review.text}"
                                                </p>

                                                <div className="mt-auto">
                                                    <p className="text-sm font-semibold text-right">
                                                        - {review.name}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={prevReview}
                    className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-(--color-background)/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-20"
                    aria-label="Reviews anteriores"
                >
                    <FaChevronLeft className="w-5 h-5 text-(--color-icons)" />
                </button>

                <button
                    onClick={nextReview}
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-(--color-background)/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-20"
                    aria-label="Próximos reviews"
                >
                    <FaChevronRight className="w-5 h-5 text-(--color-icons)" />
                </button>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
                {Array.from({ length: totalGroups }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToReview(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                            ? 'bg-(--color-icons) scale-125'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Ir para grupo ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}