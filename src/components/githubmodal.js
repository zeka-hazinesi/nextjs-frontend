"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const Modal = ({ isOpen, onClose }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const user = await supabase.auth.getUser();
    setUser(user.data.user);
  }

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      redirectTo: window.location.origin + "/nextjs-frontend/",
    });
    setUser(data.user);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20 bg-gray-300 bg-opacity-40 backdrop-filter backdrop-blur-md">
      {/* Hintergrund mit Transparenz */}
      <div
        className="modal-bg fixed inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>
      {/* Modal-Container mit erhöhter Mindesthöhe */}
      <div className="modal-content bg-white p-4 rounded shadow-md relative text-center">
        {user != null ? (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Eingeloggt als, {user.email}
            </h2>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 z-2"
              onClick={signOut}
            >
              Ausloggen
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Anmelden mit GitHub</h2>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 z-2"
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
