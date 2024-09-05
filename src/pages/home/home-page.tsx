/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./home-page.css";
import Header from "../../global-components/header/header";
import { useQuery } from "@tanstack/react-query";
import ImageCard from "../../global-components/image-card/image-card";
import ImageRepository from "../../repository/image-repository/image-repository";
import { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import AspectEnum from "../../enums/aspect-enum";
import HomePageController from "./home-page-controller";

export default function HomePage() {
    const controller = new HomePageController();
    const repository = new ImageRepository();
    const currentPage = useRef(1);
    const searchRef = useRef<HTMLInputElement | null>(null);
    const aspectRef = useRef<AspectEnum>(AspectEnum.all);

    const search = () => controller.search(currentPage, query.refetch);
    const nextPage = () => controller.nextPage(query.data, currentPage, query.refetch);
    const previousPage = () => controller.previousPage(currentPage, query.refetch);
    const changeAspect = (aspect: AspectEnum) => controller.changeAspect(aspect, aspectRef, currentPage, query.refetch);

    const query = useQuery({
        queryKey: ["images"],
        queryFn: () =>
            repository.getImages(currentPage.current, aspectRef.current, searchRef.current?.value),
    });

    if (query.error) {
        return (
            <>
                <Header search={search} searchRef={searchRef} changeAspect={changeAspect} />
                <div>Error...</div>
            </>
        );
    }

    if (query.isLoading) {
        return (
            <>
                <Header search={search} searchRef={searchRef} changeAspect={changeAspect} />
                <div>Loading...</div>
            </>
        );
    }

    return (
        <div className="homePage">
            <Header search={search} searchRef={searchRef} changeAspect={changeAspect} />
            <h1>Populares</h1>
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
