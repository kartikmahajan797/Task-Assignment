import logo from '../assets/logo.png';

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Twenty Square" className="h-10 md:h-12 w-auto object-contain" />
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Gallery Walls</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Offers</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Gift Card</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact Us</a>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-gray-900">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span className="font-medium">Download App</span>
                    </button>

                    <button className="p-2 hover:bg-gray-100 rounded">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>

                    <button className="bg-[#E60023] hover:bg-[#AD081B] text-white px-6 py-2.5 rounded-full font-semibold transition-colors">
                        Sign Up/Log In
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
