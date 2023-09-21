// useLoadingStore.js

import {create}  from 'zustand';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const useLoadingStore = create((set) => ({
  isLoading: true,
  setIsLoading: (value) => set({ isLoading: value }),
}));

export const useLoading = () => {
  const { isLoading, setIsLoading } = useLoadingStore();

  const checkUser = async () => {
    try {
      // Führe hier deine Benutzerüberprüfung durch
      // Wenn der Benutzer überprüft wird, setze isLoading auf false
      const user = await supabase.auth.getUser();
      setIsLoading(false);
      return user;
    } catch (error) {
      console.error('Fehler beim Überprüfen des Benutzers', error);
      setIsLoading(false);
      throw error;
    }
  };

  // useEffect in der Hook verwenden
  useEffect(() => {
    checkUser(); // Benutzerüberprüfung aufrufen, wenn die Hook aufgerufen wird
  }, []); // Dies wird nur einmal bei der Montage aufgerufen

  return { isLoading };
};
