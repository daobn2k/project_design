import React,{  } from 'react';
import './index.scss';
import { FaSearch } from "react-icons/fa";
import HomePage from '../../pages/HomePage';
import News from '../../pages/News';
// import MorePage from '../../pages/More';
// import CocktailsPage from '../../pages/Cocktails';
// import Discover from '../../pages/Discover';
const MainComponent  = () => {
  return (
    <div  className='main'>
        <div className='tab' >
          {
            list.map((i,index)=>{
              return(
                <p key={index} className="tab-item">{i}</p>
              )
            })
          }
          <div className='search'>
              <input type="text" className='search-input' />
              <FaSearch/>
          </div>
        </div>
        {/* <HomePage /> */}
        <News />
        {/* <Discover/> */}
        {/* <MorePage/> */}
        {/* <CocktailsPage /> */}
    </div>
  )
}
export default MainComponent

const list = ['DISCOVER','NEWS','COCKTAILS','MORE']