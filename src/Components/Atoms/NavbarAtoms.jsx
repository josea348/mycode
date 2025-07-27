import React from 'react';

// Main App component for the Navbar
export default function NavbarAtoms({ children, className }) {
    return (
        // Navbar container with responsive padding and background
        <nav className={className}>
            {children}
        </nav>
    );
}
