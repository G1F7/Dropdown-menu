import React from "react";

// Converter component created and exported at the bottom of the page
class Converter extends React.Component {
  // Converter function setup to convert the input value. The input is the converted to a number from a string to be used in the mathematical function below.
  convert() {
    var input = parseFloat(document.querySelector(`input`).value);
    // eslint set to dispable the warning that says either rand, pound or euro has not been used. Find the field in the section below and add the calculated value to the inner HTML of that element.
    // eslint-disable-next-line
    let rand = (document.getElementById("randValue").innerHTML =
    "The value in Rand is R" + (input * 14.93).toFixed(2));
    // eslint-disable-next-line
    let pound = (document.getElementById("poundValue").innerHTML =
    "The value in Pound is &pound;" + (input * 0.78).toFixed(2));
    // eslint-disable-next-line
    let euro = (document.getElementById("euroValue").innerHTML =
    "The value in Euro is &euro;" + (input * 0.91).toFixed(2));
    // Eslint added again. Heading once the converted amounts have been calculated.
    // eslint-disable-next-line
    let doc = document.getElementById('labelHeading').innerHTML = "The converted values are <strong>&#11163;</strong>"
    // console.table(doc, " ", rand, " ", pound, " ", euro);
  }
  // Render the HTML page
  render() {
    return (
      <div className="conv_div">
        <h1 className="pageTitles">Currency Converter</h1>
        <section id="test">
          <fieldset>
            <legend className="conv_legend" type="number">
             Enter <strong>$</strong> amount <br /> <strong>&#11163;</strong>
            </legend>
            <br />
            {/* Input field has a type of number, it is required, there is a placeholder and an onchange added to the input field. */}
            <input
            type="number"
            required
            placeholder="$"
            onChange={() => this.convert()}
            />
            {/* Next to the input field is a button to "reset the input which relaods the page onclick" */}
            <button id="clear-btn" onClick={() => window.location.reload(false)}>
              Clear Input
            </button>
            <br />
            <br />
            {/* Labels for the converted amounts */}
            <label id="labelHeading"></label>
            <br />
            <label id="randValue"></label>
            <br />
            <label id="poundValue"></label>
            <br />
            <label id="euroValue"></label>
          </fieldset>
        </section>
      </div>
    );
  }
}
export default Converter;