import React, { useState, useEffect } from 'react';
import { useCarsDispatch } from 'hooks/useCars';
import Categories from '../../components/categories/Categories';
import CarList from '../../components/carList/CarList';
import S from './styles';
import ActionType from '../../interfaces/ActionEnum';
import carsAPI from '../../service/carsService';

type CategoryType = '전체' | '대형' | '중형' | '소형';

const categories: CategoryType[] = ['전체', '대형', '중형', '소형'];

const Home = () => {
  const [category, setCategory] = useState(categories[0]);

  const dispatch = useCarsDispatch();
  const getList = async () => {
    dispatch({ type: ActionType.SET_IS_LOADING });
    try {
      const response = await carsAPI.getCars();
      if (response) {
        dispatch({ type: ActionType.SET_DATA, data: response?.payload });
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <S.Section>
      <Categories categories={categories} />
      <CarList />
    </S.Section>
  );
};

export default Home;
