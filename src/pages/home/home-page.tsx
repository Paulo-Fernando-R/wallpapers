/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./home-page.css";
import Header from "../../global-components/header/header";
import { useQuery } from "@tanstack/react-query";
import ImageCard from "../../global-components/image-card/image-card";
import ImageRepository from "../../repository/image-repository/image-repository";
import { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function HomePage() {
    const repository = new ImageRepository();
    const currentPage = useRef(1);
    const searchRef = useRef<HTMLInputElement | null>(null);

    function search() {
        currentPage.current = 1;
        refetch({ throwOnError: true });
    }

    const { data, isLoading, error, refetch /*isRefetching*/ } = useQuery({
        queryKey: ["a"],
        queryFn: () => repository.getImages(currentPage.current, searchRef.current?.value),
    });

    function nextPage() {
        if ((data?.meta.currentPage ?? 0) < (data?.meta.lastPage ?? 0)) {
            currentPage.current++;
            refetch({ throwOnError: true });
        }
    }

    function previousPage() {
        if ((currentPage.current ?? 0) > 1) {
            currentPage.current--;
            refetch({ throwOnError: true });
        }
    }

    if (error) {
        return (
            <>
                <Header search={search} searchRef={searchRef} /> <div>Error...</div>
            </>
        );
    }

    if (isLoading) {
        return (
            <>
                <Header search={search} searchRef={searchRef} /> <div>Loading...</div>
            </>
        );
    }

    return (
        <div className="homePage">
            <Header search={search} searchRef={searchRef} />
            <h1>Populares</h1>
            <div className="grid">
                {data?.data.map((item, index) => {
                    return <ImageCard item={item} index={index} key={index} />;
                })}
            </div>

            <div className="pageChangerBox">
                <div className="pageChanger">
                    <button onClick={previousPage}>
                        <IoChevronBack size={20} />
                    </button>
                    <span>
                        {currentPage.current} | {data?.meta.lastPage}
                    </span>
                    <button onClick={nextPage}>
                        <IoChevronForward size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
