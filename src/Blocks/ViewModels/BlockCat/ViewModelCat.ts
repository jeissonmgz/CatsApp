import { Cat } from '@models/Cat';
import { useCallback, useState } from 'react';
import { ApiCats } from 'src/Data/ApiCats';
import { getImageUrl } from 'src/Utils/getImageUrl';

export const getCats = async () => {
  await ApiCats.getBreeds();
};

export const ViewModelCat = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const getCats = useCallback(async () => {
    const catsResponse = await ApiCats.getBreeds().catch(() => {
      setError(true);
      return [];
    });
    const mapCats = catsResponse.map(catResponse => ({
      breedName: catResponse.name,
      origin: catResponse.origin,
      affectionLevel: catResponse.affection_level,
      intelligence: catResponse.intelligence,
      imageUrl: getImageUrl(catResponse.reference_image_id)
    }));
    setCats(mapCats);
    setLoading(false);
  }, []);
  return { cats, getCats, isLoading, isError };
};
