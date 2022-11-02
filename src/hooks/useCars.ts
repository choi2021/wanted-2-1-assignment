import { useContext } from 'react';
import { CarsDispatchContext, CarsStateContext } from '../context/carsContext';

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
  const state = useContext(CarsStateContext);
  if (!state) throw new Error("Can't find State Provider");
  return state.data;
};
