import React from "react";

const Col = ({ isOver, children }) => {
    const classname = isOver ? "highlight-region" : "";

    return (
        <div className = {`col${className}`}>
            {children}
        </div>
    );
};

export default Col;