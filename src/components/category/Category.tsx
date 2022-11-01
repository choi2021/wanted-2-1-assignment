import React from 'react';
import S from './styles';

interface ICategory {
  text: string;
  category: string;
}

const Category = ({ text, category }: ICategory) => {
  return (
    <li>
      <S.Btn type="button" isSelected={category === text}>
        {text}
      </S.Btn>
    </li>
  );
};

export default Category;
