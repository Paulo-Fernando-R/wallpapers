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
import DetailsSkeleton from "../../global-components/details-skeleton/details-skeleton";

export default function Details() {
    const { id } = useParams();
    const controller = new DetailsController();
    const navigate = useNavigate();

    const query = useQuery({
        queryKey: [`image_${id}`],
        queryFn: () => controller.getImageById(id || ""),
    });

    const { name, size } = controller.formatProperties(query.data);
    const back = () => navigate(-1);
    const download = () => controller.download(query.data?.path);

    if (query.isLoading || query.error) {
        return <DetailsSkeleton />;
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
                    <img src={query.data!.path} alt={name} />
                </div>

                <div className="infoBox">
                    <h1>{name}</h1>

                    <span>
                        <DownloadButton download={download} />
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
