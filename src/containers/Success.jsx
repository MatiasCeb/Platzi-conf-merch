import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Map from "../components/Map";
import "../styles/components/Success.css";

const Succes = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;

    return (
        <div className="Succes">
            <div className="Success-content">
                <h2>`${buyer.name}, gracias por tu compra.`</h2>
                <span>Tu pedido llegara en 3 días a tu dirección</span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    );
}

export default Succes;