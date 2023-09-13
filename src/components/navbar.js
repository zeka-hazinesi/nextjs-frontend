"use client";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./dropdown";
import Modal from "./githubmodal";
import { supabase } from "@/lib/supabase";

const NavigationBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    });
  }, []);

  useEffect(() => {
    // Füge einen Event-Listener für das Scrollen hinzu
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

  

    window.addEventListener('scroll', handleScroll);

    // Entferne den Event-Listener, wenn die Komponente unmontiert wird
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const imageEditor = document.getElementById("image-editor");

    if(isModalOpen && imageEditor != null){
      imageEditor.style.pointerEvents = 'none';
      imageEditor.style.zIndex = -999;
    } else {
      imageEditor.style.pointerEvents = 'auto';
      imageEditor.style.zIndex = 1;
    }
  })

  async function checkUser() {
    const user = await supabase.auth.getUser();
    console.log(user);
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


  return (
    <nav className={`${
      isScrolled ? 'bg-blue-500' : 'bg-transparent'
    } p-4 flex justify-between items-center fixed top-0 w-full transition-all duration-300`}>
      <div className="text-white text-xl font-semibold">
        <button
          onClick={scrollToTop}
          className="cursor-pointer focus:outline-none"
        >
          NextJS
        </button>
      </div>
      <ul className="flex space-x-6 mr-6">
        <li>
          <button
            onClick={() => scrollToSection("use-cases-section")}
            className="text-white cursor-pointer"
          >
            Use Cases
          </button>
        </li>
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
          {isDropdownOpen && <DropdownMenu openModal={openModal} user={user} />}
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default NavigationBar;
