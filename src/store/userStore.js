import { create } from 'zustand';
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

const useUserStore = create((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
}));

export const useUser = () => {
  const { user, setUser } = useUserStore();

  const checkUser = async () => {
    try {
      // Führe hier deine Benutzerüberprüfung durch
      // Wenn der Benutzer überprüft wird, setze den Benutzer im Zustand
      const loggedUser = await supabase.auth.getUser();
      setUser(loggedUser);
      return loggedUser;
    } catch (error) {
      console.error('Fehler beim Überprüfen des Benutzers', error);
      throw error;
    }
  };

  // useEffect in der Hook verwenden
  useEffect(() => {
    checkUser(); // Benutzerüberprüfung aufrufen, wenn die Hook aufgerufen wird
  }, []); // Dies wird nur einmal bei der Montage aufgerufen

  return { user };
};