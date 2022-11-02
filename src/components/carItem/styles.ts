import styled from 'styled-components';

const Layout = styled.li`
  padding: 1rem 1.3rem;
  border-bottom: ${(props) => props.theme.border.bottom};
  a {
    display: flex;
    align-items: center;
  }
`;

const Metadata = styled.div`
  position: relative;
  width: 50%;
  line-height: 1.4;
  h3 {
    font-size: 1.1rem;
    font-weight: bold;
  }
  div {
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.1rem;
  }
`;

const ImgBox = styled.div`
  width: 50%;
  position: relative;
  background-color: ${(props) => props.theme.colors.grey};
  img {
    max-width: 100%;
  }
`;

const Tag = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  font-size: 1rem;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  position: absolute;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  right: -10px;
  top: -10px;
`;

const S = {
  Layout,
  ImgBox,
  Tag,
  Metadata,
};

export default S;
