import axios from 'axios';

export interface AlbumItem {
  id: number;
  galeri_id: string;
  image: string;
  title: string;
  status: number;
  created_at: string;
  updated_at: string;
}

export const getListAlbum = async (): Promise<AlbumItem[]> => {
  try {
    const response = await axios.get('https://api.smkpluspnb.sch.id/api/api/v1/misc/galeri');
    return Object.values(response.data.data);
  } catch (error) {
    console.error('Error fetching album data:', error);
    throw new Error('Gagal mengambil data album');
  }
};
