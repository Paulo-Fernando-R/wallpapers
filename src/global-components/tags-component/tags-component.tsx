import { useEffect } from "react";
import "./tags-component.css";
import { CiHashtag } from "react-icons/ci";
import browserDeviceTypeCheck from "../../utils/browser-device-type-check";

export default function TagsComponent() {
    const tags = [
        "mountain view",
        "mountain view",
        "mountain view",
        "mountain view",
        "mountain view",
        "mountain view",
        "mountain view",
        "mountain view",
        "mountain view",
    ];

    function scroll() {
        const isMobile = browserDeviceTypeCheck();
        if (isMobile) return;

        const div = document.getElementById("tagList") as HTMLDivElement;
        div.addEventListener("wheel", (event) => {
            div.scrollLeft += event.deltaY * 2;
        });
    }

    useEffect(() => {
        scroll();
        return () => document.removeEventListener("scroll", scroll);
    }, []);

    return (
        <div className="tagsComponent">
            <h1>Tags</h1>

            <div id="tagList" className="tagsList">
                {tags.map((e, index) => {
                    return (
                        <span key={index}>
                            <CiHashtag size={24} />
                            {e}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
