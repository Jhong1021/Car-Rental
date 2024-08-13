import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-8 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center">
                    <img
                        src="images/logo.png"
                        alt="Car Rental Company Logo"
                        width={150}
                        height={50}
                        className="w-auto h-auto"
                        style={{ aspectRatio: "150/50", objectFit: "cover" }}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                    <a href="#about" className="hover:underline">
                        About
                    </a>
                    <a href="#contact" className="hover:underline">
                        Contact
                    </a>
                    <a href="#" className="hover:underline">
                        FAQ
                    </a>
                    <a href="#" className="hover:underline">
                        Terms of Service
                    </a>
                </div>
                <div className="space-y-2">
                    <div>
                        <p className="font-medium">Car Rental Company</p>
                        <p>123 Main St, Anytown USA</p>
                    </div>
                    <div>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@carrentalcompany.com</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-[#333] pt-4 text-center text-sm text-[#999]">
                &copy; 2024 Car Rental Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
