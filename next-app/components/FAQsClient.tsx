'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqData = [
  {
    id: 1,
    category: "General",
    question: "How much does a move typically cost?",
    answer: "Moving costs vary based on distance, size of move, and services required. Contact us for a free, customized quote based on your specific needs."
  },
  {
    id: 2,
    category: "General",
    question: "How far in advance should I book my move?",
    answer: "We recommend booking at least 2-4 weeks in advance, especially during peak moving season (May-September). However, we can often accommodate last-minute moves."
  },
  {
    id: 3,
    category: "Packing",
    question: "Do you provide packing materials?",
    answer: "Yes, we provide all necessary packing materials including boxes, tape, bubble wrap, and specialty containers. We also offer full packing services."
  },
  {
    id: 4,
    category: "Packing",
    question: "Can you pack my belongings for me?",
    answer: "Absolutely! We offer professional packing services where our trained team will carefully pack all your items using quality materials."
  },
  {
    id: 5,
    category: "Insurance",
    question: "Are my belongings insured during the move?",
    answer: "Yes, all moves include basic liability coverage. We also offer additional insurance options for complete peace of mind."
  },
  {
    id: 6,
    category: "Insurance",
    question: "What if something gets damaged during the move?",
    answer: "While we take every precaution, if damage occurs, our insurance coverage will handle claims according to the policy you've selected."
  },
  {
    id: 7,
    category: "Services",
    question: "Do you move pianos and other heavy items?",
    answer: "Yes, we have specialized equipment and trained professionals to safely move pianos, safes, and other heavy or bulky items."
  },
  {
    id: 8,
    category: "Services",
    question: "Can you help with storage if needed?",
    answer: "Yes, we offer secure, climate-controlled storage facilities for both short-term and long-term needs."
  },
  {
    id: 9,
    category: "Payment",
    question: "What payment methods do you accept?",
    answer: "We accept cash, checks, credit cards (Visa, MasterCard, American Express), and bank transfers."
  },
  {
    id: 10,
    category: "Payment",
    question: "When is payment due?",
    answer: "Payment is typically due upon completion of the move. We'll provide a detailed invoice outlining all services and costs."
  }
];

interface FAQItemProps {
  faq: typeof faqData[0];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-lg pr-8">{faq.question}</span>
        <i className={`fa-solid fa-chevron-down text-orange-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsClient() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqData.map(faq => faq.category)))];
  const filteredFaqs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredFaqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
          />
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="mt-16 text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12">
        <div className="mb-6">
          <Image
            src="/faq-image.jpg"
            alt="Contact us"
            width={200}
            height={150}
            className="mx-auto rounded-lg"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
        <p className="text-gray-600 mb-6">
          Can't find the answer you're looking for? Our team is here to help!
        </p>
        <a href="/contact" className="btn-default btn-highlighted">
          Contact Us
        </a>
      </div>
    </>
  );
}
