"use client";

import { useEffect } from "react";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center z-10 items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
};

export default Home;
