import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <images src='/public/images/img-home.jpg' />
      <h1>DỮ LIỆU ĐO HÔM NAY</h1>
      <p>Dữ liệu đo (Chọn vào khu vực để xem chi tiết)</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <h3>Trên sông tiền</h3>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <h3>Khu vực Tân Mỹ Chánh</h3>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;