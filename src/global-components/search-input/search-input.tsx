import "./search-input.css";
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
    return (
        <div className="searchInput">
            <input type="text" placeholder="Pesquisar wallpaper" />
            <button>
                <CiSearch size={20} />
            </button>
        </div>
    );
}
