import { useEffect, useState } from "react";
import { navLinks } from "../data";
import { NavLink, useLocation } from "react-router";

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-white border-b-2   border-[#dc35462a] p-5"
          : "p-7 border-b border-transparent"
      }   w-full flex justify-between ${
        location.pathname != "/" ? "sticky top-0" : "fixed "
      } transition-all z-90 text-color-text bg-transparent`}
    >
      <div className="container mx-auto flex justify-between callout-subtitle animate__animated animate__fadeInDown">
        <a href="/" className="text-3xl font-bold text-gray-800">
          Ngoding.
        </a>

        <button
          aria-controls="basic-navbar-nav"
          type="button"
          aria-label="Toggle navigation"
          className="block md:hidden text-gray-800 focus:outline-none "
        >
          <label htmlFor="my-drawer" className="flex flex-col cursor-pointer">
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </label>
        </button>

        <div className="hidden md:flex md:items-center md:justify-center">
          <div className="flex flex-col md:flex-row md:space-x-4">
            {navLinks.map((link) => {
              return (
                <div key={link.id} className="text-center">
                  <NavLink
                    to={link.path}
                    className={`px-4 py-2 text-balance font-medium rounded transition-all ${
                      location.pathname === link.path
                        ? "text-white bg-red-500"
                        : "text-gray-800  hover:text-red-500 "
                    }`}
                  >
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
        <button className="hidden lg:block cursor-pointer px-4 py-2 text-red-500 text-sm font-medium  border border-red-500 rounded hover:bg-red-500 hover:text-white transition">
          Join With Us
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
