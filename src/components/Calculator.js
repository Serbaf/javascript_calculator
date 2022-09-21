import CalcButton from './CalcButton'
import Display from './Display';

function Calculator() {
    return (
        <div id="calculator" className="container vh-min-100">
            <div className="row">
                <div className="col-12">
                    <Display />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <CalcButton id="add" />
                </div>
                <div className="col-3">
                    <CalcButton id="subtract" />
                </div>
                <div className="col-3">
                    <CalcButton id="multiply" />
                </div>
                <div className="col-3">
                    <CalcButton id="divide" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <CalcButton id="one" />
                </div>
                <div className="col-3">
                    <CalcButton id="two" />
                </div>
                <div className="col-3">
                    <CalcButton id="three" />
                </div>
                <div className="col-3">
                    <CalcButton id="decimal" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <CalcButton id="four" />
                </div>
                <div className="col-3">
                    <CalcButton id="five" />
                </div>
                <div className="col-3">
                    <CalcButton id="six" />
                </div>
                <div className="col-3">
                    <CalcButton id="equals" />
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <div className="col-4">
                            <CalcButton id="seven" />
                        </div>
                        <div className="col-4">
                            <CalcButton id="eight" />
                        </div>
                        <div className="col-4">
                            <CalcButton id="nine" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"><CalcButton id="zero" /></div>
                    </div>
                </div>
                <div className="col-3">
                    <CalcButton id="clear" />
                </div>
            </div>
        </div>
    )
}

export default Calculator;