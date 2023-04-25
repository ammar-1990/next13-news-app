import ReadMoreButton from "./ReadMoreButton";

const Article = ({
  author,
  title,
  description,
  url,
  source,
  image,
  category,
  language,
  country,
  published_at,
}) => {
  return (
    <article className=" rounded-lg hover:scale-105 shadow-sm hover:shadow-lg bg-slate-100 gove:bg-slate-200 duration-200 ease-out flex flex-col dark:bg-slate-800">
      {image && (
        <img src={image} className="w-full rounded-t-lg h-56 object-cover" />
      )}
<div className="p-5 flex-1 flex flex-col">
      <section >
        <h1 className="font-bold font-serif line-clamp-1">{title}</h1>
        <p className="mt-4 line-clamp-3 text-md">{description}</p>
      </section>
      <footer className="mt-auto text-xs dark:text-gray-400 text-gray-700 pt-8 flex space-x-2 justify-end">
        <p>{source}</p>
        <p>{published_at}</p>
      </footer>
  
      </div>
      <ReadMoreButton article={{ author,
  title,
  description,
  url,
  source,
  image,
  category,
  language,
  country,
  published_at}} />
    </article>
  );
};

export default Article;
