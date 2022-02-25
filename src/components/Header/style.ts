import styled from "styled-components";

export const HeaderContent = styled.header`
  background-color: #027373;
  width: 100%;
  height: 6rem;
  display: flex;
  box-shadow: 0px 11px 31px -5px rgba(2, 115, 115, 0.3);
`;

export const Logo = styled.img`
  width: 15rem;
  height: auto;
  margin-left: 20rem;
`;

export const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  padding-right: 20rem;
  li {
    padding: 0 0 0 10rem;
    list-style: none;
    .Link-Li {
      text-decoration: none;
      color: #ebe9ea;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 2rem;
      transition: 0.3s;
      :hover {
        color: #172026;
        font-size: 2.1rem;
      }
    }
  }
`;
