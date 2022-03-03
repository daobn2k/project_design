import React from 'react';
import images from '../../images';
import './index.scss';
const HomePage = () => {
  return (
    <div className="home">
      <div className="discover">
        <h1 className="title">Discover</h1>
        <div className="discover-description">
          {listDiscover.map((item, index) => {
            return (
              <div className="discover-item" key={index}>
                <div className="discover-card">
                  <img src={item.url} alt="" className="discover-img" width={80} height={80} />
                </div>
                <h3 className="discover-text">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cocktails">
        <h1 className="title">Cocktails</h1>
        <div className="cocktails-description">
          {listCocktails.map((i, index) => {
              const styleDiv = {
                width:'50%',
                paddingLeft:index % 2 === 0 || index === 0 ? '30px' : '',
                paddingRight:index === 1 ? '30px' : '',

              }
            return (
              <div className={`cocktails-card ${index === 1 ? '' : 'reverse'}`} key={index} >
                <div className="container" style={{backgroundImage: "url(" + i.url + ")"}}/>
                <div className="cocktails-detail" style={styleDiv}>
                  <h1 className="cocktails-title">{i.title}</h1>
                  <p className="cocktails-text">{i.text}</p>
                  <div className={`cocktails-button`}>
                    <button className={`cocktails-loadmore`}>Show More</button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='news'>
        <div className="news-description">
              <div className='new-logo'> 
              <img src={images.homePagePicture} alt="" className="news-image" />
              </div>
              <div className="news-card" >
                <h1 className="title">News</h1>
                <div className="news-detail">
                  <h3 className="news-subtitle">Dram - Hiện thân của sự sang trọng</h3>
                  <p className="cocktails-text">Tôi biết Dram mở cửa từ năm ngoái, nhưng mãi
                đến hôm qua mới có dịp ghé thăm. Toạ lạc tại
                quận 2, khu Thảo Điền, một không gian sang trọng
                với lối đi bí mật mà bạn phải hỏi nhân viên để có
                thể thấy được.</p>
                </div>
                <div className={`news-button`}>
                    <button className={`cocktails-loadmore`}>Show More</button>
                </div>
              </div>
        </div>
      </div>
      <div className='about'>
        <div className="title">
                ABOUT US
        </div>
        <p className="cocktails-text">Tôi biết Dram mở cửa từ năm ngoái, nhưng mãi
                đến hôm qua mới có dịp ghé thăm. Toạ lạc tại
                quận 2, khu Thảo Điền, một không gian sang trọng
                với lối đi bí mật mà bạn phải hỏi nhân viên để có
                thể thấy được.</p>
      </div>
    </div>
  );
};
export default HomePage;

const listDiscover = [
  {
    title: 'ICONIC COCKTAILS',
    url: images.logoHome1,
  },
  {
    title: 'BASE SPIRITS',
    url: images.logoHome2,
  },
  {
    title: 'LATEST COCKTAILS',
    url: images.logoHome3,
  },
];
const listCocktails = [
  {
    title: 'MOJITO',
    text: 'Cocktail Mojito là một trong những loại cocktail rất được yêu thích. Đó là sự kết hợp của chanh tươi, lá bạc hà và rượu Rhum.Sau đây là công thức để pha 1 ly Mojito.',
    url: images.mojto,
  },
  {
    title: 'MANHATTAN',
    text: 'Nhắc đến cocktail, người ta không thể không nhắc đến Manhattan – một loại cocktail được kết hợp từ các loại rượu mạnh với nhau.Bên cạnh hương vị đặc sắc, Cocktail Manhattan còn thu hút người thưởng thức nhờ sắc màu hồng ngọc quyến rũ, đẹp mắt.',
    url: images.manhattan,
  },
  {
    title: 'MARTINI',
    text: 'Martini được mệnh danh là “ông hoàng của cocktail” với hương vị đầy bùng nổ, cuốn hút ngay từ lần nếm thử đầu tiên. Đã có rất vô số tranh cãi gay gắt về tỉ lệ hợp lý của rượu gin và dry vermouth để tạo nên một ly Martini chuẩn vị.',
    url: images.martini,
  },
];
