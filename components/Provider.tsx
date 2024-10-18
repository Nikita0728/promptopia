'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
interface ProviderProps{
  children: ReactNode;
  session: any;
}
const Provider = ({children, session}:ProviderProps) => {
  return (
    <div>

      <SessionProvider session={session}>
           {children}
      </SessionProvider>
    </div>
  )
}

export default Provider