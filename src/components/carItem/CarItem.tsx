import { Attribute, Car, FuelType, Segment } from 'interfaces/CarsInterface';
import React from 'react';
import { Link } from 'react-router-dom';
import S from './styles';
import checkWithinOneday from '../../utils/checkWithinOneday';

const CarItem = ({ attribute, amount, id, createdAt }: Car) => {
  const { brand, name, segment, fuelType, imageUrl } = attribute;
  const iswithInOneday = checkWithinOneday(createdAt);
  return (
    <S.Layout>
      <Link to={`/details/${id}`}>
        <S.Metadata>
          <div>
            <h3>{brand}</h3>
            <h3>{name}</h3>
          </div>
          <p>{`${Segment[segment]} / ${FuelType[fuelType]}`}</p>
          <p>월 {amount.toLocaleString()} 원 부터</p>
        </S.Metadata>
        <S.ImgBox>
          {iswithInOneday && <S.Tag>신규</S.Tag>}
          <img src={imageUrl} alt="car_image" />
        </S.ImgBox>
      </Link>
    </S.Layout>
  );
};

export default CarItem;
