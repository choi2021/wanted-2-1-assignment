import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header/Header';
import { CarsProvider } from 'context/carsContext';

const App = () => {
  return (
    <>
      <Header />
      <CarsProvider>
        <Outlet />
      </CarsProvider>
    </>
  );
};

export default App;
