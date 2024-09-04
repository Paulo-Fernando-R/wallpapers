/* eslint-disable @typescript-eslint/no-unused-vars */
import "./home-page.css";
import Header from "../../global-components/header/header";
import { useQuery } from "@tanstack/react-query";
import ImageCard from "../../global-components/image-card/image-card";
import ImageRepository from "../../repository/image-repository/image-repository";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function HomePage() {
    const repository = new ImageRepository();
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isLoading, error } = useQuery({
        queryKey: ["a"],
        queryFn: () => repository.getImages(currentPage),
    });

    function nextPage() {
        if ((data?.meta.currentPage ?? 0) < (data?.meta.lastPage ?? 0))
            setCurrentPage(currentPage + 1);
    }

    function previousPage() {
        if ((currentPage ?? 0) > 1) setCurrentPage(currentPage - 1);
    }

    if (error) {
        return <div>Error...</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="homePage">
            <Header />
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
                        {currentPage} | {data?.meta.lastPage}
                    </span>
                    <button onClick={nextPage}>
                        <IoChevronForward size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
