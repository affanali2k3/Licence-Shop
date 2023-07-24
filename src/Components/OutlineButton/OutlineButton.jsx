import React from "react";

export const OutlineButton = ({ color, text, marginLeft = '20px' }) => {
    const buttonStyle = {
        color: color,
        border: `2px solid ${color}`,
        display: 'inline-block',
        padding: '10px',
        marginLeft: marginLeft
    }
    return (
        <div className="outline-button" style={buttonStyle}>{text}</div>
    )
}