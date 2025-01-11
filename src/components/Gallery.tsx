import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

// Fungsi untuk fetching data gambar
const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
  const response = await fetch('/api/gallery');
  if (!response.ok) {
    throw new Error('Gblok data gagal di-fetch');
  }
  return response.json();
};

const Gallery: React.FC = () => {
  const {
    data: galleryImages,
    isLoading,
    isError,
  } = useQuery<GalleryImage[]>({
    queryKey: ['galleryImages'],
    queryFn: fetchGalleryImages,
  });

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-8 text-red-600">Error fetching data.</div>;
  }

  return (
    <section id="galeri" className="ml-8 mr-8">
      <h1 className="font-bold text-2xl text-center mt-6 mb-6">
        <u>ALBUM</u>
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        {galleryImages?.map((image) => (
          <a
            key={image.id}
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={image.src}
              loading="lazy"
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              {image.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
