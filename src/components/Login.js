import React, {useState} from 'react'

export default function Login({ login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='username' type='text' placeholder='Username' onChange={(event) => setUsername(event.target.value)} />
                <input name='password' type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
                <input type='submit' value='Log In' />
            </form>
        </div>
    )
}
