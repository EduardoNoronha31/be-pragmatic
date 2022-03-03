import styled from "styled-components";

export const HomeContent = styled.div`
  width: 100%;
  height: auto;
`;

export const Home = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  margin: 10rem 10rem 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 510px) {
    margin: 5rem 5rem 0;
  }
`;
