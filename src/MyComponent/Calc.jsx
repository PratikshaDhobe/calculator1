import React, { useState } from 'react'

const Calc = () => {
    const [inp, setInp] = useState('');

    //handling input from onscreen keys
    const handleClick = (e) => {
        // if clicked on = calculate result
        if (e.target.value === '=') {
            calculateResult();
        } else if (e.target.value === 'cls') { // clear the input if clicked on cls button
            setInp('');
        } else if (e.target.value === 'bs') {
            // if clicked on back button, erase 1 character
            let subStr = inp.substring(0, inp.length - 1);
            setInp(subStr);
        } else {
            setInp(inp + e.target.value)
        }
    }

    // function to calculate result and update inp 
    const calculateResult = () => {
        let res = eval(inp);
        setInp(res);
    }

    // handling input from keyboard
    const handleChange = (e) => {
        setInp(e.target.value);
    }

    let mystyles = {
        fontFamily: "Press Start 2P",
    }

    const handleKeyDown = (e) => {
        // alert(e.key)
        if (e.key === 'Enter') {
            calculateResult();
        }
    }

    return (
        <div className='container border border-2 border-dark my-5'>
            <div className='my-3'>
                <input style={mystyles} type="text" name="input" id="input" className='form-control fs-3 text-end' value={inp} onChange={(e) => handleChange(e)} onKeyDown={e => handleKeyDown(e)} />
            </div>
            <div className="container">
                <div className="row">
                    <button className="btn btn-outline-dark col m-1 fs-3" value="cls" onClick={(e) => handleClick(e)}>Cls</button>

                    <button className="btn btn-outline-dark col m-1 fs-3" value="bs" onClick={(e) => handleClick(e)}>🔙</button>
                </div>
                <div className="row">
                    <button className="btn btn-outline-dark col m-1 fs-3" value="9" onClick={(e) => handleClick(e)} >9</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="8" onClick={(e) => handleClick(e)}>8</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="7" onClick={(e) => handleClick(e)}>7</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="+" onClick={(e) => handleClick(e)}>+</button>
                </div>
                <div className="row">
                    <button className="btn btn-outline-dark col m-1 fs-3" value="6" onClick={(e) => handleClick(e)}>6</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="5" onClick={(e) => handleClick(e)}>5</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="4" onClick={(e) => handleClick(e)}>4</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="-" onClick={(e) => handleClick(e)}>-</button>
                </div>
                <div className="row">
                    <button className="btn btn-outline-dark col m-1 fs-3" value="3" onClick={(e) => handleClick(e)}>3</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="2" onClick={(e) => handleClick(e)}>2</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="1" onClick={(e) => handleClick(e)}>1</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="*" onClick={(e) => handleClick(e)}>x</button>
                </div>
                <div className="row">
                    <button className="btn btn-outline-dark col m-1 fs-3" value="0" onClick={(e) => handleClick(e)}>0</button>
                    <button className="btn btn-outline-dark col m-1 fs-3" value="." onClick={(e) => handleClick(e)}>.</button>

                    <button className="btn btn-outline-dark col m-1 fs-3" value="=" onClick={(e) => handleClick(e)}>=</button>

                    <button className="btn btn-outline-dark col m-1 fs-3" value="/" onClick={(e) => handleClick(e)}>/</button>
                </div>
            </div>
        </div>
    )
}

export default Calc