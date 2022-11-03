import axios, { AxiosError, AxiosInstance } from 'axios';
import { CarType, FuelEnum, SegmentEnum } from 'types/CarsInterface';
import createAxiosInstance from './axiosUtils';
import HTTPError from '../network/httpError';

const BASE_URL = 'https://preonboarding.platdev.net/api/cars';

type GetCarsResponse = {
  payload: CarType[];
};

class CarsAPI {
  constructor(private axiosInstance: AxiosInstance) {}

  async getCars(fuelType?: FuelEnum, segment?: SegmentEnum) {
    try {
      const { data } = await this.axiosInstance.get<GetCarsResponse>(BASE_URL, {
        params: {
          fuelType,
          segment,
        },
      });
      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) {
        throw new HTTPError(response?.status, response?.statusText);
      }
      throw new Error('Unknown Error');
    }
  }
}

const carsAPIinstance = createAxiosInstance(BASE_URL);

const carsAPI = new CarsAPI(carsAPIinstance);

export default carsAPI;
