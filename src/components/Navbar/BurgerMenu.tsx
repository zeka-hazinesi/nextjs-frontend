import { useUser, useUserStore } from "@/store";
import { supabase } from "@/supabase";
import React, { useState } from "react";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const setUser = useUserStore((state: any) => state.setUser);
  const { user } = useUser();


  const handleOpenMenu = () => {
    setOpen(!open);
  };
  
  const signIn = async() => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if(!error) setUser(null);
  }

  return (
    <div
      id="burgerMenu"
      className="relative flex flex-col justify-between w-[40px] h-[40px] bg-[#000000] mr-16"
      onClick={handleOpenMenu}
    >
      <div
        id="bar1"
        className="w-[40px] h-[4px] bg-white rounded-sm mt-2"
      ></div>
      <div id="bar2" className="w-[40px] h-[4px] bg-white rounded-sm"></div>
      <div
        id="bar3"
        className="w-[40px] h-[4px] bg-white rounded-sm mb-2"
      ></div>
      {open && (
        <div
          id="dropdownMenu"
          className="absolute top-[48px] left-1/3 transform -translate-x-1/2 w-[180px] bg-white shadow-lg z-10"
        >
          {/* Hier kannst du den Inhalt deines Dropdown-Menüs platzieren */}
          <ul>
          {user ? (
            <>
              <li className="text-center">{user.email}</li>
              <li className="text-center" onClick={signOut}>Sign Out</li></>
            ) : (
              <li className="text-center" onClick={signIn}>Sign in</li>
            )}            
          </ul>
        </div>
      )}
      <div
        id="overlay"
        className={`fixed top-0 left-0 w-full h-full transition-opacity duration-300 ${
          open ? "opacity-50" : "opacity-0 pointer-events-none z-5"
        }`}
        onClick={handleOpenMenu}
      ></div>
    </div>
  );
};

export default BurgerMenu;
