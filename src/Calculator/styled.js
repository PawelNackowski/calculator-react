import { styled } from "styled-components";

export const Wrapper = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`
export const Input = styled.input`
max-width: fit-content;
`

export const Numbers = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 5px;
width: 200px;
`

export const Button = styled.button`
width: 25px;
height: 25px;
margin: 2px;
`;
