import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BannerText from './BannerText';

interface SaprasImage {
  id: string;
  src: string;
  alt: string;
}

const fetchSaprasImages = async (): Promise<SaprasImage[]> => {
  const response = await fetch('/api/sapras');
  if (!response.ok) {
    throw new Error('Gblok data sapras gagal di-fetch');
  }
  return response.json();
};

const Sapras: React.FC = () => {

  const {
    data: saprasImages,
    isLoading,
    isError,
  } = useQuery<SaprasImage[]>({
    queryKey: ['saprasImages'],
    queryFn: fetchSaprasImages,
  });


  if (isLoading) {
    return <div className="text-center mt-8 text-gray-900 dark:text-slate-200">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-8 text-red-600">Aduhh, cemana ni lek kok error pulak pecing datanya. kacau kali bah</div>;
  }

  return (
    <section id="sapras" className="mt-6 md:mt-8 xl:mt-16">
      <BannerText text="Sapras!" />
      <div className="relative w-full mt-5 mb-5 shadow-lg">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          showStatus={false}
          className="carousel-container"
        >
          {saprasImages?.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Sapras;
