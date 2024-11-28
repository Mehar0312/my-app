import React, { useState } from 'react'

export default function TextArea(props) {
    const[text, setText] = useState('');
    // setText("New Text");
    const handleOnChange = (event) => {
        // console.log("Handle on change.");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("Handle on click.");
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase.", "success");
    }

    const handleLoClick = () => {
        // console.log("Handle on click.");
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase.", "success");
    }

    const handleCopyClick = () => {
        // console.log("Handle on click.");
        navigator.clipboard.writeText(text);
        // alert("Text Copied: " + copiedText.value);
        props.showAlert("Text copied to clipboard.", "success");
    }

    const handleClrClick = () => {
        // console.log("Handle on click.");
        setText('');
        props.showAlert("Text cleared.", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed from text.", "success");
    }

    return (
        <div className={`bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'} mb-3`}>
            <div className={`container bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'} mb-3`} data-bs-theme={`${props.mode==='light'?'light':'dark'}`}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" autoFocus></textarea>
                <br />
                <button className="btn btn-primary mx-2 mb-3" disabled={text.length === 0} onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-2 mb-3" disabled={text.length === 0} onClick={handleLoClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-2 mb-3" disabled={text.length === 0} onClick={handleCopyClick}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2 mb-3" disabled={text.length === 0} onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-2 mb-3" disabled={text.length === 0} onClick={handleClrClick}>Clear</button>
            </div>
            <div className={`container bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'} my-3`}>
                <h3>Your text summary.</h3>
                {/* <p>{text.length === 0 ? 0 : text.replace(/\s*$/,'').split(" ").length} words and {text.length} characters.</p> */}
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} minutes read.</p>

                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter text in the above textarea to preview it here."}</p>
            </div>
        </div>
        
    )
}