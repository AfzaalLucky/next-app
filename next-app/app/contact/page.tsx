import Image from "next/image";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Movein | Get a Free Moving Quote",
  description: "Contact Movein for professional moving services. Get a free quote, schedule your move, or ask us any questions about our services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="Contact Us"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our team</p>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <FadeInUp>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-location-dot text-orange-500 text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Our Location</h3>
                      <p className="text-gray-600">
                        123 Moving Street<br />
                        City Center, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-phone text-orange-500 text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone Number</h3>
                      <p className="text-gray-600">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email Address</h3>
                      <p className="text-gray-600">
                        info@movein.com<br />
                        support@movein.com
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-clock text-orange-500 text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Working Hours</h3>
                      <p className="text-gray-600">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 4:00 PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeInUp delay={0.2}>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - placeholder) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="bg-gray-300 h-96 rounded-2xl flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                [Map Integration Placeholder - Google Maps or similar can be added here]
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
