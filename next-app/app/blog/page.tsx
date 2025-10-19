import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeInUp } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog - Movein | Moving Tips & Industry News",
  description: "Read our latest blog posts about moving tips, industry news, packing advice, and relocation guides.",
};

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for a Stress-Free Move",
    excerpt: "Moving doesn't have to be overwhelming. Follow these essential tips to make your relocation smooth and stress-free.",
    image: "post-1.jpg",
    category: "Moving Tips",
    date: "January 15, 2025",
    author: { name: "Sarah Johnson", image: "author-1.jpg" }
  },
  {
    id: 2,
    title: "How to Pack Fragile Items Safely",
    excerpt: "Learn professional packing techniques to ensure your delicate items arrive at your new home intact.",
    image: "post-2.jpg",
    category: "Packing Guide",
    date: "January 10, 2025",
    author: { name: "Michael Chen", image: "author-2.jpg" }
  },
  {
    id: 3,
    title: "Understanding Moving Insurance: What You Need to Know",
    excerpt: "Protect your belongings during the move with the right insurance coverage. Here's everything you need to know.",
    image: "post-3.jpg",
    category: "Insurance",
    date: "January 5, 2025",
    author: { name: "Emily Davis", image: "author-3.jpg" }
  },
  {
    id: 4,
    title: "Moving with Pets: A Complete Guide",
    excerpt: "Make the transition easier for your furry friends with these helpful tips for moving with pets.",
    image: "post-4.jpg",
    category: "Family Moving",
    date: "December 28, 2024",
    author: { name: "David Wilson", image: "author-4.jpg" }
  },
  {
    id: 5,
    title: "Office Relocation: Minimizing Business Downtime",
    excerpt: "Planning a commercial move? Learn how to relocate your office efficiently without disrupting operations.",
    image: "post-5.jpg",
    category: "Commercial",
    date: "December 20, 2024",
    author: { name: "Amanda Rodriguez", image: "author-5.jpg" }
  },
  {
    id: 6,
    title: "Eco-Friendly Moving: Sustainable Practices",
    excerpt: "Discover how to make your move more environmentally friendly with these sustainable moving practices.",
    image: "post-6.jpg",
    category: "Sustainability",
    date: "December 15, 2024",
    author: { name: "James Thompson", image: "author-6.jpg" }
  }
];

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/page-header-bg.jpg"
            alt="Blog"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl">Moving tips, guides, and industry insights</p>
          </FadeInUp>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FadeInUp key={post.id} delay={index * 0.1}>
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`/${post.image}`}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Image
                          src={`/${post.author.image}`}
                          alt={post.author.name}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                        <span>{post.author.name}</span>
                      </div>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center"
                    >
                      Read More
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </article>
              </FadeInUp>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-orange-500 text-white rounded-lg font-semibold">1</button>
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition">2</button>
              <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition">3</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
