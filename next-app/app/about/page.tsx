import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About Us - Movein | Professional Moving Company",
  description: "Learn about Movein's commitment to excellence in moving services. Our experienced team provides reliable, professional relocation solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="About Us"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Learn more about our story and mission</p>
          </FadeInUp>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <FadeInUp>
              <div className="section-title">
                <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Who We Are</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Your trusted moving <span className="text-orange-500">partner</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  With over 15 years of experience in the moving industry, we've helped thousands of families and businesses relocate with ease. Our commitment to excellence and customer satisfaction has made us one of the most trusted moving companies in the region.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We understand that moving is more than just transporting belongings from one place to another. It's about new beginnings, fresh starts, and exciting opportunities. That's why we approach every move with care, professionalism, and attention to detail.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image src="/who-we-are-img-1.jpg" alt="Our team" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden mt-8">
                  <Image src="/who-we-are-img-2.jpg" alt="Moving service" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden -mt-8">
                  <Image src="/who-we-are-img-3.jpg" alt="Packing" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image src="/who-we-are-img-4.jpg" alt="Delivery" fill className="object-cover" />
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { number: 15, suffix: "+", label: "Years Experience" },
              { number: 1082, suffix: "+", label: "Successful Moves" },
              { number: 92, suffix: "%", label: "Satisfaction Rate" },
              { number: 50, suffix: "+", label: "Team Members" }
            ].map((stat, index) => (
              <FadeInUp key={stat.label} delay={index * 0.1}>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                  <h3 className="text-5xl font-bold text-orange-500 mb-2">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </h3>
                  <p className="text-gray-700 font-semibold">{stat.label}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeInUp>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                  <Image src="/icon-our-mission.svg" alt="Mission" width={80} height={80} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide exceptional moving services that exceed customer expectations through professionalism, reliability, and care. We strive to make every relocation smooth, stress-free, and memorable for all the right reasons.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                  <Image src="/icon-our-vision.svg" alt="Vision" width={80} height={80} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the most trusted and preferred moving company, known for our innovation, sustainability, and commitment to customer satisfaction. We aim to set industry standards and create lasting relationships with every client we serve.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Why Choose Us</h3>
              <h2 className="text-4xl md:text-5xl font-bold">
                What makes us <span className="text-orange-500">different</span>
              </h2>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "icon-who-we-are-1.svg",
                title: "Professional Team",
                description: "Our experienced movers are trained, background-checked, and committed to excellence."
              },
              {
                icon: "icon-who-we-are-2.svg",
                title: "Affordable Pricing",
                description: "Transparent pricing with no hidden fees. Get the best value for your money."
              },
              {
                icon: "icon-who-we-are-3.svg",
                title: "24/7 Support",
                description: "Round-the-clock customer support to assist you at every step of your move."
              }
            ].map((feature, index) => (
              <FadeInUp key={feature.title} delay={index * 0.1}>
                <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-xl">
                  <div className="mb-6 flex justify-center">
                    <Image src={`/${feature.icon}`} alt={feature.title} width={80} height={80} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl mb-8">
                Contact us today for a free quote and let us handle your next move with care and professionalism.
              </p>
              <Link href="/contact" className="btn-default bg-white text-orange-500 hover:bg-gray-100 border-white">
                Get Free Quote
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
