import React from "react";
import "../styles/components/Success.css";

const Succes = () => {
    return (
        <div className="Succes">
            <div className="Success-content">
                <h2>Oscar, gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 días a tu dirección</span>
                <div className="Success-map">
                    Google Maps
                </div>
            </div>
        </div>
    );
}

export default Succes;