import styled from "styled-components";

export const HeaderContent = styled.header`
  background-color: #027373;
  width: 100%;
  height: 6rem;
  display: flex;
  box-shadow: 0px 15px 34px 8px rgba(0,0,0,0.20);
  z-index: 10;
`;

export const Logo = styled.img`
  width: 15rem;
  height: auto;
  margin-left: 10rem;
  @media screen and (max-width: 510px) {
    margin-left: 5rem;
  }
`;

export const Links = styled.div`
  display: flex;
  width: 25vw;
  justify-content: space-between;
  margin-left: 10rem;
`;

export const HeaderLink = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  .Link-Li {
    text-decoration: none;
    color: #ebe9ea;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.7rem;
    transition: 0.3s;
    :hover {
      color: #172026;
      font-size: 1.9rem;
    }
    @media (max-width: 980px) {
      display: none;
    }
  }
`;


