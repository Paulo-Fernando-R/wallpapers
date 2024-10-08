/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import AspectEnum from "../../enums/aspect-enum";
import WallHeavenImageList from "../../types/wallheaven-image-list";
import { SetURLSearchParams } from "react-router-dom";
import ImageRepository from "../../repository/image-repository/image-repository";
import IImageRepository from "../../repository/image-repository/Iimage-repository";


export default class HomePageController {
    private readonly searchParams: URLSearchParams;
    private readonly setSearchParams: SetURLSearchParams;

    private readonly repository: IImageRepository;

    constructor(searchParams: URLSearchParams, setSearchParams: SetURLSearchParams) {
        this.searchParams = searchParams;
        this.setSearchParams = setSearchParams;
        this.repository = new ImageRepository();
    }

    async getImages(page: number, aspect: AspectEnum, searchText?: string) {
        const response = await this.repository.getImages(page, aspect, searchText);
        return response;
    }

    handleParams(param: string, value: string) {
        const res = this.searchParams.get(param);

        if (res !== null) {
            this.searchParams.set(param, value);
            this.setSearchParams(this.searchParams);
            return;
        }
        this.searchParams.append(param, value);
        this.setSearchParams(this.searchParams);
    }

    initializeParams(
        currentPage: React.MutableRefObject<number>,
        searchRef: React.MutableRefObject<HTMLInputElement>,
        aspectRef: React.MutableRefObject<AspectEnum>
    ) {
        const queryText = this.searchParams.get("query");
        const aspect = this.searchParams.get("ratio");
        const page = this.searchParams.get("page");

        if (queryText) searchRef.current.value = queryText;
        if (aspect) aspectRef.current = aspect as AspectEnum;
        if (page) currentPage.current = Number.parseInt(page);
    }

    removeParams() {
        this.searchParams.delete("query");
        this.searchParams.delete("ratio");
        this.searchParams.delete("page");
        this.setSearchParams(this.searchParams);

        location.reload();
    }

    changeAspect(
        aspect: AspectEnum,
        aspectRef: React.MutableRefObject<AspectEnum>,
     
        refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<WallHeavenImageList, Error>>
    ) {
        aspectRef.current = aspect;
        this.handleParams("ratio", aspect.toString());
        refetch();
    }

    search(
        text: string,
        searchRef: React.MutableRefObject<HTMLInputElement | null>,
        currentPage: React.MutableRefObject<number>,
        refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<WallHeavenImageList, Error>>
    ) {
        if (searchRef.current) searchRef.current.value = text;
        currentPage.current = 1;
        this.handleParams("page", currentPage.current.toString());
        this.handleParams("query", text);
        refetch({ throwOnError: true });
    }

    nextPage(
        data: WallHeavenImageList | undefined,
        currentPage: React.MutableRefObject<number>,
        refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<WallHeavenImageList, Error>>
    ) {
        if ((data?.meta.currentPage ?? 0) < (data?.meta.lastPage ?? 0)) {
            currentPage.current++;
            this.handleParams("page", currentPage.current.toString());
            refetch({ throwOnError: true });
        }
    }

    previousPage(
        currentPage: React.MutableRefObject<number>,
        refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<WallHeavenImageList, Error>>
    ) {
        if ((currentPage.current ?? 0) > 1) {
            currentPage.current--;
            this.handleParams("page", currentPage.current.toString());
            refetch({ throwOnError: true });
        }
    }
}
