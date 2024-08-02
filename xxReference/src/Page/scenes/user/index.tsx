import { Box, Button, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";

// Define the User interface
interface User {
  user_id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  image_url: string;
  url: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>("http://localhost:5000/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId: number) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      // Update the user list after deleting
      const updatedUsers = users.filter((user) => user.user_id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <Box m="20px">
      <Header title="USER" subtitle="User list " />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          // Your MUI styles here
        }}
      >
        <div className="container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {users.length > 0 ? (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Role</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.user_id}>
                        <td>{user.user_id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                        <td><img src={`http://localhost:5000/images/${user.image_url}`} alt={user.name} width="50" /></td>
                        <td>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => deleteUser(user.user_id)}
                          >
                            Delete
                          </Button>
                          <Button
                            style={{marginLeft:'10px'}}
                            variant="contained"
                            color="secondary"
                            
                            >
                            <Link
                            style={{ textDecoration: 'none' }} 
                            to={`/Admin/edituser/${user.user_id}`}
                            >
                              Edit
                            </Link>
                          </Button>{}
                          {/* <Link to={`/Admin/edituser/${user.user_id}`} className='btn btn-sm btn-info mr-2'>Edit</Link> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p>No users found</p>
              )}
            </>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default Users;
