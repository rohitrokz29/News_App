import React from 'react'
import './newsitem.css';
import image from './notavb.png';
export default function Newsitem(props) {
    return (
        
        <div id="news_item">
            <img className='news-image' src={props.urlToImage?props.urlToImage: image} alt="_black" />
            <div className="info">
                <div className="title"> {props.title ? props.title : ''}</div>
                <br />
                <div className="desc">{(props.description) ? props.description : ''}</div>
                <br />
                <div className="date">{props.date}</div>
            </div>
            <button id='read'  ><a style={{ textDecoration: 'none', color: 'black' }} rel='noreferrer' target="_blank" href={props.url?props.url:''}  >Read More</a></button>
        </div>
    )
}
