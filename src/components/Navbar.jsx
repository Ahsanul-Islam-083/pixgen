// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className="border-b px-2">
//       <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
//         <div className="flex gap-2 items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             loading="eager"
//             width={30}
//             height={30}
//             className="object-cover h-auto w-auto"
//           />
//           <h3 className="font-black text-lg">pixgen.</h3>
//         </div>

//         <ul className="flex items-center gap-5 text-sm">
//           <li>
//             <Link href={"/"}>Home</Link>
//           </li>
//           <li>
//             <Link href={"/all-photos"}>All Photos</Link>
//           </li>
//           <li>
//             <Link href={"/pricing"}>Pricing</Link>
//           </li>
//           <li>
//             <Link href={"/profile"}>Profile</Link>
//           </li>
//         </ul>

//         <div className="flex gap-4">
//           <ul className="flex items-center  text-sm">
//             <li>
//               <Link className="button" href={"/signup"}>SignUp</Link>
//             </li>
//             <li>
//               <Link className="button" href={"/signin"}>SignIn</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Using your react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "All Photos", href: "/all-photos" },
    { name: "Pricing", href: "/pricing" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className="relative w-full border-b border-gray-100 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo"
                width={30}
                height={30}
                priority
                className="w-auto h-auto"
              />
              <span className="font-black text-xl tracking-tighter">pixgen.</span>
            </Link>
          </div>

          {/* 2. Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 3. Desktop Auth Buttons (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin" className="text-sm font-medium text-gray-600">
              SignIn
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 text-white rounded-full text-sm font-bold hover:from-pink-700 hover:via-purple-700 hover:to-red-700 transition-all shadow-md"
            >
              SignUp
            </Link>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 p-2 focus:outline-none"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-base font-semibold text-gray-700 border-b border-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-3">
              <Link
                href="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="text-center py-3 text-gray-600 font-medium"
              >
                SignIn
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="text-center py-3 bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 text-white rounded-xl font-bold"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;