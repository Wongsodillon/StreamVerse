import { Box, Button } from "@mui/material";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
  role: string;
}

interface Company {
  company_name: string;
  location: string;
}

interface Staff {
  staff_id: number;
  User: User;
  Company: Company;
}

const StaffList = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get<{ staff: Staff[] }>("http://localhost:5000/staffs");
        setStaff(response.data.staff);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching staff:", error);
      }
    };

    fetchStaff();
  }, []);

  const deleteStaff = async (staffId: number) => {
    try {
      await axios.delete(`http://localhost:5000/staffs/${staffId}`);
      setStaff(staff.filter(s => s.staff_id !== staffId));
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  return (
    <Box m="20px">
      <Header
        title="STAFF LIST"
        subtitle="List of Staff Members"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Company</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.length > 0 ? (
                staff.map((staff) => (
                  <tr key={staff.staff_id}>
                    <td>{staff.staff_id}</td>
                    <td>{staff.User.name}</td>
                    <td>{staff.User.email}</td>
                    <td>{staff.User.role}</td>
                    <td>{staff.Company.company_name}</td>
                    <td>{staff.Company.location}</td>
                    <td>
                      <Button 
                        variant="contained" 
                        color="error" 
                        onClick={() => deleteStaff(staff.staff_id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>No staff found</td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Box>
    </Box>
  );
};

export default StaffList;
