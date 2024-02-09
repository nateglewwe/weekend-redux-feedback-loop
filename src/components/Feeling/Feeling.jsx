import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Feeling () {
    const [feelingLvl, setFeelingLvl] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleButtonClick = () => {
        dispatch({ type: 'ADD_TO_FEELING', payload: feelingLvl });
        // history.push("PUT URL HERE");  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    };

    return (
        <div>
            <h1>How are you feeling today?</h1><br />
            <p>Feeling?</p>
            <input  type='number'
                    min='1'
                    max='5'
                    placeholder='1-5' 
                    value={feelingLvl}
                    onChange={(event) => setFeelingLvl(event.target.value)}
                    required/>
            <button>Next</button>
        </div>
    )
}

export default Feeling;