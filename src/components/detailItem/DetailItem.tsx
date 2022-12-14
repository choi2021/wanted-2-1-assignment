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
      {amount && <span>{`μ ${amount.toLocaleString()} μ`}</span>}
      {startDate && <span>{`${formatDate(startDate)} λΆν°`}</span>}
    </S.Item>
  );
};

export default DetailItem;
