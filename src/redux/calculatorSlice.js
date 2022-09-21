import { createSlice } from '@reduxjs/toolkit'


function performCalculation(operands, operators) {
    let a = null;
    let b = null;
    let op = null;
    for (let i = 0; i < operands.length; i++) {
        if (a === null) {
            a = Number(operands[i]);
        }
        else {
            b = Number(operands[i]);
            op = operators.shift();
            if (op.length === 2 && op[1] === "-") {
                b = -b;
                op = op[0];
            }
            switch (op) {
                case "+":
                    a = a + b;
                    break;
                case "-":
                    a = a - b;
                    break;
                case "*":
                    a = a * b;
                    break;
                case "/":
                    a = a / b;
                    break;
                default:
                    console.log("Error chungo 3");
            }
        }
    }
    return a.toString();
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        value: {
            operands: ["0"],
            operators: []
        }
    },
    reducers: {
        newOperand(state, action) {
            if (state.value.operands.length > state.value.operators.length) {

                if (!(action.payload === "." && (state.value.operands[state.value.operands.length - 1]).includes("."))) {
                    state.value.operands[state.value.operands.length - 1] += action.payload;
                }
            }
            else if (state.value.operands.length === state.value.operators.length) {
                state.value.operands = state.value.operands.concat(action.payload);
            }
            else {
                console.log("Error chungo")
                console.log(`Operands : ${JSON.stringify(state.value.operands)}`)
                console.log(`Operators : ${JSON.stringify(state.value.operators)}`)
                console.log(`Action : ${JSON.stringify(action)}`)
            }
        },
        newOperator(state, action) {
            if (state.value.operands.length === state.value.operators.length + 1) {
                state.value.operators = state.value.operators.concat(action.payload);
            } else if (state.value.operands.length === state.value.operators.length) {
                if (action.payload !== "-" || state.value.operators[state.value.operators.length - 1].length > 1) {
                    state.value.operators[state.value.operators.length - 1] = action.payload;
                } else if (action.payload === "-" || state.value.operators[state.value.operators.length - 1].length == 1) {
                    state.value.operators[state.value.operators.length - 1] += action.payload;
                } else {
                    console.log("Error chungo 2")
                }
            }
        },
        clearOperation(state) {
            state.value.operands = ["0"];
            state.value.operators = [];
        },
        calculate(state) {
            let result = performCalculation(state.value.operands, state.value.operators);
            state.value.operands = [result];
            state.value.operators = [];
        },
    }
})

export const { newOperand, newOperator, clearOperation, calculate } = calculatorSlice.actions;
export default calculatorSlice.reducer;