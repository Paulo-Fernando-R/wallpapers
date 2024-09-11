import "./details.css";
import { useParams } from "react-router-dom";

export default function Details() {

    const { id } = useParams();

    return (
        <h1 style={{ color: "white" }}>
            Details{id}  
        </h1>
    );
}
