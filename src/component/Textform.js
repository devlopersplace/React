// Hit rfc and Enter
import React, {useState} from 'react'

export default function Textform(props) {
    //you need to memorize this line because it is required more frequently infact memorize from line 6 to 11
    const [text,setText] = useState("Enter the text");
    const handleUpClick = ()=>{
        console.log("Upper Case was clicked");
    }
    const handleOnChange= ()=>{
        console.log("On Change");
    
    }
    //text = "the text"  this is a wrong way to set a text;
    //setText("The Text");this is the correct way to set a text;

    return (
        <div>
            <h1>{props.heading} - {text}</h1>
            <div className="mb-3">
                {/* here onChange={handleOnChange} and value = text is been written by me */}
            <textarea className="form-control"  onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            </div>
            {/* to add a button we wirte button.btn.btn-outline-success so we get this -> <button className="btn"></button> */}
            <button className="btn btn-outline-success" onClick={handleUpClick}> Convert to Uppercase</button>
             
            </div>

    )
}
//introduction to hooks based components
//Earlier it was class based component where you used to get multiple Functions 
//But people preffered Function based component 
//hence Hook was introduced in react

