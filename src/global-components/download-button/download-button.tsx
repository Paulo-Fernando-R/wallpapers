import "./download-button.css";
import { MdOutlineFileDownload } from "react-icons/md";

export default function DownloadButton() {
    return (
        <button className="downloadButton">
            <MdOutlineFileDownload size={24}/>
            DOWNLOAD
        </button>
    );
}
