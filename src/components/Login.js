import { useHistory } from 'react-router-dom'
import useAuth from '../auth/UseAuth'

export default function Login() {
    const history = useHistory();
    const auth = useAuth();
    const handleLogin = () => {
        auth.login()
        history.push("/dashboard")
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
