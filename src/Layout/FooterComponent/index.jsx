import React, {  } from 'react';
import './index.scss';
import { FaFacebook,FaTwitter,FaInstagramSquare} from "react-icons/fa";
const FooterComponent = () => {
  return (
    <div className="footer">
      <div className='description-footer'>
      {footerList.map((item,index) => {
       return itemFooter(item.title,item.text,index)
      })}
      </div>
      <div className='icon-footer'>
           <FaFacebook/>
           <FaTwitter/>
           <FaInstagramSquare/>
      </div>
    </div>
  );
};
export default FooterComponent;

const itemFooter = (title, text, key) => {
  return <div className="item-footer" key={key}>
    <p className="title-footer">{title}</p>
    <p className="text-footer">{text}</p>
  </div>;
};


const footerList = [
  {
    title: 'Download',
    text: 'Es simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industry',
  },
  {
    title: 'Community',
    text: 'Ds simply dummy text of the printing and typesetting industry is simply dummy text ',
  },
  {
    title: 'Contact',
    text: 'As simply dummy text of the printing and typesetting industry is simply dummy text of the printing and typesetting industryis simply dummy text of the printing and typesetting industry',
  },
];
