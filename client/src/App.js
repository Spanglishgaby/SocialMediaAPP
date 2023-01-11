import {useState,useEffect} from "react";
import Home from "./components/hero/Home";
// import { BrowserRouter } from 'react-router-dom';
//import Dashboard from "./components/Profile/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [user, setUser] = useState({});
  const updateUser = (user) => setUser(user);
useEffect(() => {
  // auto-login
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

 return (
  <>
    <Home user={user} updateUser={updateUser} />
  </>
)

}

export default App;
