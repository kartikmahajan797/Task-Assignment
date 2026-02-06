import React from 'react';
import memoryImage from '../assets/memory.png';

const VideoSection: React.FC = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer group">
                    {/* Background Image */}
                    <img
                        src={memoryImage}
                        alt="Square your Memories"
                        className="w-full h-auto object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {/* Title */}
                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center drop-shadow-md">
                            Square your Memories
                        </h2>

                        {/* Play Button */}
                        <div className="relative">
                            {/* Button Container */}
                            <button className="w-16 h-16 md:w-20 md:h-20 bg-[#E60023] hover:bg-[#AD081B] rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg border-2 border-transparent hover:border-white/20">
                                <svg
                                    className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>

                            {/* Optional: Design selection box effect from screenshot if desired, 
                  but standard design usually implies clean button. 
                  The screenshot showed a thin red line around the button, 
                  it looked like a selection state or a specific styling detail.
                  I'll add a subtle red ring or focus ring to match the 'square' theme.
              */}
                            <div className="absolute -inset-3 border border-red-500/30 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
