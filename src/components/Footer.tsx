import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#F5F5F5] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 border-2 border-[#E60023] relative">
                            <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-[#E60023] transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 ml-3 leading-none tracking-tight">
                            twenty<br />square
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex gap-16 md:gap-32 lg:mr-auto lg:ml-24">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-6 text-base">About</h3>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Blogs</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">FAQ's</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Policies</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-6 text-base">Products</h3>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Squares</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Gift Cards</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Offers</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Help Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] transform rotate-2 max-w-sm w-full md:w-auto">
                        <div className="flex items-center gap-3 mb-6">
                            {/* Chat Bubble Question Mark Icon */}
                            <div className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center relative">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {/* Bubble tail effect */}
                                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#3B82F6] rounded-full"></div>
                                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-full translate-x-1 translate-y-[-2px]"></div>
                            </div>
                            <h4 className="font-bold text-xl text-gray-900">Need some help?</h4>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex-1 px-5 py-2.5 bg-[#F3F4F6] hover:bg-gray-200 rounded-full text-sm font-bold text-gray-800 transition-colors">
                                Chat With Us
                            </button>
                            <button className="flex-1 px-5 py-2.5 bg-[#F3F4F6] hover:bg-gray-200 rounded-full text-sm font-bold text-gray-800 transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs font-medium">
                        Twenty Square © 2024. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="#" className="bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9] p-[2px] rounded-full w-8 h-8 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                            <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#D800B9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2.5"></rect><circle cx="12" cy="12" r="4" strokeWidth="2.5"></circle><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle></svg>
                            </div>
                        </a>
                        <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path></svg>
                        </a>
                        <a href="#" className="text-[#FF0000] hover:opacity-80 transition-opacity">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.07 29.07 0 0 0 1 11.75a29.07 29.07 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.07 29.07 0 0 0 .46-5.33 29.07 29.07 0 0 0-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
