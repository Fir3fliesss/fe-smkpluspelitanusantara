import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { getListNews } from '@/api/apiListBerita';
import { NewsItem } from '@/api/apiListBerita';
import { useNavigate } from 'react-router-dom';

const ListNews: React.FC = () => {
  const [active, setActive] = useState<NewsItem | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null); // Ref untuk modal
  const navigate = useNavigate();

  // Fetch data dari API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getListNews();
        setNews(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Gunakan useOutsideClick untuk menutup modal
  useOutsideClick(modalRef, () => setActive(null));

  if (isLoading) {
    return <div className="text-center mt-8 text-gray-900">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="dark:bg-slate-900">
      <h1 className='text-center justify-center font-bold text-4xl text- my-5 dark:text-slate-200'>Daftar Berita</h1>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] mt-2 md:mt-24">
            <motion.button
              key={`button-${active.title}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}`}
              ref={modalRef} // Tambahkan ref ke modal
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}`}>
                <img
                  src={`https://api.smkpluspnb.sch.id/storage/${active.images}`}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.subtitle}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.subtitle}
                    </motion.p>
                  </div>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/news/${active.berita_id}`);
                    }}
                    target="_blank"
                    className="px-3 py-2 text-sm rounded-full font-bold bg-gradient-to-tr from-red-800 via-red-700 to-red-600 text-white hover:bg-gradient-to-br hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-600 transition-all duration-300 ease-in-out"
                  >
                    Baca &raquo;
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.description}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {news.map((item) => (
          <motion.div
            layoutId={`card-${item.title}`}
            key={item.id}
            onClick={() => setActive(item)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${item.title}`}>
                <img
                  src={`https://api.smkpluspnb.sch.id/storage/${item.images}`}
                  alt={item.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${item.title}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${item.subtitle}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {item.subtitle}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${item.title}`}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/news/${item.berita_id}`);
              }}
              className="px-3 py-2 text-sm rounded-full font-bold bg-gradient-to-tr from-red-800 via-red-700 to-red-600 text-white hover:bg-gradient-to-br hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-600 transition-all duration-300 ease-in-out"
            >
              Kunjungi &raquo;
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default ListNews;

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
