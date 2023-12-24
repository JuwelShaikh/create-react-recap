import React, { useEffect, useState } from 'react';

const Contents = (props) => {
    const [price, setPrice] = useState(10000)
    const bidPrice = () => {
        const newPrice = price*2;
        setPrice(newPrice);
    }
    const contentStyle = {
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div>
            <h1>Some Contents</h1>
            <div style={contentStyle}>
                <h3>Product Name: {props.name}</h3>
                <p>Price: {price}</p>
                <button onClick={bidPrice}>Bid the price</button>
            </div>
        </div>
    );
};

export default Contents;