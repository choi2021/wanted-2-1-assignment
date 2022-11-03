import { createContext, useState, useMemo, Dispatch } from 'react';
import { CategoryType } from 'types/CarsInterface';

const initialState = {
  category: '전체',
  setCategory: (category: CategoryType) => {},
};

export const CategoryContext = createContext(initialState);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState<CategoryType>('전체');
  const value = useMemo(() => ({ category, setCategory }), [category]);
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
