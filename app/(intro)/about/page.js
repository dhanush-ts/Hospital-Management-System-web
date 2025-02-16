import React from 'react';

const AboutPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-6">Learn more about our mission, vision, and values.</p>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p>To provide exceptional healthcare services with compassion and professionalism.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                <p>To be the leading healthcare provider, recognized for our commitment to excellence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                <p>Integrity, Compassion, Excellence, Innovation, and Collaboration.</p>
            </div>
        </div>
    );
};

export default AboutPage;
