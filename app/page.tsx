"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Process from "../components/Process";
import StorySection from "../components/StorySection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#16110e]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductSection />
        <Process />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
}
