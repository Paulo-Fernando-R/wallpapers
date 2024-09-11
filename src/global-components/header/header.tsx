/* eslint-disable @typescript-eslint/no-unused-vars */
import "./header.css";
import SearchInput from "../search-input/search-input";
import logo from "../../assets/images/papel-de-parede (1) 2.png";
import AspectEnum from "../../enums/aspect-enum";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type HeaderProps = {
    search: (text: string) => void;
    searchRef: React.MutableRefObject<HTMLInputElement | null>;
    changeAspect: (aspect: AspectEnum) => void;
};

export default function Header({ search, changeAspect }: HeaderProps) {
    const [buttonActive, setButtonActive] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    function handleParams(param: string, value: string) {
        const res = searchParams.get(param);
        console.log(res);
        if (res) {
            searchParams.set(param, value);
            setSearchParams(searchParams);
            return;
        }
        searchParams.append(param, value);
        setSearchParams(searchParams);
    }

    function landscape() {
        if (buttonActive === 1) {
            setButtonActive(0);
            changeAspect(AspectEnum.all);
            handleParams("aspect", AspectEnum.all);
            return;
        }
        setButtonActive(1);
        changeAspect(AspectEnum.landscape);
        handleParams("aspect", AspectEnum.landscape);
    }

    function portrait() {
        if (buttonActive === 2) {
            setButtonActive(0);
            changeAspect(AspectEnum.all);
            handleParams("aspect", AspectEnum.all);
            return;
        }
        setButtonActive(2);
        changeAspect(AspectEnum.portrait);
        handleParams("aspect", AspectEnum.portrait);
    }
    return (
        <div className="homePageHeader">
            <div className="logo">
                <img src={logo} alt="" />
                <h1>SAMBI</h1>
                <h1>Wallpaper</h1>
            </div>

            <SearchInput search={search} />

            <div className="filters">
                <button className={buttonActive === 1 ? "buttonSelected" : ""} onClick={landscape}>
                    Para Desktop
                </button>
                <button className={buttonActive === 2 ? "buttonSelected" : ""} onClick={portrait}>
                    Para Celular
                </button>
            </div>
        </div>
    );
}
