import Image from "next/image";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";
import ImageGalleryClient from "@/components/ImageGalleryClient";

export const metadata: Metadata = {
  title: "Image Gallery - Movein | Our Work in Pictures",
  description: "Browse through our image gallery showcasing our moving services, team in action, and successful relocations.",
};

export default function ImageGalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="Image Gallery"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Image Gallery</h1>
            <p className="text-xl">See our work in action</p>
          </FadeInUp>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Our Gallery</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pictures worth a <span className="text-orange-500">thousand moves</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Browse through our photo gallery to see our team in action, our equipment, and successful moving projects.
              </p>
            </div>
          </FadeInUp>

          <ImageGalleryClient />
        </div>
      </section>
    </>
  );
}
