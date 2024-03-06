    import React, { useState } from 'react';
    import './Login.css';
    import { useNavigate,Link } from 'react-router-dom'; // Import useHistory hook


    export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useHistory hook


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
        // Logic for signing in with username and password
        console.log('Signing in with:', username, password);
        
    };

    const handleSignUp = () => {
        // Logic for signing up with username and password
        console.log('Signing up with:', username, password);
        navigate('/signup'); 
        
    };

    return (
        <div className="container mt-5 login-style" >
        <h1>CIS Login</h1>
        <form>
            <table >
            <tbody>
                <tr>
                <td>
                    <label htmlFor="username">Username:</label>
                </td>
                <td>
                    <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                    />
                </td>
                </tr>
                <tr>
                <td>
                    <label htmlFor="password">Password:</label>
                </td>
                <td>
                    <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                </td>
                </tr>
                <tr>
                <td colSpan="2">
                    <button className="btn btn-secondary btn-lg mr-2" onClick={handleSignIn}><Link to="/home">Sign In</Link></button>
                    <button className="btn btn-secondary btn-lg" onClick={handleSignUp}>Sign Up</button>
                </td>
                </tr>
            </tbody>
            </table>
        </form>
        </div>
    );
    }
