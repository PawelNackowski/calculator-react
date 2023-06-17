import { styled } from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 2px black;
  height: 300px;
  padding: 20px;
  gap: 10px;
  background-color: ${({theme}) => theme.colors.body};
`;

export const Input = styled.input`
  display: flex;
  align-content: stretch;
  text-align: right;
  height: 30px;
  margin: 12px;
  margin-bottom: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  box-shadow: inset -2px -2px 2px 1px gray;
  border: none;
  border-radius: 5px;

  &::placeholder {
    text-align: center;
  }
  &:focus {
    outline: none;
  }
`;

export const Numbers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
`;

export const Button = styled.button`
  font-size: 20px;
  width: 60px;
  height: 30px;
  margin: auto;
  box-shadow: inset -2px -2px 2px 1px gray;
`;

export const ThemeButton = styled.button`
  width: 60px;
  height: 30px;
  margin: auto;
  font-size: 10px;
`