import { useUser, useUserStore } from "@/store";
import { supabase } from "@/supabase";
import React, { useState } from "react";
import UserModal from "../UserModal";
import UpgradeModal from "../UpgradeModal";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const setUser = useUserStore((state: any) => state.setUser);
  const { user } = useUser();

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openUpgrade = () => {
    setUpgradeOpen(true);
  };

  const closeUpgrade = () => {
    setUpgradeOpen(false);
  };

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) setUser(null);
  };

  console.log(user);

  return (
    <div
      id="burgerMenu"
      className="relative flex flex-col justify-between w-[40px] h-[40px] bg-[#3B3B3B] mr-4 cursor-pointer"
      onClick={handleOpenMenu}>
      <div
        id="bar1"
        className="w-[40px] h-[4px] bg-[#f4f2f0] rounded-sm mt-2"></div>
      <div id="bar2" className="w-[40px] h-[4px] bg-[#f4f2f0] rounded-sm"></div>
      <div
        id="bar3"
        className="w-[40px] h-[4px] bg-[#f4f2f0] rounded-sm mb-2"></div>
      {open && (
        <div
          id="dropdownMenu"
          className="absolute top-[48px] left-1/3 transform -translate-x-1/2 w-[90px] bg-[#f4f2f0] shadow-lg z-10">
          {/* Hier kannst du den Inhalt deines Dropdown-Menüs platzieren */}
          <ul>
            {user ? (
              <>
                <li className="text-center" onClick={openModal}>
                  {user.email}
                </li>
                {!subscribed && (
                  <li className="text-center" onClick={openUpgrade}>
                    Upgrade to Pro
                  </li>
                )}
                <li className="text-center" onClick={signOut}>
                  Sign Out
                </li>
              </>
            ) : (
              <li className="text-center" onClick={signIn}>
                Sign in
              </li>
            )}
          </ul>
        </div>
      )}
      <UserModal user={user} isOpen={modalOpen} closeModal={closeModal} />
      <UpgradeModal
        user={user}
        isOpen={upgradeOpen}
        closeModal={closeUpgrade}
      />
      <div
        id="overlay"
        className={`fixed top-0 left-0 w-full h-full transition-opacity duration-300 ${
          open ? "opacity-50" : "opacity-0 pointer-events-none z-5"
        }`}
        onClick={handleOpenMenu}></div>
    </div>
  );
};

export default BurgerMenu;
