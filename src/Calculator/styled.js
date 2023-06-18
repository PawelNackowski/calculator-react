import { styled } from "styled-components";

export const Wrapper = styled.form`
  font-family: "Orbitron";
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 2px black;
  min-height: 400px;
  width: 300px;
  padding: 20px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.body};
  transition: background-color 1s;
`;

export const Input = styled.input`
  font-family: "Orbitron";
  display: flex;
  align-content: stretch;
  text-align: right;
  padding: 10px;
  height: 50px;
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 26px;
  letter-spacing: 2px;
  box-shadow: inset -2px -2px 2px 3px gray;
  border: 1px solid ${({ theme }) => theme.colors.gray};
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
  grid-gap: 8px;
`;

export const Button = styled.button`
  font-family: "Orbitron";
  font-size: 28px;
  font-weight: 600;
  min-width: ${(props) => (props.bigger ? "128px" : "60px")};
  height: 50px;
  box-shadow: inset -3px -3px 2px 3px gray;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.text};
  }
`;

export const ThemeButton = styled.button`
  font-family: "Orbitron";
  font-weight: bold;
  background-color: ${({ theme }) => theme.modeButton.background};
  color: ${({ theme }) => theme.modeButton.text};
  width: 60px;
  height: 30px;
  margin-left: 10px;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: inset -1px -1px 2px 3px gray;
`;

export const ButtonModePosition = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  `;

export const ButtonClearPosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 2px;
  `