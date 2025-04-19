import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Users, Clipboard, ShieldCheck, Activity, Database, LineChart, MessageSquare, Bell, Smartphone, Server } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
              Our Services & Features
            </h1>
            <p className="mt-6 text-xl text-blue-100 animate-fade-in-delay-1">
              Comprehensive solutions for modern healthcare management
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Core Features
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Our hospital management system offers a comprehensive suite of features
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, index) => (
              <div 
                key={feature.title} 
                className="relative group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User-Specific Features */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              User-Specific Features
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Tailored functionality for different user roles
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {userFeatures.map((userType, index) => (
              <div 
                key={userType.title} 
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mr-4">
                    {userType.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{userType.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {userType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Features
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Built with performance, security, and reliability in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Support for 100+ concurrent users</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Patient records load in under 2 seconds</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Optimized database queries for fast data retrieval</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Responsive design for all device sizes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in-delay-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Reliability</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multi-factor authentication (MFA)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">99.9% system uptime</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">End-to-end data encryption</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Regular automated backups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your hospital operations?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Contact us today to schedule a demo and see how our system can benefit your facility.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center rounded-md border border-transparent border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const coreFeatures = [
  {
    title: "Appointment Scheduling",
    description: "Doctors can update their available time slots and patients can book appointments with ease.",
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    title: "Real-time Availability",
    description: "Check doctor availability and schedule appointments in real-time with instant confirmation.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "User Management",
    description: "Comprehensive user management for doctors, patients, admins, and pharmacists.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Prescription Management",
    description: "Doctors can prescribe medicines digitally and patients can access their prescriptions online.",
    icon: <Clipboard className="h-6 w-6" />,
  },
  {
    title: "Secure & Reliable",
    description: "Multi-factor authentication and 99.9% uptime ensure your data is safe and always accessible.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Performance Optimized",
    description: "Fast loading times with patient records available in under 2 seconds, even under high load.",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    title: "Data Analytics",
    description: "Gain insights into hospital operations with comprehensive reporting and analytics tools.",
    icon: <LineChart className="h-6 w-6" />,
  },
  {
    title: "Inventory Management",
    description: "Track and manage medicine stock and hospital supplies with automated alerts for low inventory.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Communication Tools",
    description: "Secure messaging system for internal communication between staff members.",
    icon: <MessageSquare className="h-6 w-6" />,
  },
];

const userFeatures = [
  {
    title: "For Doctors",
    icon: <Users className="h-6 w-6" />,
    features: [
      "Update available time slots for appointments",
      "View patient history and records",
      "Prescribe medicines digitally",
      "Schedule follow-up appointments",
      "Access lab results and medical imaging",
      "Communicate with other healthcare providers"
    ]
  },
  {
    title: "For Patients",
    icon: <Smartphone className="h-6 w-6" />,
    features: [
      "Book appointments with preferred doctors",
      "View prescription history",
      "Receive appointment reminders",
      "Access medical records securely",
      "Request prescription refills",
      "View billing information and make payments"
    ]
  },
  {
    title: "For Administrators",
    icon: <Server className="h-6 w-6" />,
    features: [
      "Manage hospital data including doctors and patients",
      "Generate reports on hospital operations",
      "Monitor system performance and usage",
      "Configure system settings and user permissions",
      "Audit system access and changes",
      "Manage billing and financial operations"
    ]
  },
  {
    title: "For Pharmacists",
    icon: <Bell className="h-6 w-6" />,
    features: [
      "Manage medicine stock and inventory",
      "Receive digital prescriptions from doctors",
      "Track medicine dispensing",
      "Set up alerts for low stock items",
      "Verify prescription authenticity",
      "Generate reports on medicine usage"
    ]
  }
];
