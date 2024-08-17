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
      </div>
    </footer>
  );
};

export default Footer;
