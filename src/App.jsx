import { useEffect, useState } from 'react'
import useCurrencyApi from './hooks/useCurrencyApi.js'
import InputBox from './components/inputBox.jsx'
import { MdSwapCalls } from "react-icons/md";


function App() {

  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyData = {...useCurrencyApi(fromCurrency)};
  const currencyKeys =  Object.keys(currencyData);
  
  
  const convertAmount = () => {
    setConvertedAmount(amount * currencyData[toCurrency]); 
  }


  const swap = ()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }
  

  return (
    <div className='flex flex-col justify-center items-center w-full mt-10 gap-10'>
      <h1 className='text-4xl font-semibold text-white'>Currency Exchange</h1>
      <div className='bg-[#3f3f3f] rounded-md w-[500px] p-10 flex flex-col justify-start gap-4'>
      <InputBox 
          label="From"
          currencyKeys={currencyKeys}
          amount={amount}
          onChangeAmount={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFromCurrency(currency)}
          selectedCurrency={fromCurrency}
      /> 
      <div className='flex justify-center items-center'>
        <button className='px-8 py-2 bg-blue-600 text-white rounded-md font-semibold active:bg-blue-700 flex items-center justify-center gap-2' onClick={() => swap()}>Swap <MdSwapCalls className='text-xl' /></button>
      </div>
      <InputBox 
          label="To"
          currencyKeys={currencyKeys}
          amount={convertedAmount}
          onChangeAmount={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setToCurrency(currency)}
          selectedCurrency={toCurrency}
          inputDisable={true}
      />
      <div className='flex justify-center'>
        <button onClick={() => convertAmount()} className='px-8 py-2 bg-green-600 text-white rounded-md font-semibold active:bg-green-700'>Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>
      </div>
    </div>
    </div>
  )
}

export default App
