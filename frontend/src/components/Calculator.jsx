import '../css/calculator.css'
import { useState, useEffect } from 'react'
import { descriptions, labels } from './Descriptions';


export default function Calculator() {

    //this is the current selected calculation from the select input
    const [calculation, setCalculation] = useState("Cost Per Acquisition");

    //this description changes depending on the selected calculation
    const [description, setDescription] = useState(descriptions[0]);

    //this class toggles the display of extra field
    const [exraStatus, setExtraStatus] = useState("hide");

    //the extra field className to allow concancenation of display class
    var extraClassName = "extraField-container " + exraStatus;

    //toggles result field display
    const [resultDisplay, setResultDisplay] = useState("hide");

    //the extra field className to allow concancenation of display class
    var resultClassName = "results-container  " + resultDisplay;

    //the values of the input fields
    var [value1, setValue1] = useState("");
    var [value2, setValue2] = useState("");
    var [value3, setValue3] = useState("");

    //the results variable
    const [resultValue, setResultValue] = useState("");

    //the results symbol;currency or percentage
    const [symbol,setSymbol] = useState("");

    //the diffrent field variables based no the selected calculation
    const [var1, setVar1] = useState("Total Cost");
    const [var2, setVar2] = useState("Number Of Acquisitions");
    const [var3, setVar3] = useState("");


    //the function that performs the calculation
    function calculate() {

        //validate input
        if (value1 < 0) {
            setValue1("");
            alert(`${var1} must be greater than 1`)
            return
        } else if (value2 < 0) {
            setValue2("");
            alert(`${var2} must be greater than 1`)
            return;

        } else if (value3 < 0) {
            setValue3("");
            alert(`${var3} must be greater than 1`)
            return;
        }

        if (value1 == "" || value2 === "") {
            alert("Please fill in the spaces!");
            return;
        }

        //check if third field is displayed and validate its value
        if (exraStatus === "show" && value3 === "" ) {
            alert("Please fill in all spacesu!");
            return;
        }

        value1 = parseInt(value1);
        value2 = parseInt(value2);
        value3 = parseInt(value3);
  
        switch (calculation) {
            case "Cost Per Acquisition":
                var rslt = value1 / value2;
                setSymbol("");
                setResultValue(Math.round(rslt).toLocaleString("en-US",{style:"currency",currency:"KES"}));
                setResultDisplay("show");
                break;
        
            case "Return on Investment":
                var rslt = (value1 - value2) / value2;
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;


            case "Break Even Analysis":
                var rslt = value1 / (value2 - value3)
                setSymbol(" sales");
                setResultValue(Math.round(rslt));
                setResultDisplay("show");
                break;


            case "Gross Profit Margin":
                var rslt = (value1 - value2) / value1;
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;

            case "Net Profit Margin":
                var rslt = (value1 / value2) * 100;
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;

            case "Customer Lifetime Value":
                var rslt = (value1 * value2) * value3;
                setSymbol("");
                setResultValue(Math.round(rslt).toLocaleString("en-US",{style:"currency",currency:"KES"}));
                setResultDisplay("show");
                break;

            case "Conversion Rate":
                var rslt = (value1 / value2) * 100;
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;

            case "Churn Rate":
                var rslt = (value1 / value2) * 100;
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;

            case "Revenue Growth Rate":
                var rslt = (value1 - value2) / (value2 * 100);
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;


            case "Inventory Turnover Ratio":
                var rslt = (value1 / value2);
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;


            case "Debt-to-Equity Ratio":
                var rslt = (value1 / value2);
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;


            case "Quick Ratio":
                var rslt = (value1 - value2) / value3;
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;

            case "Current Ratio":
                var rslt = (value1 / value2);
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;

            case "Earnings Before Interest & Taxes":
                var rslt = (value1 - value2);
                setSymbol("");
                setResultValue(Math.round(rslt).toLocaleString("en-US",{style:"currency",currency:"KES"}));
                setResultDisplay("show");
                break;


            case "Burn Rate":
                var rslt = (value1 / value2);
                setSymbol("%");
                setResultValue(rslt.toFixed(1));
                setResultDisplay("show");
                break;
        }

    }

    useEffect(() => {
        setExtraStatus("hide"); //hide extra field
        setResultDisplay("hide"); //hide calc result

        //reset all inputs to 0
        setValue1("")
        setValue2("")
        setValue3("")

        switch (calculation) {
            case "Cost Per Acquisition":
                setDescription(descriptions[0]) //set the calculation description
                setVar1(labels[calculation]["var1"])  //set first fieldname 
                setVar2(labels[calculation]["var2"])  //set second fieldname
                break;

            case "Return on Investment":
                setDescription(descriptions[1])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;


            case "Break Even Analysis":
                setDescription(descriptions[2])
                setExtraStatus("show"); //show extra field
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                setVar3(labels[calculation]['var3']) //set third fieldName
                break;

            case "Gross Profit Margin":
                setDescription(descriptions[3])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;

            case "Net Profit Margin":
                setDescription(descriptions[4])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;

            case "Customer Lifetime Value":
                setDescription(descriptions[5])
                setExtraStatus("show");
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                setVar3(labels[calculation]["var3"])

                break;

            case "Conversion Rate":
                setDescription(descriptions[6])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;

            case "Churn Rate":
                setDescription(descriptions[7])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;


            case "Revenue Growth Rate":
                setDescription(descriptions[8])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;

            case "Inventory Turnover Ratio":
                setDescription(descriptions[9])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;

            case "Debt-to-Equity Ratio":
                setDescription(descriptions[10])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;

            case "Quick Ratio":
                setDescription(descriptions[11])
                setExtraStatus("show");
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                setVar3(labels[calculation]["var3"])
                break;

            case "Current Ratio":
                setDescription(descriptions[12])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;


            case "Earnings Before Interest & Taxes":
                setDescription(descriptions[13])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;

            case "Burn Rate":
                setDescription(descriptions[14])
                setVar1(labels[calculation]["var1"])
                setVar2(labels[calculation]["var2"])
                break;
        }

    }, [calculation])

    return (
        <div className='calculator-container'>
            <div className="calcType-container">
                <p id="cType_helper">Choose calculation</p>
                <select name="calc-name" id="calc_name" onChange={(e) => {
                    setCalculation(e.target.value)
                }}>
                    <option value="Cost Per Acquisition" selected>Cost Per Acquisition</option>
                    <option value="Return on Investment">Return on Investment</option>
                    <option value="Break Even Analysis">Break Even Analysis</option>
                    <option value="Gross Profit Margin">Gross Profit Margin</option>
                    <option value="Net Profit Margin">Net Profit Margin</option>
                    <option value="Customer Lifetime Value">Customer Lifetime Value</option>
                    <option value="Conversion Rate">Conversion Rate</option>
                    <option value="Churn Rate">Churn Rate</option>
                    <option value="Revenue Growth Rate">Revenue Growth Rate</option>
                    <option value="Inventory Turnover Ratio">Inventory Turnover Ratio</option>
                    <option value="Debt-to-Equity Ratio">Debt-to-Equity Ratio</option>
                    <option value="Quick Ratio">Quick Ratio</option>
                    <option value="Current Ratio">Current Ratio</option>
                    <option value="Earnings Before Interest & Taxes">Earnings Before Interest & Taxes</option>
                    <option value="Burn Rate">Burn Rate</option>


                </select>
                <hr />
                <div className="calcDesc-container">
                    <p id="header_desc">What is {calculation}?</p>
                    <p id="desc_text">
                        {description}
                    </p>
                </div>
            </div>

            <div className="calcInput-container">
                <p id="cInput_helper">Please Fill in the spaces below to get your business's {calculation}.</p>

                <div className="inputs-container">
                    <label htmlFor="var1">{var1}</label> <br /> <br />
                    <input type="number" name="var1" id="var1" placeholder='0'
                        value={value1}
                        onChange={(e) => { setValue1(e.target.value) }}

                    />

                    <br /> <hr id='hr2' />

                    <label htmlFor="var2">{var2}</label> <br /> <br />
                    <input type="number" name="var2" id="var2" placeholder='0'
                        value={value2}
                        onChange={(e) => { setValue2(e.target.value) }}
                    />
                </div>

                <div className={extraClassName}>
                    <hr />
                    <label htmlFor="var3">{var3}</label> <br /> <br />
                    <input type="number" name="var3" id="var3" placeholder='0'
                        value={value3}
                        onChange={(e) => { setValue3(e.target.value) }}

                    />
                </div>



                <div className="btn-container">
                    <button className="calculate-btn" onClick={calculate}>
                        Calculate
                    </button>
                </div>


                <div className={resultClassName}>
                    <label htmlFor="results">{calculation}</label>
                    <input type="text" name="results" id="results" readOnly
                        value={" " + resultValue + symbol} //symbol is "" in currency
                    />
                </div>


            </div>

        </div>
    )
}
