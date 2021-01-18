import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function Login({ login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = async(event) => {
        event.preventDefault();
        let success = await login(username, password);
        if(success)
        {
            history.push('/userpage');
        }
        else
        {
            alert('Incorrect username or password. Please try again.');
            console.log('something went wrong');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='username' type='text' placeholder='Username' onChange={(event) => setUsername(event.target.value)} />
                <input name='password' type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
                <input type='submit' value='Log In' />
            </form>
            <a href='https://powerful-bastion-69893.herokuapp.com/createaccount'>Don't have an account? Click here!</a>
        </div>
    )
}
