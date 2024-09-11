/* eslint-disable @typescript-eslint/no-unused-vars */
import "./search-input.css";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

type SearchInputProps = {
    search: (text: string) => void;
    // searchRef: React.MutableRefObject<HTMLInputElement | null>;
};

export default function SearchInput({ search }: SearchInputProps) {
    const searchRef = useRef<HTMLInputElement | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    function handleParams(param: string) {
        const res = searchParams.get(param);
        console.log(res);
        if (res) {
            searchParams.set("query", searchRef.current?.value || "");
            setSearchParams(searchParams);
            return;
        }
        searchParams.append("query", searchRef.current?.value || "");
        setSearchParams(searchParams);
    }

    function button() {
        if (searchRef.current?.value) {
            handleParams("query");
            search?.(searchRef.current?.value);
        }
    }

    function press(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") {
            return;
        }
        if (searchRef.current?.value) {
            handleParams("query");
            search?.(searchRef.current?.value);
        }
    }

    return (
        <div className="searchInput">
            <input
                onKeyDown={press}
                ref={searchRef}
                type="text"
                placeholder="Pesquisar wallpaper"
            />
            <button onClick={button}>
                <CiSearch size={20} />
            </button>
        </div>
    );
}
