import React from "react";

function Body() {
    return (
        <main className="m-20 p-10">
            <div className="grid grid-cols-2 w-auto h-screen">
                <div>
                    <h1 className="font-bold text-6xl">YOUR FEET DESERVE THE BEST</h1>
                    <p className="mt-5 font-semibold hidden sm:grid">YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH YOUR SHOES. CHECK OUT OUR WEBSITE AND CHOOSE WHAT YOU LOVE THE MOST, THANKS FOR VISITING</p>

                    <div>
                        <button className="bg-red-800 px-3 py-2 rounded-xl m-4 text-white hover:py-2.5 hover:px-3.5">Shop Now</button>
                        <button className= "bg-red-800 px-3 py-2 rounded-xl m-4 text-white hover:py-2.5 hover:px-3.5">Category</button>
                    </div>

                    <div className="flex">
                        <p className="font-semibold mt-3 flex justify-center ">Also Available On</p>

                        <div className="flex">
                            <img src="amazon.jpeg" alt="" className="h-10 w-auto m-3 flex" />
                        </div>
                    </div>
                </div>
                <img src="shoes.png" alt="" className="hidden sm:grid h-auto w-max " />
            </div>
        </main>
    )
}

export default Body