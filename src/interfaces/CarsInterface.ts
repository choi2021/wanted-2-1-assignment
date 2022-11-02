export enum Segment {
  ENUMC = 'ENUMC',
  D = 'D',
  E = 'E',
  SUV = 'SUV',
}
export enum FuelType {
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

export interface Cars {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: Date;
  createdAt: Date;
  insurance?: Insurance[];
  additionalProducts?: AdditionalProducts[];
}
