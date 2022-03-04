import React, { Fragment } from 'react';
import CardDiscover from '../../component/CardDiscover';
import images from '../../images';
import './index.scss';

const Discover = () => {
  return (
    <div className='discovery-root'> 
    <div className='discover-banner'>
      <img src={images.Adam} alt=""/>
    </div>
    <div className='discover-suggest'>
      <h1 className='suggest-title'>Gợi ý:</h1>
      <div className='suggest-list'>
        <div className='suggest-item'></div>
        <div className='suggest-item'></div>
        <div className='suggest-item'></div>
        <div className='suggest-item'></div>
      </div>
    </div>
    {
      listIconicCocktails.map((item,index)=>{
        return(
          <div key={index} style={{width:'100%'}}>
            <ItemDisCover item={item} ind={index}/>
          </div>
        )
      })
    }
    </div>
  );
};
export default Discover;


const ItemDisCover = ({ item ,ind}) =>{
  const { title , text ,list ,center} = item
  return  <div className={`discover ${ind ===  listIconicCocktails?.length - 1 ? 'last': ''}`}>
  <h1 className="discover-title">{title}</h1>
  <div className="discover-detail">
    <img src={images.logo3} alt="" width={80} height={80} className="detail-image" />
      <p className='detail--title'>
          {text}
      </p>
    <img src={images.logo3} alt="" width={80} height={80} className="detail-image" />
  </div>
  <div className='discover-list'>
    {
      list.map((ele,index)=>{
        return(
          <Fragment key={index}>
          <CardDiscover title={ele.title} content={ele.text} url={ele.image} center={center} index={index}/>
          </Fragment>
        )
      })
    }
  </div>
</div>
}
const listIconicCocktails = [
  {
    title:'Iconic Cocktails',
    text:'Những công thức biểu tượng trong ngành pha chế. Đây là những cái tên bạn đã được nghe tới không ít trong những bộ phim , video âm nhạc,...',
    list:[
      {
        title:'Green Parrot',
        text:'Medium',
        image:images.cocktailGreen,
      },
      {
        title:'Bloody Mary',
        text:'Medium',
        image:images.cocktailBloody,
      },
      {
        title:'Mojito',
        text:'Light',
        image:images.cocktailMojito,
      },
      {
        title:'Cosmopolitan',
        text:'Medium',
        image:images.cocktailCosmopolitan,
      },
      {
        title:'Blue Magarita',
        text:'Strong',
        image:images.cocktailMargarita,
      },
      {
        title:'Aperol Spritz',
        text:'Light',
        image:images.cocktailAperol,
      },
    ]
  },
  {
    title:'Base Spirits',
    text:'Những công thức liên quan tới những loại rượu nền mà bạn đang tìm kiếm. Chỉ dẫn rõ ràng của chúng tôi sẽ giúp bạn chạm tới hương vị bạn mong muốn',
    center:true,
    list:[
      {
        title:'Whiskey',
        text:'',
        image:images.Whiskey,
      },
      {
        title:'Gin',
        text:'',
        image:images.Gin,
      },
      {
        title:'Rum',
        text:'',
        image:images.Rum,
      },
      {
        title:'Tequila',
        text:'',
        image:images.Tequila,
      },
      {
        title:'Brandy',
        text:'',
        image:images.Brandy,
      },
      {
        title:'Vodka',
        text:'',
        image:images.Vodka,
      },
    ]
  },
  {
    title:'Latest Cocktails',
    text:'Những công thức mới nhất luôn được chúng tôi cập nhật liên tục để đáp ứng nhu cầu tìm hiểu ,tận hưởng hương vị của bạn.',
    list:[
      {
        title:'Tropical Dream',
        text:'Medium',
        image:images.TropicalDream,
      },
      {
        title:'Swimming Pool',
        text:'Light',
        image:images.TropicalDream,
      },
      {
        title:'Brontosaurus',
        text:'Nonalcoholic',
        image:images.Brontosaurus,
      },
      {
        title:'Cuba Libre',
        text:'Light',
        image:images.Cuba,
      },
      {
        title:'Mickey Mouse',
        text:'Light',
        image:images.Mickey,
      },
      {
        title:'Monkey Gland',
        text:'Strong',
        image:images.Monkey,
      },
    ]
  },
];
