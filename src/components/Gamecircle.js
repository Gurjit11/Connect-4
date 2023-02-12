import React from "react";
import "../Game.css";

const Gamecircle = ({id,children,className,onCircleClicked}) =>{
    return(
        <div className={`gameCircle ${className}`} onClick={() => onCircleClicked(id)}>
        {children}
        </div>
    )
}

export default Gamecircle ;