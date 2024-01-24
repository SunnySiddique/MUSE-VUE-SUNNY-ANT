import { Card } from "antd";
import React, { useState } from "react";
import "./Cards.css";

const Contexts = React.createContext()

const Cards = ({ firstTitle, secondTitle, thridTitle, icon, color }) => {
  const [colors, setColors] = useState("blue");

  const hanldeColor = (e) => {
    setColors(e.target.value)
  }

  return (
    <Contexts.Provider value={{color, setColors, hanldeColor}}>
      <Card className="box-shadow">
        <div className="Sales-main">
          <div className="sales-content" style={{padding: "24px"}}>
            <h3>{firstTitle}</h3>
            <span>{secondTitle}</span>
            <small style={{ color }}>{thridTitle}</small>
          </div>
          <div className="icons" >
            <span style={{backgroundColor: colors}}> {icon}</span>
          </div>
        </div>
      </Card>
    </Contexts.Provider>
  );
};

export default Cards;
