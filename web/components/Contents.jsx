import React from "react";
import flower3 from "../images/flower1.jpg"
import flower2 from "../images/flower2.jpg"
const Contents = () => {
    return(
        <>
        <div className="menu-card">
            <img src={flower3} alt="egg" className="h-full rounded mb-20 shadow"/>
            <div className="center-content">
                <h2 className="text-2xl mb-2">Flores</h2>
                <p className="mb-2">Bonitas flores y coloridas</p>
                <span>$16</span>
            </div>
        </div>
    <div className="menu-card">
        <img src={flower2} alt="egg" className="h-full rounded mb-20 shadow"/>
        <div className="center-content">
            <h2 className="text-2xl mb-2">Flores</h2>
            <p className="mb-2">Bonitas flores y coloridas</p>
            <span>$16</span>
        </div>
    </div>
        </>
    )
}
export default Contents
