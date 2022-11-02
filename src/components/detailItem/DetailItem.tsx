import React from 'react';
import styled from 'styled-components';
import formatDate from '../../utils/formatDate';

interface DetailItemProps {
  name: string;
  description?: string;
  amount?: number;
  startDate?: Date;
}

const Item = styled.li`
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  span:first-child {
    font-weight: bold;
  }
`;

const DetailItem = ({
  name,
  description,
  amount,
  startDate,
}: DetailItemProps) => {
  return (
    <Item>
      <span>{name}</span>
      {description && <span>{description}</span>}
      {amount && <span>{`월 ${amount.toLocaleString()} 원`}</span>}
      {startDate && <span>{`${formatDate(startDate)} 부터`}</span>}
    </Item>
  );
};

export default DetailItem;
