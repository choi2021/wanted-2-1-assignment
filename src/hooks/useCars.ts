import { useContext } from 'react';
import { SegmentEnum } from 'types/CarsInterface';
import { CarsDispatchContext, CarsStateContext } from '../context/carsContext';
import { CategoryContext } from '../context/categoryContext';

export const useCarsState = () => {
  const state = useContext(CarsStateContext);
  if (!state) throw new Error("Can't find State Provider");
  return state;
};

export const useCarsDispatch = () => {
  const dispatch = useContext(CarsDispatchContext);
  if (!dispatch) throw new Error("Can't find Dispatch Provider");
  return dispatch;
};

export const useCarsValue = () => {
  const state = useCarsState();
  const { category } = useContext(CategoryContext);

  if (!state) throw new Error("Can't find StateProvider");
  if (!category) throw new Error("Can't find CategoryProvider");
  if (category === '전체') return state.data;

  const filterd = state?.data.filter(
    (car) => SegmentEnum[car.attribute.segment] === category
  );
  return filterd;
};

export const useCategory = () => useContext(CategoryContext);
