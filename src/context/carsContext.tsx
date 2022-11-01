import { createContext, useContext, useMemo, useState } from 'react';

enum Segment {
  ENUMC = 'ENUMC',
  D = 'D',
  E = 'E',
  SUV = 'SUV',
}
enum FuelType {
  gasoline = 'gasoline',
  ev = 'ev',
  hybrid = 'hybrid',
}

type Attribute = {
  brand: string;
  name: string;
  segment: Segment;
  fuelType: FuelType;
  imageUrl: string;
};

type Insurance = {
  name: string;
  description: string;
};

type AdditionalProducts = {
  name: string;
  amount: number;
};

interface ICars {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: Date;
  createdAt: Date;
  insurance?: Insurance[];
  additionalProducts?: AdditionalProducts[];
}

type CarsState = {
  cars: ICars[];
};

const CarsContext = createContext<CarsState | null>(null);

export const useCars = () => useContext(CarsContext);

export const CarsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cars, setCars] = useState<ICars[]>([]);
  const value = useMemo(() => ({ cars, setCars }), [cars]);
  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
};
