"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pathToCipher: { [key: string]: string } = {
  "/": "72616C",
  "/resume": "756E66",
  "/notes": "65642E",
};

const Navbar = () => {
  const pathname = usePathname();

  const getCipherText = (path: string) => pathToCipher[path] || "";

  return (
    <div className="flex justify-start gap-3 text-xs">
      <Link href="/" className="hover:text-[#db2777]">
        <span className={pathname === "/" ? "text-[#db2777]" : ""}>
          {pathname === "/" ? getCipherText("/") : "home"}
        </span>
      </Link>
      <Link href="/resume" className="hover:text-[#db2777]">
        <span className={pathname === "/resume" ? "text-[#db2777]" : ""}>
          {pathname === "/resume" ? getCipherText("/resume") : "resume"}
        </span>
      </Link>
      <Link href="/notes" className="hover:text-[#db2777]">
        <span className={pathname === "/notes" ? "text-[#db2777]" : ""}>
          {pathname === "/notes" ? getCipherText("/notes") : "notes"}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
