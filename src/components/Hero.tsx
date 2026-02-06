// import React from 'react';

// const Hero: React.FC = () => {
//     const photos = [
//         { id: 1, image: 'https://picsum.photos/150/150?random=1', size: 'small', position: 'top-10 left-10' },
//         { id: 2, image: 'https://picsum.photos/150/150?random=2', size: 'small', position: 'top-32 left-10' },
//         { id: 3, image: 'https://picsum.photos/120/180?random=3', size: 'medium', position: 'bottom-32 left-10' },
//         { id: 4, image: 'https://picsum.photos/150/150?random=4', size: 'small', position: 'top-20 left-44' },
//         { id: 5, image: 'https://picsum.photos/150/150?random=5', size: 'small', position: 'bottom-10 left-48' },
//         { id: 6, image: 'https://picsum.photos/150/150?random=6', size: 'small', position: 'top-52 right-10' },
//         { id: 7, image: 'https://picsum.photos/150/150?random=7', size: 'small', position: 'top-10 right-44' },
//         { id: 8, image: 'https://picsum.photos/140/140?random=8', size: 'small', position: 'bottom-32 right-10' },
//     ];

//     return (
//         <section className="relative bg-gray-50 min-h-screen flex items-center justify-center overflow-hidden py-20">
//             {/* Background Photo Grid */}
//             <div className="absolute inset-0 opacity-40">
//                 <div className="relative w-full h-full max-w-7xl mx-auto">
//                     {/* Left column photos */}
//                     <div className="absolute top-12 left-8 w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/200?random=1" alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="absolute top-40 left-8 w-24 h-32 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/250?random=2" alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="absolute top-80 left-8 w-20 h-20 rounded-2xl overflow-hidden shadow-lg bg-[#E60023]">
//                         <img src="https://picsum.photos/200/200?random=3" alt="" className="w-full h-full object-cover mix-blend-multiply" />
//                     </div>
//                     <div className="absolute bottom-32 left-8 w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/200?random=4" alt="" className="w-full h-full object-cover" />
//                     </div>

//                     {/* Left-center column */}
//                     <div className="absolute top-64 left-36 w-20 h-28 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/280?random=5" alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="absolute bottom-20 left-32 w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/200?random=6" alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="absolute bottom-48 left-44 w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/200?random=7" alt="" className="w-full h-full object-cover" />
//                     </div>

//                     {/* Right-center column */}
//                     <div className="absolute top-64 right-36 w-20 h-28 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/280?random=8" alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="absolute bottom-20 right-32 w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/200?random=9" alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="absolute bottom-52 right-44 w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/200?random=10" alt="" className="w-full h-full object-cover" />
//                     </div>

//                     {/* Right column photos */}
//                     <div className="absolute top-12 right-8 w-28 h-20 rounded-2xl overflow-hidden shadow-lg bg-[#E60023]">
//                         <div className="w-full h-full bg-gradient-to-br from-[#E60023] to-[#AD081B]"></div>
//                     </div>
//                     <div className="absolute top-40 right-8 w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/200?random=11" alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="absolute top-72 right-8 w-20 h-28 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/280?random=12" alt="" className="w-full h-full object-cover" />
//                     </div>
//                     <div className="absolute bottom-32 right-8 w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
//                         <img src="https://picsum.photos/200/200?random=13" alt="" className="w-full h-full object-cover" />
//                     </div>
//                 </div>
//             </div>

//             {/* Hero Content */}
//             <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
//                     <span className="bg-gradient-to-r from-[#E60023] to-[#FF6B6B] bg-clip-text text-transparent">
//                         A wonderful way to
//                     </span>
//                     <br />
//                     <span className="bg-gradient-to-r from-[#E60023] to-[#FF6B6B] bg-clip-text text-transparent">
//                         transform your walls.
//                     </span>
//                 </h1>

//                 <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
//                     No matter your decorating style, we've got the tricks that can give life to your walls and bring out your true personality.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                     <button className="bg-[#E60023] hover:bg-[#AD081B] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
//                         Square Your Photos
//                     </button>
//                     <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
//                         Gallery Walls
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

import boxImage from '../assets/box.jpg';

