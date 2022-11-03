import Category from 'components/category/Category';
import { CategoryType } from 'types/CarsInterface';
import S from './styles';

const categories: CategoryType[] = ['전체', 'SUV', '대형', '중형', '소형'];
const Categories = () => {
  return (
    <S.Nav>
      <S.Wrapper>
        <ul>
          {categories.map((item) => (
            <Category key={item} text={item} />
          ))}
        </ul>
      </S.Wrapper>
    </S.Nav>
  );
};

export default Categories;
