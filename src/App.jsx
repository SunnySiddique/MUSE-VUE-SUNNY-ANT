import React, { useState } from "react";
import SideMenu from "./Components/SideMenu/SideMenu";

export const Context = React.createContext();


function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <Context.Provider value={{drawerVisible, setDrawerVisible}}>
      <SideMenu drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
    </Context.Provider>
  )
}

export default App
