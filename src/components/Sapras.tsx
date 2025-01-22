import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getSapras } from '@/api/apiSapras';

interface SaprasImage {
  id: string;
  src: string;
  title: string;
}

const Sapras: React.FC = () => {
  const {
    data: saprasImages,
    isLoading,
    isError,
  } = useQuery<SaprasImage[]>({
    queryKey: ['saprasImages'],
    queryFn: getSapras,
  });

  if (isLoading) {
    return <div className="text-center mt-8 text-gray-900 dark:text-slate-200">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-8 text-red-600">Aduhh, cemana ni lek kok error pulak pecing datanya. kacau kali bah</div>;
  }

  return (
    <section id="sapras" className="mt-6 md:mt-8 xl:mt-16">
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
            <div key={image.id} className='relative'>
              <img
                src={image.src}
                alt={image.title}
                className="rounded-lg w-full h-56 md:h-[27rem] object-cover" loading='lazy'
              />
              <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm text-white bg-black bg-opacity-50 px-4 py-2 z-10">{image.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Sapras;
