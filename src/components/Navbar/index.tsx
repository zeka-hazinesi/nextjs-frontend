"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Navbar/Logo";
import BurgerMenu from "@/components/Navbar/BurgerMenu";

const NavBar = () => {
  return(
    <div
    id="header"
    className="sticky top-0 z-50 flex flex-row items-center justify-between w-full h-[60px] bg-black p-2">
    {/* logo */}
    <Logo />
    <div id="navbar-container" className="flex flex-row justify-center items-center">
    <div id="pricing" className="text-white mr-12 text-xl font-bold">
    <Link href={"/pricing"} >Pricing</Link>
    </div>
    
    {/* burgermenu */}
    <BurgerMenu /></div>
  </div>
  )
}

export default NavBar;