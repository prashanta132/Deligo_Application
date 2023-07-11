import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
        <img
          src="/logo.png" // Replace with your logo image path
          alt="Logo"
          className="mx-auto mb-4"
        />
        <h2 className="text-center text-2xl font-semibold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-medium">
              Phone Number
            </label>
            <div className="flex items-center">
              <select
                id="countryCode"
                name="countryCode"
                className="block appearance-none border border-gray-300 rounded px-3 py-2 mr-2"
              >
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="block appearance-none border border-gray-300 rounded w-full px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="block appearance-none border border-gray-300 rounded w-full px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="remember" className="inline-flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="form-checkbox text-blue-500 mr-2"
              />
              Remember Me
            </label>
            <a href="#" className="text-sm text-blue-500">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
          >
            Sign In
          </button>
          <div className="text-center mt-4">
            <span className="block mb-2">Or sign in with:</span>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded mt-2">
              Sign In with Google
            </button>
            <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 rounded mt-2">
              Continue with Facebook
            </button>
          </div>
          <div className="text-center mt-4">
            <span className="text-sm">Don't have an account?</span>
            <a href="#" className="text-blue-500 ml-1">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
