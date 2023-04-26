import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (category, keywords, isDynamic) => {

let url = `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&sort=published_desc`

if(category)
url+= `&categories=${category}`
if(keywords)
url+=`&keywords=${keywords}`

  const data = await fetch(
    url,
    {
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 500 },

    }
  ).then((res) => res.json());
  

const news = sortNewsByImage(data)
console.log(news)
return news

};

export default fetchNews;


