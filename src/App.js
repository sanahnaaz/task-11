import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./component/screen/Main";
import React from "react";
import Catering from "./component/screen/pages/Catering";
import Profile from "./component/screen/Profile";
import GuestTaffic from "./component/screen/pages/GuestTaffic";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  exact path="/" element={<Main/>}/>
        </Routes>
        <Routes>
          <Route path="/graph" element={<GuestTaffic />}/>
        </Routes>
        <Routes>
          <Route path="/category" element={<Catering/>}/>
        </Routes>
        <Routes>
          <Route path="/guest-list" element={<Profile />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;