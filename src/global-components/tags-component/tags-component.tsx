import { useEffect } from "react";
import "./tags-component.css";
import { CiHashtag } from "react-icons/ci";
import browserDeviceTypeCheck from "../../utils/browser-device-type-check";
import { Tag } from "../../types/wallheaven-image-complete-asset";

type TagsComponentProps = {
    list: Tag[] | undefined;
};

export default function TagsComponent({ list }: TagsComponentProps) {
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
    }, [list]);

    return (
        <div className="tagsComponent">
            <h1>Tags</h1>

            <div id="tagList" className="tagsList">
                {list &&
                    list.map((e, index) => {
                        return (
                            <span key={index}>
                                <CiHashtag size={24} />
                                {e.name}
                            </span>
                        );
                    })}
            </div>
        </div>
    );
}
