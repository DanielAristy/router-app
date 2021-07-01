import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../auth/UseAuth'

export default function Login() {
    const history = useHistory();
    const location = useLocation();
    const previousObjectURL = location.state?.from;

    const auth = useAuth();
    const handleLogin = () => {
        auth.login()
        history.push(previousObjectURL || "/dashboard")
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>
                Sign in
            </button>
        </div>
    )
}
