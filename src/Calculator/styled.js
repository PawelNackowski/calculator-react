import { styled } from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid black;
  width: fit-content;
  padding: 20px;
  gap: 10px;
`;

export const Input = styled.input`
  margin: 0;
  max-width: fit-content;
  margin-bottom: 15px;
`;

export const Numbers = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-content: center;
align-items: center;
grid-gap: 5px;
width: 200px;
`

export const Button = styled.button`
width: 45px;
height: auto;
margin: auto;
`;
