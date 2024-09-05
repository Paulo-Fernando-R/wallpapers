import WallHeavenImageList from "../../types/wallheaven-image-list";
import IImageRepository from "./Iimage-repository";
import axiosInstance from "../../services/custom-axios-client";
import { objectToCamel } from "ts-case-convert";
import AspectEnum from "../../enums/aspect-enum";

export default class ImageRepository implements IImageRepository {
    async getImages(
        page: number,
        aspect: AspectEnum,
        searchText?: string
    ): Promise<WallHeavenImageList> {

        console.log(aspect)
        let url = `/search?page=${page}`;
        if (searchText) url += `&q=${searchText}`;
        if (aspect !== AspectEnum.all) url += `&ratios=${aspect}`;
console.log(url)
        const res = await axiosInstance.get<WallHeavenImageList>(url);

        if (res.status !== 200) {
            throw new Error("Failed to fetch images code: " + "200");
        }

        const parsed = objectToCamel(res.data);
        return parsed;
    }
}
