
import Article from "./Article"

const NewsList = ({news}) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">

{news.data.map(el=><Article key={el.title}  {...el}/>)}

    </div>
  )
}

export default NewsList