import React, { useState } from 'react';
import ColorBox from './colorbox'; // Ensure correct import path
import { colors } from '../data/data'; // Ensure correct import path

const ColorBoxesContainer = () => {
    const [boxColors, setBoxColors] = useState(colors.slice(0, 25));


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                justifyContent: 'center',
                alignItems: 'center',
                height: '25vh',
            }}
        >

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 50px)', 
                    gridTemplateRows: 'repeat(5, 50px)',
                    gap: '6px',
                    width: 'fit-content',
                    border: '15px solid black', 
                    padding: '10px',
                }}
            >
                {boxColors.map((color, index) => (
                    <ColorBox key={index} color={color} />
                ))}
            </div>
        </div>
    );
};

export default ColorBoxesContainer;
