import React from "react";

function ContactBody() {
    return (
        <div className="grid grid-cols-2 m-10">
            <div >
                <div className="grid grid-cols-2 gap-5 ">
                    <button className="bg-blue-300 rounded-xl font-medium px-2 py-2 hover:bg-blue-400" >VIA SUPPORT CHAT</button>
                    <button className="bg-blue-300 font-medium rounded-xl  hover:bg-blue-400">VIA CALL</button>

                </div>
                <div className="mt-6 grid">
                    <button className="bg-blue-900 rounded-xl font-semibold text-white py-2">
                        VIA EMAIL FORM
                    </button>
                </div>
                <div className="grid mt-5 gap-4">
                    <label>
                    <input type="text" className="border-black border-2 rounded-lg w-full py-1.5" placeholder="Your Name.." />
                    </label>

                    <input type="email" className="border-black border-2 rounded-lg w-full py-1.5" placeholder="Enter your email.."  />

                    <textarea className="border-black border-2 rounded-lg w-full py-1.5" placeholder="Describe your issue." rows={6} cols={30} />

                </div>

                <div>
                    <button className="mt-5  bg-blue-300 px-10 py-2 font-semibold rounded-xl hover:bg-blue-400">
                        Submit
                    </button>
                </div>
            </div>
            <div>
                <img src="contact-us.jpg" alt="" className="h-full w-auto" />
            </div>
        </div>
    )
}

export default ContactBody