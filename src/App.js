import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./component/screen/Main";
import React from "react";
import Catering from "./component/screen/pages/Catering";
import GuestTaffic from "./component/screen/pages/GuestTaffic";
import Gifts from "./component/screen/pages/Gifts";
import Account from "./component/screen/pages/Account";
import Wallet from "./component/screen/pages/Wallet";
import Help from "./component/screen/pages/Help";
// import Pagenot from "./component/screen/pages/Pagenot";
import GuestListPage from "./component/screen/pages/GuestListPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/catering" element={<Catering />} />
        </Routes>
        <Routes>
          <Route path="/catering" element={<Catering />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<GuestListPage />} />
        </Routes>
        <Routes>
          <Route path="/guestTaffic" element={<GuestTaffic />} />
        </Routes>
        <Routes>
          <Route path="/gifts" element={<Gifts />} />
        </Routes>
        <Routes>
          <Route path="/account" element={<Account />} />
        </Routes>
        <Routes>
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
        <Routes>
          <Route path="/help" element={<Help />} />
        </Routes>
        {/* <Routes>
          <Route path="*" element={<Pagenot />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;