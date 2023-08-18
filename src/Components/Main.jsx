import React , {useState} from "react";


export default function Main(props) {
const [text , setText] = useState("Enter text here..");
  var newtext = text;
    const toUpperCase = () => {
        setText(newtext.toUpperCase());
    }
    const toLowerCase = () => {
      
      setText(newtext.toLowerCase());
  }
  const rmSpaces = () => {
      setText(newtext.replace(/ /g,""));
}
const rmExtraSpaces = () => {
  setText(newtext.replace(/\s{2,}/g, " "));
  
}
const copyText = () => {
  navigator.clipboard.writeText(newtext);
}
const clearText = () => {
  setText("");
}
const handleOnChange = (event) => {   
    setText(event.target.value);
}
    
    return (
    <div style={props.theme}>
      <div>
        <div className="w-50 mx-auto">
        <h3>Enter text for operations</h3>

          <textarea
          value={text}
          onChange={handleOnChange}
            style={props.theme}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <button className="btn btn-primary mt-4 mx-1" onClick={toUpperCase}>toUpperCase</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={toLowerCase}>toLowerCase</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={rmSpaces}>Remove Spaces</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={rmExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={copyText}>Copy Text</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={clearText}>Clear Text</button>
      </div>
    </div>
  );
}
