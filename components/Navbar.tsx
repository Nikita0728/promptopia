import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders } from 'next-auth/react'
const Navbar = () => {
  return (
    <div>
        nav
        <nav className=''>
            <Link href='/'>
            {/* <Image/> */}
            </Link>

        </nav>

    </div>
  )
}

export default Navbar