import React, { useState } from 'react'

export default function TextForm(props) {
    //Handlers
    const handleToUppercase = () => {
        console.log('UpperCase is clicked');
        setText(text.toUpperCase());
    }
    const handleToLowercase = () => {
        console.log('UpperCase is clicked');
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleClearText = (event) => {
        setText("");
    }

    //States
    const [text, setText] = React.useState("Enter Text here");
    return (
        <>

            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleToUppercase}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handleToLowercase}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.08*text.split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}