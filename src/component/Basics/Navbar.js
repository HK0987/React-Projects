import React from "react";

const Navbar = ({ filteritem, menuList }) => {
  return (
    <>
      <nav className="nav">
        <div className="nav-div">
          {menuList.map((curElm) => {
            return (
              <button className="nav-btn" onClick={() => filteritem(curElm)}>
                {curElm}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
