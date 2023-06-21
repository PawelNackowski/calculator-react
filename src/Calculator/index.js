import React, { useState } from "react";
import { Button, TopButtonPosition, Input, Numbers, Wrapper } from "./styled";
import { ThemeChangeButton } from "./themeChangeButton";
import { evaluate } from "mathjs";

export const Calculator = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
       const inputValue = event.target.value;
       if (/^[0-9*+\-/.\\*]+$/.test(inputValue)) {
         setNumber(inputValue);
       }
  };

  const handleRemoveLastNumber = () => {
    setNumber(number.slice(0, -1));
  };

  const onClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "clear") {
      clearInput();
    } else if (value === "clearLast" ) {
      handleRemoveLastNumber();
    }  else if (number.length < 10) {
    setNumber(number + value);
  }
  };

  const calculateResult = () => {
    try {
      const evalResult = evaluate(number);
      setResult(evalResult);
      setNumber(evalResult.toString());
    } catch (error) {
      setResult("Error");
      setNumber("error");
    }
  };

  const clearInput = () => {
    setNumber("");
    setResult("");
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <ThemeChangeButton />
      <Input
        value={number}
        onChange={handleInputChange}
      />
      <TopButtonPosition>
        <Button onClick={() => onClick("clear")}>C</Button>
        <Button onClick={() => onClick("clearLast")}>⇦</Button>
        CASIO
      </TopButtonPosition>
      <Numbers>
        <Button value="1" onClick={() => onClick("1")}>
          1
        </Button>
        <Button value="2" onClick={() => onClick("2")}>
          2
        </Button>
        <Button value="3" onClick={() => onClick("3")}>
          3
        </Button>
        <Button value="-" onClick={() => onClick("-")}>
          -
        </Button>
        <Button value="4" onClick={() => onClick("4")}>
          4
        </Button>
        <Button value="5" onClick={() => onClick("5")}>
          5
        </Button>
        <Button value="6" onClick={() => onClick("6")}>
          6
        </Button>
        <Button value="+" onClick={() => onClick("+")}>
          +
        </Button>
        <Button value="7" onClick={() => onClick("7")}>
          7
        </Button>
        <Button value="8" onClick={() => onClick("8")}>
          8
        </Button>
        <Button value="9" onClick={() => onClick("9")}>
          9
        </Button>
        <Button value="*" onClick={() => onClick("*")}>
          *
        </Button>
        <Button value="." onClick={() => onClick(".")}>
          ,
        </Button>
        <Button value="0" onClick={() => onClick("0")}>
          0
        </Button>
        <Button value="=" onClick={(submit) => onClick("=")}>
          =
        </Button>
        <Button value="/" onClick={() => onClick("/")}>
          /
        </Button>
      </Numbers>
    </Wrapper>
  );
};
