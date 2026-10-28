import { useState } from 'react';
import Home from "../Home";
import Login from "./Login";
import Register from "./Register";

function App() {
    const [user, setUser] = useState(null);
    const [page, setPage] = useState("login");

    if (!user) {
        if (page === "register") {
            return <Register onSwitchToLogin={() => setPage("login")} />;
        }
        return (
            <Login
                onLogin={(username) => setUser(username)}
                onSwitchToRegister={() => setPage("register")}
            />
        );
    }

    return (
        <div>
            <div>
                <span>Welcome, {user}! </span>
                <button onClick={() => setUser(null)}>Logout</button>
            </div>
            <hr />
            <Home />
        </div>
    );
}

export default App;