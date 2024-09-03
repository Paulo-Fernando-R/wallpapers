import { Thumbs } from "./wallheaven-image-complete-asset";

export type WallhavenImageListItem = {
    id: string;
    url: string;
    shortUrl: string;
    views: number;
    favorites: number;
    source: string;
    purity: "sfw" | "sketchy" | "nsfw"; // assuming these are the possible values
    category: string;
    dimensionX: number;
    dimensionY: number;
    resolution: string;
    ratio: string;
    fileSize: number;
    fileType: string;
    createdAt: string;
    colors: string[];
    path: string;
    thumbs: Thumbs;
};

export default WallhavenImageListItem;
