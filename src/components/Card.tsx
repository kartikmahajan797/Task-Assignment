import React from 'react';

interface CardProps {
    image: string;
    title?: string;
    description?: string;
    overlay?: boolean;
}

const Card: React.FC<CardProps> = ({ image, title, description, overlay = false }) => {
    return (
        <div className="break-inside-avoid mb-4 group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 hover:brightness-95 transition-all">
                <img
                    src={image}
                    alt={title || 'Pin'}
                    className="w-full h-auto object-cover"
                />

                {overlay && (title || description) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                        {title && <h3 className="text-white font-bold text-lg mb-1">{title}</h3>}
                        {description && <p className="text-white/90 text-sm">{description}</p>}
                    </div>
                )}

                <button className="absolute top-3 right-3 bg-[#E60023] text-white px-4 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Save
                </button>
            </div>

            {!overlay && (title || description) && (
                <div className="mt-2 px-1">
                    {title && <h3 className="font-semibold text-sm mb-1">{title}</h3>}
                    {description && <p className="text-gray-600 text-xs">{description}</p>}
                </div>
            )}
        </div>
    );
};

export default Card;
