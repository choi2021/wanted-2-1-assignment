import styled from 'styled-components';

const Nav = styled.nav`
  border-bottom: ${(props) => props.theme.border.bottom};
  padding: 0.5rem 0rem;
  ul {
    width: 150%;
    list-style: none;
    margin: 0;
    padding-left: 1rem;
    display: flex;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const S = {
  Nav,
  Wrapper,
};
export default S;
