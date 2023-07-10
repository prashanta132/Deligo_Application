import { useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        role: 'CEO',
        image: '/images/john_testi.png',
        message: 'This is a complete packege! I am running a multivendor(food,grocery)online ordering',
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'CTO',
        image: '/images/testi2.png',
        message: 'This is a complete packege! I am running a multivendor(food,grocery)online ordering',
    },
    {
        id: 3,
        name: 'Jane Smith',
        role: 'CTO',
        image: '/images/testi3.png',
        message: 'This is a complete packege! I am running a multivendor(food,grocery)online ordering',
    },
    // Add more testimonials here
];

const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">We satisfied some Customer & Restaurant Owners</h1>
            <div className="flex flex-col items-center">
                <img
                    className="w-32 h-32 rounded-full mb-4 object-cover"
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                />
                <h2 className="text-xl font-bold mb-2">{testimonials[activeIndex].name}</h2>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                <p className="text-gray-700 text-center max-w-md mt-4">
                    {testimonials[activeIndex].message}
                </p>
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="mr-2 p-2 bg-green-200 hover:bg-green-300 rounded-full focus:outline-none"
                    onClick={handlePrev}
                >
                    Prev
                </button>
                <button
                    className="ml-2 p-2 bg-green-200 hover:bg-green-300 rounded-full focus:outline-none"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;