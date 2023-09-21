import { create, StoreApi } from "zustand";
import { useEffect } from "react";
import { supabase } from "../supabase";

type LoadingState = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const useLoadingStore = create<LoadingState>(
  (set: StoreApi<LoadingState>["setState"]) => ({
    isLoading: true,
    setIsLoading: (value: boolean) => set({ isLoading: value }),
  })
);

export const useLoading = () => {
  const { isLoading, setIsLoading } = useLoadingStore();

  const checkUser = async () => {
    try {
      // Perform user verification here
      // When the user is verified, set isLoading to false
      const user = await supabase.auth.getUser();
      setIsLoading(false);
      return user;
    } catch (error) {
      console.error("Error verifying user", error);
      setIsLoading(false);
      throw error;
    }
  };

  // Use useEffect in the hook
  useEffect(() => {
    checkUser(); // Call user verification when the hook is called
  }, []); // This will run only once on mount

  return { isLoading };
};
