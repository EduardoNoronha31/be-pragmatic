import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const HeaderContent = styled.header`
  background-color: #027373;
  width: 100%;
  height: 6rem;
  display: flex;
  box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  justify-content: space-around;
  padding: 0 0.5rem;
  #hidden {
    @media screen and (max-width: 980px) {
      display: flex;
      position: absolute;
      left: 0;
      top: 6rem;
      background-color: #027373;
      width: 100%;
      height: 40rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 35px 33px 2px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Logo = styled.img`
  width: 15rem;
  height: auto;
`;

export const Links = styled.div`
  display: flex;
  width: 25vw;
  justify-content: space-between;
  @media (max-width: 980px) {
    display: none;
  }
`;

export const HeaderLink = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  .Link-Li {
    text-decoration: none;
    font-size: 1.7rem;
    transition: 0.3s;
    @media screen and (max-width: 980px) {
      border-bottom: 0.1rem solid #67abab7e;
    }
    :hover {
      color: #172026;
      font-size: 1.9rem;
    }
  }
`;

export const SwitchDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const SwitchText = styled.span`
  font-size: 1.4rem;
  border-bottom: 0.1rem solid #67abab7e;
  margin-bottom: 1rem;
`;

export const BarsDiv = styled.div`
  display: none;
  @media (max-width: 980px) {
    display: flex;
    align-items: center;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  @media (max-width: 980px) {
    display: flex;
    font-size: 3rem;
    cursor: pointer;
  }
`;
