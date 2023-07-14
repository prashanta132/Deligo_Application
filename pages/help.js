import React from 'react';

const HelpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <img src="/banner-image.png" alt="Banner" className="mx-auto" />
        <h1 className="text-2xl font-bold mt-4">Need Any Help?</h1>
        <p className="mt-2">
          Communicate with our support team to get proper guidance to your queries.
        </p>
      </div>

      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <img src="/visit-icon.png" alt="Visit Icon" className="mx-auto" />
          <h2 className="text-lg font-semibold mt-2">Visit Us</h2>
          <p className="mt-1">123 Main Street, City, Country</p>
        </div>

        <div className="text-center">
          <img src="/email-icon.png" alt="Email Icon" className="mx-auto" />
          <h2 className="text-lg font-semibold mt-2">Email Us</h2>
          <p className="mt-1">support@6amtech.com</p>
        </div>

        <div className="text-center">
          <img src="/call-icon.png" alt="Call Icon" className="mx-auto" />
          <h2 className="text-lg font-semibold mt-2">Call Us</h2>
          <p className="mt-1">+1 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
