import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 10rem 10rem 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 510px) {
    margin: 5rem 5rem 0;
  }
`;

export const IconMain = styled.a`
  width: 6rem;
  height: auto;
  .icon {
    font-size: 6rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  .LinkMain {
    width: 100%;
    font-size: 2.6rem;
    padding-left: 1rem;
    transition: color .15s ease-in;
    :hover {
      color: #027373;
    }
    @media screen and (max-width: 510px) {
      font-size: 2.2rem;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  margin-bottom: 2rem;
`;
