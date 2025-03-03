import { useState } from 'react'
// import './Login.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const notify = (data) => {
        if (data === "This email is already taken") {
            return toast.error('This email is already taken', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        if (data === "Empty email or password") {
            return toast.error('Empty email or password', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        toast.success(' Success!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleSubmit = () => {
        const apiUrl = 'http://localhost:5000/api/user/registration';

        // Замените данные в body на те, которые вы хотите отправить на сервер
        const postData = {
            email: email,
            password: password,
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Дополнительные заголовки, если необходимо
            },
            body: JSON.stringify(postData),
        })
            .then(response => {
                // if (!response.ok) {
                //     throw new Error(`Network response was not ok: ${response.statusText}`);
                // }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                notify(data.message)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });


    }


    return (
        <div className='login__site'>
            <div className='login__form'>
                <h1>Register</h1>
                <div>
                    <h1>Your Email</h1>
                    <input type="email" placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <h1>Your Password</h1>
                    <input type='password' placeholder='Your Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => handleSubmit()}>Login</button>
                </div>
            </div>
            <div className='banner__register'>
                <h1>Do you already have an account?</h1>
                <p>Creating an account has many benefits:</p>
                <ul>
                    <li>Check out faster</li>
                    <li>Keep more than one address</li>
                    <li>Track orders and more</li>
                </ul>
                <button>
                    <Link to='/Login'>

                        I have account
                    </Link>
                </button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    )
}
export default Register