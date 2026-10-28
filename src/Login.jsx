import { useState } from 'react';

function Login({ onLogin, onSwitchToRegister }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (username === "" || password === "") {
            alert("Please enter both username and password");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if username and password match
        const foundUser = users.find(
            (user) => user.username === username && user.password === password
        );

        if (foundUser) {
            alert("Login successful!");
            onLogin(username);
        } else {
            alert("Invalid username or password!");
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <br />
            <div>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br />
            <button onClick={handleLogin}>Login</button>

            <p>
                Don't have an account?{" "}
                <button onClick={onSwitchToRegister}>Register</button>
            </p>
        </div>
    );
}

export default Login;
