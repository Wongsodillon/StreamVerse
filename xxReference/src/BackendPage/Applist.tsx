import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface JobApplication {
    uuid: string;
    jobhistoryid: number;
    user_id: number;
    job_id: number;
    status: string;
    updatedAt: string;
    createdAt: string;
}

const JobApplicationList: React.FC = () => {
    const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
    const userId = 3; // Replace this with the actual user ID you want to fetch data for

    const getJobApplications = async () => {
        try {
            const response = await axios.post<{ rows: JobApplication[] }>('http://localhost:5000/job-applications/by-user', { userId });
            setJobApplications(response.data.rows);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getJobApplications();
    }, []);

    const deleteJobApplication = async (uuid: string) => {
        try {
            await axios.delete(`http://localhost:5000/job-applications/${uuid}`);
            getJobApplications();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1>Job Applications</h1>
                    <Link to={`/add-job-application`} className='btn btn-success mb-2'>Add New</Link>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>UUID</th>
                                <th>Job History ID</th>
                                <th>User ID</th>
                                <th>Job ID</th>
                                <th>Status</th>
                                <th>Updated At</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobApplications.map((application) => (
                                <tr key={application.uuid}>
                                    <td>{application.uuid}</td>
                                    <td>{application.jobhistoryid}</td>
                                    <td>{application.user_id}</td>
                                    <td>{application.job_id}</td>
                                    <td>{application.status}</td>
                                    <td>{new Date(application.updatedAt).toLocaleString()}</td>
                                    <td>{new Date(application.createdAt).toLocaleString()}</td>
                                    <td>
                                        <Link to={`/edit-job-application/${application.uuid}`} className='btn btn-sm btn-info'>Edit</Link>
                                        <button onClick={() => deleteJobApplication(application.uuid)} className='btn btn-sm btn-danger ml-2'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationList;
