export type CategoryType = '전체' | '대형' | '중형' | '소형';

export enum Segment {
  C = '소형',
  D = '중형',
  E = '대형',
  SUV = 'SUV',
}
export enum FuelType {
  gasoline = '가솔린',
  ev = '전기',
  hybrid = '하이브리드',
}

export type Attribute = {
  brand: string;
  name: string;
  segment: keyof typeof Segment;
  fuelType: keyof typeof FuelType;
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

export interface Car {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: Date;
  createdAt: Date;
  insurance?: Insurance[];
  additionalProducts?: AdditionalProducts[];
}
