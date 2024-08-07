"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function Navbar() {
  const leftNavigationLinks = [
    {
      name: "Expandot",
      href: "/",
    },
    {
      name: "Everything",
      href: "/products",
    },
    {
      name: "Women",
      href: "/women",
    },
    {
      name: "Men",
      href: "/men",
    },
    {
      name: "Accessories",
      href: "/accessories",
    },
  ];

  const pathname = usePathname();

  return (
    <header className="w-full py-4 px-6 lg:px-14 bg-primary text-white absolute top-6 z-40 flex justify-between items-center">
      {/* Mobile Screen Logo */}
      <div className="flex items-center gap-x-3 lg:hidden">
        <MenuOutlinedIcon />
        <Link href="/" className="font-medium tracking-wider text-xl">
          Expandot
        </Link>
      </div>
      {/* Left Navigation Links */}
      <nav className="space-x-4 uppercase hidden lg:block">
        {leftNavigationLinks.map((item, index) => {
          let isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={index}
              href={item.href}
              className={`font-medium text-sm hover:text-secondary ${
                isActive ? `text-secondary` : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      {/* Right Navigation Links */}
      <div className="flex items-center gap-x-4 uppercase">
        <Link
          href="/contact"
          className={`hidden md:flex items-center gap-x-2 font-medium text-sm hover:text-secondary ${
            pathname === "/contact" ? `text-secondary` : ""
          }`}
        >
          Contact
        </Link>
        <Link
          href="/about"
          className={`hidden md:flex items-center gap-x-2 font-medium text-sm hover:text-secondary ${
            pathname === "/about" ? `text-secondary` : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/cart"
          className={`flex items-center gap-x-2 font-medium text-sm hover:text-secondary ${
            pathname === "/cart" ? `text-secondary` : ""
          }`}
        >
          $30.00 <ShoppingBagOutlinedIcon />
        </Link>
        <Link
          href="/account"
          className={`flex items-center gap-x-2 font-medium text-sm hover:text-secondary ${
            pathname === "/account" ? `text-secondary` : ""
          }`}
        >
          <PersonOutlinedIcon />
        </Link>
      </div>
    </header>
  );
}
