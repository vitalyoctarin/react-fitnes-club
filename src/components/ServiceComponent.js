import React from "react";

import './css/Card.sass'

const ServiceComponent = props => {
    return (
        <div className="column justify-content-center mb-4">
            <div className="card">
                <img
                    src={props.image}
                    alt="Snow"
                    className="img"
                />
                <div className="info">
                    <h1>{props.title}</h1>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    <button>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceComponent
