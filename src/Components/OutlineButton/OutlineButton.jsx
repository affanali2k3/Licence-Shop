import React from "react";

export const OutlineButton = ({ color, text, isPrimary = false, horizontalPadding = '10px', verticalPadding = '10px', className }) => {
    const outlineButtonStyle = {
        color: color,
        border: `2px solid ${color}`,
        display: 'inline-block',
        paddingTop: verticalPadding,
        paddingBottom: verticalPadding,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,

    }
    const primaryButtonStyle = {
        color: 'white',
        backgroundColor: '#020D53',
        display: 'inline-block',
        paddingTop: verticalPadding,
        paddingBottom: verticalPadding,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,

    }
    return (
        <div className={`outline-button ${className}`} style={isPrimary ? primaryButtonStyle : outlineButtonStyle}>{text}</div>
    )
}