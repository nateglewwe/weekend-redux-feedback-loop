import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Comments () {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleButtonClick = () => {
        dispatch({ type: 'ADD_TO_COMMENTS', payload: comments });
        history.push("/review");
    };

    return (
        <div>
            <h1>Any comments you want to leave?</h1><br />
            <p>Comments</p>
            <input  placeholder='Enter comments here' 
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}/>
            <button onClick={handleButtonClick}>Next</button>
        </div>
    )
}

export default Comments;