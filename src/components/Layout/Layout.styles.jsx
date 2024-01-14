import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const DefaultHr = styled.hr`
  max-width: 1880px;
`;

export const DefaultButton = styled.button`
  background-color: #e1d7f9;
  background-image: linear-gradient(#baa7e6, #baa7e6);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: 0.4s;
  padding: 8px;
  border: none;
  width: 100%;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #baa7e6;
    cursor: pointer;
    background-size: 100% 100%;
  }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Loader = styled.div`
  margin: auto;
  border: 10px solid blue;
  border-top: 10px solid lightblue;
  border-radius: 50%;
  width: 110px;
  height: 110px;
  animation: spin 1.4s linear infinite alternate;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
