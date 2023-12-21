import React from 'react'
import './newsitem.css';
import image from './notavb.png';
export default function Newsitem({urlToImage,title,description,date,url}) {
    return (
        
        <div id="news_item">
            <img className='news-image' src={urlToImage?urlToImage: image} alt="_black" />
            <div className="info">
                <div className="title"> {title ? title : ''}</div>
                <br />
                <div className="desc">{(description) ? description : ''}</div>
                <br />
                <div className="date">{(new Date(date)).toDateString()}</div>
            </div>
            <button id='read'  ><a style={{ textDecoration: 'none', color: 'black' }} rel='noreferrer' target="_blank" href={url?url:''}  >Read More</a></button>
        </div>
    )
}
