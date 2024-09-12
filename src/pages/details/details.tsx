/* eslint-disable @typescript-eslint/no-unused-vars */
import "./details.css";
import { useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import DownloadButton from "../../global-components/download-button/download-button";
import ColorsComponent from "../../global-components/colors-component/colors-component";
import TagsComponent from "../../global-components/tags-component/tags-component";

export default function Details() {
    const { id } = useParams();

    return (
        <div className="detailsPage">
            <div className="detailsHeader">
                <button>
                    <FaChevronLeft size={28} /> Voltar
                </button>
            </div>

            <div className="imageBody">
                <img
                    src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
                    alt=""
                />

                <div className="infoBox">
                    <h1>Nome da imagem e os karalho a 5 e fodass</h1>

                    <span>
                        <DownloadButton />
                        <p>Resolução: 1920x1080</p>
                        <p>Tamanho do arquivo: 4MB</p>
                    </span>
                    <ColorsComponent />
                </div>
            </div>
            <TagsComponent />
        </div>
    );
}
