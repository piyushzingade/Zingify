
import React from 'react';

function Footer() {
    return (
        <footer className="bg-zinc-950 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div className="mb-4 md:mb-0">
                        <a href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                                <div className="w-6 h-6 bg-zinc-900 transform rotate-45 rounded-sm"></div>
                            </div>
                            <span className="font-bold text-lg">Zingify</span>
                        </a>
                    </div>

                    <nav className="flex flex-col space-y-2 text-zinc-400 text-sm">
                        <a className="hover:underline" href="/">Home</a>
                        <a className="hover:underline" href="/about">About</a>
                        <a className="hover:underline" href="/terms">Terms & Conditions</a>
                        <a className="hover:underline" href="/shipping">Shipping & Return Policy</a>
                        <a className="hover:underline" href="/privacy">Privacy Policy</a>
                        <a className="hover:underline" href="/faq">FAQ</a>
                    </nav>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
                    <p>© {new Date().getFullYear()} Zingify, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
