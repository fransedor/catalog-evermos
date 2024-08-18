import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer id="about" className="w-full bg-black text-white">
      <div className="container mx-auto py-6 px-8 sm:py-8 sm:px-12 flex flex-col gap-4">
        <p className="text-2xl font-bold">About</p>
        <p>
          This project is built with NextJS and TailwindCSS. The initial catalog and the search
          result is handled via Server Side Rendering (SSR) while the infinite scroll is handled
          client-side. The carousel in product detail page is built using native CSS and JS.
        </p>
        <p className="text-2xl font-bold">Links</p>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/fransedor" className="bg-white hover:bg-slate-100">
            <Image src="/linkedin_icon.svg" alt="Fransedo's Linkedin" width={24} height={24} />
          </a>
          <a href="https://github.com/fransedor" className="bg-white hover:bg-slate-100">
            <Image src="/github_icon.svg" alt="Fransedo's Github" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
