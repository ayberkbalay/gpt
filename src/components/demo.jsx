import React from 'react'
import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'



const demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  })

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] =
    useLazyGetSummaryQuery();


  const handleSubmit = async (e) => {
    const { data } = await getSummary({
      articleUrl: article.url
    });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary }
      const updatedArticles = [...allArticles, newArticle];

      setArticle(newArticle)
      setAllArticles(updatedArticles);
      console.log(newArticle)

    }
  }


    return (
      <section className="mt-16 w-full max-w-xl ">
        {/* Search bar */}
        <div className="flex flex-col w-full gap-2">
          <h2 className="text-2xl font-bold">Summarize any article</h2>
          <form
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <img
              src={linkIcon}
              alt="link icon"
              className="absolute left-0 my-2 ml-3 w-5">
            </img>
            <input
              type='search'
              id="search"

              placeholder='Paste the article link'
              value=""
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className='url_input peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
            />
            <button
              type="submit"
              className="submit_btn
             peer-focus:border-gray-700
             peer-focus:text-gray-700">
              <p>↩</p>
            </button>
          </form>
          {/* Browse URL History */}
        </div>
        {/* Result */}
      </section>
    )
  
}
export default demo