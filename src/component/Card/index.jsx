import React,{ useState } from 'react';
import './index';
const Card  = (props) => {
    const {style,url, title,content,...rest} = props

    const [loadMore,setLoadMore] = useState(false)
    const showLoadMore = () =>{
        setLoadMore(!loadMore)
    } 
  return (
    <div className='card' style={style}>
        <img src={url} alt="" className='card--img'/>
        <h2 className='card-title'>{title || ''}</h2>
        <p className="card--content">
            {content}
            <span onClick={()=>showLoadMore()} className="card--more">{loadMore ? 'Read more':'Less more'}</span>
        </p>
    </div>
  )
}
export default Card