import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'
    console.log('Came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
           
    }

    return (
        <div className="login__form">
            <center>
                <h2>Please Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" /> <br />
                    <input type="password" name="" id="" placeholder="Your Password" /> <br />
                    <input type="submit" value="submit" />

                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link> </p>
                <div>------------or-------------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google Signin</button>
           </center>
        </div>
    );
};

export default Login;