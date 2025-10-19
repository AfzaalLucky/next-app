import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Projects - Movein | Our Moving Success Stories",
  description: "Explore our portfolio of successful moving projects. See how we've helped families and businesses relocate with care.",
};

const projects = [
  {
    id: 1,
    title: "Urban Retreat Relocation",
    category: "Residential",
    image: "project-1.jpg",
    description: "Complete family home relocation from city to suburbs"
  },
  {
    id: 2,
    title: "Corporate Office Transition",
    category: "Commercial",
    image: "project-2.jpg",
    description: "Seamless office move for 100+ employee company"
  },
  {
    id: 3,
    title: "Family Home Moving",
    category: "Residential",
    image: "project-3.jpg",
    description: "Multi-generational home relocation with care"
  },
  {
    id: 4,
    title: "Luxury Apartment Move",
    category: "Residential",
    image: "project-4.jpg",
    description: "High-end penthouse relocation with specialty items"
  },
  {
    id: 5,
    title: "Retail Store Relocation",
    category: "Commercial",
    image: "project-5.jpg",
    description: "Complete store move with inventory management"
  },
  {
    id: 6,
    title: "International Family Move",
    category: "International",
    image: "project-6.jpg",
    description: "Cross-border relocation with customs clearance"
  },
  {
    id: 7,
    title: "Medical Office Move",
    category: "Commercial",
    image: "project-7.jpg",
    description: "Sensitive equipment relocation for medical practice"
  },
  {
    id: 8,
    title: "Student Dorm Relocation",
    category: "Residential",
    image: "project-8.jpg",
    description: "Efficient college housing transition"
  },
  {
    id: 9,
    title: "Art Gallery Relocation",
    category: "Specialty",
    image: "project-9.jpg",
    description: "White-glove service for valuable art pieces"
  }
];

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="Projects"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl">Successful moves, happy customers</p>
          </FadeInUp>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Our Work</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Recent success <span className="text-orange-500">stories</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Browse through our portfolio of successful moving projects and see how we deliver excellence in every relocation.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeInUp key={project.id} delay={index * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={`/${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-orange-500 font-semibold text-sm mb-2">{project.category}</span>
                      <p className="text-white text-sm">{project.description}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <span className="text-orange-500 font-semibold text-sm">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 group-hover:text-orange-500 transition-colors">
                      <Link href={`/projects/${project.id}`}>{project.title}</Link>
                    </h3>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
