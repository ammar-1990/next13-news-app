export default function sortNewsByImage(news){


    const newsWithImage = news.data.filter(el=>el.image !== null)
    const newsWithOutImage = news.data.filter(el=>el.image === null)

const sortedNews = {
    pagination:news.pagination,
    data:[...newsWithImage,...newsWithOutImage]
}


return sortedNews
}