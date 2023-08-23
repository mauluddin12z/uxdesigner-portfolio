import React from "react";
import AboutSection from "./components/aboutSection";

export default function page() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <section className="bg-background-1">
        <AboutSection />
      </section>
    </div>
  );
}
