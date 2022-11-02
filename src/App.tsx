import { useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header/Header';
import { useCarsDispatch } from 'hooks/useCars';
import ActionType from 'interfaces/ActionEnum';
import carsAPI from './service/carsService';
import HTTPError from './network/httpError';

const App = () => {
  const dispatch = useCarsDispatch();
  const getList = useCallback(async () => {
    dispatch({ type: ActionType.SET_IS_LOADING, isLoading: true });
    try {
      const response = await carsAPI.getCars();
      if (response) {
        dispatch({ type: ActionType.SET_DATA, data: response?.payload });
      }
    } catch (e) {
      if (e instanceof HTTPError) {
        dispatch({ type: ActionType.SET_ERROR, error: e.errorMessage });
      }
    } finally {
      dispatch({ type: ActionType.SET_IS_LOADING, isLoading: false });
    }
  }, [dispatch]);
  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
