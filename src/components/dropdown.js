import React from 'react';

const DropdownMenu = ({openModal}) => {
  return (
    <div className="absolute top-14 right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg">
      <ul>
        <li>
          <button
            onClick={openModal}
            className="px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            Sign In
          </button>
        </li>
        <li>
          <button
            onClick={() => {/* Füge hier die Logik für "Upgrade" hinzu */}}
            className="px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            Upgrade
          </button>
        </li>
        <li>
          <button
            onClick={() => {/* Füge hier die Logik für "Contact" hinzu */}}
            className="px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
