import React from "react";
import  "./image.css";
import wheet from "../../assect/img (1).jpeg";
import bg from "../../assect/img (2).jpeg";
import good from "../../assect/img (3).jpeg";
import bgs from "../../assect/img (4).jpeg";
import goods from "../../assect/img (5).jpeg";

const Image = () => {
    return (
        <div className="image" id="gallery">

            <img src={wheet} />
            <img src={good} />
            <img src={bg} />
            <img src={bgs} />
            <img src={goods} />
        </div>
    )
};

export default Image; 