import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getDetailBerita } from '@/api/apiDetailBerita';
import { NewsDetail } from '@/api/apiDetailBerita';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Impor ikon Lucide

const DetailNews: React.FC = () => {
  const { berita_id } = useParams<{ berita_id: string }>();

  const { data, error, isLoading } = useQuery<NewsDetail, Error>({
    queryKey: ['berita_id', berita_id],
    queryFn: () => getDetailBerita(berita_id!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="dark:bg-slate-900 dark:text-gray-200 my-10">
      <div className="max-w-screen-sm mx-auto px-8">
        <h1 className="title text-4xl mr-3 mt-5 font-extrabold">
          {data?.title}
        </h1>
        <p className="subtitle mt-3 text-red-700 dark:text-red-600 text-balance">
          {data?.subtitle}
        </p>
        <p className="text-zinc-800 dark:text-zinc-200 opacity-50">
          {data?.updated_at.split('T')[0]} | Author: {data?.author}
        </p>
        <div className="flex items-center mt-3">
          <p className="text-sm">Bagikan :</p>
          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="ml-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Facebook className="w-5 h-5" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="ml-2 text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400"
          >
            <Instagram className="w-5 h-5" />
          </a>
          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              window.location.href
            )}&text=${encodeURIComponent(data?.title || '')}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="ml-2 text-gray-700 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <img
          src={`https://api.smkpluspnb.sch.id/storage/${data?.images}`}
          alt={data?.title}
          title={data?.title}
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
