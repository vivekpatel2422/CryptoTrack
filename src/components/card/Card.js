import React from "react";

function Card() {
    return (
        <div className="coin">
            <div className="coinNameDiv">
                <h1 className="coinName">Name</h1>
                <p className="coinSymbol">Symbol</p>
            </div>
            <p className="coinPrice">$5</p>
            <p className="coinMarketcap">Market Cap: $100000</p>
            <p className="coinVolume">24H Volume: $2500</p>
            <p className="coinHigh">24H High: $6</p>
            <p className="coinLow">24H Low: $4</p>
            <div className="priceChangeDiv">
                <p className="priceChange">2%</p>
            </div>
        </div>
    );
};

export default Card;