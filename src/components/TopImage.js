import React from "react";
import './css/HeaderImage.sass'

const TopImage = props => {
    return(
        <div className="hero-image">
            <div className="hero-text">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default TopImage
