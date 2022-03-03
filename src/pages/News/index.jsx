import React, { Fragment } from 'react';
import images from '../../images';
import CardNews from '../../component/CardNews';
import './index.scss';
const News = () => {
  return (
    <div className="news">
      {listIconicCocktails.map((item, index) => {
        return (
          <div key={index} className="news-item">
            <ItemNews item={item} />
          </div>
        );
      })}
      <div className='news-footer'>
       <h1 className="footer-title">ĐĂNG KÝ NHẬN BÀI VIẾT</h1>
       <div className='footer-subrice'>
        <input className='subrice-input' placeholder='Email Address'/>
        <button className='subrice-button'>SUBCRIBE</button>
       </div>
      </div>
    </div>
  );
};
export default News;

const ItemNews = ({ item }) => {
  const { title, list } = item;
  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="card-list">
        {list.map((i, index) => {
          return (
            <Fragment key={index}>
              <CardNews url={i.image} title={i.title} content={i.text} />
            </Fragment>
          );
        })}
      </div>
      <button className={`news-loadmore`}>Show More</button>
    </>
  );
};

const listIconicCocktails = [
  {
    title: 'Địa điểm Bar/Pub',
    list: [
      {
        title: "A Hard Day's Night - Góc Nhỏ Tối Giản, Ấm Cúng",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do temporincididunt ut labore et dolore magna aliqua. Ut adminim veniam, quis nostrud exercitation ullamco laboris nisi ut....',

        image: images.Blog1,
      },
      {
        title: 'Căn Phòng Chữa Lành Tâm Hồn - Room #210',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do temporincididunt ut labore et dolore magna aliqua. Ut adminim veniam, quis nostrud exercitation ullamco laboris nisi ut....',

        image: images.Blog2,
      },
      {
        title: 'Bảo Tàng Cận Đại Cuối Phố Đồ Chơi',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do temporincididunt ut labore et dolore magna aliqua. Ut adminim veniam, quis nostrud exercitation ullamco laboris nisi ut....',

        image: images.Blog3,
      },
      {
        title: '“Lối Đi” Trên Tầng Thượng',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do temporincididunt ut labore et dolore magna aliqua. Ut adminim veniam, quis nostrud exercitation ullamco laboris nisi ut....',
        image: images.Blog4,
      },
    ],
  },
  {
    title: 'Blog Chia Sẻ',
    center: true,
    list: [
      {
        title: 'Phân loại cocktail',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do temporincididunt ut labore et dolore magna aliqua. Ut adminim veniam, quis nostrud exercitation ullamco laboris nisi ut....',
        image: images.Whiskey,
      },
      {
        title: '3 Loại Cocktail Không Thể Thiếu Trong Ngày Halloween',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do temporincididunt ut labore et dolore magna aliqua. Ut adminim veniam, quis nostrud exercitation ullamco laboris nisi ut....',
        image: images.Gin,
      },
      {
        title: 'Tên các loại cocktail phổ biến ở Bar',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do temporincididunt ut labore et dolore magna aliqua. Ut adminim veniam, quis nostrud exercitation ullamco laboris nisi ut....',
        image: images.Rum,
      },
      {
        title: 'Rượu Nền Là Gì?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do temporincididunt ut labore et dolore magna aliqua. Ut adminim veniam, quis nostrud exercitation ullamco laboris nisi ut....',
        image: images.Tequila,
      },
    ],
  },
];
