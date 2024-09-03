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
    return (
        <div>
            {data?.data.map((item, index) => {
                return (
                    <>
                        <p key={index}>{item.url}{item.ratio}</p>
                        <img src={item.path} width={100} height={100} alt="" />
                    </>
                );
            })}
        </div>
    );
}
