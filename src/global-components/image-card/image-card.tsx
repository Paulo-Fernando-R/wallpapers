import WallhavenImageListItem from "../../types/wallhaven-image-list-item";
import "./image-card.css";
import { useNavigate } from "react-router-dom";

type ImageCardProps = {
    item: WallhavenImageListItem;
    index: number;
};

export default function ImageCard({ item, index }: ImageCardProps) {
    const navigate = useNavigate();
    const ratio = (rat: string | number) => {
        if (typeof rat === "string") {
            rat = Number.parseFloat(rat);
        }

        if (rat > 1) {
            const val = rat - 1;
            const basis = 20 + (val * 3) / 2;
            return `${basis}%`;
        }
        const val = rat - 1;
        const basis = 10 - (val * 3) / 2;
        return `${basis}%`;
    };

    function show() {
        navigate(`/details/${item.id}`);
    }

    ///   const aux = item.dimensionX < 2500 && item.dimensionY < 2500;

    return (
        <>
            <img
                onClick={show}
                key={index}
                loading="lazy"
                className="gridItem"
                src={item.thumbs.original}
                style={{
                    aspectRatio: item.ratio,
                    flexBasis: ratio(item.ratio),
                }}
            />
        </>
    );
}

/*

    const img = new Image();

    let ctx: CanvasRenderingContext2D | null = null;
    function draw() {
        const canvas = document.getElementById("canvas" + index) as HTMLCanvasElement;

        if (!canvas.getContext) return;

        ctx = canvas.getContext("2d");

        img.onload = () => load(ctx, canvas);
        img.src = item.path;
        // console.log(img, index);
    }

    function load(ctx: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement) {
        
        ctx?.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
        
    }

    useEffect(() => {
        draw();

        return () => {
            //  img.removeEventListener("load", () => load(ctx));
        };
    }, []);

    return (
        <canvas
            className="gridItem"
            style={{
                aspectRatio: item.ratio,
                flexBasis: ratio(item.ratio),
            }}
            onLoad={draw}
            id={"canvas" + index}
        >
            {index}
        </canvas>
    );
*/
