import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
        const handleLoClick = ()=>{
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to Lowercase","success")
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Textbox Cleared","success")
    }   

    const handleCopy = () =>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style = {{color: props.mode==='dark'?'white':'#193149'}}>
            <h2 style = {{color: props.mode === 'dark'?'white':'#193149'}}>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode==='dark'?'white':'#193149'}} value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
        </div>
        <div className="container my-5" style = {{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Something in the Text Box to Preview"}</p>
        </div>
        </>
    )
}
