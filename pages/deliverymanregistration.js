import { useState } from 'react';

const deliveryManTypes = ['Freelancer', 'Salary Based'];
const deliveryZones = ['Zone 1', 'Zone 2', 'Zone 3'];
const vehicleOptions = ['Bicycle', 'Bike'];
const identityTypes = ['Passport', 'Driving Licence', 'NID', 'Store ID'];

const DeliveryManApplication = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [deliveryManType, setDeliveryManType] = useState('');
    const [zone, setZone] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [identityType, setIdentityType] = useState('');
    const [identityNumber, setIdentityNumber] = useState('');
    const [identityImage, setIdentityImage] = useState(null);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [deliveryManImage, setDeliveryManImage] = useState(null);
    const [isRobot, setIsRobot] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // e.g., send data to a server or perform client-side validation
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Delivery Man Application</h1>

            <form onSubmit={handleFormSubmit}>
                {/* Delivery Man Information */}
                <div className="flex items-center mb-4">
                    <div className="mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-8a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1zm0 4a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="font-bold">Delivery Man Information</div>
                </div>

                {/* First Name and Last Name */}
                <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                        <label className="block mb-1">First Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label className="block mb-1">Last Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                {/* Email, Delivery Man Type, and Zone */}
                <div className="flex mb-4">
                    <div className="w-1/3 pr-2">
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-1/3 px-2">
                        <label className="block mb-1">Delivery Man Type</label>
                        <select
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={deliveryManType}
                            onChange={(e) => setDeliveryManType(e.target.value)}
                        >
                            <option value="">Select</option>
                            {deliveryManTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/3 pl-2">
                        <label className="block mb-1">Zone</label>
                        <select
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={zone}
                            onChange={(e) => setZone(e.target.value)}
                        >
                            <option value="">Select</option>
                            {deliveryZones.map((zone) => (
                                <option key={zone} value={zone}>{zone}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Vehicle and Identity */}
                <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                        <label className="block mb-1">Vehicle</label>
                        <select
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={vehicle}
                            onChange={(e) => setVehicle(e.target.value)}
                        >
                            <option value="">Select</option>
                            {vehicleOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2 pl-2">
                        <label className="block mb-1">Identity Type</label>
                        <select
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={identityType}
                            onChange={(e) => setIdentityType(e.target.value)}
                        >
                            <option value="">Select</option>
                            {identityTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Identity Number and Identity Image */}
                <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                        <label className="block mb-1">Identity Number</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={identityNumber}
                            onChange={(e) => setIdentityNumber(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label className="block mb-1">Identity Image</label>
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e) => setIdentityImage(e.target.files[0])}
                            accept="image/*"
                            id="identityImage"
                        />
                        <label
                            htmlFor="identityImage"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
                        >
                            Choose File
                        </label>
                    </div>
                </div>

                {/* Login Information */}
                <div className="flex items-center mb-4">
                    <div className="mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1H4zm4 4a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="font-bold">Login Information</div>
                </div>

                {/* Phone and Password */}
                <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                        <label className="block mb-1">Phone</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {/* Delivery Man Image */}
                <div className="flex mb-4">
                    <div className="w-full">
                        <div className="mb-1">Delivery Man Image (Ratio 1:1)</div>
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e) => setDeliveryManImage(e.target.files[0])}
                            accept="image/*"
                            id="deliveryManImage"
                        />
                        <label
                            htmlFor="deliveryManImage"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
                        >
                            Choose File
                        </label>
                    </div>
                </div>

                {/* I am not a robot */}
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={isRobot}
                            onChange={(e) => setIsRobot(e.target.checked)}
                        />
                        <span className="select-none">I am not a robot</span>
                    </label>
                </div>

                {/* Submit Button */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                        disabled={!isRobot} // Disable the button if the user hasn't checked the checkbox
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DeliveryManApplication;
