import React from 'react';
import  load from './load.webp';

//load is the loading icon in .webp file 

//this file provides this loading icon at bottom
const Loader = () => {
  return (
    
    <div style={{width:"100vw", display:"flex", justifyContent:"center"}}>
       <figure> <img style={{width:'25vw'}} src={load} alt="" /></figure>      
    </div>
  )
}

export default Loader
