/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axiosInstance from "./services/custom-axios-client";
import WallHeavenImageList from "./types/wallheaven-image-list";
import { objectToCamel } from "ts-case-convert";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Teste />
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

    const ratio = () => {
        const a = Math.floor(Math.random() * 100);
        console.log(a)
        if (a >= 50) return "20%";
        return "30%";
    };

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {data?.data.map((item, index) => {
                return (
                    <>
                        {/* <p key={index}>
                            {item.url}
                            {item.ratio}
                        </p> */}
                        <img
                            src={item.path}
                            style={{
                                aspectRatio: item.ratio,
                                flexGrow: 1,
                                objectFit: "cover",
                                flexBasis: ratio(),
                                minWidth: "200px",
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
