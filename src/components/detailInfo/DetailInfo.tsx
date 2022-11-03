import {
  AdditionalProductsType,
  AttributeType,
  FuelEnum,
  InsuranceType,
  SegmentEnum,
} from 'types/CarsInterface';
import S from './styles';
import DetailList from '../detailList/DetailList';

interface DetailInfoProps {
  title: string;
  startDate?: Date;
  attribute?: AttributeType;
  infoArray?: InsuranceType[] | AdditionalProductsType[];
}

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
    <S.Layout>
      <S.TitleBox>{title}</S.TitleBox>
      {infoArray && <DetailList infoArray={infoArray} />}
      {attributeArray && <DetailList infoArray={attributeArray} />}
    </S.Layout>
  );
};

export default DetailInfo;
