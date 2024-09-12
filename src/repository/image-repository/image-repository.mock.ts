/* eslint-disable @typescript-eslint/no-unused-vars */
import WallHeavenImageList from "../../types/wallheaven-image-list";
import IImageRepository from "./Iimage-repository";
import { objectToCamel } from "ts-case-convert";
import axios from "axios";
import WallheavenImageCompleteAsset from "../../types/wallheaven-image-complete-asset";

export default class ImageRepositoryMock implements IImageRepository {
    async getImages(page: number): Promise<WallHeavenImageList> {
        const res = await axios.get<WallHeavenImageList>("../../../public/image-list-mock.json");

        if (res.status !== 200) {
            throw new Error("Failed to fetch images code: " + "200");
        }

        const parsed = objectToCamel(res.data);
        parsed.meta.currentPage = page;
        return parsed;
    }

    async getImageById(_id: string): Promise<WallheavenImageCompleteAsset> {
        const res = await axios.get<WallheavenImageCompleteAsset>("../../../public/image-complete-mock.json");

        const parsed = objectToCamel(res.data);
        return parsed;
    }
}
