import { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            // eslint-disable-next-line react/prop-types
            props.handleLogin(email);
            window.location.href = '/home';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };
    

return (
    <div>
        <form id='authForm' onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="password error"></div>
            <button type="submit">Login</button>
        </form>
    </div>
);
};

export default Login;
