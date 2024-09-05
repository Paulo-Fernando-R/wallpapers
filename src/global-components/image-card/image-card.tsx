import WallhavenImageListItem from "../../types/wallhaven-image-list-item";
import "./image-card.css";

type ImageCardProps = {
    item: WallhavenImageListItem;
    index: number;
};

export default function ImageCard({ item, index }: ImageCardProps) {

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

    return (
        <img
            key={index}
            className="gridItem"
            src={item.path}
            style={{
                aspectRatio: item.ratio,
                flexBasis: ratio(item.ratio),
            }}
        />
    );
}
