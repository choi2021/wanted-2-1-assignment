import styled from 'styled-components';

const Layout = styled.section``;

const TitleBox = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  padding: 0.8rem 1.5rem;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.1rem;
  font-weight: bold;
`;

const S = {
  Layout,
  TitleBox,
};

export default S;
