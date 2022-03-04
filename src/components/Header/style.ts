import styled from "styled-components";

export const HeaderContent = styled.header`
  background-color: #027373;
  width: 100%;
  height: 6rem;
  display: flex;
  box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  justify-content: space-around;
  padding: 0 .5rem;
`;

export const Logo = styled.img`
  width: 15rem;
  height: auto;
`;

export const Links = styled.div`
  display: flex;
  width: 25vw;
  justify-content: space-between;
`;

export const HeaderLink = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  .Link-Li {
    text-decoration: none;
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

export const SwitchDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const SwitchText = styled.span`
  font-size: 1.4rem;
  border-bottom: 0.1rem solid #67abab7e;
  margin-right: 1rem;
`;
