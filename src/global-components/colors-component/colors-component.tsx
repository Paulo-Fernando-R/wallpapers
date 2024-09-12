import "./colors-component.css";

export default function ColorsComponent() {
    const list = ["#080607", "#FFE782", "#230B0B", "#792332", "#0D263C"];
    return (
        <div className="colorsComponent">
            <h3>Cores</h3>
            <div className="colorsList">
                {list.map((e, index) => {
                    return <span key={index} style={{ backgroundColor: e }}></span>;
                })}
            </div>
        </div>
    );
}
