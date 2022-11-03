import DetailItem from 'components/detailItem/DetailItem';
import { AdditionalProductsType, InsuranceType } from 'types/CarsInterface';

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
        <DetailItem key={item.name} {...item} />
      ))}
    </ul>
  );
};

export default DetailList;
