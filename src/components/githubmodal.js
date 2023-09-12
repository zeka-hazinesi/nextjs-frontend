'use client';
import React from 'react';
import { supabase } from '@/lib/supabase';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
    >
      {/* Hintergrund mit Transparenz */}
      <div className="modal-bg fixed inset-0 bg-gray-800 opacity-50"
        onClick={onClose}></div>
      {/* Modal-Container mit erhöhter Mindesthöhe */}
      <div className="modal-content bg-white p-4 rounded shadow-md relative text-center">
        <h2 className="text-xl font-semibold mb-4">Anmelden mit GitHub</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={signInWithGitHub}
        >
          GitHub anmelden
        </button>
      </div>
    </div>
  );
};

export default Modal;

