'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchInput = () => {

    const [search, setSearch]= useState('')
    const router = useRouter()
const handleSearch = (e)=> {
    e.preventDefault()
    router.push(`/search?term=${search}`)
}

  return (
    <form onSubmit={handleSearch} className='max-w-6xl mx-auto flex items-center p-10'>
<input onChange={(e)=>setSearch(e.target.value)}  value={search} type="text" className='outline-none flex-1 text-orange-400 bg-transparent' placeholder='Search Keywords'/>
<button disabled={!search}  className='text-orange-400 font-bold disabled:text-gray-500'>Search</button>

    </form>
  )
}

export default SearchInput