"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders, LiteralUnion, ClientSafeProvider } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
const isUserLoggedIn= true;
const [providers, setProviders]=  useState(null);;
useEffect(() => {
    const fetchProviders = async ()=>{
        const response = await getProviders();
        setProviders(response);
    };
    fetchProviders();


},[])

const Navbar = () => {
    return (
        <div  className="bg-[#99abc5]">
      <nav className="flex flex-row gap-5 items-center justify-between  ">
        <Link href="/">
        <div className="flex items-center ">
          <Image
            className="w-[10rem] h-[5rem]  pt-0 "
            src={Logo}
            alt="Logo"
          />
          <p className="hidden lg:block  font-semibold text-xl text-[#49586D]">Promptopia</p></div>
        </Link>
        {isUserLoggedIn?
        (<div className="flex  mr-[3rem] font-bold  gap-5  text-pink-100 p-2 rounded-3xl">
        <Link className="p-2" href="/Create">Create Post</Link>
        <button className="border-slate-800 border p-2 rounded-3xl" type="button" onClick={()=>signOut()}>Sign Out</button>
        
      
        </div>):
        (
            <>
            </>
        )
}
      </nav>
    </div>
  );
};

export default Navbar;
