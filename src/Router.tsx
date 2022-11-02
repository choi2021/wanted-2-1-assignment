import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CarsProvider } from 'context/carsContext';
import NotFound from 'pages/notfound/NotFound';
import App from './App';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
    ],
  },
]);

const Router = () => {
  return (
    <CarsProvider>
      <RouterProvider router={router} />
    </CarsProvider>
  );
};

export default Router;
