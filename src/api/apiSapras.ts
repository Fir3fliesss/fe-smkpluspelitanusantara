import axios from "axios";

interface SaranaItem {
  sarana_id: string;
  image: string;
  title: string;
}

interface SaprasImage {
  id: string;
  src: string;
  title: string;
}

const getSapras = async (): Promise<SaprasImage[]> => {
  try {
    const response = await axios.get('https://api.smkpluspnb.sch.id/api/api/v1/misc/index');
    const saranaData: SaranaItem[] = response.data.data.sarana;
    const saprasImages = saranaData.map((item: SaranaItem) => ({
      id: item.sarana_id,
      src: `https://api.smkpluspnb.sch.id/storage/${item.image}`,
      title: item.title,
    }));
    return saprasImages;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch sapras data');
  }
};

export { getSapras };
