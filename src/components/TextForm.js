import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUppercase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert('Your text has been converted into Uppercase', 'success');
    }
    const handleLowercase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert('Your text has been converted into Lowercase', 'success');
    }
    const handleClearText = () => {
        let confirmClear = window.confirm('Are you sure you want to clear the text?')
        if (confirmClear) {
            setText('');
            props.showAlert('Your text has been cleared', 'danger');
        } else {
            props.showAlert('Your text is as it is keep going', 'success');
        }
    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('Copied to clipboard', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    const [speaking, setSpeaking] = useState(false);

    // speaking text
    function speakText() {
        if (text !== '') {
            const synth = window.speechSynthesis;
            let utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);
            setSpeaking(true);
        }
        else {
            alert('Please enter a text to speak');
        }
    }

    // stop speaking text
    function stopSpeaking() {
        const synth = window.speechSynthesis;
        synth.cancel();
        setSpeaking(false);
    }
    // speaking toggle button 
    const handleToggle = () => {
        if (!speaking) {
            speakText();
        } else {
            stopSpeaking();
        }
    }
    return (
        <>
            <div className={`container`} style={{ color: props.mode !== 'light' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode}`} value={text} onChange={handleOnChange} style={{ color: props.mode !== 'light' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleUppercase}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleLowercase}>Convert To Lowerrcase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleToggle} id='speech'>{speaking ? 'Stop speech' : 'Hear Your Text'}</button>
                <button disabled={text.length === 0} className='btn btn-danger mx-2 my-2' onClick={handleClearText}>Clear Text</button>
            </div >
            <div className='container my-3' style={{ color: props.mode !== 'light' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters, </p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length.toFixed(2)} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter the text into the above inputbox to preview it here"}</p>
            </div>
        </>
    )
}
