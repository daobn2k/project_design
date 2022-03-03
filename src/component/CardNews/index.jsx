import React,{ useState } from 'react';
import './index.scss';
const CardNews  = (props) => {
    const {style,url, title,content } = props

    const [loadMore,setLoadMore] = useState(true)
    const showLoadMore = () =>{
        setLoadMore(!loadMore)
    } 
  return (
    <div className='card' style={style}>
        <div className='card--img'  style={{backgroundImage: "url(" + url + ")"}}/>
        <h2 className='card-title'>{title || ''}</h2>
        <p className="card--content">
            {content}
            <span onClick={()=>showLoadMore()} className="card--more">{loadMore ? 'Read more >':'Less more '}</span>
        </p>
    </div>
  )
}
export default CardNews