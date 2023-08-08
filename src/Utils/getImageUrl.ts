const ASSET_BASE = "https://cdn2.thecatapi.com/images/";

export const getImageUrl = (id: string) => `${ASSET_BASE}${id}.jpg`;
export const getImageFailedUrl = (url: string) => url.replace('.jpg', '.png');