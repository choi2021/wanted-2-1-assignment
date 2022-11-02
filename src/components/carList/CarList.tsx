import React from 'react';
import S from './styles';
import CarItem from '../carItem/CarItem';
import { useCarsState, useCarsValue } from '../../hooks/useCars';

const CarList = () => {
  const { isLoading, error } = useCarsState();
  const data = useCarsValue();
  if (isLoading) {
    return (
      <S.Layout>
        <h3>불러오는 중</h3>
      </S.Layout>
    );
  }

  if (error) {
    return (
      <S.Layout>
        <h3>{error}</h3>
      </S.Layout>
    );
  }

  if (data.length === 0) {
    return (
      <S.Layout>
        <h3>차량이 없습니다.</h3>
      </S.Layout>
    );
  }
  return (
    <ul>
      {data.map((car) => (
        <CarItem key={car.id} {...car} />
      ))}
    </ul>
  );
};

export default CarList;
