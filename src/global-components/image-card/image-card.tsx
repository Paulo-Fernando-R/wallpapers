import WallhavenImageListItem from "../../types/wallhaven-image-list-item";
import "./image-card.css";
import { useNavigate } from "react-router-dom";
import aspectRatioAjustment from "../../utils/aspect-ratio-adjustment";

type ImageCardProps = {
    item: WallhavenImageListItem;
    index: number;
};

export default function ImageCard({ item, index }: ImageCardProps) {
    const navigate = useNavigate();

    function show() {
        navigate(`/details/${item.id}`);
    }

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
                    flexBasis: aspectRatioAjustment.card(item.ratio),
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
