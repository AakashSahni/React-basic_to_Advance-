
import { useState  } from 'react'
// function InputBox
import InputBox from './components/InputBox' 
// hooks
import useCurrencyInfo from './assets/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const [convertedAmount, setConvertedAmount] = useState(0) //result convert usd into inr

  // use hooks custom
  const currencyInfo = useCurrencyInfo(from)  //  (data) =  return (usd)

  const options = Object.keys(currencyInfo)  // all keys nikal from usd's data

  const swap = ()=>{

    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  // result of Curreny Convert
  const convert = ()=>{
    setConvertedAmount( amount * currencyInfo[to] ) // usd : { inr : 87.010}
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
         style={{
                   backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
               }}
    >

        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

           
                <form onSubmit={(e) => { e.preventDefault(); convert() }} >

                    <div className="w-full mb-1">

                        <InputBox
                            label="From"
                            amount = {amount}
                            currencyOptions = {options}
                            onCurrencyChange = {(currency)=> setAmount(amount) }
                            selectCurrency = {from}   
                            onAmountChange={(amount) => setAmount(amount)}                         
                        />

                    </div>

                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>

                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertedAmount}
                            currencyOptions = {options}
                            onCurrencyChange = { (currency) => setTo(currency)}
                            selectCurrency = {to}
                            amountDisable    //true
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);

}

export default App
