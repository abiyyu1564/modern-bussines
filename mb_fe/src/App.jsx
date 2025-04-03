import { useState } from "react";
import Navbar from "./components/navbar";

import "./App.css";
import Hero from "./components/Hero";
import LogoAnimation from "./components/LogoAnimation";
import PurposeSection from "./components/PurposeSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden ">
        <Navbar />
        <Hero />
        <LogoAnimation />
        <PurposeSection />
      </div>
    </main>
  );
}

export default App;
