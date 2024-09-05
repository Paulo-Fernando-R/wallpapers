import AspectEnum from "../../enums/aspect-enum";
import WallHeavenImageList from "../../types/wallheaven-image-list";

export default interface IImageRepository {
    getImages(page:number, aspect:AspectEnum, searchText?: string): Promise<WallHeavenImageList>;
}
