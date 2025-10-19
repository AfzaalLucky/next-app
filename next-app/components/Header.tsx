'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from '@/types';

const navLinks: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    submenu: [
      { label: 'Home - Image', href: '/' },
      { label: 'Home - Video', href: '/home-video' },
      { label: 'Home - Slider', href: '/home-slider' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Pages',
    href: '#',
    submenu: [
      { label: 'Service Details', href: '/services/service-details' },
      { label: 'Blog Details', href: '/blog/blog-details' },
      { label: 'Projects', href: '/projects' },
      { label: 'Project Details', href: '/projects/project-details' },
      { label: 'Our Team', href: '/team' },
      { label: 'Team Details', href: '/team/team-details' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Image Gallery', href: '/gallery/images' },
      { label: 'Video Gallery', href: '/gallery/videos' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <header className={`main-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="header-sticky">
        <nav className="navbar">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link href="/" className="navbar-brand">
                <Image
                  src="/logo.svg"
                  alt="Movein Logo"
                  width={150}
                  height={50}
                  priority
                  className="h-12 w-auto"
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                <ul className="flex items-center space-x-6">
                  {navLinks.map((link) => (
                    <li key={link.label} className="relative group">
                      <Link
                        href={link.href}
                        className="nav-link text-sm font-semibold uppercase hover:text-orange-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                      {link.submenu && (
                        <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                          {link.submenu.map((sublink) => (
                            <li key={sublink.label}>
                              <Link
                                href={sublink.href}
                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                              >
                                {sublink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/contact" className="btn-default btn-highlighted">
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden flex flex-col space-y-1.5 w-8"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span className={`block h-0.5 w-full bg-gray-800 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-gray-800 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-gray-800 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-white shadow-lg rounded-lg mt-4 p-4">
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <div>
                        <Link
                          href={link.href}
                          className="block py-2 font-semibold hover:text-orange-500"
                          onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                        {link.submenu && (
                          <>
                            <button
                              onClick={() => toggleSubmenu(link.label)}
                              className="ml-2 text-sm text-gray-600"
                            >
                              {openSubmenu === link.label ? '−' : '+'}
                            </button>
                            {openSubmenu === link.label && (
                              <ul className="ml-4 mt-2 space-y-1">
                                {link.submenu.map((sublink) => (
                                  <li key={sublink.label}>
                                    <Link
                                      href={sublink.href}
                                      className="block py-1 text-sm hover:text-orange-500"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {sublink.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-default btn-highlighted mt-4 text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
