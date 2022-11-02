import {
  AdditionalProductsType,
  AttributeType,
  FuelEnum,
  InsuranceType,
  SegmentEnum,
} from 'interfaces/CarsInterface';
import React from 'react';
import styled from 'styled-components';
import DetailList from '../detailList/DetailList';

interface DetailInfoProps {
  title: string;
  startDate?: Date;
  attribute?: AttributeType;
  infoArray?: InsuranceType[] | AdditionalProductsType[];
}

const Layout = styled.section``;

const TitleBox = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  padding: 0.8rem 1.5rem;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.1rem;
  font-weight: bold;
`;

const DetailInfo = ({
  title,
  startDate,
  attribute,
  infoArray,
}: DetailInfoProps) => {
  const attributeArray = attribute && [
    { name: '차종', description: SegmentEnum[attribute?.segment] },
    { name: '연료', description: FuelEnum[attribute?.fuelType] },
    { name: '이용가능일', startDate },
  ];
  return (
    <Layout>
      <TitleBox>{title}</TitleBox>
      {infoArray && <DetailList infoArray={infoArray} />}
      {attributeArray && <DetailList infoArray={attributeArray} />}
    </Layout>
  );
};

export default DetailInfo;
