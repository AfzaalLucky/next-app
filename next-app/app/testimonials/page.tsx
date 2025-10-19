import Image from "next/image";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Testimonials - Movein | Customer Reviews",
  description: "Read what our satisfied customers say about our moving services. Real reviews from real people.",
};

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    company: "Residential Move",
    content: "Movein made our family relocation incredibly smooth. The team was professional, careful with our belongings, and finished ahead of schedule. Highly recommended!",
    image: "satisfy-customer-img-1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "John Anderson",
    role: "Business Owner",
    company: "Tech Startup",
    content: "We needed to relocate our office quickly, and Movein delivered. They handled all our equipment with care and minimal disruption to our operations. Outstanding service!",
    image: "satisfy-customer-img-2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Property Manager",
    company: "Real Estate Co.",
    content: "I've worked with many moving companies, but Movein stands out for their professionalism and attention to detail. They're my go-to recommendation for clients.",
    image: "satisfy-customer-img-3.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Corporate Executive",
    company: "International Relocation",
    content: "Moving internationally seemed daunting, but Movein handled everything from packing to customs clearance. Their expertise made the process stress-free.",
    image: "author-1.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Retired Teacher",
    company: "Downsizing Move",
    content: "The team at Movein was patient and understanding during my downsizing move. They treated my belongings like their own. Truly exceptional service!",
    image: "author-2.jpg",
    rating: 5
  },
  {
    id: 6,
    name: "David Park",
    role: "Art Collector",
    company: "Specialty Move",
    content: "Moving valuable art pieces requires expertise, and Movein delivered. Their white-glove service and custom crating gave me complete peace of mind.",
    image: "author-3.jpg",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="Testimonials"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Testimonials</h1>
            <p className="text-xl">What our customers say about us</p>
          </FadeInUp>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Reviews</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-orange-500">thousands</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about their moving experience with us.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInUp key={testimonial.id} delay={index * 0.1}>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-orange-500"></i>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <Image
                      src={`/${testimonial.image}`}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-orange-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-4 gap-8 p-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
            {[
              { number: "4.9", suffix: "/5", label: "Average Rating" },
              { number: "15000", suffix: "+", label: "Happy Customers" },
              { number: "98", suffix: "%", label: "Would Recommend" },
              { number: "1082", suffix: "+", label: "Successful Moves" }
            ].map((stat, index) => (
              <FadeInUp key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="text-5xl font-bold text-orange-500 mb-2">
                    {stat.number}{stat.suffix}
                  </h3>
                  <p className="text-gray-700 font-semibold">{stat.label}</p>
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
                Ready to Join Our Happy Customers?
              </h2>
              <p className="text-xl mb-8">
                Experience the difference that professional moving services can make. Get your free quote today!
              </p>
              <a href="/contact" className="btn-default bg-white text-orange-500 hover:bg-gray-100 border-white">
                Get Started
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
