import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {id} = useParams();
    return(
        <div className="bg-orange-200 text-black text-2xl m-10 p-4 text-center">
            User: {id}
        </div>
    )
}

export default User;