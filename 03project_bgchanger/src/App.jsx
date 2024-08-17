import { useState } from 'react'


function App() {
  const [bgcolor, setbgcolor] = useState("beige")

  return (
    <>
      <div className="w-full h-screen justify-center duration-200" style={{backgroundColor: bgcolor}}> 
        <div className="flex flex-wrap justify-center items-center bottom-12 px-2 ">
          <div className="flex flex-wrap m-10 mt-36 place-items-center  bg-white rounded-xl justify-center py-2 px-3 items-center gap-4 shadow-md shadow-black">
            <button className=" rounded-xl font-semibold shadow-md shadow-black px-4 py-2" style={{backgroundColor: "#ff2c2c"}} onClick={() => setbgcolor("#ff2c2c")}>
              Red
            </button>
            <button className="justify-center rounded-xl text-white font-semibold px-4 py-2 shadow-md shadow-black" style={{backgroundColor: "#02ccfe"}} onClick={() => setbgcolor("#02ccfe")}>
              Blue
            </button>
            <button className="justify-center rounded-xl px-4 py-2 text-white font-semibold shadow-md shadow-black " style={{backgroundColor: "black"}} onClick={() => setbgcolor("black")}>
              Black
            </button>
            <button className="justify-center rounded-xl px-4 py-2 font-semibold shadow-md shadow-black" style={{backgroundColor: "#CBA2C9"}} onClick={() => setbgcolor("#CBA2C9")}>
              Lilac
            </button>
            <button className="justify-center rounded-xl px-4 py-2 font-semibold shadow-md shadow-black " style={{backgroundColor: "#311465"}} onClick={() => setbgcolor("#311465")}>
              Purple
            </button>
            <button className="justify-center rounded-xl px-4 py-2 font-semibold shadow-md shadow-black" style={{backgroundColor: "#FDB9C8"}} onClick={() => setbgcolor("#FDB9C8")}>
              Pink
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
