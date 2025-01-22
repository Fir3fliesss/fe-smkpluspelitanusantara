"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { getBerita, NewsItem } from "@/api/apiBerita";

const News: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<NewsItem | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const { data, error, isError, isLoading } = useQuery<NewsItem[]>({
    queryKey: ['news'],
    queryFn: getBerita,
  });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error('Error fetching news:', error);
    return <div>Error fetching news data.</div>;
  }

  return (
    <div id="berita">
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
              key={`button-${active.title}-${id}`}
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
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  loading="lazy"
                  decoding="async"
                  width={200}
                  height={200}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top border"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.subtitle}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.subtitle}
                    </motion.p>
                  </div>
                  <motion.a
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/news/${active.berita_id}`);
                      window.location.reload();
                    }}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    target="_blank"
                    className="px-3 py-2 text-sm rounded-full font-bold bg-gradient-to-tr from-red-800 via-red-700 to-red-600 text-white hover:bg-gradient-to-br hover:from-red-700 hover:via-red-800 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-600 transition-all duration-300 ease-in-out"
                  >
                    Kunjungi
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
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {data?.map((item: NewsItem) => (
          <li key={item.id}>
            <motion.div
              layoutId={`card-${item.title}-${id}`}
              onClick={() => setActive(item)}
              className="p-4 flex flex-col hover:bg-neutral-200 dark:hover:bg-gray-800 rounded-xl cursor-pointer border border-neutral-200 dark:border-slate-200 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out shadow-sm"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div layoutId={`image-${item.title}-${id}`}>
                  <img
                    loading="lazy"
                    decoding="async"
                    width={100}
                    height={100}
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${item.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${item.subtitle}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base line-clamp-3"
                  >
                    {item.subtitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-10"
        onClick={() => navigate('/list-news')}
      >
        <Button text="Lihat Lebih Banyak Berita" />
      </div>
    </div>
  );
};

export default News;

export const CloseIcon = () => {
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
