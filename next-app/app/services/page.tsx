import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Services - Movein | Professional Moving Solutions",
  description: "Explore our comprehensive moving services including residential, commercial, packing, storage, and international moving solutions.",
};

const services = [
  {
    icon: "icon-service-item-1.svg",
    title: "Residential Moving",
    description: "Hassle-free home relocation services tailored to your needs. We handle everything from packing to unpacking.",
    features: ["Professional packing", "Furniture disassembly", "Safe transportation", "Unpacking services"]
  },
  {
    icon: "icon-service-item-2.svg",
    title: "Commercial Moving",
    description: "Professional moving services tailored to business needs, ensuring efficient and timely relocations.",
    features: ["Office equipment handling", "Minimal downtime", "IT equipment care", "After-hours service"]
  },
  {
    icon: "icon-service-item-3.svg",
    title: "Specialty Item Moving",
    description: "Expert handling for fragile and valuable items, ensuring safe transport of antiques, art, and more.",
    features: ["Custom crating", "Climate-controlled transport", "Insurance coverage", "Expert handling"]
  },
  {
    icon: "icon-service-item-4.svg",
    title: "Eco-Friendly Moving",
    description: "Sustainable moving solutions using eco-friendly materials and practices to reduce environmental impact.",
    features: ["Recyclable packing", "Fuel-efficient trucks", "Reusable containers", "Carbon offset"]
  },
  {
    icon: "icon-service-item-5.svg",
    title: "Packing Services",
    description: "Complete packing solutions with professional-grade materials to ensure your items are protected.",
    features: ["Quality materials", "Item labeling", "Fragile care", "Custom solutions"]
  },
  {
    icon: "icon-service-item-6.svg",
    title: "Storage Solutions",
    description: "Secure, climate-controlled storage facilities for short-term or long-term storage needs.",
    features: ["24/7 security", "Climate control", "Flexible terms", "Easy access"]
  },
  {
    icon: "icon-service-item-7.svg",
    title: "International Moving",
    description: "Seamless international relocation services with customs clearance and global logistics support.",
    features: ["Customs handling", "Door-to-door service", "Global network", "Documentation help"]
  },
  {
    icon: "icon-service-item-8.svg",
    title: "Piano & Heavy Item Moving",
    description: "Specialized equipment and trained professionals for moving pianos and other heavy items safely.",
    features: ["Special equipment", "Trained movers", "Insurance included", "Safe handling"]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="Our Services"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Comprehensive moving solutions for every need</p>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">What We Offer</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete moving solutions <span className="text-orange-500">for you</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                From residential moves to commercial relocations, we offer a full range of services to meet all your moving needs.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInUp key={service.title} delay={index * 0.1}>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all group">
                  <div className="mb-6">
                    <Image src={`/${service.icon}`} alt={service.title} width={70} height={70} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <i className="fa-solid fa-check text-orange-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center"
                  >
                    Get Quote 
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">How It Works</h3>
              <h2 className="text-4xl md:text-5xl font-bold">
                Our simple <span className="text-orange-500">4-step process</span>
              </h2>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "icon-work-process-1.svg", title: "Get Quote", description: "Contact us for a free, no-obligation quote" },
              { icon: "icon-work-process-2.svg", title: "Plan Move", description: "We create a customized moving plan for you" },
              { icon: "icon-work-process-3.svg", title: "Pack & Load", description: "Professional packing and loading of your items" },
              { icon: "icon-work-process-4.svg", title: "Deliver", description: "Safe delivery and unpacking at your new location" }
            ].map((step, index) => (
              <FadeInUp key={step.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="mb-6 flex justify-center">
                    <Image src={`/${step.icon}`} alt={step.title} width={80} height={80} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need a Customized Solution?
              </h2>
              <p className="text-xl mb-8">
                Contact our team to discuss your specific moving requirements and get a tailored solution.
              </p>
              <Link href="/contact" className="btn-default bg-white text-orange-500 hover:bg-gray-100 border-white">
                Contact Us Today
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
