import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row gap-8 ">
        <Link href="/">
          <Image
            className="w-[10rem] h-[5rem] flex  items-start pt-0"
            src={Logo}
            alt="Logo"
          />
        </Link>
        <Link href="/About">Home</Link> <Link href="/Home">About</Link>
        <Link href="/Contact"> Contact Us</Link>
      </nav>
    </div>
  );
};

export default Navbar;
