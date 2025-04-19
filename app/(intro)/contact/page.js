import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-600 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-green-100 animate-fade-in-delay-1">
              We're here to answer your questions and provide the support you need
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  >
                    <option>General Inquiry</option>
                    <option>Demo Request</option>
                    <option>Technical Support</option>
                    <option>Pricing Information</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200 w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-delay-1">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="ml-3 text-base text-gray-700">
                      <p>123 Healthcare Avenue</p>
                      <p>Medical District</p>
                      <p>New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-teal-600" />
                    <div className="ml-3 text-base text-gray-700">
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-teal-600" />
                    <div className="ml-3 text-base text-gray-700">
                      <p>contact@hospitalmanagementsystem.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="ml-3 text-base text-gray-700">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Schedule a demo today and see how our hospital management system can transform your operations.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-teal-600 shadow-sm hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 transition-all duration-200"
              >
                Explore Our Services
              </Link>
              <button 
                className="inline-flex items-center justify-center rounded-md border border-transparent border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 transition-all duration-200"
              >
                Request a Call Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqs = [
  {
    question: "How long does implementation typically take?",
    answer: "Implementation time varies based on your facility's size and requirements, but typically ranges from 4-8 weeks including training and data migration."
  },
  {
    question: "Is the system compliant with healthcare regulations?",
    answer: "Yes, our system is fully compliant with HIPAA and other relevant healthcare regulations to ensure patient data privacy and security."
  },
  {
    question: "Can the system integrate with our existing software?",
    answer: "Our system offers robust API capabilities that allow integration with most common healthcare software systems, including EHRs, billing systems, and laboratory information systems."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 technical support, regular system updates, and dedicated account managers for enterprise clients."
  },
];
