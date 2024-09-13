import "./details-skeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function DetailsSkeleton() {
    return (
        <div className="skeletonDetails">
            <div className="inline1">
                <Skeleton  enableAnimation={true} height={650} baseColor="#18191A" highlightColor="#2C2D2E" />
            </div>

            <div className="inline2">
                <Skeleton enableAnimation={true} height={650} baseColor="#18191A" highlightColor="#2C2D2E" />
            </div>

            <div className="bottom">
                <Skeleton enableAnimation={true} height={200} baseColor="#18191A" highlightColor="#2C2D2E" />
            </div>
        </div>
    );
}
