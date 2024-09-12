import AspectEnum from "../../enums/aspect-enum";
import WallheavenImageCompleteAsset from "../../types/wallheaven-image-complete-asset";
import WallHeavenImageList from "../../types/wallheaven-image-list";

export default interface IImageRepository {
    getImages(page: number, aspect: AspectEnum, searchText?: string): Promise<WallHeavenImageList>;

    getImageById(id: string): Promise<WallheavenImageCompleteAsset>;
}
