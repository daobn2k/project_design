import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "./index.scss";
import { Pagination, Navigation, Autoplay } from "swiper";
const SliderBar = (props) => {
    const { list } = props
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation ,Autoplay]}
        // autoplay={{
        //     delay: 1500,
        //     disableOnInteraction: false,
        // }}
        className="mySwiper"
      >
          {
              list.map((ele,index)=>{
                return(
                    <SwiperSlide key={index} className="">
                    <img src={ele.url} alt=""/>
                    
                    <h1 className="swipper-title">{ele.title}</h1>
                    <p className="swipper-text">{ele.text}</p>
                    </SwiperSlide>
                )
              })
          }
      </Swiper>
    </>
  );
}
export default SliderBar