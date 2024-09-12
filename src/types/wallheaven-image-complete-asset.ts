//type WallheavenImageCompleteAsset = = {}

type Avatar = {
    "200px": string;
    "128px": string;
    "32px": string;
    "20px": string;
};

type Uploader = {
    username: string;
    group: string;
    avatar: Avatar; 
};

export type Tag = {
    id: number;
    name: string;
    alias: string;
    categoryId: number;
    category: string;
    purity: string;
    createdAt: string;
};

export type Thumbs = {
    large: string;
    original: string;
    small: string;
};

type WallheavenImageCompleteAsset = {
    id: string;
    url: string;
    shortUrl: string;
    uploader: Uploader;
    views: number;
    favorites: number;
    source: string;
    purity: string;
    category: string;
    dimensionX: number;
    dimensiony: number;
    resolution: string;
    ratio: string;
    fileSize: number;
    fileType: string;
    createdAt: string;
    colors: string[];
    path: string;
    thumbs: Thumbs;
    tags: Tag[];
};

export default WallheavenImageCompleteAsset;
