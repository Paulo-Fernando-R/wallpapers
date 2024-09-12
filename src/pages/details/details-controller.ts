import IImageRepository from "../../repository/image-repository/Iimage-repository";
import ImageRepository from "../../repository/image-repository/image-repository";
//import ImageRepositoryMock from "../../repository/image-repository/image-repository.mock";
import WallheavenImageCompleteAsset from "../../types/wallheaven-image-complete-asset";

export default class DetailsController {
    private readonly repository: IImageRepository;

    constructor() {
        this.repository = new ImageRepository();
    }

    async getImageById(id: string): Promise<WallheavenImageCompleteAsset> {
        return await this.repository.getImageById(id);
    }

    formatProperties(data: WallheavenImageCompleteAsset | undefined) {
        const name = data?.tags
            .map((e, index) => {
                let aux = "";
                if (index < 4) {
                    return (aux += e.name);
                }
            })
            .join(" ");

        let size = "";
        if (data?.fileSize) size = (data?.fileSize / 1024 / 1024).toFixed(2);

        return { name, size };
    }
}
