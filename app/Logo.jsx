'use client'

import { useRouter } from "next/navigation"



const Logo = () => {
    const router = useRouter()
  return (
<h1 onClick={()=>router.push('/')} className="cursor-pointer md:text-4xl text-lg font-bold flex-1  text-center font-serif">
          The{" "}
          <span className="underline decoration-orange-400  md:decoration-2  decoration-2">
            ALPHA
          </span>{" "}
          News
        </h1>
  )
}

export default Logo