import { ReactNode } from "react";
import "./loading-skeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type LoadingSkeletonProps = {
    children: ReactNode;
};

export default function LoadingSkeleton({ children }: LoadingSkeletonProps) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 5];
    return (
        <>
            {children}
            <div className="skeleton">
                {arr.map(() => {
                    return (
                        <div className="item">
                            <Skeleton
                                enableAnimation={true}
                                height={300}
                                baseColor="#18191A"
                                highlightColor="#2C2D2E"
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
