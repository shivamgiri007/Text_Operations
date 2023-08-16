import React , {useState} from "react";


export default function Main() {
const [text , setText] = useState("Enter text here..");
    const toUpperCase = () => {
        var newtext = text.toUpperCase();
        setText(newtext);
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
          <button className="btn btn-primary mt-3" onClick={toUpperCase}>toUpperCase</button>
        </div>
      </div>
    </>
  );
}
