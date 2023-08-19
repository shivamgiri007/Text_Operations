import React , {useState} from "react";
import "./Main.css";

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
function countLettersWithoutSpaces(newtext) {
  let numLetters = 0;
  for (let i = 0; i < newtext.length; i++) {
    if (newtext[i] !== " ") {
      numLetters++;
    }
  }
  return numLetters;
}
function countLettersSpaces(newtext) {
  let spaceLetters = 0;
  for (let i = 0; i < newtext.length; i++) {
    if (newtext[i] === " ") {
      spaceLetters++;
    }
  }
  return spaceLetters;
}   
    return (
      <>
    <div className="main_height" style={props.theme}>
        <div className="w-50 mx-auto">
        <h3 className="p-4">Enter text for operations</h3>

          <textarea
          value={text}
          onChange={handleOnChange}
          style={props.theme}
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          ></textarea>
          
        </div>
      
      <div className="d-flex justify-content-center">
      <button className="btn btn-primary mt-4 mx-1" onClick={toUpperCase}>toUpperCase</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={toLowerCase}>toLowerCase</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={rmSpaces}>Remove Spaces</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={rmExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={copyText}>Copy Text</button>
          <button className="btn btn-primary mt-4 mx-1" onClick={clearText}>Clear Text</button>
      </div>
      <div className="w-50 mx-auto p-5">
        <h4 className="text-decoration-underline">Text Summary</h4>
        <h6>Total Text Count without spaces is  : {countLettersWithoutSpaces(newtext)} </h6> 
        <h6>Total spaces in text is  : {countLettersSpaces(newtext)} </h6> 
      </div>
      
    </div>
    </>  
  );
}
