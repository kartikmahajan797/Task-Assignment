import React from 'react';
import aboutImage from '../assets/about.jpg';

const HowItWorks: React.FC = () => {
    return (
        <section className="relative bg-white py-20 overflow-hidden">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B0000] leading-tight">
                            It's so simple,<br />
                            even a child<br />
                            can do it.
                        </h2>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#E60023] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">1</span>
                                </div>
                                <p className="text-gray-700 text-lg pt-1">
                                    Peel the protective paper of the adhesive
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#E60023] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">2</span>
                                </div>
                                <p className="text-gray-700 text-lg pt-1">
                                    Place the frames against the wall and press firmly.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#E60023] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">3</span>
                                </div>
                                <p className="text-gray-700 text-lg pt-1">
                                    Enjoy! (and feel free to rearrange).
                                </p>
                            </div>
                        </div>

                        <button className="bg-[#E60023] hover:bg-[#AD081B] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
                            Square Your Photos
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutImage}
                                alt="Family hanging photo frames together"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
