import React from 'react';

const Register = () => {
    return (
        <div>
            <form>
                <label htmlFor="email">
                    <input type="text" placeholder="Enter your email" />
                </label>
                <label htmlFor="">
                    <input type="password" name="password" id="" placeholder="Password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Register;