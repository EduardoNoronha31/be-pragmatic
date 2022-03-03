import styled from "styled-components";

export const Text = styled.h1`
  color: #ebe9ea;
  font-size: 5rem;
  font-weight: 300;
  height: 10rem;
  width: 100%;
  border-bottom: 0.1rem solid #67abab7e;
  margin-bottom: 5rem;
  @media screen and (max-width: 540px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 510px) {
    margin-bottom: 3rem;
    height: 8rem;
  }
`;
