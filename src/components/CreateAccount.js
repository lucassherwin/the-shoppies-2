import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function CreateAccount({ createAccount }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let user = {
            username,
            password
        }

        let success = await createAccount(user);
        if(success)
        {
            history.push('/userpage');
        }
        else
        {
            alert('Something went wrong, please try again');
            console.log('error')
        }
    }

    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <input name='username' type='text' placeholder='Username' onChange={(event) => setUsername(event.target.value)} />
                <input name='password' type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
                <input type='submit' value='Create Account' />
            </form>
        </div>
    )
}
