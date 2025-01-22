import axios from "axios";

interface ApiBeritaItem {
  id: number;
  berita_id: string;
  author: string;
  title: string;
  subtitle: string;
  description: string;
  images: string;
  tags: string[];
  status: number;
  created_at: string;
  updated_at: string;
}

interface NewsItem {
  id: number;
  berita_id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  content: string;
  updated_at: string;
  author: string;
  tags: string[];
}

const getBerita = async (): Promise<NewsItem[]> => {
  try {
    const response = await axios.get('https://api.smkpluspnb.sch.id/api/api/v1/misc/index');
    const beritaData: ApiBeritaItem[] = response.data.data.berita;

    const newsList = beritaData.map((item: ApiBeritaItem) => ({
      id: item.id,
      berita_id: item.berita_id,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      image: `https://api.smkpluspnb.sch.id/storage/${item.images}`,
      content: item.description,
      updated_at: item.updated_at,
      author: item.author,
      tags: item.tags,
    }));

    return newsList;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch berita data');
  }
};

export { getBerita };
export type { NewsItem };
