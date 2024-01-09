import React from 'react'

export default function About(props) {
    return (
        <div className={`container bg-${props.background}`} style={{ color: props.background !== 'light' ? 'white' : 'black' }}>
            <h1 className='my-4'>About Us</h1>
            <div className={`accordion bg-${props.background}`} id="accordionExample" style={{ color: props.background !== 'light' ? 'white' : 'black' }}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button bg-${props.background} border border-2 border-${props.background !== 'light' ? 'light' : 'dark'}`} style={{ color: props.background !== 'light' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>TextUtils</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.background} border border-2 border-${props.background !== 'light' ? 'light' : 'dark'}`} style={{ color: props.background !== 'light' ? 'white' : 'black' }}>
                            <strong>TextUtils</strong> is your go-to destination for text analysis and manipulation. With a range of functionalities, we empower users to dissect, transform, and understand text in various ways.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed bg-${props.background} border border-2 border-${props.background !== 'light' ? 'light' : 'dark'}`} style={{ color: props.background !== 'light' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>TextUtils As - Analyzer  Tool</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.background} border border-2 border-${props.background !== 'light' ? 'light' : 'dark'}`} style={{ color: props.background !== 'light' ? 'white' : 'black' }} >
                            <strong>On the analysis front, TextUtils offers</strong> a comprehensive overview, providing a text summary along with word and character count. Additionally, users can gauge the estimated reading time of their entered text.
                            We value user experience, offering customizable themes in red, blue, yellow, and a sleek dark mode.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed bg-${props.background} border border-2 border-${props.background !== 'light' ? 'light' : 'dark'}`} style={{ color: props.background !== 'light' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>TextUtils As - Manipulation Tool</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.background} border border-2 border-${props.background !== 'light' ? 'light' : 'dark'}`} style={{ color: props.background !== 'light' ? 'white' : 'black' }} >
                            <strong>Our manipulation tools</strong> allow you to easily convert text to upper or lower case, copy content from the input box, listen to the entered text, and effortlessly clear the input field.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
