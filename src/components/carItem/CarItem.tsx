import { CarType, FuelEnum, SegmentEnum } from 'types/CarsInterface';
import { Link } from 'react-router-dom';
import S from './styles';
import checkWithinOneday from '../../utils/checkWithinOneday';

const CarItem = ({ attribute, amount, id, createdAt }: CarType) => {
  const { brand, name, segment, fuelType, imageUrl } = attribute;
  const iswithInOneday = checkWithinOneday(createdAt);
  return (
    <S.Layout>
      <Link to={`/detail/${id}`}>
        <S.Metadata>
          <div>
            <h3>{brand}</h3>
            <h3>{name}</h3>
          </div>
          <p>{`${SegmentEnum[segment]} / ${FuelEnum[fuelType]}`}</p>
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
