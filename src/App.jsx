// src/App.jsx
import React from 'react';
import ColorBoxesContainer from './components/colorboxescontainer';
import './App.css';

const App = () => {
    return (
        <div id="root">
            <h1 className="logo">Color Boxes</h1>
            <ColorBoxesContainer />
            <div className="card">
                {/* Additional content or components can be added here */}
            </div>
        </div>
    );
};


export default App;
