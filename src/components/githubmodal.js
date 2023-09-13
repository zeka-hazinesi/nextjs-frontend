'use client';
import React, {useState, useEffect} from 'react';
import { supabase } from '@/lib/supabase';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    });
  }, []);

  async function checkUser() {
    const user = await supabase.auth.getUser();
    setUser(user);
  }

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    setUser(data.user);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
    >
      {/* Hintergrund mit Transparenz */}
      <div className="modal-bg fixed inset-0 bg-gray-800 opacity-50"
        onClick={onClose}></div>
      {/* Modal-Container mit erhöhter Mindesthöhe */}
      <div className="modal-content bg-white p-4 rounded shadow-md relative text-center">
        {user ? (
          <>
          <h2 className="text-xl font-semibold mb-4">
            Eingeloggt als, {user.data.user.email}
          </h2>
          <button  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={signOut}>
            Ausloggen
          </button></>
          ) : (
        <>
        <h2 className="text-xl font-semibold mb-4">Anmelden mit GitHub</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={signInWithGitHub}
        >
          GitHub anmelden
        </button>
        </>
        )}
      </div>
    </div>
  );
};

export default Modal;

