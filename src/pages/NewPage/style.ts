import styled from "styled-components";

export const TextDiv = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h4`
  margin-top: 10rem;
  font-size: 6rem;
  font-weight: 300;
  word-break: break-word;
  border-bottom: .1rem solid #67abab7e;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 4rem;
  }
`;
