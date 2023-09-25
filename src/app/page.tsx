"use client";
import NavBar from "@/components/Navbar";
import Samples from "@/components/Samples";
import App from "@/components/App";
import Footer from "@/components/Footer";
import { useUser } from "@/store";

export default function Home() {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <main className="flex min-h-full flex-wrap min-w-screen flex-col drop-shadow-[0_12px_8px_rgba(0,0,0,0.25)]">
        <NavBar />
        <App />
        <Samples />
        <Footer />
      </main>
    </>
  );
}
