import styled from 'styled-components';

const Btn = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.black : props.theme.colors.grey};
  color: ${(props) =>
    props.isSelected ? props.theme.colors.white : props.theme.colors.black};
  outline: none;
  border: none;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  font-size: 0.9rem;
`;

const S = {
  Btn,
};

export default S;
