import { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navigationItems = [
  { label: "Incorporation", href: "/incorporate" },
  { label: "Secretary", href: "/secretary" },
  { label: "Accounting & Tax Services", href: "/accounting-services" },
  { label: "Audit Support", href: "/audit-support" },
];

const regions = [
  {
    code: "HK",
    name: "Hong Kong",
    flag: "/flags/hk.svg",
    href: "https://mutetaxes.com/",
  },
  {
    code: "UK",
    name: "United Kingdom",
    flag: "/flags/uk.svg",
    href: "https://uk.mutetaxes.com/",
  },
  {
    code: "US",
    name: "United States",
    flag: "/flags/us.svg",
    href: "https://us.mutetaxes.com/",
  },
  {
    code: "UAE",
    name: "UAE",
    flag: "/flags/uae.svg",
    href: "https://uae.mutetaxes.com/",
  },
];

export const Navbar = (): JSX.Element => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current region based on pathname
  const getCurrentRegion = () => {
    if (pathname.startsWith("/uk")) return regions.find((r) => r.code === "UK");
    if (pathname.startsWith("/us")) return regions.find((r) => r.code === "US");
    if (pathname.startsWith("/uae"))
      return regions.find((r) => r.code === "UAE");
    return regions.find((r) => r.code === "HK");
  };

  const currentRegion = getCurrentRegion() || regions[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsRegionDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="absolute z-40 w-full bg-transparent top-9">
      <div className="grid grid-cols-3 items-center w-full xl:w-[97%] mx-auto px-4 xl:px-6">
        {/* Logo */}
        <a href="/" onClick={() => setIsMenuOpen(false)}>
          <img
            className="w-30 lg:w-44 h-[23px] lg:h-[30px] cursor-pointer"
            alt="Mutetaxes logo"
            src="/HomePage/mutetaxes-logo-1.svg"
          />
        </a>

        {/* ===== Desktop Navigation ===== */}
        <div className="items-center hidden gap-8 lg:flex justify-center">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`font-helvetica h-7 text-md xl:text-[17px] tracking-[-0.4px] font-normal leading-7 hover:opacity-70 transition-opacity ${
                pathname === item.href ? "text-[#004eff]" : "text-[#212833]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* ===== Desktop Buttons ===== */}
        <div className="items-center hidden gap-2 lg:flex justify-end">
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

          {/* Region Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <Button
              onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
              className="h-auto lg:px-3 lg:py-1.5 xl:px-[18px] xl:py-2 rounded-[40px] bg-[linear-gradient(129deg,rgba(104,150,255,1)_0%,rgba(0,78,255,1)_100%)] hover:opacity-90 flex items-center gap-2"
            >
              <img
                src={currentRegion.flag}
                alt={`${currentRegion.name} flag`}
                width={20}
                height={15}
                className="rounded-sm object-cover"
              />
              <span className="font-helvetica font-medium text-[#dde7ff] lg:text-sm xl:text-base leading-6">
                {currentRegion.code}
              </span>
              <ChevronDown
                size={16}
                className={`text-[#dde7ff] transition-transform duration-200 ${isRegionDropdownOpen ? "rotate-180" : ""}`}
              />
            </Button>

            {isRegionDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                {regions.map((region) => (
                  <a
                    key={region.code}
                    href={region.href}
                    onClick={() => setIsRegionDropdownOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                      currentRegion.code === region.code ? "bg-blue-50" : ""
                    }`}
                  >
                    <img
                      src={region.flag}
                      alt={`${region.name} flag`}
                      width={24}
                      height={18}
                      className="rounded-sm object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-helvetica font-medium text-[#212833] text-sm">
                        {region.code}
                      </span>
                      <span className="font-helvetica text-xs text-gray-500">
                        {region.name}
                      </span>
                    </div>
                    {currentRegion.code === region.code && (
                      <span className="ml-auto text-[#004eff]">✓</span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
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
            <a
              key={index}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-helvetica block text-base font-normal leading-6 hover:opacity-70 transition-opacity ${
                pathname === item.href ? "text-[#004eff]" : "text-[#212833]"
              }`}
            >
              {item.label}
            </a>
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

            {/* Mobile Region Selector */}
            <div className="flex items-center justify-center gap-2 mt-2 pt-3 border-t border-gray-200">
              {regions.map((region) => (
                <a
                  key={region.code}
                  href={region.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                    currentRegion.code === region.code
                      ? "bg-[#004eff] text-white"
                      : "bg-white/50 text-[#212833] hover:bg-white"
                  }`}
                >
                  <img
                    src={region.flag}
                    alt={`${region.name} flag`}
                    width={20}
                    height={15}
                    className="rounded-sm object-cover"
                  />
                  <span className="font-helvetica font-medium text-sm">
                    {region.code}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
