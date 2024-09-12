/* eslint-disable @typescript-eslint/no-unused-vars */
import "./details.css";
import { useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import DownloadButton from "../../global-components/download-button/download-button";
import ColorsComponent from "../../global-components/colors-component/colors-component";
import TagsComponent from "../../global-components/tags-component/tags-component";
import { useQuery } from "@tanstack/react-query";
import DetailsController from "./details-controller";
import { useNavigate } from "react-router-dom";

export default function Details() {
    const { id } = useParams();
    const controller = new DetailsController();
    const navigate = useNavigate();

    const query = useQuery({
        queryKey: [`image:${id}`],
        queryFn: () => controller.getImageById(id || ""),
    });

    const { name, size } = controller.formatProperties(query.data);

    function back() {
        navigate(-1);
    }

    if(query.isLoading){
        return<></>
    }

    return (
        <div className="detailsPage">
            <div className="detailsHeader">
                <button onClick={back}>
                    <FaChevronLeft size={28} /> Voltar
                </button>
            </div>

            <div className="imageBody">
                <div className="imgBox">
                    <img src={query.data?.path} alt="" />
                </div>

                <div className="infoBox">
                    <h1>{name}</h1>

                    <span>
                        <DownloadButton />
                        <p>Resolução: {query.data?.resolution}</p>
                        <p>Tamanho do arquivo: {size}MB</p>
                    </span>
                    <ColorsComponent list={query.data?.colors} />
                </div>
            </div>
            <TagsComponent list={query.data?.tags} />
        </div>
    );
}
