import React from 'react'
import NewsList from '../NewsList'
import fetchNews from '../../lib/fetchNews'

const page = async ({searchParams}) => {

    const  news =await fetchNews('general',searchParams.term,true)

  return (
    <div>
<h1 className='font-serif text-3xl underline underline-offset-2 decoration-orange-400 decoration-2'>Search results for {searchParams.term}</h1>
        <NewsList news={news} />
    </div>
  )
}

export default page