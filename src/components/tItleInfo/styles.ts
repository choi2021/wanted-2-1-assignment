import styled from 'styled-components';

const Layout = styled.div`
  padding: 0.8rem 1.5rem;
  display: flex;
  flex-direction: column;
  h3,
  h1 {
    line-height: 1.2;
    font-weight: bold;
  }
  h3 {
    font-size: 1.2rem;
  }
  h1 {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
  }
  p {
    align-self: flex-end;
    font-size: 1.1rem;
  }
`;

const S = { Layout };

export default S;
