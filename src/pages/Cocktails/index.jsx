import React from 'react';
import images from '../../images';
import './index.scss';
import { FaAngleLeft ,FaAngleRight } from "react-icons/fa";

const CocktailsPage = () => {
  return (
    <div className="cocktails">
      <div className="logo ">
        <img src={images.logo3} alt="" width={80} height={80} className="logo-image" />
      </div>
      <div className="cocktails">
        <div className="search">
          <input type="text" className="search-input" />
          <button className="search-button">FILTER</button>
        </div>
        <div className="cocktails-description">
          {listCocktails.map((i, index) => {
            const styleDiv = {
              width: '50%',
              paddingLeft: index % 2 === 0 || index === 0 ? '30px' : '',
              paddingRight: index === 1 ? '30px' : '',
            };
            return (
              <div className={`cocktails-card ${index % 2 !== 0 || index === 1 ? '' : 'reverse'}`} key={index}>
                <div className="container" style={{backgroundImage: "url(" + i.url + ")"}}>
                </div>
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
      <div className="pagging">
        <ul class="page">
          <li class="page__btn">
          <FaAngleLeft />
          </li>
          <li class="page__numbers active"> 1</li>
          <li class="page__numbers">2</li>
          <li class="page__numbers">3</li>
          <li class="page__numbers">4</li>
          <li class="page__numbers">5</li>
          <li class="page__numbers">6</li>
          <li class="page__dots">...</li>
          <li class="page__numbers"> 10</li>
          <li class="page__btn">
          <FaAngleRight />
          </li>
        </ul>
      </div>
      <div className="logo last">
        <img src={images.logo3} alt="" width={80} height={80} className="logo-image" />
      </div>
    </div>
  );
};
export default CocktailsPage;
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
  {
    title: 'DAIQUIRI',
    text: 'Nếu là một nhân viên mỏ người Mỹ bị “mắc kẹt” ở Cuba thì bạn sẽ làm gì? Liệu có bắt đầu sáng tạo đồ uống như Jennings Cox? Daiquiri được kết hợp từ rượu rum, chanh, đường được cho rằng đã “xuất hiện” trên cuộc đời vào năm 1905 khi Cox và một số đồng sự người........',
    url: images.DAIQUIRI,
  },
  {
    title: 'NEGRONI',
    text: 'Bá tước Camillo Negroni rất được trọng vọng khi sáng tạo loại rượu khai vị này vào khoảng 1919. Câu chuyện kể lại rằng, Negroni thực sự yêu thích vị ngon truyền thống của người Mỹ (kết hợp của campari, vermouth và soda).',
    url: images.NEGRONI,
  },
];
