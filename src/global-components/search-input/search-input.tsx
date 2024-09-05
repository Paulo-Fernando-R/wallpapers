import "./search-input.css";
import { CiSearch } from "react-icons/ci";

type SearchInputProps = {
    search: () => void;
    searchRef: React.MutableRefObject<HTMLInputElement | null>;
    
};

export default function SearchInput({ search, searchRef }: SearchInputProps) {
    function button() {
        if (searchRef.current?.value) {
            search?.();
        }
    }

    function press(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") {
            return;
        }
        if (searchRef.current?.value) {
            search?.();
        }
    }
    console.log(searchRef.current?.value);
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
