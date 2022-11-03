import { useCategory } from 'hooks/useCars';
import { CategoryType } from 'types/CarsInterface';
import React from 'react';
import S from './styles';

interface CategoryProps {
  text: CategoryType;
}

const Category = ({ text }: CategoryProps) => {
  const { category, setCategory } = useCategory();
  const handleClick = () => {
    setCategory(text);
  };
  return (
    <li>
      <S.Btn type="button" isSelected={category === text} onClick={handleClick}>
        {text}
      </S.Btn>
    </li>
  );
};

export default Category;
