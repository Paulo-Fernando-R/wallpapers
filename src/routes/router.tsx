import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/home-page";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="main" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}
