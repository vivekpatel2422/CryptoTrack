import React from "react";
import "./Card.css";

function Card() {
    return (
        <div className="coin">
            <div className="coinHeadDiv">
                <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="logo" className="coinLogo" />
                <h1 className="coinName">Bitcoin</h1>
                <p className="coinSymbol">BTC</p>
            </div>
            <div className="coinPriceDiv">
                <p className="coinPrice">$5</p>
                <p className="coinPriceChange">+2%</p>
            </div>
            <p className="coinMarketCap">Market Cap: $100000</p>
            <p className="coinMarketCapRank">Market Cap Rank: 1</p>
            <p className="coinVolume">24H Volume: $2500</p>
            <p className="coinHigh">24H High: $6</p>
            <p className="coinLow">24H Low: $4</p>
            <p className="coinCirculatingSupply">Circulating Supply: 15000</p>
        </div>
    );
};

export default Card;