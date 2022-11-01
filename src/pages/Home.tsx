import React, { useState } from 'react';
import Categories from '../components/categories/Categories';

type CategoryType = '전체' | '대형' | '중형' | '소형';

const categories: CategoryType[] = ['전체', '대형', '중형', '소형'];

const Home = () => {
  const [category, setCategory] = useState(categories[0]);
  return (
    <>
      <Categories categories={categories} />
      <div />
    </>
  );
};

export default Home;
