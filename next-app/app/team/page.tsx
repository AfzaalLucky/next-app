import Image from "next/image";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Team - Movein | Meet Our Professional Movers",
  description: "Meet the dedicated team behind Movein's exceptional moving services. Experienced, professional, and committed to your satisfaction.",
};

const teamMembers = [
  {
    id: 1,
    name: "Robert Johnson",
    role: "Operations Manager",
    image: "team-1.jpg",
    social: { facebook: "#", twitter: "#", linkedin: "#" }
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Customer Service Lead",
    image: "team-2.jpg",
    social: { facebook: "#", twitter: "#", linkedin: "#" }
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Senior Moving Specialist",
    image: "team-3.jpg",
    social: { facebook: "#", twitter: "#", linkedin: "#" }
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Packing Coordinator",
    image: "team-4.jpg",
    social: { facebook: "#", twitter: "#", linkedin: "#" }
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Logistics Manager",
    image: "team-5.jpg",
    social: { facebook: "#", twitter: "#", linkedin: "#" }
  },
  {
    id: 6,
    name: "Jennifer Martinez",
    role: "Quality Assurance",
    image: "team-6.jpg",
    social: { facebook: "#", twitter: "#", linkedin: "#" }
  },
  {
    id: 7,
    name: "David Garcia",
    role: "Fleet Manager",
    image: "team-7.jpg",
    social: { facebook: "#", twitter: "#", linkedin: "#" }
  },
  {
    id: 8,
    name: "Amanda Rodriguez",
    role: "Training Coordinator",
    image: "team-8.jpg",
    social: { facebook: "#", twitter: "#", linkedin: "#" }
  }
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="Our Team"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Team</h1>
            <p className="text-xl">Meet the professionals behind our success</p>
          </FadeInUp>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Expert Team</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Dedicated to your <span className="text-orange-500">moving success</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our experienced team brings professionalism, expertise, and care to every move. Get to know the people who make your relocation seamless.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FadeInUp key={member.id} delay={index * 0.1}>
                <div className="group">
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={`/${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="flex gap-3">
                        <a href={member.social.facebook} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                          <i className="fa-brands fa-facebook-f text-white"></i>
                        </a>
                        <a href={member.social.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                          <i className="fa-brands fa-twitter text-white"></i>
                        </a>
                        <a href={member.social.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                          <i className="fa-brands fa-linkedin-in text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl mb-8">
                Looking for a rewarding career in the moving industry? We're always looking for talented individuals to join our team.
              </p>
              <a href="/contact" className="btn-default bg-white text-orange-500 hover:bg-gray-100 border-white">
                Apply Now
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
