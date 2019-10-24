import React from "react";

function Card({ clickHandler, id, image, name }) {
    return (
        <div className="card-holder">
            <img
                alt={name}
                src={image}
                className="card-select grow img-thumbnail m-2 pointer"
                onClick={() => clickHandler(id)}
            />
        </div>
    );
}

export default Card;