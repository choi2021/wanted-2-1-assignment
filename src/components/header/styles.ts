import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: ${(props) => props.theme.border.bottom};
  a {
    font-size: 1.5rem;
    position: absolute;
    left: 10%;
  }
`;

const S = { Header };

export default S;
