import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Support () {
    const [supportLvl, setSupportLvl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleButtonClick = () => {
        dispatch({ type: 'ADD_TO_SUPPORT', payload: Number(supportLvl) });
        history.push("/comments");
    };

    return (
        <div>
            <h1>How well are you being supported?</h1><br />
            <p>Support?</p>
            <input  data-testid="input"
                    type='number'
                    min='1'
                    max='5'
                    step='1'
                    placeholder='1-5' 
                    value={supportLvl}
                    onChange={(event) => setSupportLvl(event.target.value)}
                    required/>
            <button data-testid="next" onClick={handleButtonClick}>Next</button>
        </div>
    )
}

export default Support;