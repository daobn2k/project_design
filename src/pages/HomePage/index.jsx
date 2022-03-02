import React,{  } from 'react';
import './index.scss';
import { FaSearch } from "react-icons/fa";
const HomePage  = () => {
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
    </div>
  )
}
export default HomePage

const list = ['DISCOVER','NEWS','COCKTAILS','MORE']