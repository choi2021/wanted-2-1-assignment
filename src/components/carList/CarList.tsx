import React from 'react';
import styled from 'styled-components';
import CarItem from '../carItem/CarItem';
import { useCarsState } from '../../hooks/useCars';

const Layout = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarList = () => {
  const { data, isLoading } = useCarsState();
  if (isLoading) {
    return (
      <Layout>
        <h3>불러오는 중</h3>
      </Layout>
    );
  }

  if (data.length === 0) {
    return (
      <Layout>
        <h3>차량이 없습니다.</h3>
      </Layout>
    );
  }
  return (
    <ul>
      {data.map((car) => (
        <CarItem />
      ))}
    </ul>
  );
};

export default CarList;
