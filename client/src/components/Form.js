import { useState } from 'react';

export default function Form() {

//registration states

const [name, setName] = useState('')
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

//check for errors upon submission
const [submitted, setSubmitted]=useState(false)
const [error, setError]=useState(false)

//handle event for submitting a name
const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
}
//handle event for submitting an email
const handleEmail = (e) => {
    setEmail(e.target.value)
    setSubmitted(false);
}

//handle event for submitting password
const handlePassword = (e) => {
    setPassword(e.target.value)
    setSubmitted(false)
}

//form submission and handling errors
const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' ) {
        setError(true);
    } else {
        setSubmitted(true);
        setError(false);
    }
};

//display success message
const successMessage = () => {
    return (
        <div
        className="success"
        style = {{
            display: submitted ? '' : 'none',
        }}>
            <h1>User {name} has been successfully registered.</h1>
        </div>
    )
};
//display message in case of error
const errorMessage = () => {
    return (
        <div
        className="error"
        style = {{
            display: error ? '' : 'none',

        }} >
            <h1>Enter all required fields.</h1>
        </div>
    )
};

//creating the form
//and submit button
return (
    <div className="form">
        <div>
            <h1>User Registration Form</h1>
        </div>
        <div className="messages">
            { errorMessage() }
            { successMessage () }
        </div>
        <form>

            <label className="label">Name</label>
            <input onChange= {handleName} className="input"
            value={name} type ="text" />

            <label className="label">Email</label>
            <input onChange= {handleEmail} className="input"
            value = {email} type="email" />

            <label className="label">Password</label>
            <input onChange={handlePassword} className="input"
            value = {password} type="password" />

            <button onClick={handleSubmit} className="btn" type="submit">
                Submit
            </button>

        </form>
    </div>
)

}