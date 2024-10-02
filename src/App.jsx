import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideMenu from "./Components/SideMenu/SideMenu";
import LogIn from "./Components/SignInMain/Login/Login";
import SignIn from "./Components/SignInMain/SignUp/SignUp";

export const Context = React.createContext();

function App() {
  const location = useLocation();

  const excludedPaths = ["/signin", "/"];

  const showSideMenu = !excludedPaths.includes(location.pathname);

  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <Context.Provider value={{ drawerVisible, setDrawerVisible }}>
      {showSideMenu && (
        <SideMenu
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}
        />
      )}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
