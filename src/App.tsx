import { useEffect, useCallback } from 'react';
import Header from 'components/header/Header';
import { useCarsDispatch } from 'hooks/useCars';
import ActionType from 'types/ActionEnum';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
      console.error(e);
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
      <HelmetProvider>
        <Outlet />
      </HelmetProvider>
    </>
  );
};

export default App;
