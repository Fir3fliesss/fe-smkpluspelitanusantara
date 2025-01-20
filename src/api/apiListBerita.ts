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

export { getListNews };
