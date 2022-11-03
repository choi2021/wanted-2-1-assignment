export type CategoryType = '전체' | 'SUV' | '대형' | '중형' | '소형';

export enum SegmentEnum {
  C = '소형',
  D = '중형',
  E = '대형',
  SUV = 'SUV',
}
export enum FuelEnum {
  gasoline = '가솔린',
  ev = '전기',
  hybrid = '하이브리드',
}

export type AttributeType = {
  brand: string;
  name: string;
  segment: keyof typeof SegmentEnum;
  fuelType: keyof typeof FuelEnum;
  imageUrl: string;
};

export type InsuranceType = {
  name: string;
  description: string;
};

export type AdditionalProductsType = {
  name: string;
  amount: number;
};

export type CarType = {
  id: number;
  amount: number;
  attribute: AttributeType;
  startDate: Date;
  createdAt: Date;
  insurance?: InsuranceType[];
  additionalProducts?: AdditionalProductsType[];
};
