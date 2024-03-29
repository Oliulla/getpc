import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import PcBuilderAnimatedButton from "../__shared_multiple_time/__buttons/__PcBuilderAnimatedButton";


const Navbar = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const { data: session } = useSession();

  // console.log(session)

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
              className={`h-4 w-4 transform transition-transform ${isCategoriesOpen ? "rotate-180" : ""
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
            className={`${isCategoriesOpen ? "block" : "hidden"
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

        <div className="space-x-4 flex items-center">
          <PcBuilderAnimatedButton />
          <Link href="/auth/sign-in">

            <span>
              {
                session ?
                  (<span
                    className="px-2 py-3 rounded-sm flex bg-cyan-900 items-center text-white gap-x-2"
                  >
                    <span><HiOutlineArrowLongLeft /></span>
                    <span>Sign-out</span>
                  </span>)
                  :
                  (<span
                    className="px-2 py-3 rounded-sm flex bg-cyan-900 items-center text-white gap-x-2"
                  >
                    <span><HiOutlineArrowLongRight /></span>
                    <span>Sign-in</span>
                  </span>)
              }
            </span>

          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{/* <Link href="/auth/sign-in">
            <span className="relative px-6 py-3 font-bold bg-cyan-900 text-white rounded-lg group">

              {
                session ?
                  (<>
                    <span><MdOutlineArrowLeftAlt /></span>
                    <span>Sign-out</span>
                  </>)
                  :
                  (<>
                    <span><MdOutlineArrowRightAlt /></span>
                    <span>Sign-in</span>
                  </>)
              }
            </span>
          </Link> */}
