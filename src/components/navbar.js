'use client'
import React, {useState} from 'react';
import DropdownMenu from './dropdown';
import Modal from './githubmodal';

const NavigationBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
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
            onClick={() => scrollToSection('use-cases-section')}
            className="text-white cursor-pointer"
          >
            Use Cases
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('pricing-section')}
            className="text-white cursor-pointer"
          >
            Pricing
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('faq-section')}
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
        {isDropdownOpen && (
          <DropdownMenu openModal={openModal} />
        )}
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default NavigationBar;
