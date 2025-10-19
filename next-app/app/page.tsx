import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "Movein - Professional Movers & Packers | Effortless Moving Experiences",
  description: "Expert movers and packers providing hassle-free relocation services. Residential, commercial, and specialty moving with professional packing and storage solutions.",
  keywords: "movers, packers, relocation, moving services, residential moving, commercial moving, packing services",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero relative min-h-screen flex items-end pb-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg-2.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <FadeInUp>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Effortless moving <span className="text-orange-500">experiences</span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-xl md:text-2xl mb-8">Experts in Hassle-Free Relocation</p>
            </FadeInUp>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <FadeInUp delay={0.3}>
                <p className="text-lg mb-6">
                  Experience a stress-free move with our professional services. From careful packing to seamless transportation and timely delivery.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      <Image src="/satisfy-customer-img-1.jpg" alt="Customer 1" width={50} height={50} className="rounded-full border-2 border-white" />
                      <Image src="/satisfy-customer-img-2.jpg" alt="Customer 2" width={50} height={50} className="rounded-full border-2 border-white" />
                      <Image src="/satisfy-customer-img-3.jpg" alt="Customer 3" width={50} height={50} className="rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Customer Satisfied</h3>
                      <p className="text-sm"><Counter end={4.8} suffix="" /> (15K Reviews)</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>

            <FadeInUp delay={0.5}>
              <div className="mt-8">
                <Link href="/contact" className="btn-default btn-highlighted text-lg">
                  Request a Quote
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/about-image.jpg"
                  alt="About Movein"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInUp>

            <div>
              <FadeInUp delay={0.2}>
                <div className="section-title mb-8">
                  <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">About us</h3>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Setting new standards in the <span className="text-orange-500">moving industry</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Redefining the moving experience with unmatched professionalism, reliability, and care. We combine innovative solutions, personalized service, and a commitment to excellence to set new benchmarks.
                  </p>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h2 className="text-5xl font-bold text-orange-500 mb-2">
                      <Counter end={92} suffix="%" />
                    </h2>
                    <p className="text-gray-600">Our customer satisfaction rate stands at impressive</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h2 className="text-5xl font-bold text-orange-500 mb-2">
                      <Counter end={1082} suffix="+" />
                    </h2>
                    <p className="text-gray-600">Helping families and businesses to their new destinations</p>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <Link href="/about" className="btn-default">
                  More About Us
                </Link>
              </FadeInUp>
            </div>
          </div>

          {/* Owner Quote */}
          <FadeInUp delay={0.5}>
            <div className="mt-16 bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <p className="text-xl md:text-2xl italic text-gray-700 mb-6">
                    "Moving isn't just about transporting items, it's about embracing change and starting fresh. We're dedicated to ensuring your journey is seamless, so you can focus on settling into your new beginning."
                  </p>
                  <div className="flex items-center gap-4">
                    <Image src="/about-owner-signature.png" alt="Signature" width={120} height={60} />
                    <div>
                      <h3 className="font-bold text-lg">Savannah Nguyen</h3>
                      <p className="text-gray-600">CEO</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                  <Image src="/about-owner-image.jpg" alt="CEO" fill className="object-cover" />
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#062E39] text-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Our Services</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Reliable moving services built <span className="text-orange-500">around you</span>
              </h2>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: "icon-service-item-1.svg",
                title: "Residential Moving",
                description: "Hassle-free home relocation services tailored to your needs."
              },
              {
                icon: "icon-service-item-2.svg",
                title: "Commercial Moving",
                description: "Professional moving services tailored to business ensuring efficient timely relocations."
              },
              {
                icon: "icon-service-item-3.svg",
                title: "Specialty Item Moving",
                description: "Expert handling for fragile and valuable items, ensuring safe transport of antiques."
              },
              {
                icon: "icon-service-item-4.svg",
                title: "Eco-Friendly Moving",
                description: "Sustainable moving solutions using eco-friendly materials and practices to reduce."
              }
            ].map((service, index) => (
              <FadeInUp key={service.title} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all group">
                  <div className="mb-4">
                    <Image src={`/${service.icon}`} alt={service.title} width={60} height={60} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                    <Link href="/services">{service.title}</Link>
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link href="/services" className="text-orange-500 hover:text-orange-400 font-semibold">
                    Read More →
                  </Link>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.5}>
            <div className="text-center">
              <p className="text-lg mb-4">
                Expert packing for your move. <Link href="/contact" className="text-orange-500 hover:underline">Contact us now</Link>
              </p>
              <Link href="/services" className="btn-default btn-highlighted">
                View All Services
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <FadeInUp>
              <div className="section-title">
                <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Latest Projects</h3>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Every move counts discover our <span className="text-orange-500">latest work</span>
                </h2>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Take a closer look at our recent projects and see how we turn every move into a seamless experience. From small local moves to large-scale relocations, we're proud to showcase the care.
              </p>
            </FadeInUp>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: "project-1.jpg", title: "Urban Retreat Relocation" },
              { image: "project-2.jpg", title: "Corporate Office Transition" },
              { image: "project-3.jpg", title: "Family Home Moving" }
            ].map((project, index) => (
              <FadeInUp key={project.title} delay={index * 0.1}>
                <div className="group overflow-hidden rounded-xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={`/${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Link href="/projects" className="text-white font-semibold text-lg hover:text-orange-500">
                        View Project →
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <h3 className="text-xl font-bold">
                      <Link href="/projects" className="hover:text-orange-500 transition-colors">
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/projects" className="btn-default btn-highlighted">
                View All Projects
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Make Your Move?
              </h2>
              <p className="text-xl mb-8">
                Get a free quote today and experience hassle-free moving with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-default bg-white text-orange-500 hover:bg-gray-100 border-white">
                  Get Free Quote
                </Link>
                <Link href="/services" className="btn-default bg-transparent border-white hover:bg-white hover:text-orange-500">
                  Our Services
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}

