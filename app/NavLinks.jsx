"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data";



const NavLinks = () => {
  const path = usePathname();

const isActive= (link)=>{
 return path=== link
}

  return (

    <nav className="max-w-6xl border-b mx-auto p-5 text-center flex gap-8 flex-wrap ">
      {categories.map((link) => (
        <Link className={`nav ${isActive(link) && 'underline-offset-8 underline decoration-orange-400'}`} key={link} href={`/news/${link}`} >{link}</Link>
      ))}

     
    </nav>
  
  );
};

export default NavLinks;
