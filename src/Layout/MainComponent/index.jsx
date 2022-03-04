import React,{ useState } from 'react';
import './index.scss';
import { FaSearch } from "react-icons/fa";
import HomePage from '../../pages/HomePage';
import News from '../../pages/News';
import MorePage from '../../pages/More';
import CocktailsPage from '../../pages/Cocktails';
import Discover from '../../pages/Discover';
const MainComponent  = () => {
  const [tab,setTab] = useState(0);
  const handleClick = (i) =>{
    setTab(i)
  }

  const renderTabs = (key) =>{
    switch(key){
      case 0:
        return <HomePage />  
      case 1:
        return <Discover/>
      case 2:
        return <News/>
      case 3:
        return <MorePage/>
      case 4:
        return <CocktailsPage/>
      default:
        return
    }
    
  }
  return (
    <div  className='main'>
        <ul className='tab' >
          {
            list.map((i,index)=>{
              const isActive = tab === index ? true : false
              return(
                <li className={`tab-item ${isActive ? 'active' :''}`} onClick={()=>handleClick(index)}  key={index} >
                  <p className={`tab-text`} onClick={()=>handleClick(index)} >{i}</p>
                </li>
              )
            })
          }
          <div className='search'>
              <input type="text" className='search-input' />
              <FaSearch/>
          </div>
        </ul>
        {renderTabs(tab)}
    </div>
  )
}
export default MainComponent

const list = ['HOME','DISCOVER','NEWS','COCKTAILS','MORE']