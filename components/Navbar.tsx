import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-black text-2xl font-bold">
          Evermos Catalog
        </Link>
        <div className="flex items-center">
          <button className="text-black md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div
            className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <Link href="/" className="block px-4 py-2 text-black hover:bg-slate-100 rounded-md">
              Catalog
            </Link>
            <Link href="/#about" className="block px-4 py-2 text-black hover:bg-slate-100 rounded-md">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
