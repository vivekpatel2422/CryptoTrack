import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import Card from "./components/card/Card";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1 className="name"><i className="fas fa-chart-line"></i>CryptoTrack</h1>
      </div>
      <div className="cardContainer">
        {coins.map((coin) => {
          return (
            <Card
              key={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
              marketCapRank={coin.market_cap_rank}
              volume={coin.total_volume}
              high={coin.high_24h}
              low={coin.low_24h}
              circulatingSupply={coin.circulating_supply}
            />
          );
        })}
      </div>
    </div >
  );
}

export default App;