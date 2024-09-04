/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axiosInstance from "./services/custom-axios-client";
import WallHeavenImageList from "./types/wallheaven-image-list";
import { objectToCamel } from "ts-case-convert";
import Router from "./routes/router";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    );
}

export default App;

function Teste() {
    async function get(): Promise<WallHeavenImageList> {
        const res = await axiosInstance.get<WallHeavenImageList>(
            "https://corsproxy.io/?https://wallhaven.cc/api/v1/search"
        );

        const parsed = objectToCamel(res.data);

        return parsed;
    }

    const { data, isLoading, error } = useQuery({ queryKey: ["a"], queryFn: get });

    if (error) {
        return <div>Error...</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const ratio = (rat: string | number) => {
        if (typeof rat === "string") {
            rat = Number.parseFloat(rat);
        }
        console.log((rat - 1) * 10);
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
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: "40px",
                gap: "12px",
            }}
        >
            {data?.data.map((item, index) => {
                return (
                    <>
                        {/* <p key={index}>
                            {item.url}
                            {item.ratio}
                        </p> */}
                        <img
                        key={index}
                            src={item.path}
                            style={{
                                aspectRatio: item.ratio,
                                flexGrow: 1,
                                objectFit: "cover",
                                flexBasis: ratio(item.ratio),
                                minWidth: "200px",
                                borderRadius: "8px",
                            }}
                            alt=""
                        />
                        {/* <a download={item.id} href={item.path}  target="_blank">
                            Link
                        </a> */}
                    </>
                );
            })}
        </div>
    );
}
