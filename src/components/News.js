import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Load from './Loader';
import './news.css';
import Newsitem from './Newsitem';


const News = ({ category, api, pageSize, progress }) => {
  //articles contain news
  const [articles, setArticles] = useState([]);

  // page represnet the page number in fetching articles using api
  const [page, setPage] = useState(1);

  //total results got in data
  const [totalResult, setTotalResult] = useState(0);


  //updates the news for each different category passed in App.js
  useEffect(() => {

    // function fetches the news data from api and sets  it into articles 
    const updateNews = async () => {
      document.title = ' Star News ' + category;
      progress(30);
      const url=`${api}/${category}/${pageSize}/${page}`
      progress(40);
      const data = await fetch(url);
      progress(80);
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResult(parsedData.totalResults);
      progress(100);
    }
    updateNews();
  }, [category,api,page,pageSize,progress]);


  //function to fetch data in InfiniteScroll Component
  const fetchMore = async () => {
    setPage(page + 1);
    const url=`${api}/${category}/${pageSize}/${page}`
    console.log(totalResult);
    const data = await fetch(url);
    console.log(totalResult);
    const parsedData = await data.json();
    console.log(totalResult);
    setArticles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResults);
    console.log(totalResult);

  }

  const capatilize = (str) => {
    let s = String(str);
    return (s[0].toUpperCase() + s.slice(1))
  }

  return (
    <>    <div className="heading">Top Headlines - {capatilize(category)}</div>
      <div className="box">
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMore}
          hasMore={totalResult >= page * pageSize}
          loader={<Load />} >

          <div className='news'>
            {articles?.map((element) => {
              return (<Newsitem key={element.url} url={element.url} urlToImage={element.urlToImage} title={element.title} description={element.description} date={element.publishedAt} />)
            })}
          </div>
        </InfiniteScroll>

      </div>

    </>)

}

export default News
