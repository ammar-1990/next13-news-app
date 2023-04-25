'use client'
import { useRouter } from "next/navigation"
const ReadMoreButton = ({article}) => {
    
    
   const router = useRouter()
    const handleClick =()=> {

const queryString = Object.entries(article).map(([key,value])=>`${key}=${value} `).join("&")
const url = `/article?${queryString}`


router.push(url)
    }

    
  return (
    <button onClick ={handleClick} className="bg-orange-400 py-3 rounded-b-lg dark:text-gray-900 hover:bg-orange-500">ReadMoreButton</button>
  )
}

export default ReadMoreButton