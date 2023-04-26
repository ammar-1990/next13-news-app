import { categories } from "@/data"
import fetchNews from "@/lib/fetchNews"
import NewsList from "./NewsList"

import {data} from '../data'





export default async function Home() {

  const news = await fetchNews('science')
  // const news = data



  return (
   <main>

    <NewsList news={news} />
   </main>
  )
}
