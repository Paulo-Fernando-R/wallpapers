import "./download-button.css";
import { MdOutlineFileDownload } from "react-icons/md";

type DownloadButtonProps = {
    download: () => Promise<void>;
};

export default function DownloadButton({ download }: DownloadButtonProps) {
    return (
        <button onClick={download} className="downloadButton">
            <MdOutlineFileDownload size={24} />
            DOWNLOAD
        </button>
    );
}
