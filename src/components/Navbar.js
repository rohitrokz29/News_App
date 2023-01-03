import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

//This is Navbar component of the News React App

export default function Navbar() {

  // sty is the state of style for news  category in mobile mode i.e  width<700px 
  const [sty, setSty] = useState({
    display: 'none',
  });

  //function for button to show and remove news category list and change the list style(id=mob-list) 
  const hamburg = () => {
    if (sty.display === 'none') {
      setSty({
        zIndex: '7',
        display: 'block',
        marginTop: '2.55rem',
        animationName: 'menu-list',
        animationDuration: '1s',


      })

    }
    else {
      setSty({
        display: 'none',
      })
    }

  }




  return (<>
    <div className='nav'>

      <div className="name">
        <span> <Link to='/'> Star News</Link> </span>
      </div>

    {/* news category list for non mobile mode */}
      <ul id="list">
        <li className="items"><Link to="/">Home</Link></li>
        <li className="items"><Link to="/sports">Sports</Link></li>
        <li className="items"><Link to="/business">Business</Link></li>
        <li className="items"><Link to="/entertainment">Entertainment</Link></li>
        <li className="items"><Link to="/health">Health</Link></li>
        <li className="items"><Link to="/technology">Technology</Link></li>
      </ul>



      <button onClick={hamburg} className='hamburg' >
        <div className="menu">
          <span className="ham"></span>
          <span className="ham"></span>
          <span className="ham"></span>
        </div>
      </button>

    </div>


{/* category list for mobile mode i.e width<700px */}
    <ul id="mob-list " style={sty}>
      <li className="mob-items"><Link to="/">Home</Link></li>
      <li className="mob-items"><Link to="/sports">Sports</Link></li>
      <li className="mob-items"><Link to="/business">Business</Link></li>
      <li className="mob-items"><Link to="/entertainment">Entertainment</Link></li>
      <li className="mob-items"><Link to="/health">Health</Link></li>
      <li className="mob-items"><Link to="/technology">Technology</Link></li>
    </ul>
  </>
  )
}
