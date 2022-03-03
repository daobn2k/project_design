import React from 'react';
import images from '../../images';
import './index.scss';
const MorePage = () => {
  return (
    <div className="more">
        <div className='logo'>
            <img src={images.logo3} alt="" width={80} height={80} className="logo-image"/>
        </div>
        <div className='description'>
        {
          listMore.map((i,index)=>{
            return(
            <>
              <div className={i.className}>
                  {i.title}
              </div>  
             {
               index !== listMore.length -1 &&  <div className='black'></div>
             }
            </>
            )
          })
        }
       </div>
        <div className='logo'>
            <img src={images.logo3} alt="" width={80} height={80} className="logo-image"/>
        </div>
    </div>
  );
};
export default MorePage;

const listMore = [
  {
    title: 'Favorite Cocktails',
    className:'yellow'
  },
  {
    title: 'My Notes',
    className:'heavy'
  },
  {
    title: 'My Cocktails',
    className:'brown'
  },
  {
    title: 'Tips',
    className:'pink'
  },
];

