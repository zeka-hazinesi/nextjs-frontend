"use client";
import NavBar from "@/components/Navbar";
import Samples from "@/components/Samples";
import App from "@/components/App";
import { useUser } from "@/store";

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <NavBar />
        <App />
        <Samples />
      </main>
    </>
  );
}
