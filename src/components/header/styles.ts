import styled from 'styled-components';

const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.black};
  a {
    font-size: 1.5rem;
    position: absolute;
    left: 10%;
  }
`;

const S = { Header };

export default S;
