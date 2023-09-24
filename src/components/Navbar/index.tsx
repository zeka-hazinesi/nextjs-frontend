"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/components/Navbar/Logo";
import BurgerMenu from "@/components/Navbar/BurgerMenu";

const NavBar = () => {
  return (
    <div
      id="header"
      className="sticky top-0 left-0 z-50 flex flex-row items-center justify-center w-full h-[60px] bg-[#3B3B3B] p-2">
      <div className="flex flex-row items-center justify-between w-[1920px] max-w-full max-h-full">
        {/* logo */}
        <Logo />
        {/* burgermenu */}
        <BurgerMenu />
      </div>
    </div>
  );
};

export default NavBar;
