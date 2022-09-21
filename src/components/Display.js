import { useSelector } from "react-redux";

function Display() {
    const status = useSelector((state) => state.calculator.value);
    const displayString = (operands, operators) => {
        let result = "";
        let aux = "";
        for (let i = 0; i < operands.length; i++) {
            aux = operands[i].replace(/^0+/g, "");
            if (aux === "") {
                aux = "0";
            }
            result += aux;
            if (operators[i]) {
                result += operators[i];
            }
        }
        return result;
    }

    return (
        <div id="display" className="p-3 m-2" style={{ backgroundColor: "#D9EAD3" }}>
            {displayString(status.operands, status.operators)}
        </div>
    )
}

export default Display;