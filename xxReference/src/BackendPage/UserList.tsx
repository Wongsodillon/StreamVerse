import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

interface User {
    user_id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    image_url : string;
    url: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const getUser = async () => {
        try {
            const response = await axios.get<User[]>('http://localhost:5000/users');
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    
    const deleteUser = async (user_id: number) => {
        try {
            await axios.delete(`http://localhost:5000/users/${user_id}`);
            getUser();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Link to={`/add`} className='btn btn-success mb-2'>Add New</Link>
                    <Link to={`/login`} className='btn btn-info ml-2 mb-2'>New Account</Link>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.user_id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td><img src={`http://localhost:5000/images/${user.image_url}`} alt={user.name} width="50" /></td>
                                    <td>
                                        <Link to={`/edit/${user.user_id}`} className='btn btn-sm btn-info'>Edit</Link>
                                        <button onClick={() => deleteUser(user.user_id)} className='btn btn-sm btn-danger ml-2'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                {users.map(user => (
                    <div className="col-md-4 mb-5" key={user.user_id}>
                        <div className="card h-100 mb-3">
                            <img src={`http://localhost:5000/images/${user.image_url}`} className="card-img-top" alt={user.name} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">Email: {user.email}</p>
                                <p className="card-text">Role: {user.role}</p>
                                <Link to={`/edit/${user.user_id}`} className='btn btn-sm btn-info mr-2'>Edit</Link>
                                <button onClick={() => deleteUser(user.user_id)} className='btn btn-sm btn-danger'>Delete</button>
                            </div> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
