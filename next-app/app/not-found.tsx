import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Movein",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/404-error-img.png"
              alt="404 Error"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-default btn-highlighted">
              Back to Home
            </Link>
            <Link href="/contact" className="btn-default">
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              You might be interested in:
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-orange-500 hover:text-orange-600 font-medium">
                About Us
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/services" className="text-orange-500 hover:text-orange-600 font-medium">
                Our Services
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/projects" className="text-orange-500 hover:text-orange-600 font-medium">
                Projects
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-medium">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
