import React from "react";

function About() {
    return (
        <div className="container m-auto text-gray-800 md:px-12 xl:px-6">
            <div className="md:flex md:gap-6 space-y-6 lg:items-center">
                <div className="md:5/12 lg:w-5/12">
                    <img src="about-page.jpg" alt="image 3" className="w-auto  sm:h-64 h-36 sm:m-20 m-10 cursor-pointer shadow-md shadow-black " />
                </div>

                <div className="md:w-7/12 lg:w-6/12 m-10">
                    <h3 className="text-2xl text-black/50 font-semibold md:text-3xl ">
                        <span className="text-black font-bold text-3xl">Escapier</span> is your one-stop destination for unforgettable adventures. 
                    </h3>

                    <p className="text-xl md:text-2xl text-gray-600 mb-10">
                    We're passionate about curating unique experiences to inspire your wanderlust. Discover a world of possibilities with Escapier. From serene escapes to thrilling expeditions, let us be your travel companion.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default About