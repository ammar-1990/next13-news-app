import { notFound } from "next/navigation";
import LiveTimeStamp from "../LiveTimeStamp";

const ArticlePage = ({ searchParams }) => {




  if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams)
    {
        return notFound()
    }
  

    const article = searchParams

    console.log(article)

  return <article className="w-full p-8 flex-col md:flex-row flex gap-3">


    {article.image && <img className="  mx-auto w-full md:w-1/2 object-cover rounded-lg shadow-md" src={article.image} />}
    <div className="text-xs sm:text-base pt-4">
<h1 className=" font-serif text-3xl capitalize py-8">{article.title}</h1>
    <div className="flex divide-x-2 space-x-4 divide-gray-500">
        <h2 className="font-bold">By: {article.author || 'unknown'}</h2>
        <h2 className="font-bold pl-4">Source: {article.source}</h2>
        <p className="pl-4"><LiveTimeStamp time={article.published_at} /></p>
    </div>

    <p className="pt-4">{article.description}</p>
    </div>
  </article>;
};

export default ArticlePage;
