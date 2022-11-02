import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import S from './styles';

enum Title {
  Home = '전체차량',
  Detail = '차량상세',
}

const HOME_URL = '/';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === HOME_URL;
  const text = isHome ? Title.Home : Title.Detail;
  return (
    <S.Header>
      {!isHome && (
        <Link to="/">
          <AiOutlineArrowLeft />
        </Link>
      )}
      <h3>{text}</h3>
    </S.Header>
  );
};

export default Header;
