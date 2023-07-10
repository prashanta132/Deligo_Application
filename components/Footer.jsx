import React from 'react';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="bg-emerald-700 text-white " >
            <div className="container mx-auto py-8 flex flex-col md:flex-row">
                {/* Column 1 */}
                <div className="flex flex-col items-center md:w-1/2 md:text-left">
                    <img src="/images/6am.png" alt="Company Logo" className="w-20 h-20 mb-4" />
                    <p className="mb-4"></p>
                    <div className="flex">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
                        </Link>
                    </div>
                    <div className="mt-4">
                        <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                                Google Play
                            </button>
                        </Link>
                        <Link href="https://itunes.apple.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                App Store
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col md:w-1/2 md:text-right">
                    <ul className="text-sm">
                        <li className="mb-2">
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/services">Services</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="flex items-center justify-end mt-4">
                        <Link href="mailto:info@example.com" className="mr-2">
                            <img src="/mail-icon.png" alt="Email" className="w-6 h-6" />
                        </Link>
                        <Link href="/contact">
                            <img src="/contact-icon.png" alt="Contact" className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
