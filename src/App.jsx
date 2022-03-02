import React,{} from 'react';
import './index.scss';
import FooterComponent from './Layout/FooterComponent';
import HeaderComponent from './Layout/HeaderComponent';
import MainComponent from './Layout/MainComponent';

const  App = () => {
  return (
  <div >
      <HeaderComponent />
       <MainComponent />
      <FooterComponent />
  </div>
  );
}

export default App;
