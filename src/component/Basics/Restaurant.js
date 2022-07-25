import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElm) => {
      return curElm.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);

  const filteritem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const newList = Menu.filter((curElm) => {
      return curElm.category === category;
    });
    setMenuData(newList);
  };
  return (
    <>
      <Navbar filteritem={filteritem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
