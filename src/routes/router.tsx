import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/home-page";
import Details from "../pages/details/details";

export default function Router() {

    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="details/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}
