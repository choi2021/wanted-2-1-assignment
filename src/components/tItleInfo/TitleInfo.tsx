import React from 'react';
import { AttributeType } from 'types/CarsInterface';
import S from './styles';

interface TitleInfoProps {
  attribute: AttributeType;
  amount: number;
}

const TitleInfo = ({ attribute, amount }: TitleInfoProps) => {
  const { brand, name } = attribute;
  return (
    <S.Layout>
      <h3>{brand}</h3>
      <h1>{name}</h1>
      <p>{`월 ${amount.toLocaleString()} 원`}</p>
    </S.Layout>
  );
};

export default TitleInfo;
