import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/"> <Home></Home> </Route>
          <Route exact path="/home"><Home></Home></Route>
          <PrivateRoute path="/appoinment"> <Appoinment></Appoinment> </PrivateRoute>
          <PrivateRoute  path="/dashboard"> <Dashboard></Dashboard> </PrivateRoute>
          <Route exact path="/login"> <Login></Login> </Route>
          <Route exact path="/register"> <Register></Register> </Route>
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
