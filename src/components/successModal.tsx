'use client';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-(--color-background)/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-(--color-background) rounded-lg max-w-md w-full p-6 mx-auto border border-(--color-border)/30 shadow-lg">
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <svg 
                            className="h-6 w-6 text-green-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">
                        Formulário enviado com sucesso!
                    </h3>

                    <p className="mb-6">
                        Iremos responder assim que possível para agendarmos seu horário.
                    </p>
                    
                    <button
                        onClick={onClose}
                        className="w-40 bg-(--button-primary) px-6 py-2 rounded-md hover:bg-(--color-hover) transition-colors cursor-pointer"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}