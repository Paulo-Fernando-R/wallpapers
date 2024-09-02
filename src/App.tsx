/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import axios from "axios";

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
    const [data, setData] = useState([]);
    function get() {
        
        fetch("https://corsproxy.io/?https://wallhaven.cc/api/v1/search")
            .then((res) => res.json())
            .then((json) => console.log(json));
    }

    get();
    return <div>App</div>;
}
