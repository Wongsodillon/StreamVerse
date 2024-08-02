import React, { useState, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginUser: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            console.log(response);
            navigate("/users");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className='form-control'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className='form-control'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginUser;
