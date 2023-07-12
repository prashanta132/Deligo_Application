import React from 'react';
import { RiStore3Fill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import Header from '@layouts/partials/Header';
import Footer from '@layouts/partials/Footer';

const StoreRegistrationPage = () => {
    return (
        <>
            <Header />

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-8">Store Application</h1>

                <div className="flex items-start">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                            <RiStore3Fill />

                            <h1 className="font-bold text-2xl"> Store Information</h1>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <button className="w-full bg-blue-500 text-white py-2 rounded">Default</button>
                            </div>
                            <div>
                                <button className="w-full bg-blue-500 text-white py-2 rounded">English</button>
                            </div>
                            <div>
                                <button className="w-full bg-blue-500 text-white py-2 rounded">Hindi</button>
                            </div>
                        </div>

                        <form className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" className="border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label htmlFor="address">Address:</label>
                                <input type="text" id="address" className="border border-gray-300 rounded-md p-2" />
                            </div>

                            <div>
                                <label htmlFor="vat">VAT/Tax(%):</label>
                                <input type="text" id="vat" className="border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label htmlFor="deliveryTime">Approx Delivery Time:</label>
                                <div className="flex items-center">
                                    <input type="number" id="deliveryTime" className="border border-gray-300 rounded-l-md p-2 w-16" min="10" max="20" />
                                    <div className="flex flex-col">
                                        <button className="border border-gray-300 rounded-t-none py-1 px-2">&#x25B2;</button>
                                        <button className="border border-gray-300 rounded-b-md py-1 px-2">&#x25BC;</button>
                                    </div>
                                    <select className="border border-gray-300 rounded-r-md p-2">
                                        <option value="minutes">Minutes</option>
                                        <option value="hours">Hours</option>
                                        <option value="days">Days</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="uploadCoverPhoto1">Upload Cover Photo (Ratio 2:1):</label>
                                <div className="flex items-center">
                                    <input type="file" id="uploadCoverPhoto1" className="hidden" />
                                    <label htmlFor="uploadCoverPhoto1" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded">Choose File</label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="uploadCoverPhoto2">Upload Cover Photo (Ratio 2:1):</label>
                                <div className="flex items-center">
                                    <input type="file" id="uploadCoverPhoto2" className="hidden" />
                                    <label htmlFor="uploadCoverPhoto2" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded">Choose File</label>
                                </div>
                            </div>
                        </form>

                        <div className="flex items-center">
                            <img src="google-maps-icon.png" alt="Google Maps Icon" className="w-6 h-6 mr-2" />
                            <span>Google Map for User Location</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="latitude">Latitude:</label>
                                <input type="text" id="latitude" className="border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label htmlFor="longitude">Longitude:</label>
                                <input type="text" id="longitude" className="border border-gray-300 rounded-md p-2" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <FaUserAlt />

                            <span> Owner Information</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" className="border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" className="border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone No.:</label>
                                <input type="text" id="phone" className="border border-gray-300 rounded-md p-2" />
                            </div>
                        </div>

                        <div className="flex items-center font-bold mr-3">
                            <FaUserAlt />
                            <span>Login Information</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" className="border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" className="border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input type="password" id="confirmPassword" className="border border-gray-300 rounded-md p-2" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="privacyTerms" className="mr-2" />
                            <label htmlFor="privacyTerms">I agree to the Privacy Policy and Terms of Service.</label>
                        </div>

                        <button className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
                    </div>

                    <div className="ml-8">
                        {/* Google Map Component */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default StoreRegistrationPage;
