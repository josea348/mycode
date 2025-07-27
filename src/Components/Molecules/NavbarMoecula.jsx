import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// AcmeLogo component - Renders the SVG logo
export const AcmeLogo = () => {
  return (
    <svg fill='none' height='36' viewBox='0 0 32 32' width='36' className='text-current'>
      <path
        clipRule='evenodd'
        d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

// Main App component for the Navbar
export default function NavbarMoecula() {
  const location = useLocation();
  const navigator = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Array of menu items for the mobile navigation
  const menuItems = [
    'Frontend',
    'Frontend whit style heroui',
    'Backend',
  ];

  const home = () => {
    navigator('/');
  }

  const frontendheroui = () => {
    navigator('/frontendheroui');
  }

  const backend = () => {
    navigator('/backend');
  }

  return (
    // Navbar container with responsive padding and background
    <nav className='fixed w-full z-1 top-0 bg-gray-900 text-white p-4 shadow-lg rounded-b-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Navbar Content Left: Menu Toggle and Brand */}
        <div className='flex items-center space-x-4'>
          {/* Mobile Menu Toggle Button */}
          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger/Close Icon */}
            {isMenuOpen ? (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            ) : (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            )}
          </button>

          {/* Navbar Brand: Logo and Text */}
          <div className='flex items-center space-x-2'>
            <AcmeLogo />
            <p className='font-bold text-xl'>ACME</p>
          </div>
        </div>

        {/* Navbar Content Center: Desktop Navigation Items */}
        <div className='hidden sm:flex gap-6 justify-center flex-grow'>
          {/* Features Link */}
          <button onClick={home} className={location.pathname === '/' ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1 cursor-pointer' : 'text-gray-300 hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer'}>
            Frontend
          </button>
          {/* Customers Link (Active State) */}
          <button onClick={frontendheroui} className={location.pathname === '/frontendheroui' ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1 cursor-pointer' : 'text-gray-300 hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer'}>
            Frontend whit style heroui
          </button>
          {/* Integrations Link */}
          <button onClick={backend} className={location.pathname === '/backend' ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1 cursor-pointer' : 'text-gray-300 hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer'}>
            Backend
          </button>
        </div>

        {/* Navbar Content Right: Login and Sign Up Buttons */}
        <div className='flex items-center space-x-4'>
          {/* Login Link (hidden on small screens) */}
          <a href='#' className='hidden lg:flex text-gray-300 hover:text-blue-400 transition duration-300 ease-in-out'>
            Login
          </a>
          {/* Sign Up Button */}
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out'>
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center sm:hidden'>
          {/* Close button for mobile menu */}
          <button
            className='absolute top-4 right-4 p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>

          {/* Mobile Menu Items */}
          <ul className='flex flex-col space-y-6 text-2xl font-medium'>
            <li>
              <button
                className={`block text-center w-full py-2 px-4 rounded-md transition duration-300 ease-in-out cursor-pointer ${
                  location.pathname === '/' ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
                }`}
                onClick={() => {
                  navigator('/');
                  setIsMenuOpen(false);
                }} // Close menu on item click
              >
                Frontend
              </button>
            </li>
            <li>
              <button
                className={`block text-center w-full py-2 px-4 rounded-md transition duration-300 ease-in-out cursor-pointer ${
                  location.pathname === '/frontendheroui' ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
                }`}
                onClick={() => {
                  navigator('/frontendheroui');
                  setIsMenuOpen(false);
                }} // Close menu on item click
              >
                Frontend whit style heroui
              </button>
            </li>
            <li>
              <button
                className={`block text-center w-full py-2 px-4 rounded-md transition duration-300 ease-in-out cursor-pointer ${
                  location.pathname === '/backend' ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
                }`}
                onClick={() => {
                  navigator('/backend');
                  setIsMenuOpen(false);
                }} // Close menu on item click
              >
                Backend
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
