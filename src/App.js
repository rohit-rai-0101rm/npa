import React, { useState, useEffect } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { UserContext } from './context/userContext';
import { checkUser } from './service/magic';
import Authenticate from './components/Authenticate';
import Dashboard from './components/DashBoard';
import Check from './components/Check'
import PrivateRoute from './components/PrivateRoute';
const App = () => {
  const [user, setUser] = useState({ isLoggedIn: null, email: '' });
  const [loading, setLoading] = useState();
  useEffect(() => {
    const validateUser = async () => {
      setLoading(true);
      try {
        await checkUser(setUser);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    validateUser();
  }, [user.isLoggedIn]);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <UserContext.Provider value={user}>
      <Router>
        {user.isLoggedIn && <Redirect to={{ pathname: '/dashboard' }} />}
        <Switch>
          <Route exact path="/" component={Authenticate} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/check" component={Check} />

        </Switch>
      </Router>
    </UserContext.Provider>
  );
};
export default App;