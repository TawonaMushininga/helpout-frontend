import Link from "next/link";
import Layout from "../components/Layout/Layout";
import React, { useState, useEffect } from "react";
import BackendUrl from "../util/url";
import axios from "axios";
import { toast } from "react-toastify";
import { getUserDetails } from "../util/userDetails";


export default function UsersApplications() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [loading, setLoading] = useState(false);
    const [jobApplications, setJobApplications] = useState([]);
    const [user, setUser] = useState({});

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

    function filterWithoutJob(array) {
        return array.filter(item => item.job).sort((a, b) => a.status.localeCompare(b.status));
    }



    const getJobApplications = async () => {
        setLoading(true);
        try {
            const headers = await getHeaders();
            const response = await axios.get(
                `${BackendUrl}/api/v1/job_applications`,
                { headers }
            );
            response.data && setJobApplications(filterWithoutJob(response.data));

            toast.success("Job Application Successful");
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            toast.error("Job Application Failed");
        } finally {
            setLoading(false);
        }
    };

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

    useEffect(() => {
        getJobApplications();
        setUser(getUserDetails());
    }
        , []);

    return (
        <>
            <Layout>
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
                                        {user.firstName} {user.lastName} <span className="card-location font-regular ml-20">Gweru, ZW</span>
                                    </h5>
                                    <p className="mt-0 font-md color-text-paragraph-2 mb-15">{user.role}</p>

                                </div>

                            </div>
                        </div>
                        <div className="box-nav-tabs mt-40 mb-5">
                            <ul className="nav" role="tablist">
                                <li>
                                    <a className="btn btn-border aboutus-icon mr-15 mb-5 active" onClick={() => handleOnClick(1)}>
                                        All Applications
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-border recruitment-icon mr-15 mb-5" onClick={() => handleOnClick(2)}>
                                        Pending Applications
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-border people-icon mb-5" onClick={() => handleOnClick(3)}>
                                        Rejected Applications
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="border-bottom pt-10 pb-10" />
                    </div>
                </section>
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="content-single">
                                    <div className="tab-content">
                                        <div className={`tab-pane fade ${activeIndex === 1 && "show active"}`}>

                                            <section className="section-box-2">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Job Title</th>
                                                            <th scope="col">Location</th>
                                                            <th scope="col">Duration</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {jobApplications.length > 0 && jobApplications.map((jobApplication, index) => (
                                                            <tr key={index}>
                                                                <td>{jobApplication?.job?.title}</td>
                                                                <td>{jobApplication?.job?.location}</td>
                                                                <td>{jobApplication?.job?.hours} hours</td>
                                                                <td>{new Date(jobApplication?.job?.date).toLocaleDateString()}</td>
                                                                <td>{jobApplication?.status == "accepted" ? (
                                                                    <span style={{
                                                                        color: "green",
                                                                        fontWeight: "bold"
                                                                    }}>{jobApplication.status}</span>
                                                                ) : (
                                                                    <span style={{
                                                                        color: "red",
                                                                        fontWeight: "bold"
                                                                    }}>{jobApplication.status}</span>

                                                                )}</td>
                                                                <td>
                                                                    <Link legacyBehavior
                                                                        href={{
                                                                            pathname: '/job-details',
                                                                            query: { id: jobApplication.job_id },
                                                                        }}
                                                                    >
                                                                        <a className="btn btn-apply-now">View Job</a>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </section>
                                        </div>
                                        <div className={`tab-pane fade ${activeIndex === 2 && "show active"}`}>
                                            <h4>Pending Applications</h4>


                                        </div>
                                        <div className={`tab-pane fade ${activeIndex === 3 && "show active"}`}>
                                            <h4>Rejected Applications</h4>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                <div className="sidebar-border">
                                    <h5 className="f-18">Overview</h5>
                                    <div className="sidebar-list-job">
                                        <ul>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-briefcase" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Experience</span>
                                                    <strong className="small-heading">12 years</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-marker" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Language</span>
                                                    <strong className="small-heading">English, Shona</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-time-fast" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Education Level</span>
                                                    <strong className="small-heading">Master Degree</strong>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
}
