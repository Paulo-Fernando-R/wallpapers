/* eslint-disable @typescript-eslint/no-unused-vars */
import WallHeavenImageList from "../../types/wallheaven-image-list";
import IImageRepository from "./Iimage-repository";
import axiosInstance from "../../services/custom-axios-client";
import { objectToCamel } from "ts-case-convert";

export default class ImageRepository implements IImageRepository {
    async getImages(page: number): Promise<WallHeavenImageList> {
        const res = await axiosInstance.get<WallHeavenImageList>("/search");

        if (res.status !== 200) {
            throw new Error("Failed to fetch images code: " + "200");
        }

        const parsed = objectToCamel(res.data);

        return parsed;
    }
}
