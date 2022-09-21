import { useDispatch, useSelector } from "react-redux";
import { newOperand, newOperator, calculate, clearOperation } from "../redux/calculatorSlice";

const calculatorButtons = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "equals": "=",
    "add": "+",
    "subtract": "-",
    "multiply": "*",
    "divide": "/",
    "decimal": ".",
    "clear": "C",
}

const CalcButton = ({ id }) => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.calculator.value);
    const symbol = calculatorButtons[id];

    const handleClick = (symbol) => {
        switch (symbol) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".":
                dispatch(newOperand(symbol));
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                dispatch(newOperator(symbol));
                break;
            case "=":
                dispatch(calculate());
                break;
            case "C":
                dispatch(clearOperation());
                break
            default:
                console.log("Caso chungo 4")
        }
    }

    return (
        <button id={id} className="btn btn-primary btn-lg h-75 w-75 pb-4" onClick={() => handleClick(symbol)}>
            {symbol}
        </button>
    )
}

export default CalcButton;