import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Review () {
    const feeling = useSelector((store) => store.feeling);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comments = useSelector((store) => store.comments);
    const allData = useSelector((store) => store);

    const history = useHistory();


    const submitForm = (event) => {
        event.preventDefault();

        axios
        .post('/api/feedback', allData)
        .then((response) => {
          console.log('Success I think?');
          history.push("/success");
        })
        .catch((error) => {
          console.log('ERROR:', error);
        });
    }

    return (
        <form onSubmit={(event) => submitForm(event)}>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button data-testid="next" type='submit' >SUBMIT</button>
        </form>
    )
}

export default Review;