import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisable = false,
    currencyDisable = false

}) {

    return (
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2">
                <label className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input type="number"
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Enter amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />


            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">
                    Currency Type
                </p>
                <select className="rounded-xl px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}>

                    {currencyOptions.map((currency) => (
                        <option value={currency} key={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>

            </div>

        </div>
    )
}

export default InputBox