import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.grey};
`;

const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
`;

const S = {
  Img,
  Layout,
};

export default S;
