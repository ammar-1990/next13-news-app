import fetchNews from "@/lib/fetchNews"
import NewsList from "@/app/NewsList"
import { categories } from "@/data"




const page =async ({params:{category}}) => {

    const news = await fetchNews(category)
   
  return (
<div>
    <h1 className='font-serif text-3xl underline underline-offset-2 p-10 decoration-orange-400 decoration-2'>{category}</h1>

    <NewsList news={news} />
</div>
  )
}

export default page


export async function generateStaticParams(){
return categories.map(category=>({category:category}))
}