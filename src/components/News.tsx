"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useQuery } from "@tanstack/react-query";
import BannerText from "./BannerText";
import Button from "./Button";
import jurusan from "../assets/images/informasi_bidang_keahlian.webp";

const News: React.FC = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const { data, error, isError } = useQuery({
    queryKey: ['news'],
    queryFn: async () => 
      await fetch('https://api.smkpluspnb.sch.id/api/api/v1/berita/show', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) =>
        res.json()
      ),
  });

  if (isError) {
    console.error('error: ', error);
  }

  console.log(data);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <BannerText text="Latest News!" />
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  loading="lazy"
                  decoding="async"
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
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
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <li key={card.title}>
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col  w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    loading="lazy"
                    decoding="async"
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full  rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button text="Lihat Lebih Banyak" />
      </div>
    </>
  );
};

export default News;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
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

const cards = [
  {
    description: "lorem ",
    title: "News 1",
    src: jurusan,
    ctaText: "Baca lebih detail",
    ctaLink: "smkpluspnb.sch.id",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          quo consequatur accusantium aspernatur excepturi cumque nostrum
          voluptatum possimus dicta deleniti delectus suscipit dolores provident
          accusamus, quidem ut enim est vero. Tempora ipsa sint aliquid. Iure
          accusantium magni dolores deserunt debitis. Porro perspiciatis soluta
          Haloooooooooooooooooooooooo quas, voluptatem doloribus beatae
          repudiandae fugit quaerat at dolorem, explicabo rerum cumque quasi
          aspernatur illo. Non, laborum.
        </p>
      );
    },
  },
  {
    description: "lorem ipsum dolor",
    title: "News 2",
    src: jurusan,
    ctaText: "Baca lebih detail",
    ctaLink: "smkpluspnb.sch.id",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          facilis corporis. Expedita reiciendis iure a, perspiciatis
          exercitationem adipisci illum officiis, ipsum distinctio culpa laborum
          dicta porro praesentium, debitis eius sequi. Libero distinctio tempore
          accusantium, architecto commodi nemo nulla minus iusto et earum
          similique beatae recusandae suscipit dicta doloremque, placeat illo
          eaque natus consequuntur fugiat laborum quisquam vero nihil nostrum.
          Aliquid!
        </p>
      );
    },
  },

  {
    description: "lorem ipsum, lorem ipsum",
    title: "News 3",
    src: jurusan,
    ctaText: "Baca lebih detail",
    ctaLink: "smkpluspnb.sch.id",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          ipsum nulla porro iusto animi quibusdam ipsa, magnam odio
          consequuntur! Alias officia pariatur eaque quo rerum modi deserunt
          exercitationem sequi maxime? Deleniti excepturi veritatis incidunt
          dolorem ut vel perferendis impedit odit consectetur harum quis est
          enim inventore, eos quidem tempora nemo totam nam ab quod nobis dolor.
          Impedit debitis enim aut!
        </p>
      );
    },
  },
  {
    description: "lorem ipsum dolor sit amet",
    title: "News 4",
    src: jurusan,
    ctaText: "Baca lebih detail",
    ctaLink: "smkpluspnb.sch.id",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          consequatur perspiciatis commodi necessitatibus! Asperiores sint
          voluptate placeat iusto quis, officia quia recusandae perferendis
          autem debitis expedita illum saepe voluptatibus qui. Deleniti minus
          voluptatibus totam labore voluptate at nostrum. Facilis architecto sit
          nemo enim perspiciatis sunt blanditiis consequatur sed, eaque
          adipisci, explicabo consequuntur veniam accusantium? Deleniti dolor
          esse aut repellat nostrum!
        </p>
      );
    },
  },
];
