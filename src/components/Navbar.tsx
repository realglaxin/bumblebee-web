import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useThemeContext } from "./ThemeProvider";

const NavbarItems = [
  {
    name: "Documentation",
    href: "https://docs.bumblebeebot.xyz/",
  },
  {
    name: "Support",
    href: "https://docs.bumblebeebot.xyz/support",
  },
  {
    name: "Premium",
    href: "https://docs.bumblebeebot.xyz/premium",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-surface/90 backdrop-blur-sm shadow-md shadow-black/10"
            : "bg-white/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* <Bug className="h-8 w-8 text-yellow-400" /> */}
            <img
              src="/icon.png"
              alt="Bumblebee Logo"
              className="h-11 w-11 text-yellow-400"
            />
            <span className="ml-2 text-xl font-bold text-text-primary">
              Bumblebee
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NavbarItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-primary hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://docs.bumblebeebot.xyz/invite"
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-md transition-colors duration-200"
            >
              Invite
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-yellow-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NavbarItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-text-primary hover:text-yellow-400 hover:bg-gray-800/50"
              >
                {item.name === "Documentation" ? "Docs" : item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
