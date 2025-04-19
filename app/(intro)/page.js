import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Users, Clipboard, ShieldCheck, Activity, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-500 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="container relative mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Modern Healthcare Management Solution
              </h1>
              <p className="text-xl text-blue-50 max-w-3xl">
                Streamline your hospital operations with our comprehensive management system designed for doctors, patients, and administrators.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md border border-transparent border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-xl">
                <Image 
                  src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=oUILskmtaPiA711DP53DFhOUvE7pfdNeEK9CfyxlGio=" 
                  alt="Hospital Management Dashboard" 
                  width={600} 
                  height={400}
                  className="rounded-md w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Hospital Management
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our system addresses all aspects of modern healthcare administration
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="relative group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
              Trusted by Healthcare Professionals
            </h2>
            
            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in">
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-500 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              
              <p className="text-lg text-gray-600 mt-4">
                "This hospital management system has transformed our operations. The scheduling system alone has saved our staff countless hours, and the patient experience has improved dramatically."
              </p>
              
              <div className="mt-6">
                <p className="font-medium text-gray-900">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-500">Chief Medical Officer, Metro General Hospital</p>
              </div>
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
              Join hundreds of healthcare facilities that have streamlined their processes with our system.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
              >
                Request a Demo
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center rounded-md border border-transparent border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
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
];

const stats = [
  { value: "100+", label: "Concurrent Users" },
  { value: "99.9%", label: "System Uptime" },
  { value: "<2s", label: "Record Load Time" },
  { value: "100%", label: "Secure Access" },
];
