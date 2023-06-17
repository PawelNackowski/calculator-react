import { styled } from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 2px black;
  height: 500px;
  padding: 20px;
  gap: 10px;
  background-color: ${({theme}) => theme.colors.body};
  transition: background-color 1s ;
`;

export const Input = styled.input`
  display: flex;
  align-content: stretch;
  text-align: right;
  padding: 10px;
  height: 50px;
  margin-top: 16px;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  box-shadow: inset -2px -2px 2px 1px gray;
  border: 1px solid ${({theme}) => theme.colors.background};
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
  grid-template-columns: repeat(4, 1fr );
  grid-gap: 8px;
`;

export const Button = styled.button`
  font-size: 30px;
  width: 70px;
  height: 56px;
  margin: auto;
  box-shadow: inset -2px -2px 2px 1px gray;
`;

export const ThemeButton = styled.button`
  position: fixed;
  width:  60px;
  height: 30px;
  margin: auto;
  font-size: 10px;
`

export const ClearPosition = styled.div`

`