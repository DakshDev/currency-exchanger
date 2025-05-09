import axios from "axios";
import { useEffect, useState } from "react";

function useCurrencyApi(currency){
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then(res => setData(res.data[currency]))
  }, [currency])
  return data;
}

export default useCurrencyApi;