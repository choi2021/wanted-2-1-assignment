import { useContext, useState, useEffect } from 'react';
import getCars from '../service/carsService';

const useFetch = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const getList = async () => {
    setIsLoading(true);
    try {
      const data = await getCars();
    } catch (e) {
      setError(e.errorMessage);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getList();
  }, [cars]);

  return [cars, isLoading, error];
};

export default useFetch;
