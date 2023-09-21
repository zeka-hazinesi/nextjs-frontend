"use client";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./dropdown";
import Modal from "./githubmodal";
import UpgradeModal from "./upgrademodal";
import { useUser } from "@/store";

const NavigationBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Füge einen Event-Listener für das Scrollen hinzu
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Entferne den Event-Listener, wenn die Komponente unmontiert wird
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const imageEditor = document.getElementById("image-editor");

    if(imageEditor != null){
    if (isModalOpen) {
      imageEditor.style.pointerEvents = "none";
    } else {
      imageEditor.style.pointerEvents = "auto";
    }
  }
  });

  async function checkUser() {
    const user = await supabase.auth.getUser();
    setUser(user);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const openModal = () => {
    closeDropdown(); // Dropdown-Menü schließen
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openUpgradeModal = () => {
    closeDropdown();
    setUpgradeModalOpen(true);
  }
  
  const closeUpgradeModal = () => {
    setUpgradeModalOpen(false);
  }

  return (
    <nav
      className={`${
        isScrolled ? "bg-blue-500" : "bg-transparent"
      } z-10 p-4 flex justify-between items-center fixed top-0 w-full transition-all duration-300`}
    >
      <div className="flex flex-row text-white text-xl font-semibold">
        <img
          src="./ideogram.jpeg"
          width={100}
          height={100}
          style={{
            borderRadius: "15px",
            marginRight: "15px",
          }}
        />
        <button
          onClick={scrollToTop}
          className="cursor-pointer focus:outline-none"
          style={{ fontSize: "36px" }}
        >
          ArchiDraw
        </button>
      </div>
      <ul className="flex space-x-6 mr-6">
        <li>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-white cursor-pointer"
          >
            Pricing
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-white cursor-pointer"
          >
            FAQ
          </button>
        </li>
        <li>
          <button
            onClick={toggleDropdown}
            className="text-xl text-white cursor-pointer"
          >
            ⚙
          </button>
          {isDropdownOpen && <DropdownMenu openModal={openModal} openUpgradeModal={openUpgradeModal} user={user} />}
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <UpgradeModal isOpen={isUpgradeModalOpen} onClose={closeUpgradeModal} />
    </nav>
  );
};

export default NavigationBar;
