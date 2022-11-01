import styled from 'styled-components';

const Btn = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.black : props.theme.colors.grey};
  color: ${(props) => (props.isSelected ? 'white' : props.theme.colors.grey)};
  outline: none;
  border: none;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.3rem 1.3rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const S = {
  Btn,
};

export default S;
