import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Understanding () {
    const [understandingLvl, setUnderstandingLvl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleButtonClick = () => {
        dispatch({ type: 'ADD_TO_UNDERSTANDING', payload: Number(understandingLvl) });
        history.push("/support");
    };

    return (
        <div>
            <h1>How well are you understanding the content?</h1><br />
            <p>Understanding?</p>
            <input  data-testid="input"
                    type='number'
                    min='1'
                    max='5'
                    step='1'
                    placeholder='1-5' 
                    value={understandingLvl}
                    onChange={(event) => setUnderstandingLvl(event.target.value)}
                    required/>
            <button data-testid="next" onClick={handleButtonClick}>Next</button>
        </div>
    )
}

export default Understanding;