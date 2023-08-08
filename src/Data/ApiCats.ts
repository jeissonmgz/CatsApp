import axios from "axios";

const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "bda53789-d59e-4cd-9bc4-2936630fde39";

const CONFIG_API = {
    headers:{
        "x-api-key": API_KEY
    }
};

export interface ReponseCat {
    weight:             Weight;
    id:                 string;
    name:               string;
    cfa_url:            string;
    vetstreet_url:      string;
    vcahospitals_url:   string;
    temperament:        string;
    origin:             string;
    country_codes:      string;
    country_code:       string;
    description:        string;
    life_span:          string;
    indoor:             number;
    lap:                number;
    alt_names:          string;
    adaptability:       number;
    affection_level:    number;
    child_friendly:     number;
    dog_friendly:       number;
    energy_level:       number;
    grooming:           number;
    health_issues:      number;
    intelligence:       number;
    shedding_level:     number;
    social_needs:       number;
    stranger_friendly:  number;
    vocalisation:       number;
    experimental:       number;
    hairless:           number;
    natural:            number;
    rare:               number;
    rex:                number;
    suppressed_tail:    number;
    short_legs:         number;
    wikipedia_url:      string;
    hypoallergenic:     number;
    reference_image_id: string;
}

export interface Weight {
    imperial: string;
    metric:   string;
}

const getBreeds = async () => {
    const response = await axios.get<ReponseCat[]>(`${BASE_URL}/breeds`, CONFIG_API);
    return response.data;
};

export const ApiCats = {
    getBreeds
}
