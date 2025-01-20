import axios from "axios";

// Definisikan tipe untuk data detail berita dari API
export interface NewsDetail {
  id: number;
  berita_id: string;
  author: string;
  title: string;
  subtitle: string;
  description: string;
  images: string;
  tags: string[];
  updated_at: string;
}

const getDetailBerita = async (id: string): Promise<NewsDetail> => {
  try {
    const response = await axios.get(`https://api.smkpluspnb.sch.id/api/api/v1/berita/show/${id}`);
    return response.data.data; // Sesuaikan dengan struktur respons API
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch detail berita');
  }
};

export { getDetailBerita };
