import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Incorporation", href: "/incorporate" },
  { label: "Secretary", href: "/secretary" },
  { label: "Accounting & Tax Services", href: "/accounting-services" },
  { label: "Audit Support", href: "/audit-support" },
];

export const Navbar = (): JSX.Element => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute z-40 w-full bg-transparent top-9">
      <div className="flex items-center justify-between w-full xl:w-[97%]  mx-auto px-4 xl:px-6">
        {/* Logo */}
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            className="w-30 lg:w-44 h-[23px] lg:h-[30px] cursor-pointer"
            alt="Mutetaxes logo"
            src="/HomePage/mutetaxes-logo-1.svg"
          />
        </Link>

        {/* ===== Desktop Navigation ===== */}
        <div className="items-center hidden gap-8 lg:flex">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`font-helvetica h-7 text-md xl:text-lg tracking-[-0.4px] font-normal leading-7 hover:opacity-70 transition-opacity ${
                location.pathname === item.href
                  ? "text-[#004eff]"
                  : "text-[#212833]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* ===== Desktop Buttons ===== */}
        <div className="items-center hidden gap-2 lg:flex">
          <Button
            variant="outline"
            className="h-auto lg:px-3 lg:py-1.5 xl:px-[18px] xl:py-2 rounded-[40px] border border-solid border-[#21283366] bg-transparent hover:bg-transparent"
          >
            <span className="font-helvetica font-medium text-[#212833] lg:text-sm xl:text-base leading-6">
              Sign In
            </span>
          </Button>

          <Button className="h-auto lg:px-3 lg:py-1.5 xl:px-[18px] xl:py-2 rounded-[40px] bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
            <span className="font-helvetica font-medium text-[#dde7ff] lg:text-sm xl:text-base leading-6">
              Get Started
            </span>
          </Button>
        </div>

        {/* ===== Mobile Menu Toggle ===== */}
        <button
          className="flex items-center justify-center w-10 h-10 transition rounded-md lg:hidden hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ===== Mobile Dropdown Menu ===== */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 px-6 py-4 mx-4 mt-4 shadow-lg bg-[#dbe6fe]/50 backdrop-blur-[6px] lg:hidden rounded-2xl">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-helvetica block text-base font-normal leading-6 hover:opacity-70 transition-opacity ${
                location.pathname === item.href
                  ? "text-[#004eff]"
                  : "text-[#212833]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-2">
            <Button
              variant="outline"
              className="h-auto px-[18px] py-2 rounded-[40px] border border-solid border-[#21283366] bg-transparent hover:bg-transparent"
            >
              <span className="font-helvetica font-medium text-[#212833] text-base leading-6">
                Sign In
              </span>
            </Button>

            <Button className="h-auto px-[18px] py-2 rounded-[40px] bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90">
              <span className="font-helvetica font-medium text-[#dde7ff] text-base leading-6">
                Get Started
              </span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
