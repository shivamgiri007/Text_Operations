import React , {useState} from "react";


export default function Main() {
const [text , setText] = useState("Enter text here ...");
    const toUpperCase = () => {
        setText("Button is clicked")
        console.log(text);
    }
    const handleOnChange = () => {
        
        console.log("This is handleOnchange");
    }
    return (
    <>
      <div>
        <div className="w-50 mx-auto">
        <h3>Enter text for operations</h3>
          <textarea
          onChange={handleOnChange}
            value={text}
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
