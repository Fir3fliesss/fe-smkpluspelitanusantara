import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { getListNews, getTags } from '@/api/apiListBerita';
import { NewsItem } from '@/api/apiListBerita';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ListNews: React.FC = () => {
  const [active, setActive] = useState<NewsItem | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tagsData = await getTags();
        setTags(tagsData);

        const newsData = await getListNews();
        setNews(newsData);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const tagFromUrl = searchParams.get('tag');
    if (tagFromUrl) {
      setActiveTag(tagFromUrl);
    }
  }, [searchParams]);

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    navigate(`/list-news?tag=${tag}`);
  };

  const filteredNews = activeTag
    ? news.filter((item) => item.tags.includes(activeTag))
    : news;

  useOutsideClick(modalRef, () => setActive(null));

  if (isLoading) {
    return <div className="text-center mt-8 text-gray-900">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="dark:bg-slate-900">
      <h1 className="text-center justify-center font-bold text-4xl my-5 dark:text-slate-200">
        Daftar Berita
      </h1>
      <div className="flex overflow-x-auto gap-2 mb-6 px-4 py-2 max-w-72 md:max-w-2xl mx-auto">
        <button
          onClick={() => {
            setActiveTag(null);
            navigate('/list-news');
          }}
          className={`px-3 py-1 rounded-full font-medium transition-all duration-300 ease-in-out fixed${
            activeTag === null
              ? 'bg-gradient-to-tr from-red-800 via-red-700 to-red-600 text-slate-200 hover:bg-gradient-to-br hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-600 shadow-lg'
              : 'bg-gradient-to-tr from-red-800 via-red-700 to-red-600 text-slate-200 hover:bg-gradient-to-br hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-600'
          }`}
        >
          None
        </button>
        {tags?.map((tagItem, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tagItem)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
              activeTag === tagItem
                ? 'bg-gradient-to-tr from-red-800 via-red-700 to-red-600 text-slate-200 hover:bg-gradient-to-br hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-600 shadow-lg brightness-110'
                : 'bg-gradient-to-tr from-red-800 via-red-700 to-red-600 text-slate-200 hover:bg-gradient-to-br hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-600'
            }`}
          >
            #{tagItem}
          </button>
        ))}
      </div>
      <ul className="max-w-2xl mx-auto w-full gap-4 px-4">
        <AnimatePresence>
          {filteredNews?.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActive(item)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-200 dark:hover:bg-gray-800 rounded-xl cursor-pointer border border-neutral-200 dark:border-slate-200 shadow-sm bg-white dark:bg-gray-900 my-5"
            >
              <div className="flex flex-col md:flex-row gap-4 sm:w-full">
                <motion.div className="w-full md:w-40 flex-shrink-0">
                  <img
                    src={`https://api.smkpluspnb.sch.id/storage/${item.images}`}
                    alt={item.title}
                    className="w-full h-40 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                    {item.title}
                  </motion.h3>
                  <motion.p className="md:mt-3 text-neutral-600 dark:text-neutral-400 text-center md:text-left line-clamp-3">
                    {item.subtitle}
                  </motion.p>
                </div>
              </div>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/news/${item.berita_id}`);
                }}
                  className="mt-4 md:mt-0 px-3 py-2 text-sm rounded-full font-bold bg-gradient-to-tr from-red-800 via-red-700 to-red-600 text-white hover:bg-gradient-to-br hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-600 transition-all duration-300 ease-in-out whitespace-nowrap flex items-center min-w-[120px]">
                Kunjungi &raquo;
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center mt-2 md:mt-24"
            >
              <div className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
                <motion.button
                  onClick={() => setActive(null)}
                  className="flex absolute top-2 right-2 md:right-80 items-center justify-center bg-red-500 rounded-full h-6 w-6"
                >
                  <CloseIcon />
                </motion.button>
                <motion.div>
                  <img
                    src={`https://api.smkpluspnb.sch.id/storage/${active.images}`}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>
                <div>
                  <div className="flex justify-between items-start p-4">
                    <div>
                      <motion.h3 className="font-bold text-neutral-700 dark:text-neutral-200">
                        {active.title}
                      </motion.h3>
                      <motion.p className="text-neutral-600 dark:text-neutral-400">
                        {active.subtitle}
                      </motion.p>
                    </div>
                    <motion.a
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
                    <motion.div className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                      {active.description}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ListNews;

const CloseIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
