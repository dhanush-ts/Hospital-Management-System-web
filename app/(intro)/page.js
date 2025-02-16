import React from 'react'

export default function Home() {
  return (
    <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to HMS</h1>
            <p className="text-lg mb-6">Your trusted partner in healthcare management.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Comprehensive Services</h2>
                    <p>We offer a wide range of healthcare services to meet all your needs.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Expert Staff</h2>
                    <p>Our team of professionals are here to provide the best care possible.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Advanced Technology</h2>
                    <p>We use the latest technology to ensure the highest quality of care.</p>
                </div>
            </div>
        </div>
  )
}