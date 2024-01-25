import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

//   const toggleCategories = () => {
//     setCategoriesOpen(!isCategoriesOpen);
//   };

  return (
    <nav className="bg-[#081621] p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-xl font-bold cursor-pointer">
            GetPC
          </span>
        </Link>

        <div
          className="relative inline-block text-white"
          onMouseOver={() => setCategoriesOpen(true)}
          onMouseOut={() => setCategoriesOpen(false)}
        >
          <button className="group flex items-center space-x-2 h-full">
            <span>Categories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transform transition-transform ${
                isCategoriesOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${
              isCategoriesOpen ? "block" : "hidden"
            } w-[300px] absolute left-0 space-y-2 bg-[#081621] text-white border border-gray-300 rounded-lg z-10`}
            onMouseOver={() => setCategoriesOpen(true)}
            onMouseOut={() => setCategoriesOpen(false)}
          >
            <Link href="/category/cpu-processor" className="hover:underline">
              <span className="block px-4 py-2 cursor-pointer">
                CPU / Processor
              </span>
            </Link>
            <Link href="/category/motherboard" className="hover:underline">
              <span className="block px-4 py-2 cursor-pointer">
                Motherboard
              </span>
            </Link>
            <Link href="/category/ram" className="hover:underline">
              <span className="block px-4 py-2 cursor-pointer">RAM</span>
            </Link>
            <Link href="/category/power-supply-unit" className="hover:underline">
              <span className="block px-4 py-2 cursor-pointer">
                Power Supply Unit
              </span>
            </Link>
            <Link href="/category/storage-device" className="hover:underline">
              <span className="block px-4 py-2 cursor-pointer">
                Storage Device
              </span>
            </Link>
            <Link href="/category/monitor" className="hover:underline">
              <span className="block px-4 py-2 cursor-pointer">Monitor</span>
            </Link>
            <Link href="/category/others" className="hover:underline">
              <span className="block px-4 py-2 cursor-pointer">Others</span>
            </Link>
          </div>
        </div>

        <div className="space-x-4">
          <Link href="/pc-builder">
            <span className="relative px-6 py-3 font-bold text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span className="relative">PC Builder</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
