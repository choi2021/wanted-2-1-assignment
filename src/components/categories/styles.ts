import styled from 'styled-components';

const Nav = styled.nav`
  border-bottom: ${(props) => props.theme.border.bottom};
  padding: 0.5rem 1rem;
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
    display: flex;
  }
`;
const S = {
  Nav,
};

export default S;
