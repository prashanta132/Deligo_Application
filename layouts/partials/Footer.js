import React from 'react';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="bg-emerald-700 text-white">
            <div className="container mx-auto py-8 flex flex-col md:flex-row">
                {/* Column 1 */}
                <div className="flex flex-col items-center md:w-1/2 md:text-left">
                    <img src="/images/logo.png" alt="Company Logo" className="w-20 h-20 mb-4" />
                    <p className="mb-4">Connect with our social media and other sites to keep up to date</p>
                    <div className="flex">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6 space-x-1" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6 space-x-1" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6 space-x-1" />
                        </Link>
                    </div>
                    <div className="mt-4">
                        <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <button className="bg-trueGray-900 hover:bg-trueGray-600 text-white font-semibold py-2 px-4 rounded">
                            <img src="/icons/google_play1.png" alt="Email" className="w-6 h-6" />
                                Google Play
                            </button>
                        </Link>
                        <Link href="https://itunes.apple.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                            <button className="bg-trueGray-900 hover:bg-trueGray-600 text-white font-semibold py-2 px-4 rounded">
                            <img src="/icons/app1.png" alt="Email" className="w-6 h-6"/>
                                App Store
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col md:w-1/2 md:text-middle">
                    <ul className="text-sm">
                        <li className="mb-2">
                            <Link href="/about">Become a Store Owner</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/services">Become a Delivery Man</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/blog">Help & Support</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/contact">Terms & Conditions </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/contact">Privacy Policy </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/contact">Refund Policy </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/contact">Cancellation Policy </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/contact">Shipping Policy</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/contact">About Us</Link>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center mt-4">
                        <Link href="mailto:info@example.com" className="mr-2">
                            <img src="/icons/email-icon.png" alt="Email" className="w-6 h-6" /><h6>Send Us Mails</h6>
                            <p>support@deligo.com</p>
                        </Link>
                        <Link href="/contact">
                            <img src="/icons/phone-1.png" alt="Contact" className="w-6 h-6" /><h6>Contact Us</h6>
                            <p>91-9265616481</p>
                        </Link>
                        <br/>
                        <Link href="/contact">
                            <img src="/icons/find1.png" alt="find Us" className="w-6 h-6" /><h6>Find Us Here</h6>
                            <p>House: 00, Road: 00, City-0000, Country</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;




// import Social from "@components/Social";
// import config from "@config/config.json";
// import menu from "@config/menu.json";
// import social from "@config/social.json";
// import ImageFallback from "@layouts/components/ImageFallback";
// import Logo from "@layouts/components/Logo";
// import { markdownify } from "@lib/utils/textConverter";
// import Link from "next/link";

// const Footer = () => {
//   const { copyright, footer_content } = config.params;
//   return (
//     <footer className="section relative mt-12 pt-[70px] pb-[50px]">
//       <ImageFallback
//         className="-z-[1] object-cover object-left  md:object-top"
//         src="/images/footer-bg-shape.svg"
//         alt="footer background"
//         fill={true}
//       />
//       <div className="container text-center">
//         <div className="mb-6 inline-flex">
//           <Logo />
//         </div>
//         {markdownify(footer_content, "p", "max-w-[638px] mx-auto")}

//         {/* footer menu */}
//         <ul className="mb-12 mt-6 flex-wrap space-x-2 lg:space-x-4">
//           {menu.footer.map((menu) => (
//             <li className="inline-block" key={menu.name}>
//               <Link
//                 href={menu.url}
//                 className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
//               >
//                 {menu.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         {/* social icons */}
//         <div className="inline-flex">
//           <Social source={social} className="socials mb-12 justify-center" />
//         </div>
//         {/* copyright */}
//         {markdownify(copyright, "p")}
//       </div>
//     </footer>
//   );
// };

// export default Footer;
