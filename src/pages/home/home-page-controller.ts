/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import AspectEnum from "../../enums/aspect-enum";
import WallHeavenImageList from "../../types/wallheaven-image-list";

export default class HomePageController {
    changeAspect(
        aspect: AspectEnum,
        aspectRef: React.MutableRefObject<AspectEnum>,
        currentPage: React.MutableRefObject<number>,
        refetch: (
            options?: RefetchOptions
        ) => Promise<QueryObserverResult<WallHeavenImageList, Error>>
    ) {
        aspectRef.current = aspect;
        currentPage.current = 1;
        refetch();
    }

    search(
        currentPage: React.MutableRefObject<number>,
        refetch: (
            options?: RefetchOptions
        ) => Promise<QueryObserverResult<WallHeavenImageList, Error>>
    ) {
        currentPage.current = 1;
        refetch({ throwOnError: true });
    }

    nextPage(
        data: WallHeavenImageList | undefined,
        currentPage: React.MutableRefObject<number>,
        refetch: (
            options?: RefetchOptions
        ) => Promise<QueryObserverResult<WallHeavenImageList, Error>>
    ) {
        if ((data?.meta.currentPage ?? 0) < (data?.meta.lastPage ?? 0)) {
            currentPage.current++;
            refetch({ throwOnError: true });
        }
    }

    previousPage(
        currentPage: React.MutableRefObject<number>,
        refetch: (
            options?: RefetchOptions
        ) => Promise<QueryObserverResult<WallHeavenImageList, Error>>
    ) {
        if ((currentPage.current ?? 0) > 1) {
            currentPage.current--;
            refetch({ throwOnError: true });
        }
    }
}
