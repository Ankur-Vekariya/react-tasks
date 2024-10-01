import React, { useEffect, useState } from "react";
import "./calc.css";

const Calculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("+");

  const handleChange = (number) => {
    setNumbers(numbers.length > 0 ? [...numbers, number] : [number]);
  };

  const handleOperator = (sign) => {
    setOperator(sign);
  };

  const calculate = (first, second) => {
    console.log(first, second);
    let result;

    switch (operator) {
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case "*":
        result = first * second;
        break;
      case "/":
        result = first / second;
        break;
      default:
        break;
    }
    setResult(result);
  };

  console.log("result--------", numbers, result, operator);

  return (
    <div className="calculator">
      <div>
        <p>{`${numbers[0]}`}</p>
      </div>
      <div>
        <p>{`${operator}`}</p>
      </div>
      <div>
        <p>{`${numbers[1]}`}</p>
      </div>
      <div className="calculator__output">{result}</div>
      <div className="calculator__keys">
        {["+", "-", "*", "/"].map((item, index) => {
          return (
            <button
              className="calculator__key calculator__key--operator"
              onClick={() => {
                handleOperator(item);
              }}
            >
              {item}
            </button>
          );
        })}
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((item, index) => {
          return (
            <button
              className="calculator__key"
              onClick={() => handleChange(item)}
            >
              {item}
            </button>
          );
        })}
        <button className="calculator__key">0</button>
        <button className="calculator__key">.</button>
        <button
          className="calculator__key"
          onClick={() => {
            setNumbers([]);
            setOperator("");
            setResult(0);
          }}
        >
          AC
        </button>
        <button
          className="calculator__key calculator__key--enter"
          onClick={() => {
            calculate(numbers[0], numbers[1]);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
