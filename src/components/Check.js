import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/User/userSlice";

const Check = () => {
    const user=useSelector(selectUser)
    console.log(user)
    return (
        <div>
{            user?<h1>{user.user}</h1>:<h1>"fuck off"</h1>


}       
 </div>
    )
}

export default Check
