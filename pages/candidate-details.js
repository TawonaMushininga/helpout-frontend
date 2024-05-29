import Link from "next/link";
import Layout from "../components/Layout/Layout";
import React, { useState, useEffect } from "react";
import BackendUrl from "../util/url";
import axios from "axios";
import { toast } from "react-toastify";


export default function CandidateDetails() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [loading, setLoading] = useState(false);
    const [jobApplications, setJobApplications] = useState([]);

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



    const getJobApplications = async () => {
        setLoading(true);
        try {
            const headers = await getHeaders();
            const response = await axios.get(
                `${BackendUrl}/api/v1/job_applications`,
                { headers }
            );
            setJobApplications(response.data);
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
                                        Eroni Masiki <span className="card-location font-regular ml-20">Gweru, ZW</span>
                                    </h5>
                                    <p className="mt-0 font-md color-text-paragraph-2 mb-15">Plumber</p>
                                    <div className="mt-10 mb-15">
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <img src="assets/imgs/template/icons/star.svg" alt="jobbox" />
                                        <span className="font-xs color-text-mutted ml-10">(66)</span>
                                        <img className="ml-30" src="assets/imgs/page/candidates/verified.png" alt="jobbox" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 text-lg-end">
                                    <Link legacyBehavior href="candidate-profile">
                                        <a className="btn btn-download-icon btn-apply btn-apply-big">Edit Profile</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box-nav-tabs mt-40 mb-5">
                            <ul className="nav" role="tablist">
                                <li>
                                    <a className="btn btn-border aboutus-icon mr-15 mb-5 active" onClick={() => handleOnClick(1)}>
                                        Short Bio
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-border recruitment-icon mr-15 mb-5" onClick={() => handleOnClick(2)}>
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-border people-icon mb-5" onClick={() => handleOnClick(3)}>
                                        Working Experience
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
                                            <h4>About Me</h4>
                                            <p>Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>

                                            <h4>Work Experience for Plumber</h4>
                                            <ul>
                                                <li>
                                                    Worked as a Plumber for 5 years at XYZ Company
                                                </li>
                                                <li>
                                                    Worked as a Plumber for 5 years at ABC Company
                                                </li>
                                                <li>
                                                    I know how to fix a leaky faucet
                                                </li>
                                                <li>
                                                    I know how to fix a leaky pipe
                                                </li>
                                            </ul>

                                        </div>
                                        <div className={`tab-pane fade ${activeIndex === 2 && "show active"}`}>
                                            <h4>Skills</h4>
                                            <p>
                                                My skills in Plumbing are unmatched. I have been in the industry for over 12 years and have worked on a variety of projects. I have a Master's Degree in Plumbing and have worked with some of the best companies in the industry. I am confident that I can handle any project that comes my way.
                                            </p>

                                        </div>
                                        <div className={`tab-pane fade ${activeIndex === 3 && "show active"}`}>
                                            <h4>Work Experiences</h4>
                                            <p>
                                                My work experience is extensive. I have worked with some of the best companies in the industry and have handled a variety of projects. I have a Master's Degree in Plumbing and have been in the industry for over 12 years. I am confident that I can handle any project that comes my way.
                                            </p>
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
                                    <div className="sidebar-list-job">
                                        <ul className="ul-disc">
                                            <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                            <li>Phone: (123) 456-7890</li>
                                            <li>Email: contact@Evara.com</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box-2">
                    <div className="container">
                        <div className="box-nav-tabs mt-40 mb-5">
                            <ul className="nav" role="tablist">
                                <li>
                                    <a className="btn btn-border aboutus-icon mr-15 mb-5 active">
                                        Job Applications
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Job Title</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobApplications.map((jobApplication, index) => (
                                            <tr key={index}>
                                                <td>{jobApplication.job.title}</td>
                                                <td>{jobApplication.job.location}</td>
                                                <td>{jobApplication.job.hours} hours</td>
                                                <td>{new Date(jobApplication.job.date).toLocaleDateString()}</td>
                                                <td>{jobApplication.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
