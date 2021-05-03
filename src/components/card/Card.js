import React from "react";
import "./Card.css";

const Card = ({ image, name, symbol, price, priceChange, marketCap, marketCapRank, volume, high, low, circulatingSupply }) => {
    return (
        <div className="coin">
            <div className="coinHeadDiv">
                <img src={image} alt={`${name}`} className="coinLogo" />
                <h1 className="coinName">{name}</h1>
                <p className="coinSymbol">{symbol}</p>
            </div>
            <div className="coinPriceDiv">
                <p className="coinPrice">${price.toLocaleString()} CAD</p>
                {priceChange > 0 ? (
                    <p className="coinPriceChangeUp">+{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className="coinPriceChangeDown">{priceChange.toFixed(2)}%</p>
                )}
            </div>
            <p className="coinMarketCap">Market Cap: ${marketCap.toLocaleString()}</p>
            <p className="coinMarketCapRank">Market Cap Rank: {marketCapRank.toLocaleString()}</p>
            <p className="coinVolume">24H Volume: ${volume.toLocaleString()}</p>
            <p className="coinHigh">24H High: ${high.toLocaleString()}</p>
            <p className="coinLow">24H Low: ${low.toLocaleString()}</p>
            <p className="coinCirculatingSupply">Circulating Supply: {circulatingSupply.toLocaleString()}</p>
        </div>
    );
};

export default Card;