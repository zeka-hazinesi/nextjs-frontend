"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/components/Navbar/Logo";
import BurgerMenu from "@/components/Navbar/BurgerMenu";

const NavBar = () => {
  return (
    <div
      id="header"
      className="sticky top-0 z-50 flex flex-row items-center justify-between w-full h-[60px] bg-[#3B3B3B] p-2">
      {/* logo */}
      <Logo />
      {/* burgermenu */}
      <BurgerMenu />
    </div>
  );
};

export default NavBar;
