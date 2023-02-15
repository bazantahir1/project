import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Component/Home"
import Login from "./Component/Login"
import Chooseus from "./Component/Chooseus"
import Classes from "./Component/Classes"
import Footer from "./Component/Footer"

function App() {
  return (
  
    <Router>
    <Home/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/classes" element={<Classes/>}/>
      <Route path="/chooseus" element={<Chooseus/>}/>
    </Routes>
    <Footer/>
    </Router>

  );
}

export default App;
