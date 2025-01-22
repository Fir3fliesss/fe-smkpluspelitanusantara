"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { getGaleri } from '@/api/apiGaleri';
import { GaleriItem } from '@/api/apiGaleri';
import Button from '@/components/Button';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

const Gallery: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const navigate = useNavigate();

  const { data: galleryImages, isLoading, isError } = useQuery<GaleriItem[]>({
    queryKey: ['galeri'],
    queryFn: getGaleri,
  });

  if (isLoading) {
    return <div className="text-center mt-8 text-gray-900 dark:text-slate-200">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-8 text-red-600">Error fetching data.</div>;
  }

  if (!galleryImages || galleryImages.length === 0) {
    return <div className="text-center mt-8 text-gray-900 dark:text-slate-200">Gada gambarnya lekku</div>;
  }

  const transformedImages: GalleryImage[] = galleryImages.map((item) => ({
    id: item.id,
    src: item.image,
    alt: item.title,
    title: item.title,
  }));

  const third = Math.ceil(transformedImages.length / 3);
  const firstPart = transformedImages.slice(0, third);
  const secondPart = transformedImages.slice(third, 2 * third);
  const thirdPart = transformedImages.slice(2 * third);

  return (
    <section id="galeri" className="ml-8 mr-8">
      <h1 className="font-bold text-2xl text-center mt-10 text-gray-900 dark:text-slate-200">
        <u>ALBUM</u>
      </h1>

      <div
        className={cn('h-[40rem] items-start overflow-y-auto overflow-hidden w-full hide-scrollbar')}
        ref={gridRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
          {[firstPart, secondPart, thirdPart].map((part, index) => (
            <div className="grid gap-10" key={`grid-${index}`}>
              {part.map((image) => (
                <motion.div
                  style={{
                    y: index === 0 ? translateFirst : index === 1 ? translateSecond : translateThird,
                  }}
                  key={image.id}
                >
                  <div className="group relative flex h-48 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      {image.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-2'
        onClick={() => navigate('/full-album')}
      >
        <Button text="Lihat Full Album" />
      </div>
    </section>
  );
};

export default Gallery;
