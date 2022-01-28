import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const user = useContext(AuthContext).user;
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route exact path='/' element={user? <Home/> : <Login/>} />
          <Route path='/login' element={user? <Navigate to="/"/> : <Login/>} />
          <Route path='/register' element={user? <Navigate to="/"/> : <Register/>}/>
          <Route path='/profile/:username' element={<Profile/>} />
        </Routes>
    </Router>
  );
}

export default App;
