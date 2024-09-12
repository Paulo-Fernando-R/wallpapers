import "./colors-component.css";

type ColorsComponentProps = {
    list: string[] | undefined;
};

export default function ColorsComponent({ list }: ColorsComponentProps) {
    return (
        <div className="colorsComponent">
            <h3>Cores</h3>
            <div className="colorsList">
                {list &&
                    list.map((e, index) => {
                        return <span key={index} style={{ backgroundColor: e }}></span>;
                    })}
            </div>
        </div>
    );
}
