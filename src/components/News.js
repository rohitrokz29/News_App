import React, {  useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Load from './Loader';
import './news.css';
import Newsitem from './Newsitem';


const News = (props) => {
  //articles contain news
  const [articles, setArticles] = useState([]);

  // page represnet the page number in fetching articles using api
  const [page, setPage] = useState(1);

  //total results got in data
  const [totalResult, setTotalResult] = useState(0);


//updates the news for each different category passed in App.js
  useEffect(() => {
    updateNews();
  }, [props.category]);


  // function fetches the news data from api and sets  it into articles 
  const updateNews = async () => {
    document.title = ' Star News ' + props.category;
    props.progress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page}`;
    props.progress(40);
    const data = await fetch(url);
    props.progress(80);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResult(parsedData.totalResults);
    props.progress(100);


  }
  //function to fetch data in InfiniteScroll Component
  const fetchMore = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page + 1}`;
    console.log(totalResult);
    const data = await fetch(url);
    console.log(totalResult);
    const parsedData = await data.json();
    console.log(totalResult);
    setArticles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResults);
    console.log(totalResult);

  }

  const capatilize=(str)=>{
  let s=   String(str);
  return (s[0].toUpperCase() + s.slice(1))
  }

  return (
    <>    <div className="heading">Top Headlines - {capatilize(props.category)}</div>
      <div className="box">
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMore}
          hasMore={totalResult >= page * props.pageSize}
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
