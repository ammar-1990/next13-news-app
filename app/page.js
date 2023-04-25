import { categories } from "@/data"
import fetchNews from "@/lib/fetchNews"
import NewsList from "./NewsList"
import  response from '../response.json'





export default async function Home() {

  // const news = await fetchNews()
  const news = response

  return (
   <main>

    <NewsList news={news} />
   </main>
  )
}
