import React, { useEffect, useState } from 'react';

const Contents = (props) => {
    const [price, setPrice] = useState(props.price)
    const bidPrice = () => {
        const newPrice = price * 2;
        setPrice(newPrice);

        const biddingStyle ={
            backgroundColor: 'pest',
            borderRadius: '50%'
        }
    }
    const contentStyle = {
        backgroundColor: 'lightblue',
        padding: '2px',
        borderRadius: '10px'
    }
    return (
        <div>
            <h1>Some Contents</h1>
            <div style={contentStyle}>
                <h3>Product Name: {props.name}</h3>
                <p>Price: {props.price}</p>
                <button> Bid the price</button>
            </div>
        </div>
    );
};

export default Contents;