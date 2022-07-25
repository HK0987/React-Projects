import React, { useState } from "react";
import "./style.css";

const UseState = () => {
    const initialData = 0;
    const [myNum, setMyNum]= useState(initialData);
  return (
    <>
      <div className="div-btn">
        <p className="para">{myNum}</p>
        <div className="btn1" onClick={() => setMyNum(myNum+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div className="btn2" onClick={() =>myNum > 0 ? setMyNum(myNum-1) : setMyNum(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div>
    </>
  );
};

export default UseState;
