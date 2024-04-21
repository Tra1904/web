import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  // Khai báo state
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Xử lý sự kiện click
  const handleClick = () => setClick(!click);

  // Đóng menu di động
  const closeMobileMenu = () => setClick(false);

  // Kiểm tra kích thước màn hình và hiển thị button đăng nhập tương ứng
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // Thiết lập trạng thái ban đầu cho button khi load trang
  useEffect(() => {
    showButton();
  }, []);

  // Thêm sự kiện resize để điều chỉnh hiển thị button
  window.addEventListener('resize', showButton);

  return (
    <>
      {/* Thanh navbar */}
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className="logo-container"> {/* Di chuyển logo-container lên đầu */}
            <a href="/" onClick={closeMobileMenu}><img src="images/logo2.png" alt="logo2" /></a>
          </div>

          {/* Tiêu đề */}
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            HỆ THỐNG QUAN TRẮC TIỀN GIANG <i className='fab fa-typo3' />
          </Link>

          {/* Icon menu */}
          <div className='menu icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* Danh sách menu */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Thông-báo-mặn' className='nav-links' onClick={closeMobileMenu}>
                Thông báo mặn
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Đăng-nhập' className='nav-links-mobile' onClick={closeMobileMenu}>
                Đăng Nhập
              </Link>
            </li>
          </ul>

          {/* Button Đăng nhập */}
          {button && <Button buttonStyle='btn--outline'>Đăng Nhập</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
