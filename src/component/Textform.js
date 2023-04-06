// Hit rfc and Enter
import React, {useState} from 'react'

export default function Textform(props) {
    //you need to memorize this line because it is required more frequently infact memorize from line 6 to 11
    const [text,setText] = useState("Enter the text 2.0");
    //we are declaring in the button section that what this code need to do when the button is clicked
    const handleUpClick = ()=>{
        console.log("Upper Case was clicked");
    }
    const handleOnChange= (event)=>{
        console.log("On Change");
        setText(event.target.value);
    
    }
    //text = "the text"  this is a wrong way to set a text;
    //setText("The Text");this is the correct way to set a text;

    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                {/* here onChange={handleOnChange} and value = text is been written by me */}
            <textarea className="form-control" value={text}  onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            </div>
            {/* to add a button we wirte button.btn.btn-outline-success so we get this -> <button className="btn"></button> */}
            {/* here we also declared what this code should do when a user clicks on the button i.e.,onClick={handleUpclick} */}
            <button className="btn btn-outline-success" onClick={handleUpClick}> Ready to Convert to Uppercase</button>
            {/* onChange event in react detect when the value of input element changes i.e.,onChange={onChange} */}
             
            </div>

    )
}
//introduction to hooks based components
//Earlier it was class based component where you used to get multiple Functions 
//But people preffered Function based component 
//hence Hook was introduced in react

