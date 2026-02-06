import React from 'react';

const Testimonials: React.FC = () => {
    const testimonialsCol1 = [
        {
            id: 1,
            image: 'https://picsum.photos/400/500?random=101', // Portrait
            text: 'Thank you Twentysquare you made our special day memorable!',
            author: 'Mounika & Sanjeev'
        },
        {
            id: 3,
            image: 'https://picsum.photos/400/400?random=103', // Square
            text: 'Thank you Twentysquare you made our special day memorable!',
            author: 'Mounika & Sanjeev'
        }
    ];

    const testimonialsCol2 = [
        {
            id: 2,
            image: 'https://picsum.photos/400/400?random=102', // Square
            text: 'Thank you Twentysquare you made our special day memorable!',
            author: 'Mounika & Sanjeev'
        },
        {
            id: 4,
            image: 'https://picsum.photos/400/500?random=104', // Portrait
            text: 'Thank you Twentysquare you made our special day memorable!',
            author: 'Mounika & Sanjeev'
        }
    ];

    const TestimonialCard = ({ item }: { item: any }) => (
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="rounded-2xl overflow-hidden mb-4">
                <img
                    src={item.image}
                    alt="Customer memory"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="px-2 pb-2">
                <p className="font-bold text-gray-900 text-lg mb-2 leading-snug">
                    {item.text}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-wide">{item.author}</p>
            </div>
        </div>
    );

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4 p-4 h-full">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="bg-gray-50 rounded-3xl w-full h-32 md:h-40" />
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Content */}
                    <div className="md:sticky md:top-32 space-y-8 pt-10">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-[#8B0000]">They liked us,</span>
                            <br />
                            <span className="text-[#ff5e3a]">we believe you</span>
                            <br />
                            <span className="text-[#8B0000]">too!</span>
                        </h2>

                        <p className="text-xl text-gray-800 font-medium max-w-md leading-relaxed">
                            Listen to our customers—every one of them is thrilled with the frames!
                        </p>

                        <button className="bg-[#E60023] hover:bg-[#AD081B] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
                            Square Your Photos
                        </button>
                    </div>

                    {/* Right Content - Staggered Masonry Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            {testimonialsCol1.map(item => <TestimonialCard key={item.id} item={item} />)}
                        </div>
                        <div className="space-y-6 sm:pt-12">
                            {testimonialsCol2.map(item => <TestimonialCard key={item.id} item={item} />)}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
