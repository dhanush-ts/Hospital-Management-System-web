import React from 'react';

const ServicesPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg mb-6">Explore the wide range of services we offer to our patients.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">General Medicine</h2>
                    <p>Comprehensive care for all your general health needs.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Pediatrics</h2>
                    <p>Specialized care for infants, children, and adolescents.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Surgery</h2>
                    <p>Advanced surgical procedures performed by expert surgeons.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Maternity</h2>
                    <p>Comprehensive maternity care for expecting mothers.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
