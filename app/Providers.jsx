"use client"
import { useEffect,useState } from "react"

import { ThemeProvider } from "next-themes"





const Providers = ({ children }) => {

  return (
   <ThemeProvider attribute="class" enableSystem={true}>

        {children}
    </ThemeProvider>
  
  )
}

export default Providers