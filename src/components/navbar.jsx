import React from "react";

const Navbar = () => {
  return (
    <div className="w-full fixed backdrop-blur-sm h-[8%] border-b-2 border-white flex p-1 justify-between px-3 items-center z-20">
      <a
        className="text-white text-3xl font-mono hover:underline duration-300"
        href="/"
      >
        FixLens
      </a>

      <div>
        <a href="/Dashboard">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-6 py-1 font-mono bg-black rounded-[6px]  relative group transition duration-200 text-white text-xl hover:bg-transparent">
              Dashboard
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
