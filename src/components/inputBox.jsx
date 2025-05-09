import { useId} from "react";


function InputBox({
  label,
  currencyKeys = [],
  amount,
  onChangeAmount,
  onCurrencyChange,
  selectedCurrency,
  inputDisable = false
}){

  const id = useId();
  
  return (
    <>
      <div className="p-4 rounded-md bg-[#626262] w-full m-auto flex items-center justify-between">
        <div className="grid gap-4">
          <label htmlFor={id} className="text-white">{label}</label>
          <input 
            className="px-4 py-2"
            id={id}
            type="number"
            value={amount}
            onChange={(e) => onChangeAmount(parseInt(e.target.value))}
            disabled={inputDisable}
          />
        </div>
        <div className="grid gap-4">
          <label htmlFor={id} className="text-white">Currency</label>
          <select
            id={id}
            className="px-4 py-2"
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {currencyKeys.map((currency, index) => {
              return <option key={index} value={currency}>{currency.toUpperCase()}</option>
            })}
          </select>
        </div>
      </div>
    </>
  )
}


export default InputBox;