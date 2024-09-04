import "./header.css";
import SearchInput from "../search-input/search-input";
import logo from "../../assets/images/papel-de-parede (1) 2.png";
export default function Header() {
    return (
        <div className="homePageHeader">
            <div className="logo">
                <img src={logo} alt="" />
                <h1>SAMBI</h1>
                <h1>Wallpaper</h1>
            </div>

            <SearchInput />

            <div className="filters">
                <button>Para Desktop</button>
                <button>Para Celular</button>
            </div>
        </div>
    );
}
