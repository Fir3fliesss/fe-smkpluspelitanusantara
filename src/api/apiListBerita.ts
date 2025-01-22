import axios from "axios";

export interface NewsItem {
  id: number;
  berita_id: string;
  title: string;
  subtitle: string;
  images: string;
  author: string;
  updated_at: string;
  description: string;
  tags: string[];
}

const getListNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await axios.get('https://api.smkpluspnb.sch.id/api/api/v1/misc/berita');
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch news data');
  }
};

export const getNewsByTag = async (tag: string): Promise<NewsItem[]> => {
  const response = await fetch(
    `https://api.smkpluspnb.sch.id/api/api/v1/misc/tag?tag=${tag}`
  );
  if (!response.ok) {
    throw new Error('Gagal mengambil data berita berdasarkan tag');
  }
  return response.json();
};

export const getTags = async (): Promise<string[]> => {
  const response = await fetch('https://api.smkpluspnb.sch.id/api/api/v1/misc/berita');
  if (!response.ok) {
    throw new Error('Gagal mengambil daftar tag');
  }
  const data = await response.json();

  const allTags = data.data.flatMap((berita: { tags: string[] }) => berita.tags);

  const uniqueTags: string[] = Array.from(new Set(allTags));

  return uniqueTags;

};
export { getListNews };
