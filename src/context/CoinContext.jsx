import React, { useEffect, useState, useCallback } from 'react';
// import { CoinContext } from '../components/CoinContext';
import { createContext } from 'react';

export const CoinContext = createContext();


const CoinContextProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });

  const fetchAllCoin = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
           'x-cg-demo-api-key': 'CG-as6TPrtoPorrwH8xqsi8jhov',
          },
        }
      );
      const data = await response.json();
      setAllCoin(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }, [currency.name]);

  useEffect(() => {
    fetchAllCoin();
  }, [fetchAllCoin]);

  return (
    <CoinContext.Provider value={{ allCoin, currency, setCurrency }}>
      {children}
    </CoinContext.Provider>
  );



};

export default CoinContextProvider;
