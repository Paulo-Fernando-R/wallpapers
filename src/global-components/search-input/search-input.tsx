import "./search-input.css";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";

type SearchInputProps = {
    search: (text: string) => void;
    // searchRef: React.MutableRefObject<HTMLInputElement | null>;
};

export default function SearchInput({ search }: SearchInputProps) {
    const searchRef = useRef<HTMLInputElement | null>(null);

    function button() {
        if (searchRef.current?.value) {
            search?.(searchRef.current?.value);
        }
    }

    function press(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") {
            return;
        }
        if (searchRef.current?.value) {
            search?.(searchRef.current?.value);
        }
    }

    return (
        <div className="searchInput">
            <input onKeyDown={press} ref={searchRef} type="text" placeholder="Pesquisar wallpaper" />
            <button onClick={button}>
                <CiSearch size={20} />
            </button>
        </div>
    );
}
