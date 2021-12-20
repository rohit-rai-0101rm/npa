import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/User/userSlice";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const user=useSelector(selectUser)
    console.log(user)
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;