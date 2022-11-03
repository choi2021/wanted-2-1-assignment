import formatDate from '../../utils/formatDate';
import S from './styles';

interface DetailItemProps {
  name: string;
  description?: string;
  amount?: number;
  startDate?: Date;
}

const DetailItem = ({
  name,
  description,
  amount,
  startDate,
}: DetailItemProps) => {
  return (
    <S.Item>
      <span>{name}</span>
      {description && <span>{description}</span>}
      {amount && <span>{`월 ${amount.toLocaleString()} 원`}</span>}
      {startDate && <span>{`${formatDate(startDate)} 부터`}</span>}
    </S.Item>
  );
};

export default DetailItem;
