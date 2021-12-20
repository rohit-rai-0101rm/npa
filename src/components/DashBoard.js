import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/User/userSlice";
import { logoutUser } from "../service/magic";
import { selectUser } from "../features/User/userSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);

  const history = useHistory();
  const handleLogOut = async () => {
    try {
      await logoutUser();
      history.replace("/");
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-2">
      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={handleLogOut}>
          Sign Out
        </Button>
      </div>
      {
          user? <h1 className="h1">User: {user.user}</h1>:

          <h1 className="h1">fuck off</h1>
        }
    </div>
  );
};
export default Dashboard;
