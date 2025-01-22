import axios from "axios";

export interface RecommendedNews {
  berita_id: string;
  title: string;
  images: string;
}

export interface NewsDetail {
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

export interface ApiResponse {
  message: string;
  data: NewsDetail;
  recommended: RecommendedNews[];
}

const getDetailBerita = async (berita_id: string): Promise<ApiResponse> => {
  try {
    const response = await axios.get(
      `https://api.smkpluspnb.sch.id/api/api/v1/misc/berita/${berita_id}`
    );
    return response.data; 
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch detail berita");
  }
};

export { getDetailBerita };
