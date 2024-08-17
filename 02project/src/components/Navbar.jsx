import React from "react";

function Navbar(){
    return(
        <nav>
            <div className="flex justify-between items-center m-7">
                <div className="">
                    <img src="owl-bg.png" alt="" className="h-14 w-auto cursor-pointer" />
                </div>
                <div className="ml-28 flex items-center ">
                    <ul className="flex gap-6 font-semibold text-xl">
                        <li className="cursor-pointer hover:text-blue-400">Home</li>
                        <li className="cursor-pointer hover:text-blue-400">About</li>
                        <li className="cursor-pointer hover:text-blue-400">Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar