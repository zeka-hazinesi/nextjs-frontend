import { create, StoreApi } from "zustand";
import { useEffect } from "react";
import { supabase } from "../supabase";

type UserState = {
  user: any | null; // Replace 'any' with the actual type of your user data
  setUser: (userData: any | null) => void; // Replace 'any' with the actual type of your user data
};

export const useUserStore = create<UserState>(
  (set: StoreApi<UserState>["setState"]) => ({
    user: null,
    setUser: (userData: any | null) => set({ user: userData }), // Replace 'any' with the actual type of your user data
  })
);

//Hook um User zu erfassen
export const useUser = () => {
  const { user, setUser } = useUserStore();

  const checkUser = async () => {
    try {
      // Perform user verification here
      // When the user is verified, set the user in the state
      const loggedUser = await supabase.auth.getUser();
      setUser(loggedUser.data.user);
      return loggedUser;
    } catch (error) {
      console.error("Error verifying user", error);
      throw error;
    }
  };

  // Use useEffect in the hook
  useEffect(() => {
    checkUser(); // Call user verification when the hook is called
  }, []); // This will run only once on mount

  return { user };
};
