import "./home-page.css";
import Header from "../../global-components/header/header";
import ImageCard from "../../global-components/image-card/image-card";
import AspectEnum from "../../enums/aspect-enum";
import HomePageController from "./home-page-controller";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import LoadingSkeleton from "../../global-components/loading-skeleton/loading-skeleton";

export default function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const controller = new HomePageController(searchParams, setSearchParams);

    const searchRef = useRef<HTMLInputElement>(document.createElement("input"));
    const aspectRef = useRef<AspectEnum>(AspectEnum.all);
    const currentPage = useRef(1);

    controller.initializeParams(currentPage, searchRef, aspectRef);

    const search = (text: string) => controller.search(text, searchRef, currentPage, query.refetch);

    const changeAspect = (aspect: AspectEnum) => controller.changeAspect(aspect, aspectRef,  query.refetch);

    const nextPage = () => controller.nextPage(query.data, currentPage, query.refetch);

    const previousPage = () => controller.previousPage(currentPage, query.refetch);

    const resetParams = () => controller.removeParams();

    const query = useQuery({
        queryKey: ["images"],
        queryFn: () => controller.getImages(currentPage.current, aspectRef.current, searchRef.current?.value),
    });

    if (query.error || query.isLoading) {
        return (
            <LoadingSkeleton>
                <Header search={search} changeAspect={changeAspect} resetParams={resetParams} />
            </LoadingSkeleton>
        );
    }

    return (
        <div className="homePage">
            <Header search={search} changeAspect={changeAspect} resetParams={resetParams} />
            <h1 className="popular">Populares</h1>
            <div className="grid">
                {query.data?.data.map((item, index) => {
                    return <ImageCard item={item} index={index} key={index} />;
                })}
            </div>

            <div className="pageChangerBox">
                <div className="pageChanger">
                    <button onClick={previousPage}>
                        <IoChevronBack size={20} />
                    </button>
                    <span>
                        {currentPage.current} | {query.data?.meta.lastPage}
                    </span>
                    <button onClick={nextPage}>
                        <IoChevronForward size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
