import TitleInfo from 'components/tItleInfo/TitleInfo';
import { Navigate, useNavigate, useParams } from 'react-router';
import { useCarsState } from '../../hooks/useCars';
import DetailInfo from '../../components/detailInfo/DetailInfo';
import S from './styles';

enum TitleEnum {
  attribute = '차량정보',
  insurance = '보험',
  additionalProducts = '추가상품',
}

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useCarsState();
  const navigate = useNavigate();
  if (!id) {
    throw new Error('url 오류입니다.');
  }

  const car = data.find((item) => item.id === +id);
  if (isLoading) {
    return (
      <S.Layout>
        <h3>불러오는 중</h3>
      </S.Layout>
    );
  }
  if (!car) {
    return (
      <S.Layout>
        <h3>url을 확인해주세요</h3>
      </S.Layout>
    );
  }

  const { amount, attribute, startDate, insurance, additionalProducts } = car;

  return (
    <section>
      <S.Img src={attribute.imageUrl} alt="car_image" />
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
