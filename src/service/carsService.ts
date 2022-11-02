import axios, { AxiosInstance } from 'axios';
import { Cars, FuelType, Segment } from 'interfaces/CarsInterface';
import createAxiosInstance from './axiosUtils';

const BASE_URL = 'https://preonboarding.platdev.net/api/cars';

type GetCarsResponse = {
  payload: Cars[];
};

class CarsAPI {
  constructor(private axiosInstance: AxiosInstance) {}

  async getCars(fuelType?: FuelType, segment?: Segment) {
    try {
      const { data } = await this.axiosInstance.get<GetCarsResponse>(BASE_URL, {
        params: {
          fuelType,
          segment,
        },
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`${error.message}`);
      }
    }
  }
}

const carsAPIinstance = createAxiosInstance(BASE_URL);

const carsAPI = new CarsAPI(carsAPIinstance);
export default carsAPI;
