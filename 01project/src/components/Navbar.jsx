import React from "react";

function Navbar() {
    return(
        <div>
            <nav className="grid grid-cols-3 place-items-center cursor-pointer mt-3">
                <div className="logo "> 
                    <img src="images.png" alt="" className="h-10 w-auto" />
                    
                </div>

                <ul className="flex gap-4 font-semibold">
                    <li className="text-black hover:text-red-500">Home</li>
                    <li className="hidden sm:flex text-black hover:text-red-500">Location</li>
                    <li className="hidden sm:flex text-black hover:text-red-500">About</li>
                    <li className="hidden sm:flex text-black hover:text-red-500">Contact</li>

                </ul>

                <button className=" hidden sm:flex bg-red-500 rounded-2xl px-3 py-2 hover:bg-red-700 shadow-md  shadow-black ">Login/SignUp</button>
            </nav>
        </div>
    )
} 

export default Navbar;