import DetailItem from 'components/detailItem/DetailItem';
import {
  AdditionalProductsType,
  FuelEnum,
  InsuranceType,
  SegmentEnum,
} from 'interfaces/CarsInterface';
import React from 'react';

type AttributeArrayType = {
  name: string;
  description?: string;
  startDate?: Date;
};

interface DetailListProps {
  infoArray: InsuranceType[] | AdditionalProductsType[] | AttributeArrayType[];
}

const DetailList = ({ infoArray }: DetailListProps) => {
  return (
    <ul>
      {infoArray.map((item) => (
        <DetailItem {...item} />
      ))}
    </ul>
  );
};

export default DetailList;
