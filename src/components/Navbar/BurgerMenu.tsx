import React from "react";

const BurgerMenu = () => {
    return(
        <div
      id="burgerMenu"
      className="flex flex-col justify-between w-[40px] h-[40px] bg-[#000000]">
      <div
        id="bar1"
        className="w-[40px] h-[4px] bg-white rounded-sm mt-2"></div>
      <div id="bar2" className="w-[40px] h-[4px] bg-white rounded-sm"></div>
      <div
        id="bar3"
        className="w-[40px] h-[4px] bg-white rounded-sm mb-2"></div>
    </div>
    )
};

export default BurgerMenu;