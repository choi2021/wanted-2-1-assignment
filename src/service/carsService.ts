import { AxiosInstance } from 'axios';
import { Cars, FuelType, Segment } from 'interfaces/CarsInterface';
import createAxiosInstance from './axiosUtils';

const BASE_URL = 'https://preonboarding.platdev.net/api/cars';

type GetCarsResponse = {
  data: Cars[];
};

class CarsAPI {
  constructor(private axiosInstance: AxiosInstance) {}

  async getCars(fuelType: FuelType, segment: Segment) {
    const response = this.axiosInstance.get<GetCarsResponse>(BASE_URL, {
      params: {
        fuelType,
        segment,
      },
    });
    console.log(response);
  }
}

const carsAPIinstance = createAxiosInstance(BASE_URL);

const carsAPI = new CarsAPI(carsAPIinstance);
export default carsAPI;
