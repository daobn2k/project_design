import React,{  } from 'react';
import images from '../../images/index';
import './index.scss';
const HeaderComponent  = () => {
  return (
    <div className='header' >
      <div className='register'><h1 className='header-title'>Đăng ký / Đăng nhập</h1></div>
      <div className='logo'><img src={images.logo} alt=""/></div>
    </div>
  )
}
export default HeaderComponent