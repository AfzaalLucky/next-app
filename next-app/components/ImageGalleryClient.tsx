'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { id: 1, src: 'gallery-1.jpg', alt: 'Moving truck' },
  { id: 2, src: 'gallery-2.jpg', alt: 'Packing service' },
  { id: 3, src: 'gallery-3.jpg', alt: 'Loading boxes' },
  { id: 4, src: 'gallery-4.jpg', alt: 'Office move' },
  { id: 5, src: 'gallery-5.jpg', alt: 'Residential move' },
  { id: 6, src: 'gallery-6.jpg', alt: 'Team in action' },
  { id: 7, src: 'gallery-7.jpg', alt: 'Furniture moving' },
  { id: 8, src: 'gallery-8.jpg', alt: 'Safe delivery' },
  { id: 9, src: 'gallery-9.jpg', alt: 'Happy customers' },
];

export default function ImageGalleryClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const currentImage = galleryImages.find(img => img.id === selectedImage);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => openLightbox(image.id)}
          >
            <Image
              src={`/${image.src}`}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-search-plus text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && currentImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl"
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={`/${currentImage.src}`}
              alt={currentImage.alt}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
