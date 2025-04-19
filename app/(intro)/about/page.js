import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Code, Server, Shield, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
              About Our Hospital Management System
            </h1>
            <p className="mt-6 text-xl text-blue-100 animate-fade-in-delay-1">
              Designed by healthcare professionals, for healthcare professionals
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-float">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-xl">
                <Image 
                  src="/narasu.jpg" 
                  alt="Hospital Staff" 
                  width={600} 
                  height={400}
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-600">
                  To revolutionize healthcare management by providing a comprehensive, user-friendly system that streamlines operations, 
                  enhances patient care, and empowers healthcare professionals to focus on what matters most – their patients.
                </p>
              </div>
              
              <div className="animate-fade-in-delay-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Vision</h2>
                <p className="mt-4 text-lg text-gray-600">
                  To become the global standard for hospital management systems, known for reliability, security, and innovation, 
                  helping healthcare facilities worldwide deliver exceptional patient care through efficient operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We built our system with a focus on user experience, security, and performance
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {approaches.map((approach, index) => (
              <div 
                key={approach.title} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                  {approach.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{approach.title}</h3>
                <p className="mt-2 text-base text-gray-500">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Technology Stack
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Built with modern, scalable technologies to ensure reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name} 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 flex items-center justify-center text-gray-500">
                  {tech.icon}
                </div>
                <h3 className="mt-4 text-base font-medium text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              A dedicated group of healthcare and technology experts
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <Image 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    width={300} 
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-blue-600">{member.role}</p>
                  <p className="mt-3 text-base text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want to learn more about our system?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Discover how our hospital management system can transform your healthcare facility.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
              >
                Explore Our Services
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md border border-transparent border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const approaches = [
  {
    title: "User-Centered Design",
    description: "Built with input from doctors, nurses, administrators, and patients to ensure intuitive workflows for all users.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Modern Architecture",
    description: "Leveraging the latest in web technology to provide a responsive, fast, and reliable experience across all devices.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Scalable Infrastructure",
    description: "Designed to handle growing demands with support for 100+ concurrent users and rapid data retrieval.",
    icon: <Server className="h-6 w-6" />,
  },
  {
    title: "Enterprise Security",
    description: "Multi-factor authentication, role-based access control, and encrypted data storage protect sensitive information.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Performance Optimized",
    description: "Engineered for speed with patient records loading in under 2 seconds and real-time updates.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Continuous Improvement",
    description: "Regular updates based on user feedback and healthcare industry developments to stay ahead of evolving needs.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
];

const technologies = [
  { name: "Next.js", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg> },
  { name: "React", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></svg> },
  { name: "Django", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 6h20M2 12h20M2 18h20"></path></svg> },
  { name: "SQL lite", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.4 7.8l-8.5 8.4L5.6 12"></path></svg> },
  { name: "Azure", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> },
  { name: "TailwindCSS", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg> },
];

const team = [
  {
    name: "Dr. BK",
    role: "DevOps Engineer",
    bio: "With 15 years of devOps experience, Dr. BK ensures our system meets real healthcare needs.",
    image: "/bk.jpg",
  },
  {
    name: "Dr. Barath raji",
    role: "Record maker",
    bio: "Raji brings 10+ years of software development expertise to create robust, scalable solutions.",
    image: "/raji.jpg",
  },
  {
    name: "Dr. Malwin sosept",
    role: "UX Designer",
    bio: "Malwin specializes in creating intuitive interfaces for healthcare professionals and patients.",
    image: "/malwin.jpg",
  },
//   {
//     name: "Dilli babu",
//     role: "Security Specialist",
//     bio: "David ensures our system meets the highest standards for healthcare data security and compliance.",
//     image: "/placeholder.svg?height=300&width=300",
//   },
];
