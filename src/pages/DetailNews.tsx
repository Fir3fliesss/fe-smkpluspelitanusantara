import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getDetailBerita, ApiResponse } from '@/api/apiDetailBerita';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const DetailNews: React.FC = () => {
  const { berita_id } = useParams<{ berita_id: string }>();
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery<ApiResponse, Error>({
    queryKey: ['berita_id', berita_id],
    queryFn: () => getDetailBerita(berita_id!),
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Data tidak ditemukan</div>;

  return (
    <div className="dark:bg-slate-900 dark:text-gray-200 my-10">
      <div className="max-w-screen-sm mx-auto px-8">
        <h1 className="title text-4xl mr-3 mt-5 font-extrabold">
          {data.data.title}
        </h1>
        <p className="subtitle mt-3 text-red-700 dark:text-red-600 text-balance">
          {data.data.subtitle}
        </p>
        <p className="text-zinc-800 dark:text-zinc-200 opacity-50">
          {data.data.updated_at.split('T')[0]} | Author: {data.data.author}
        </p>
        <div className="flex items-center mt-3">
          <p className="text-sm">Bagikan :</p>
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
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="ml-2 text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              window.location.href
            )}&text=${encodeURIComponent(data.data.title || '')}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="ml-2 text-gray-700 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <img
          src={`https://api.smkpluspnb.sch.id/storage/${data.data.images}`}
          alt={data.data.title}
          title={data.data.title}
          className="rounded-xl mt-4 shadow-xl mb-5"
        />

        <p className="mr-3 text-justify indent-5 font-medium mb-3">
          {data.data.description}
        </p>

        <div className="mt-8">
          <div className="flex">
            <div className="mt-5 bg-red-700 h-7 w-2"></div>
            <h1 className="font-extrabold h-0 ml-2 mt-5">Rekomendasi Berita</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 my-3">
            {data.recommended && data.recommended.length > 0 ? (
              data.recommended.map((news) => (
                <div
                  key={news.berita_id}
                  className="flex items-center cursor-pointer p-2 rounded-lg bg-green-700 hover:bg-green-800"
                  onClick={() => navigate(`/news/${news.berita_id}`)}
                >
                  <img
                    src={`https://api.smkpluspnb.sch.id/storage/${news.images}`}
                    alt={news.title}
                    className="w-14 h-14 rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/64';
                    }}
                  />
                  <div className="ml-2 flex-1">
                    <p className="text-sm line-clamp-2">{news.title}</p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">&raquo;</div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Tidak ada rekomendasi berita.</p>
            )}
          </div>
        </div>

        <div className="flex">
          <div className="mt-5 bg-red-700 h-7 w-2"></div>
          <h1 className="font-extrabold h-0 ml-2 mt-5 text-slate-100">Tagar</h1>
        </div>
        <div className="flex text-center mt-5">
          {data.data.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-green-700 text-slate-100 rounded-md w-20 ml-4 cursor-pointer hover:bg-green-800"
              onClick={() => navigate(`/list-news?tag=${tag}`)}
            >
              <div className="text-sm text-white">#{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailNews;
