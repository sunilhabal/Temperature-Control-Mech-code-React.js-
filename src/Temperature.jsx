import { useState } from "react";
import "./Temperature.css";
import mobile from "./assets/mobile.png";

const Temperature = () => {
  const [temp, setTemp] = useState(12);

  const [color, setColor] = useState("#34495e");
  const [value, setValue] = useState("COLD");

  const handlePlus = () => {
    setTemp(temp+1);
    if(temp>=18) {
      setColor("red");
      setValue("HOT");
    }
  };


  const handleMin = () => {
    setTemp(temp - 1);
    if(temp<=19) {
      setColor("#34495e");
      setValue("COLD");
    }
    
  };

  return (
    <div className="temp">
      <h1 className="head">Temperature-Control</h1>
      <div className="temp-img">
        <img src={mobile} alt="mobilepic" style={{ width: "100%" }} />
      </div>
      <div className="temp-display">
        <div className="actual-temp" style={{ background: color }}>
          {temp}°C
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"10px", fontSize:"20px", fontWeight:"800"}}>
          {value}
        </div>
        <div className="temp-btn">
          <button onClick={handlePlus}>+</button>
          <button onClick={handleMin}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
