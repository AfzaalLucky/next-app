import Image from "next/image";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Video Gallery - Movein | Watch Our Services",
  description: "Watch videos of our moving services, customer testimonials, and tips for a successful move.",
};

const videos = [
  {
    id: 1,
    title: "Residential Moving Process",
    thumbnail: "gallery-1.jpg",
    description: "See how we handle a complete residential move"
  },
  {
    id: 2,
    title: "Commercial Office Relocation",
    thumbnail: "gallery-2.jpg",
    description: "Watch our efficient office moving process"
  },
  {
    id: 3,
    title: "Packing Tips & Techniques",
    thumbnail: "gallery-3.jpg",
    description: "Learn professional packing methods"
  },
  {
    id: 4,
    title: "Customer Testimonial",
    thumbnail: "gallery-4.jpg",
    description: "Hear from our satisfied customers"
  },
  {
    id: 5,
    title: "Specialty Item Handling",
    thumbnail: "gallery-5.jpg",
    description: "Expert care for valuable items"
  },
  {
    id: 6,
    title: "Behind the Scenes",
    thumbnail: "gallery-6.jpg",
    description: "A day in the life of our moving team"
  }
];

export default function VideoGalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="Video Gallery"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Video Gallery</h1>
            <p className="text-xl">Watch our services come to life</p>
          </FadeInUp>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Video Content</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience our services <span className="text-orange-500">in motion</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Watch our video gallery to see our moving process, get helpful tips, and hear from satisfied customers.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <FadeInUp key={video.id} delay={index * 0.1}>
                <div className="group">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-4 cursor-pointer">
                    <Image
                      src={`/${video.thumbnail}`}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-play text-white text-xl ml-1"></i>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Note about video integration */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <i className="fa-solid fa-info-circle text-orange-500 text-3xl mb-4"></i>
            <p className="text-gray-600">
              Video player integration can be added using services like YouTube, Vimeo, or custom video hosting solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