const Hero = () => {
    // Create a grid of photos with some having red overlays
    const photoGrid = [
        // Row 1
        { id: 1, image: 'https://via.placeholder.com/200/FF6B6B/FFFFFF?text=Photo+1', hasOverlay: true, opacity: 0.7 },
        { id: 2, image: 'https://via.placeholder.com/200/4ECDC4/FFFFFF?text=Photo+2', hasOverlay: false },
        { id: 3, image: 'https://via.placeholder.com/200/95E1D3/FFFFFF?text=Photo+3', hasOverlay: false },
        { id: 4, image: boxImage, hasOverlay: false },
        { id: 5, image: 'https://via.placeholder.com/200/AA96DA/FFFFFF?text=Photo+5', hasOverlay: false },
        { id: 6, image: 'https://via.placeholder.com/200/FCBAD3/FFFFFF?text=Photo+6', hasOverlay: false },
        { id: 7, image: 'https://via.placeholder.com/200/FFFFD2/333333?text=Photo+7', hasOverlay: false },
        { id: 8, image: 'https://via.placeholder.com/200/A8D8EA/FFFFFF?text=Photo+8', isRedBlock: true },

        // Row 2
        { id: 9, isRedBlock: true },
        { id: 10, image: 'https://via.placeholder.com/200/FFD93D/333333?text=Photo+9', hasOverlay: false },
        { id: 11, image: boxImage, hasOverlay: false },
        { id: 12, image: 'https://via.placeholder.com/200/4D96FF/FFFFFF?text=Photo+11', hasOverlay: false },
        { id: 13, image: 'https://via.placeholder.com/200/FFA8B3/FFFFFF?text=Photo+12', hasOverlay: false },
        { id: 14, image: 'https://via.placeholder.com/200/C1A0E0/FFFFFF?text=Photo+13', hasOverlay: false },
        { id: 15, image: boxImage, hasOverlay: false },
        { id: 16, image: 'https://via.placeholder.com/200/B4E4CE/333333?text=Photo+15', hasOverlay: false },

        // Row 3
        { id: 17, image: 'https://via.placeholder.com/200/F67280/FFFFFF?text=Photo+16', hasOverlay: true, opacity: 0.7 },
        { id: 18, image: 'https://via.placeholder.com/200/C06C84/FFFFFF?text=Photo+17', hasOverlay: false },
        { id: 19, image: 'https://via.placeholder.com/200/6C5B7B/FFFFFF?text=Photo+18', hasOverlay: false },
        { id: 20, image: boxImage, hasOverlay: false },
        { id: 21, image: 'https://via.placeholder.com/200/F8B195/333333?text=Photo+20', hasOverlay: false },
        { id: 22, image: 'https://via.placeholder.com/200/F67280/FFFFFF?text=Photo+21', hasOverlay: true, opacity: 0.7 },
        { id: 23, image: 'https://via.placeholder.com/200/C06C84/FFFFFF?text=Photo+22', hasOverlay: false },
        { id: 24, image: 'https://via.placeholder.com/200/99B898/FFFFFF?text=Photo+23', hasOverlay: false },

        // Row 4
        { id: 25, image: 'https://via.placeholder.com/200/E84A5F/FFFFFF?text=Photo+24', hasOverlay: true, opacity: 0.7 },
        { id: 26, image: boxImage, hasOverlay: false },
        { id: 27, image: 'https://via.placeholder.com/200/FF847C/FFFFFF?text=Photo+26', hasOverlay: false },
        { id: 28, image: 'https://via.placeholder.com/200/E84A5F/FFFFFF?text=Photo+27', hasOverlay: false },
        { id: 29, image: 'https://via.placeholder.com/200/2A363B/FFFFFF?text=Photo+28', hasOverlay: false },
        { id: 30, image: 'https://via.placeholder.com/200/84DCC6/333333?text=Photo+29', hasOverlay: false },
        { id: 31, image: boxImage, hasOverlay: false },
        { id: 32, image: 'https://via.placeholder.com/200/D3B7D2/FFFFFF?text=Photo+31', hasOverlay: true, opacity: 0.7 },
    ];

    return (
        <section className="relative bg-gray-50 min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Background Photo Grid */}
            <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-8 gap-3 p-6 h-full">
                    {photoGrid.map((photo) => (
                        <div
                            key={photo.id}
                            className="group perspective-1000 relative rounded-2xl bg-transparent"
                        >
                            <div className="relative w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180 shadow-lg rounded-2xl">
                                {/* Front Face */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-gray-200">
                                    {photo.isRedBlock ? (
                                        <div className="w-full h-full bg-[#E60023]"></div>
                                    ) : (
                                        <>
                                            <img
                                                src={photo.image}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                            {photo.hasOverlay && (
                                                <div
                                                    className="absolute inset-0 bg-[#E60023]"
                                                    style={{ opacity: photo.opacity || 0.6 }}
                                                ></div>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Back Face */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#E60023] flex items-center justify-center">
                                    <div className="text-white font-bold text-center p-2">
                                        <span className="block text-xs uppercase tracking-widest opacity-80">Twenty</span>
                                        <span className="block text-lg">Square</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#E60023] to-[#FF6B6B] bg-clip-text text-transparent">
                        A wonderful way to
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-[#E60023] to-[#FF6B6B] bg-clip-text text-transparent">
                        Transform your walls.
                    </span>
                </h1>

                <p className="text-gray-700 font-bold font-['Helvetica_Neue'] text-[20px] leading-[1.4] tracking-normal text-center mb-10 max-w-2xl mx-auto">
                    No matter your decorating style, we've got the tricks that can give life to your walls and bring out your true personality.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-[#E60023] hover:bg-[#AD081B] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
                        Square Your Photos
                    </button>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
                        Gallery Walls
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;