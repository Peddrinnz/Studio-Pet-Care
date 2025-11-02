'use client';

import dogImage from '../assets/dog.png';
import { useState } from 'react';
import SuccessModal from './successModal';

type FormData = {
    name: string;
    email: string;
    whatsapp: string;
};

export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        whatsapp: '',
    });
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
        
        setTimeout(() => {
            setIsModalOpen(true);
            setFormData({
                name: '',
                email: '',
                whatsapp: '',
            });
        }, 500);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="bg-(--color-bg-form)">
            <div className="max-w-[1440px] mx-auto px-12 py-16 flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                    <h2 className="text-4xl font-semibold mb-4">
                        Agende seu horário
                    </h2>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-md font-medium mb-1">
                                Seu Nome *
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full md:p-3 p-2 rounded-lg border border-(--color-border)/30 bg-(--color-primary) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-border)"
                                placeholder="Seu Nome *"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-md font-medium mb-1">
                                    Seu E-mail *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full md:p-3 p-2 rounded-lg border border-(--color-border)/30 bg-(--color-primary) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-border)"
                                    placeholder="Seu E-mail *"
                                />
                            </div>

                            <div>
                                <label htmlFor="whatsapp" className="block text-md font-medium mb-1">
                                    Seu Whatsapp *
                                </label>
                                <input
                                    id="whatsapp"
                                    name="whatsapp"
                                    type="tel"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    className="w-full md:p-3 p-2 rounded-lg border border-(--color-border)/30 bg-(--color-primary) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-border)"
                                    placeholder="Seu Whatsapp *"
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-40 bg-(--color-background) text-base px-6 py-2 rounded-md hover:bg-(--button-primary) transition-colors cursor-pointer"
                            >
                                Próximo
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-sm h-96">
                        <div 
                            className="absolute inset-0 bg-contain bg-no-repeat bg-center" 
                            style={{ 
                                backgroundImage: `url(${dogImage})`,
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>

            <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
}