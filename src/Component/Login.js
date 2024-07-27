
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();


function Login() {
     try
        {const response =  fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.id);
            navigate('/Profile');
        } else {
            setError(data.message || 'Login failed');
        }
    } catch (err) {
        setError('An error occurred');
    }
};

  return (
    <div className='login-page'>

       <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
 {error && <div style={{ color: 'red' }}>{error}</div>}

<button onClick={Login}>Login</button>
    </div>
  )
}

export default Login