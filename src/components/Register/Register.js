import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <center>
                <div className="login__form">
                    <h2>Register: Create Account</h2>
                    <form onSubmit="">
                        <input type="email" name="" id="" placeholder="Your Email" /> <br />
                        <input type="password" name="" id="" placeholder="Your Password" /> <br />
                        <input type="password" name="" id="" placeholder="Re-enter Password" /> <br />
                        <input type="submit" value="submit" />

                    </form>
                    <p>Already Have an Account? <Link to="/login">Login</Link> </p>
                    <div>------------or-------------</div>
                    <button className="btn-regular">Google Signin</button>
                </div>
          </center>
        </div>
    );
};

export default Register;