import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface Company {
    uuid: string;
    company_id: number;
    company_name: string;
    location: string;
    image_url: string | null;
    url: string | null;
}

const EditCompany: React.FC = () => {
    const [companyName, setCompanyName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(null);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getCompanyById();
    }, [id]);

    const getCompanyById = async () => {
        try {
            const response = await axios.get<Company>(`http://localhost:5000/companies/${id}`);
            const companyData: Company = response.data;
            setCompanyName(companyData.company_name);
            setLocation(companyData.location);
            // Assuming image_url and url are nullable and need separate handling
            if (companyData.image_url) {
                // Handle image preview if image_url is available
                setPreviewURL(companyData.image_url);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedImage = e.target.files[0];
            setImage(selectedImage);
            const imageURL = URL.createObjectURL(selectedImage);
            setPreviewURL(imageURL);
        }
    };

    const updateCompany = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('company_name', companyName);
            formData.append('location', location);
            if (image) {
                formData.append('file', image);
            }
            await axios.patch(`http://localhost:5000/companies/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate("/Admin/company");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={updateCompany}>
                        <div className="mb-3">
                            <label htmlFor="companyName" className="form-label">Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="Company Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Location"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input
                                type="file"
                                className="form-control"
                                id="image"
                                accept=".png,.jpg,.jpeg"
                                onChange={handleImageChange}
                            />
                            {previewURL && <img src={previewURL} alt="Preview" className="mt-2" style={{ maxWidth: "100%" }} />}
                        </div>
                        <button type="submit" className="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCompany;
