import React from 'react';
import './index.scss';
const CardDiscover = (props) => {
  const { url, title, content, center ,index} = props;
  const isShowBackGround = index % 2 === 0 || index === 0 ? "#D9984E" : "#5C9AA1"
  const showImageCenter = center ? "url(" + url + ")" :''
  console.log("🚀 ~ ~ showImageCenter", showImageCenter)
  return (
    <div className={`card-discover ${center ? 'center' : ''}`} style={{background:isShowBackGround,backgroundImage:showImageCenter}} key={index}>
      <h1 className={`title`}>{title}</h1>
      <p className="text">{content}</p>
      <img src={url} alt="" className='card-image'/>
    </div>
  );
};
export default CardDiscover;
