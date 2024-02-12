import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Feeling () {
    const [feelingLvl, setFeelingLvl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleButtonClick = () => {
        dispatch({ type: 'ADD_TO_FEELING', payload: Number(feelingLvl) });
        history.push("/understanding");
    };

    return (
        <div>
            <h1>How are you feeling today?</h1><br />
            <p>Feeling?</p>
            <input  data-testid="input"
                    type='number'
                    min='1'
                    max='5'
                    step='1'
                    placeholder='1-5' 
                    value={feelingLvl}
                    onChange={(event) => setFeelingLvl(event.target.value)}
                    required/>
            <button data-testid="next" onClick={handleButtonClick}>Next</button>
        </div>
    )
}

export default Feeling;