import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface NewsData {
  title: string;
  subtitle: string;
  images: string;
  author: string;
  updated_at: string;
  description: string;
  tags: string[];
}

const fetchNews = async (): Promise<NewsData> => {
  const response = await fetch('api.smkpluspnb.sch.id/api/api/v1/berita/show');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const DetailNews: React.FC = () => {
  const { data, error, isLoading } = useQuery<NewsData, Error>(['news'], fetchNews);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Detail News</h1>
      <div className="max-w-screen-sm mx-auto px-8">
        <h1 className="title mr-3 mt-5 text-justify font-extrabold text-wrap-2 text-balance">
          {data?.title}
        </h1>
        <p className="subtitle mt-3 text-red-700 text-balance">
          {data?.subtitle}
        </p>
        <p className="text-zinc-800 opacity-50">
          {data?.updated_at} | Author: {data?.author}
        </p>
        <div className="flex">
          <p className="mt-3 h-0 text-sm">Bagikan :</p>
          <a href="" title='facebook'></a>
          <img
            className="w-3 ml-2 mt-4"
            src="./assets/facebook-svgrepo-com.svg"
            alt="logo-fb"
          />
          <a href="" title='instagram'></a>
          <img
            className="w-3 ml-2 mt-5"
            src="./assets/instagram-2016-logo-svgrepo-com.svg"
            alt="logo-ig"
          />
          <a href="" title='twitter'></a>
          <img
            className="w-4 ml-2 mt-5"
            src="./assets/icons8-twitterx.svg"
            alt="logo-x"
          />
        </div>

        <img
          src={data?.images}
          alt="Foto-Dss"
          title="Foto-Dss"
          className="rounded-xl mt-4 shadow-xl mb-5"
        />

        <p className="mr-3 text-justify indent-5 font-semibold mb-3">
          {data?.description}
        </p>

        {/* Tagar */}
        <div className="flex">
          <div className="mt-5 bg-red-700 h-7 w-2"></div>
          <h1 className="font-extrabold h-0 ml-2 mt-5">Tagar</h1>
        </div>
        <div className="flex text-center mt-5">
          {data?.tags.map((tag, index) => (
            <div key={index} className="bg-green-700 rounded-md w-20 ml-4">
              <div className="text-sm text-white">#{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailNews;
