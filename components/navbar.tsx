"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrambleText } from "./scramble";

const pathToCipher: { [key: string]: string } = {
  "/": "72 61 6C",
  "/resume": "75 6E 66",
  "/notes": "65 64 2E",
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-start gap-3 text-xs">
      <Link href="/" className="hover:text-[#db2777]">
        <ScrambleText
          text="home"
          cipherText={pathToCipher["/"]}
          isActive={pathname === "/"}
        />
      </Link>
      <Link href="/resume" className="hover:text-[#db2777]">
        <ScrambleText
          text="resume"
          cipherText={pathToCipher["/resume"]}
          isActive={pathname === "/resume"}
        />
      </Link>
      <Link href="/notes" className="hover:text-[#db2777]">
        <ScrambleText
          text="notes"
          cipherText={pathToCipher["/notes"]}
          isActive={pathname === "/notes"}
        />
      </Link>
    </div>
  );
};

export default Navbar;
