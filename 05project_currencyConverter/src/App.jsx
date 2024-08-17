import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")


  const currencyInfo = useCurrencyInfo(from)
  let options;
  if(currencyInfo){
   options = Object.keys(currencyInfo)
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div>
        <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url('currency-bg.jpg')` }}>
          <div className='w-full'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-xl p-5 backdrop-blur-sm bg-white/30'>
              <h2 className='font-semibold text-white text-center my-2 pb-2 text-xl'>
                Currency converter
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert()
                }}>
                <div className='w-full mb-1'>
                  <InputBox label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setAmount(amount)}
                    selectCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}

                  />

                </div>

                <div className='relative w-full h-0.5'>
                  <button type='button'
                    className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-xl bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5'
                    onClick={swap}
                  >
                    Swap
                  </button>
                </div>

                <div className='w-full mt-1 mb-4'>
                  <InputBox label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                  />


                </div>

                <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl'>
                  Covert {from.toUpperCase()} To {to.toUpperCase()}

                </button>



              </form>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
