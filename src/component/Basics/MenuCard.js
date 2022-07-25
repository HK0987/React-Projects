import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      {menuData.map((curElm) => {
        const { id, name, image, category, description } = curElm;

        return (
          <>
            <div className="div" key={id}>
              <div className="card ">
                <div className="number-circle">
                  <span className="card-number">{id}</span>
                </div>
                <span className="card-heading">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-info">{description}</span>
                <img className="image" src={image} alt="Pic of food" />
                <button className="button">Order Now</button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MenuCard;
