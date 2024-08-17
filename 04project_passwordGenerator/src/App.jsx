import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "~!@#$%^&*`+-"
    }

    for (let i = 0; i <= length; i++) {
      let element = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(element);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect( () => {
    passwordGenerator()
  },[passwordGenerator, numberAllowed, charAllowed])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-xl px-3 py-2 bg-pink-300 shadow-black mt-36'>
        <p className="text-white font-semibold text-2xl p-2 ">Password Generator</p>
        <div className="flex overflow-hidden items-center py-2 mb-4">
          <input type="text"
            className="rounded-xl outline-none mt-5 m-2 py-2 w-full justify-start focus:ring-blue-100 focus:ring-1 "
            placeholder="Password.."
            value={password}
            readOnly
          />

          <button
            className="text-white rounded-xl bg-pink-700 hover:bg-pink-800 py-2.5 px-3 mt-2 items-center  shrink-0">
            Copy

          </button>

        </div>

        <div className="flex text-lg gap-x-2 items-center">
          <div className="flex items-center gap-x-2">
            <input type="range"
              className='cursor-pointer'
              value={length}
              min={8}
              max={30}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-white font-semibold'>Length: {length}</label>

          </div>
          <div className="flex items-center gap-x-2">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed( (prev) => !prev )
            }}
            />
            <label htmlFor='numberInput' className='text-white font-semibold '>Numbers</label>

          </div>
          <div className="flex items-center gap-x-2">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed( (prev) => !prev )
            }}
            
            />
            <label htmlFor='characterInput' className='text-white font-semibold'>Characters</label>

          </div>

        </div>


      </div>
    </>
  )
}

export default App
