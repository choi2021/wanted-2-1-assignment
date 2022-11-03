import { CategoryProvider } from 'context/categoryContext';
import { Helmet } from 'react-helmet-async';
import Categories from '../../components/categories/Categories';
import CarList from '../../components/carList/CarList';
import S from './styles';

const Home = () => {
  return (
    <CategoryProvider>
      <Helmet>
        <title>Car List</title>
      </Helmet>
      <S.Section>
        <Categories />
        <CarList />
      </S.Section>
    </CategoryProvider>
  );
};

export default Home;
