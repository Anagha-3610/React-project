import React, { useState } from 'react'

// const Login = () => {
//   return (
//     // <div>
//     //     <form action="">
//     //         <input type="text" name="" id="" placeholder="Enter name" required></input>

//     //         <input type="email" name="" id="" placeholder="Enter email"  required></input>
            
            
//     //         <input type="password" name="" id="" placeholder="Enter password"
//     //         max={8}min={6} required></input>
//     //         <input type="submit" name="submitButton" id="submit_id" placeholder="Submit details"></input>
//     //     </form>
//     // </div>

//   )
// }


function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form Submitted!');
        console.log('Email:', email);
        console.log('Password:', password);
        setEmail('');
        setPassword('');
    };


    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} required/>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
                </div>

                <button
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login