import React from "react";
import './css/ListItem.sass'

const ListItem = props => {
    return(
        <div className=" mb-4">
            <div className="listContainer row align-items-center">
                {props.image}
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}

export default ListItem
