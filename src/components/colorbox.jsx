import React, { useState } from 'react';

const ColorBox = ({ color }) => {
    const [currentColor, setCurrentColor] = useState(color);

    const handleClick = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setCurrentColor(randomColor);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                width: '50px',
                height: '50px',
                backgroundColor: currentColor,
                display: 'inline-block',
                cursor: 'pointer',
            }}
        />
    );
};

export default ColorBox;
