import React from "react";
import './css/TopImage.sass'

const TopImageComponent = props => {
    return(
        <div className="topImageComponent d-flex justify-content-center">
            {/*<img src={topImage}/>*/}
            {/*<div className="imageGradient"></div>*/}
            <div className="topImageText">
                <h1>FITNES CLUB</h1>
                <h2>После первой тренировки вы захотите стать лучше</h2>
            </div>
        </div>
    )
}

export default TopImageComponent
