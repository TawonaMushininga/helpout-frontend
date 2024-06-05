import Link from "next/link";
import Layout from "../components/Layout/Layout";
import React, { useState, useEffect } from "react";
import BackendUrl from "../util/url";
import axios from "axios";
import { toast } from "react-toastify";
import { getUserDetails } from "../util/userDetails";


export default function JobsMine() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [loading, setLoading] = useState(false);
    const [jobApplications, setJobApplications] = useState([]);
    const [user, setUser] = useState({});
    const [myJobs, setMyJobs] = useState([]);

    const [selectedJob, setSelectedJob] = useState(null);

    const handleSelect = (jobId) => {
        setSelectedJob(selectedJob === jobId ? null : jobId);
    };

    const getHeaders = async () => {
        const accessToken = sessionStorage.getItem('access-token');
        const client = sessionStorage.getItem('client');
        const expiry = sessionStorage.getItem('expiry');
        const uid = sessionStorage.getItem('uid');
        const tokenType = sessionStorage.getItem('token-type');

        if (!accessToken || !client || !expiry || !uid || !tokenType) {
            throw new Error('Missing required authentication headers');
        }

        const headers = {
            "ngrok-skip-browser-warning": "69420",
            "access-token": accessToken,
            "client": client,
            "expiry": expiry,
            "uid": uid,
            "token-type": tokenType
        };

        return headers;
    };

    const getJobsMine = async () => {
        setLoading(true);

        try {
            const headers = await getHeaders();
            const response = await axios.get(
                `${BackendUrl}/api/v1/jobs/jobs_mine`,
                { headers }
            );
            setMyJobs(response.data);
            console.log(response.data);
            response.data.length === 0 ? toast.warning("You have not posted any jobs yet") :
                toast.success("Your Jobs were fetched");
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            toast.error("Job Application Failed");
        } finally {
            setLoading(false);
        }
    };

    const acceptUser = async (applicationId) => {
        setLoading(true);

        try {
            const headers = await getHeaders();
            const response = await axios.put(
                `${BackendUrl}/api/v1/job_applications/${applicationId}/accept`,
                {},
                { headers }
            );
            console.log(response.data);
            getJobsMine();
            toast.success("User Accepted");
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            toast.error("User Acceptance Failed");
        } finally {
            setLoading(false);
        }
    }

    const rejectUser = async (applicationId) => {
        setLoading(true);

        try {
            const headers = await getHeaders();
            const response = await axios.put(
                `${BackendUrl}/api/v1/job_applications/${applicationId}/reject`,
                {},
                { headers }
            );
            console.log(response.data);
            getJobsMine();
            toast.success("User Rejected");
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            toast.error("User Rejection Failed");
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        setUser(getUserDetails());
        getJobsMine();
    }
        , []);


    return (
        <>
            <Layout>
                {
                    loading ? (
                        <Layout>
                            <div className="container">
                                <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </Layout>
                    ) : (
                        <>

                            {
                                myJobs?.length === 0 || myJobs == null ? (
                                    <section className="section-box-2">
                                        <div className="container">
                                            <div className="banner-hero banner-image-single">
                                                <img src="assets/imgs/page/candidates/img.png" alt="jobbox" />
                                            </div>
                                            <div className="box-company-profile">
                                                <div className="image-compay">
                                                    <img src="assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" />
                                                </div>
                                                <div className="row mt-10">
                                                    <div className="col-lg-8 col-md-12">
                                                        <h5 className="f-18">
                                                            {user.firstName} - {user.lastName} <span className="card-location font-regular ml-20">Gweru, ZW</span>
                                                        </h5>
                                                        <p className="mt-0 font-md color-text-paragraph-2 mb-15">{user.role}</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="border-bottom pt-10 pb-10" />
                                        </div>
                                        <div className="container">
                                            <div className="post-loop-grid">
                                                <div className="text-center">
                                                    <h6 className="f-18 color-text-mutted text-uppercase">My Jobs</h6>
                                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">You have not posted any jobs yet</h2>
                                                    <p className="font-sm color-text-paragraph wow animate__animated animate__fadeInUp w-lg-50 mx-auto">You have not posted any jobs yet. Click on the button below to post a job</p>
                                                    <Link legacyBehavior href="/page-createjob">
                                                        <a className="btn btn-primary mt-20">Post a Job</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                ) : (
                                    <>
                                        <section className="section-box-2">
                                            <div className="container">
                                                <div className="banner-hero banner-image-single">
                                                    <img src="assets/imgs/page/candidates/img.png" alt="jobbox" />
                                                </div>
                                                <div className="box-company-profile">
                                                    <div className="image-compay">
                                                        <img src="assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" />
                                                    </div>
                                                    <div className="row mt-10">
                                                        <div className="col-lg-8 col-md-12">
                                                            <h5 className="f-18">
                                                                {user.firstName} - {user.lastName} <span className="card-location font-regular ml-20">Gweru, ZW</span>
                                                            </h5>
                                                            <p className="mt-0 font-md color-text-paragraph-2 mb-15">{user.role}</p>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="border-bottom pt-10 pb-10" />
                                            </div>
                                        </section>
                                        <table className="table table-striped table-bordered table-hover container mt-15 mb-80">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Location</th>
                                                    <th>Amount</th>
                                                    <th>Payment Type</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {myJobs?.map((job) => (
                                                    <React.Fragment key={job.id}>
                                                        <tr>
                                                            <td>{job.title}</td>
                                                            <td>{job.description}</td>
                                                            <td>{job.location}</td>
                                                            <td>{job.amount}</td>
                                                            <td>{job.payment_type}</td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-primary"
                                                                    onClick={() => handleSelect(job.id)}
                                                                >
                                                                    Applications
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        {selectedJob === job.id && (
                                                            <tr>
                                                                <td colSpan="6">
                                                                    <table className="table table-striped table-bordered table-hover">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Application ID</th>
                                                                                <th>User Name</th>
                                                                                <th>User Email</th>
                                                                                <th>User Joined</th>
                                                                                <th>User ID</th>
                                                                                <th>Status</th>
                                                                                <th></th>
                                                                                <th>Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {job?.job_applications?.map((application) => (
                                                                                <tr key={application.id}>
                                                                                    <td>{application.id}</td>
                                                                                    <th>{application.user.first_name}</th>
                                                                                    <th>{application.user.email}</th>
                                                                                    <th>{application.user.created_at}</th>
                                                                                    <td>{application.user_id}</td>
                                                                                    <td>{application.status}</td>
                                                                                    <td></td>
                                                                                    <td style={{
                                                                                        display: "flex",
                                                                                        gap: "1rem",

                                                                                    }} >
                                                                                        {
                                                                                            job.employee_id === null && (
                                                                                                <>
                                                                                                    <button
                                                                                                        className="btn btn-primary"
                                                                                                        onClick={() => acceptUser(application.id)}
                                                                                                    >
                                                                                                        Accept
                                                                                                    </button>

                                                                                                    <button
                                                                                                        className="btn btn-secondary"
                                                                                                        onClick={() => rejectUser(application.id)}
                                                                                                    >
                                                                                                        Reject
                                                                                                    </button>
                                                                                                </>
                                                                                            )
                                                                                        }

                                                                                        <Link legacyBehavior
                                                                                            href={{
                                                                                                pathname: '/applicant',
                                                                                                query: { id: application.user_id },
                                                                                            }}
                                                                                        >
                                                                                            <a className="btn btn-apply-now">View Candidate</a>
                                                                                        </Link>




                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </tbody>
                                        </table>
                                    </>
                                )
                            }

                        </>
                    )
                }
            </Layout>
        </>
    );
}
