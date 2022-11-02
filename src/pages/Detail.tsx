import CarInfo from 'components/detailInfo/DetailInfo';
import TitleInfo from 'components/tItleInfo/TitleInfo';
import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import { useCarsState } from '../hooks/useCars';
import DetailInfo from '../components/detailInfo/DetailInfo';

const Img = styled.img`
  max-width: 100%;
  background-color: grey;
`;

enum TitleEnum {
  attribute = '차량정보',
  insurance = '보험',
  additionalProducts = '추가상품',
}

const Detail = () => {
  const { id } = useParams();
  const { data } = useCarsState();
  const navigate = useNavigate();
  if (!id) {
    throw new Error('url 오류입니다.');
  }
  const car = data.find((item) => item.id === +id);
  if (!car) {
    throw new Error('잘못된 url입니다.');
  }
  const { amount, attribute, startDate, insurance, additionalProducts } = car;

  return (
    <section>
      <Img src={attribute.imageUrl} alt="car_image" />
      <TitleInfo attribute={attribute} amount={amount} />
      <DetailInfo
        title={TitleEnum.attribute}
        attribute={attribute}
        startDate={startDate}
      />
      <DetailInfo title={TitleEnum.insurance} infoArray={insurance} />
      <DetailInfo
        title={TitleEnum.additionalProducts}
        infoArray={additionalProducts}
      />
    </section>
  );
};

export default Detail;
