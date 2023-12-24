import React from 'react';

const Contents = () => {
    const contentStyle = {
        backgroundColor: 'lightblue',
        padding: '2px',
        borderRadius: '10px'

        
    }
    return (
        <div>
            <h1>Some Contents</h1>
            <div style={contentStyle}>
                <h3>Product Name:</h3>
                <p>Price:</p>
                <button>Bid the price</button>
            </div>
        </div>
    );
};

export default Contents;