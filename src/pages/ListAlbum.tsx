"use client";
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { getListAlbum, AlbumItem } from '@/api/apiListAlbum';
import { useQuery } from '@tanstack/react-query';
import { cn } from '@/lib/utils';

const ListAlbum: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  });

  // Transformasi untuk efek paralaks
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Mengambil data album dari API
  const { data: albums, isLoading, isError } = useQuery<AlbumItem[]>({
    queryKey: ['albums'],
    queryFn: getListAlbum,
  });

  if (isLoading) {
    return <div className="text-center mt-8 text-gray-900 dark:text-slate-200">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-8 text-red-600">Error fetching data.</div>;
  }

  if (!albums || albums.length === 0) {
    return <div className="text-center mt-8 text-gray-900 dark:text-slate-200">Tidak ada album tersedia.</div>;
  }

  // Membagi gambar menjadi 3 bagian untuk efek paralaks
  const third = Math.ceil(albums.length / 3);
  const firstPart = albums.slice(0, third);
  const secondPart = albums.slice(third, 2 * third);
  const thirdPart = albums.slice(2 * third);

  return (
    <section id="list-album" className="mb-10">
      <h1 className="font-bold text-2xl text-center mt-10 text-gray-900 dark:text-slate-200">
        <u>Daftar Album</u>
      </h1>
      <div
        className={cn('h-[40rem] items-start overflow-y-auto overflow-hidden w-full hide-scrollbar')}
        ref={gridRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-10 ">
          {[firstPart, secondPart, thirdPart].map((part, index) => (
            <div className="grid gap-10" key={`grid-${index}`}>
              {part.map((album) => (
                <motion.div
                  style={{
                    y: index === 0 ? translateFirst : index === 1 ? translateSecond : translateThird,
                  }}
                  key={album.id}
                >
                  <div className="group relative flex h-48 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                    <img
                      src={`https://api.smkpluspnb.sch.id/storage/${album.image}`}
                      alt={album.title || 'Album Image'}
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      {album.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListAlbum;
