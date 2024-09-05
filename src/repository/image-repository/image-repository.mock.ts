/* eslint-disable @typescript-eslint/no-unused-vars */
import WallHeavenImageList from "../../types/wallheaven-image-list";
import IImageRepository from "./Iimage-repository";
import { objectToCamel } from "ts-case-convert";
import axios from "axios";

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
}
