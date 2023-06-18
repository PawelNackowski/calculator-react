import React, { useState } from "react";
import { Button, ClearPosition, Input, Numbers, Wrapper } from "./styled";
import { ThemeChangeButton } from "./themeChangeButton";

export const Calculator = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
       const inputValue = event.target.value;
       if (/^[0-9*+\-/./]*$/.test(inputValue)) {
         setNumber(inputValue);
       }
  };

  const onClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "clear") {
      clearInput();
    } else {
      setNumber(number + value);
    }
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(number);
      setResult(evalResult);
      setNumber(evalResult.toString());
    } catch (error) {
      setResult("Error");
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
        pattern="^[0-9*+\-/./*]"
        placeholder="number"
        value={number}
        onChange={handleInputChange}
      />
      <div>
        <Button clear value="clear" onClick={() => onClick("clear")}>
          C
        </Button>
      </div>
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
