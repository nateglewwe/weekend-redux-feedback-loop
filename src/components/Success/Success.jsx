import { useHistory } from 'react-router-dom';

function Success () {
    const history = useHistory();

    const resetForm = () => {
        history.push("/");
    };

    return (
        <div>
            <h1>Success! Thank you!</h1>
            <button data-testid="next" onClick={resetForm}>Leave New Feedback</button>
        </div>
    )
}

export default Success;