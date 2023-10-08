import { useState, useEffect } from "react";
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitCoinRates() {

  const [currency, setCurrency] = useState(currencies[0]);
  // const [value, setValue] = useState(0)
  const value = useValue(currency)

  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  useEffect(() => {
    let ignore = false;
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then(response => response.json())
      .then(data => {
        const currentValue = data.bitcoin[currency.toLowerCase()]
        if (!ignore) setValue(currentValue)

        return () => {
          ignore = true; // ignore now invalid fetch results
          console.log('cleanup effect');
        };

      }, [currency]);
  })
  const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <h4>{value}</h4>
    </div>
  )
}

// custom hook to manage API call to retreive value
function useValue(currency) {
    const [value, setValue] = useState(0)
    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    useEffect(() => {
      let ignore = false;
      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
        .then(response => response.json())
        .then(data => {
          const currentValue = data.bitcoin[currency.toLowerCase()]
          if (!ignore) setValue(currentValue)

          return () => {
            ignore = true; // ignore now invalid fetch results
            console.log('cleanup effect');
          };

        }, [currency]);
    })
  return value
}


export default BitCoinRates;