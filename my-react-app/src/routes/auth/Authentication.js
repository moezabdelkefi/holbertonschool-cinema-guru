import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [switchState, setSwitchState] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        setSwitchState(true);
    };

    const handleSignUp = () => {
        setSwitchState(false);
    };

    return (
        <div className="authentication-container">
            <div className="auth-header">
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
            {switchState ? (
                <Login
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                />
            ) : (
                <Register
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                />
            )}
        </div>
    );
}

export default Authentication;
