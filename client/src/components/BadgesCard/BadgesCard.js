import React from "react";

function BadgesCard(props) {
    // console.log(props);
    const style = {
        backgroundColor: "black",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }
    console.log(style);
    return (
        <div className="card" style={style}>
            <h2>Badges</h2><br />
            
        </div>
    )
}

export default BadgesCard;