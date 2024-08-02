import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import {Link} from "react-router-dom";

// Define the Company interface
interface Company {
  uuid: string;
  company_id: number;
  company_name: string;
  location: string;
  image_url: string | null;
  url: string | null;
}

const Company: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get<Company[]>(
          "http://localhost:5000/companies"
        );
        setCompanies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  const handleDelete = async (companyId: number) => {
    try {
      await axios.delete(`http://localhost:5000/companies/${companyId}`);
      setCompanies((prevCompanies) =>
        prevCompanies.filter((company) => company.company_id !== companyId)
      );
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <Box m="20px">
      <Header title="COMPANIES" subtitle="List of Companies" />
      <Box m="40px 0 0 0">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Image URL</th>
              <th>URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6}>Loading...</td>
              </tr>
            ) : (
              companies.map((company) => (
                <tr key={company.uuid}>
                  <td>{company.company_id}</td>
                  <td>{company.company_name}</td>
                  <td>{company.location}</td>
                  <td>{company.image_url}</td>
                  <td>{company.url}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(company.company_id)}
                    >
                      Delete
                    </Button>
                    <Button
                      style={{ marginLeft: "10px" }}
                      variant="contained"
                      color="secondary"
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/Admin/editcompany/${company.company_id}`}
                      >
                        Edit
                      </Link>
                    </Button>
                    {}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Company;
