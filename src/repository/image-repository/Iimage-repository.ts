import WallHeavenImageList from "../../types/wallheaven-image-list";

export default interface IImageRepository {
    getImages(page:number, searchText?: string): Promise<WallHeavenImageList>;
}
