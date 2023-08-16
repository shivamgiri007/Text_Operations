import React , {useState} from "react";


export default function Main() {
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
    const handleOnChange = (event) => {
        
        setText(event.target.value);
    }
    
    return (
    <>
      <div>
        <div className="w-50 mx-auto">
        <h3>Enter text for operations</h3>

          <textarea
          value={text}
          onChange={handleOnChange}
            
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mt-4 mx-3" onClick={toUpperCase}>toUpperCase</button>
          <button className="btn btn-primary mt-4 mx-3" onClick={toLowerCase}>toLowerCase</button>
          <button className="btn btn-primary mt-4 mx-3" onClick={rmSpaces}>Remove Spaces</button>
        </div>
      </div>
    </>
  );
}
