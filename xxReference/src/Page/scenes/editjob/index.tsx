// EditJob.tsx
import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface Job {
    job_name: string;
    job_type: string;
    job_location: string;
    job_salary: number;
    is_hiring: boolean;
}

const EditJob: React.FC = () => {
    const [jobName, setJobName] = useState<string>("");
    const [jobType, setJobType] = useState<string>("");
    const [jobLocation, setJobLocation] = useState<string>("");
    const [jobSalary, setJobSalary] = useState<number>(0);
    const [isHiring, setIsHiring] = useState<boolean>(false);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getJobById();
    }, [id]);

    const getJobById = async () => {
        try {
            const response = await axios.get<Job>(`http://localhost:5000/job/${id}`);
            const jobData: Job = response.data;
            setJobName(jobData.job_name);
            setJobType(jobData.job_type);
            setJobLocation(jobData.job_location);
            setJobSalary(jobData.job_salary);
            setIsHiring(jobData.is_hiring);
        } catch (error) {
            console.log(error);
        }
    };

    const updateJob = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('job_name', jobName);
            formData.append('job_type', jobType);
            formData.append('job_location', jobLocation);
            formData.append('job_salary', jobSalary.toString());
            formData.append('is_hiring', isHiring.toString());
            
            await axios.patch(`http://localhost:5000/job/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate("/Admin/job");
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={updateJob}>
                        <div className="mb-3">
                            <label htmlFor="jobName" className="form-label">Job Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobName"
                                value={jobName}
                                onChange={(e) => setJobName(e.target.value)}
                                placeholder="Job Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="jobType" className="form-label">Job Type</label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobType"
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                                placeholder="Job Type"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="jobLocation" className="form-label">Job Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobLocation"
                                value={jobLocation}
                                onChange={(e) => setJobLocation(e.target.value)}
                                placeholder="Job Location"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="jobSalary" className="form-label">Job Salary</label>
                            <input
                                type="number"
                                className="form-control"
                                id="jobSalary"
                                value={jobSalary}
                                onChange={(e) => setJobSalary(parseFloat(e.target.value))}
                                placeholder="Job Salary"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="isHiring"
                                checked={isHiring}
                                onChange={(e) => setIsHiring(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="isHiring">Is Hiring</label>
                        </div>
                        <button type="submit" className="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditJob;
