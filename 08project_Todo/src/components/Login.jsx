import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(username, password)
    }

    return (
        <div className="bg-blue-50 rounded-xl h-56 w-auto md:m-auto grid items-center shadow-md shadow-black md:h-56 md:w-96 justify-center m-20">
            <h2 className="text-2xl m-5 ">Login</h2>
            <div className="grid items-center justify-center">
            <input type="text"
                value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username.."
                className="border mb-2 w-56 text-black rounded-lg border-blue-200 focus:outline-none px-2 py-1.5" />

            <input type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password.."
                className="border mb-2 w-56 text-black rounded-lg border-blue-200 focus:outline-none px-2 py-1.5" />
            </div>

            <div>
                <button onClick={handleSubmit}
                    className="bg-blue-400 px-5 py-2 rounded-xl hover:bg-blue-500 mb-3">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Login