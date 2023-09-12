'use client';
import React from 'react';
import { supabase } from '@/lib/supabase';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const signupWithGithub = async () => {

    const url = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=http%3A//localhost%3A3000/callback&scope=user`;
    
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
    onClick={onClose}
    >
      {/* Hintergrund mit Transparenz */}
      <div className="modal-bg fixed inset-0 bg-gray-800 opacity-50"></div>
      {/* Modal-Container mit erhöhter Mindesthöhe */}
      <div className="modal-content bg-white p-4 rounded shadow-md relative text-center">
        <h2 className="text-xl font-semibold mb-4">Anmelden mit GitHub</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          GitHub anmelden
        </button>
      </div>
    </div>
  );
};

export default Modal;

