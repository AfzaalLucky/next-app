import Image from "next/image";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";
import FAQsClient from "@/components/FAQsClient";

export const metadata: Metadata = {
  title: "FAQs - Movein | Frequently Asked Questions",
  description: "Find answers to common questions about our moving services, pricing, insurance, and more.",
};

export default function FAQsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="FAQs"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">FAQs</h1>
            <p className="text-xl">Answers to your moving questions</p>
          </FadeInUp>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h3 className="text-orange-500 font-semibold uppercase tracking-wide mb-3">Common Questions</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Everything you need to <span className="text-orange-500">know</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Browse through our frequently asked questions to find quick answers about our services, pricing, and moving process.
              </p>
            </div>
          </FadeInUp>

          <FAQsClient />
        </div>
      </section>
    </>
  );
}
