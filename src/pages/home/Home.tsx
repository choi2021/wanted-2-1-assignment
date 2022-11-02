import React, { useState, useEffect } from 'react';
import { useCarsDispatch } from 'hooks/useCars';

import { CategoryProvider } from 'context/categoryContext';
import Categories from '../../components/categories/Categories';
import CarList from '../../components/carList/CarList';
import S from './styles';
import ActionType from '../../interfaces/ActionEnum';
import carsAPI from '../../service/carsService';

const Home = () => {
  const dispatch = useCarsDispatch();
  const getList = async () => {
    dispatch({ type: ActionType.SET_IS_LOADING, isLoading: true });
    try {
      const response = await carsAPI.getCars();
      if (response) {
        dispatch({ type: ActionType.SET_DATA, data: response?.payload });
      }
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: ActionType.SET_IS_LOADING, isLoading: false });
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <CategoryProvider>
      <S.Section>
        <Categories />
        <CarList />
      </S.Section>
    </CategoryProvider>
  );
};

export default Home;
