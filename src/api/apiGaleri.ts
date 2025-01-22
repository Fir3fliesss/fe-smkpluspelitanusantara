import axios from "axios";

interface ApiGaleriItem {
  id: number;
  galeri_id: string;
  image: string;
  title: string;
  status: number;
  created_at: string;
  updated_at: string;
}

export interface GaleriItem {
  id: string;
  image: string;
  title: string;
  date: string;
}

const getGaleri = async (): Promise<GaleriItem[]> => {
  try {
    const response = await axios.get('https://api.smkpluspnb.sch.id/api/api/v1/misc/index');
    const galeriData: ApiGaleriItem[] = response.data.data.galeri;

    const galeriList = galeriData.map((item: ApiGaleriItem) => ({
      id: item.galeri_id,
      image: `https://api.smkpluspnb.sch.id/storage/${item.image}`,
      title: item.title,
      date: new Date(item.created_at).toLocaleDateString(),
    }));

    return galeriList;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch galeri data');
  }
};

export { getGaleri };
