import React from 'react';

const WhyChooseUs: React.FC = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Grid - Large Rounded Rectangles */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-3xl transform translate-x-1/3 -translate-y-1/3" />
                <div className="absolute top-1/4 right-10 w-48 h-48 bg-gray-50 rounded-3xl" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gray-50 rounded-3xl transform translate-y-1/2" />
                <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-gray-50 rounded-3xl" />
                <div className="absolute top-10 left-0 w-40 h-40 bg-gray-50 rounded-3xl transform -translate-x-1/2" />

                {/* Faint Grid Pattern overlay for texture if needed, mimicking the provided image's subtle structure */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gray-100/50 rounded-2xl" />
                <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gray-100/50 rounded-2xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[#8B0000] to-[#E60023] bg-clip-text text-transparent">
                            Why Choose TwentySquare?
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        We're committed to delivering exceptional quality, sustainable practices, and unmatched customer service
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1: Ratings */}
                    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow border border-gray-100 text-center flex flex-col items-center group">
                        <div className="w-20 h-20 mb-6 flex items-center justify-center">
                            {/* 3 Stars Icon with Burst */}
                            <svg viewBox="0 0 100 100" className="w-full h-full text-[#ff5722]" fill="none" stroke="url(#gradient1)" strokeWidth="2.5">
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#E60023" />
                                        <stop offset="100%" stopColor="#ff9800" />
                                    </linearGradient>
                                </defs>
                                {/* Center Star */}
                                <path d="M50 15 L60 38 L85 38 L65 55 L72 80 L50 65 L28 80 L35 55 L15 38 L40 38 Z" strokeLinecap="round" strokeLinejoin="round" />
                                {/* Left Star */}
                                <path d="M20 25 L25 38 L38 38 L28 48 L32 60 L20 52 L8 60 L12 48 L2 38 L15 38 Z" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.8) translate(-10, 20)" style={{ opacity: 0.8 }} />
                                {/* Right Star */}
                                <path d="M80 25 L85 38 L98 38 L88 48 L92 60 L80 52 L68 60 L72 48 L62 38 L75 38 Z" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.8) translate(30, 20)" style={{ opacity: 0.8 }} />
                                {/* Burst lines */}
                                <path d="M50 5 L50 10 M50 90 L50 95 M5 50 L10 50 M90 50 L95 50" strokeLinecap="round" />
                            </svg>
                        </div>
                        <p className="font-semibold text-gray-800 leading-relaxed">
                            Rated 4.5/5 by over 15,000 happy customers across the USA.
                        </p>
                    </div>

                    {/* Card 2: Quality */}
                    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow border border-gray-100 text-center flex flex-col items-center group">
                        <div className="w-20 h-20 mb-6 flex items-center justify-center">
                            {/* Frames Icon */}
                            <svg viewBox="0 0 100 100" className="w-full h-full text-[#ff5722]" fill="none" stroke="url(#gradient2)" strokeWidth="2.5">
                                <defs>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#E60023" />
                                        <stop offset="100%" stopColor="#ff9800" />
                                    </linearGradient>
                                </defs>
                                <rect x="35" y="20" width="30" height="40" rx="2" />
                                <rect x="15" y="40" width="25" height="30" rx="2" />
                                <rect x="60" y="50" width="25" height="25" rx="2" />
                                <rect x="30" y="65" width="25" height="20" rx="2" />
                            </svg>
                        </div>
                        <p className="font-semibold text-gray-800 leading-relaxed">
                            Museum-quality frames handcrafted to last a lifetime.
                        </p>
                    </div>

                    {/* Card 3: Shipping */}
                    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow border border-gray-100 text-center flex flex-col items-center group">
                        <div className="w-20 h-20 mb-6 flex items-center justify-center">
                            {/* Truck Icon */}
                            <svg viewBox="0 0 100 100" className="w-full h-full text-[#ff5722]" fill="none" stroke="url(#gradient3)" strokeWidth="2.5">
                                <defs>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#E60023" />
                                        <stop offset="100%" stopColor="#ff9800" />
                                    </linearGradient>
                                </defs>
                                {/* Truck Body */}
                                <path d="M15 40 L65 40 L65 70 L15 70 Z" />
                                <path d="M65 50 L85 50 L85 70 L65 70 Z" />
                                {/* Wheels */}
                                <circle cx="30" cy="75" r="8" />
                                <circle cx="75" cy="75" r="8" />
                                {/* Dollar Sign inside */}
                                <path d="M40 45 L40 65 M35 50 L45 50 M35 60 L45 60 M35 50 Q45 50 45 55 T35 60 Q35 65 45 65" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="font-semibold text-gray-800 leading-relaxed">
                            Free US Shipping + Easy 30-Day Returns.
                        </p>
                    </div>

                    {/* Card 4: Support */}
                    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow border border-gray-100 text-center flex flex-col items-center group">
                        <div className="w-20 h-20 mb-6 flex items-center justify-center">
                            {/* Headset/Support Icon */}
                            <svg viewBox="0 0 100 100" className="w-full h-full text-[#ff5722]" fill="none" stroke="url(#gradient4)" strokeWidth="2.5">
                                <defs>
                                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#E60023" />
                                        <stop offset="100%" stopColor="#ff9800" />
                                    </linearGradient>
                                </defs>
                                {/* Headset */}
                                <path d="M20 50 V40 A30 30 0 0 1 80 40 V50" strokeLinecap="round" />
                                <rect x="15" y="50" width="15" height="20" rx="4" />
                                <rect x="70" y="50" width="15" height="20" rx="4" />
                                <path d="M85 70 Q85 90 60 90 L50 90" strokeLinecap="round" />
                                {/* Chat bubble */}
                                <path d="M55 40 A15 15 0 0 1 85 40 A15 15 0 0 1 55 40 Z" />
                                <circle cx="62" cy="40" r="1.5" fill="currentColor" stroke="none" />
                                <circle cx="70" cy="40" r="1.5" fill="currentColor" stroke="none" />
                                <circle cx="78" cy="40" r="1.5" fill="currentColor" stroke="none" />
                            </svg>
                        </div>
                        <p className="font-semibold text-gray-800 leading-relaxed">
                            Dedicated customer support, every step of the way.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
