/* eslint-disable @typescript-eslint/no-unused-vars */
import WallHeavenImageList from "../../types/wallheaven-image-list";
import IImageRepository from "./Iimage-repository";
import axiosInstance from "../../services/custom-axios-client";
import { objectToCamel } from "ts-case-convert";
import AspectEnum from "../../enums/aspect-enum";
import WallheavenImageCompleteAsset from "../../types/wallheaven-image-complete-asset";

export default class ImageRepository implements IImageRepository {
    async getImages(page: number, aspect: AspectEnum, searchText?: string): Promise<WallHeavenImageList> {
        let url = `/search?page=${page}`;
        if (searchText) url += `&q=${searchText}`;
        if (aspect !== AspectEnum.all) url += `&ratios=${aspect}`;

        const res = await axiosInstance.get<WallHeavenImageList>(url);
        if (!res) {
            throw new Error("Failed to fetch images code: " + "404");
        }

        if (res.status !== 200) {
            throw new Error("Failed to fetch images code: " + "200");
        }

        const parsed = objectToCamel(res.data);
        return parsed;
    }

    async getImageById(id: string): Promise<WallheavenImageCompleteAsset> {
        type aux = {
            data: WallheavenImageCompleteAsset;
        };
        const url = `/w/${id}`;
        const res = await axiosInstance.get<aux>(url);

        if (!res) {
            throw new Error("Failed to fetch images code: " + "404");
        }

        if (res.status !== 200) {
            throw new Error("Failed to fetch images code: " + "200");
        }

        const parsed = objectToCamel(res.data.data);

        return parsed;
    }
}
