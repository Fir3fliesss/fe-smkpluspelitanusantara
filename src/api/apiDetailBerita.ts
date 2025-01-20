import axios from "axios";

export interface NewsDetail {
  id: number;
  berita_id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string;
  tags: string[];
  updated_at: string;
  author: string;
}

const getDetailBerita = async (berita_id:  string): Promise<NewsDetail> => {
  try {
    const response = await axios.get(`https://api.smkpluspnb.sch.id/api/api/v1/misc/berita/${berita_id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch detail berita');
  }
};

export { getDetailBerita };
