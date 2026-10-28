import { useState } from 'react';

function Register({ onSwitchToLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleRegister() {
        if (username === "" || password === "") {
            alert("Please enter both username and password");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if username already exists
        const userExists = users.find((user) => user.username === username);
        if (userExists) {
            alert("Username already exists! Please choose another.");
            return;
        }

        // Add user and save to localStorage
        users.push({ username: username, password: password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful! Please login.");
        onSwitchToLogin();
    }

    return (
        <div>
            <h2>Register</h2>
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
            <button onClick={handleRegister}>Register</button>

            <p>
                Already have an account?{" "}
                <button onClick={onSwitchToLogin}>Login</button>
            </p>
        </div>
    );
}

export default Register;
