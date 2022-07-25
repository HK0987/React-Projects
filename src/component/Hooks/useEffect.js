import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });


  return (
    <>
      <div className="div-btn">
        <p className="para">{myNum}</p>
        <div className="btn1" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
      </div>
    </>
  );
};

export default UseEffect;
