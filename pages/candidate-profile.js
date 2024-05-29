import Link from "next/link";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import BackendUrl from "../util/url";
import { getUserDetails } from "../util/userDetails";
export default function CandidateProfile() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [userDetails, setUserDetails] = useState({});
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(false);
    const [jobApplications, setJobApplications] = useState([]);
    const [myJobs, setMyJobs] = useState([]);

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

    const isAuthenticated = async () => {
        const accessToken = await sessionStorage.getItem('access-token');
        if (accessToken !== null) {
            // console.log('authenticated');
            return true;
        }
        // console.log('not authenticated');
        return false;
    }

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

    console.log(userDetails);

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

    const getJobsMine = async () => {
        setLoading(true);

        try {
            const headers = await getHeaders();
            const response = await axios.get(
                `${BackendUrl}/api/v1/jobs/jobs_mine`,
                { headers }
            );
            setMyJobs(response.data);
            toast.success("Your Job Application Successful");
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            toast.error("Job Application Failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getJobApplications();
        if (!["employee", "admin"].includes(userDetails.role)) {
            getJobsMine();
        }
    }
        , []);

    useEffect(() => {
        const checkAuth = async () => {
            const auth = await isAuthenticated();
            setIsAuth(auth);
        };

        checkAuth();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            setUserDetails(getUserDetails());
        }
    }, [isAuth]);



    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-image-single">
                                <img src="assets/imgs/page/candidates/img.png" alt="jobbox" />
                                <a className="btn-editor" href="#" />
                            </div>
                            <div className="box-company-profile">
                                <div className="image-compay">
                                    <img src="assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" />
                                </div>
                                <div className="row mt-10">
                                    <div className="col-lg-8 col-md-12">
                                        <h5 className="f-18">
                                            Steven Jobs <span className="card-location font-regular ml-20">New York, US</span>
                                        </h5>
                                        <p className="mt-0 font-md color-text-paragraph-2 mb-15">UI/UX Designer. Front end Developer</p>
                                    </div>
                                    <div className="col-lg-4 col-md-12 text-lg-end">
                                        <Link legacyBehavior href="page-contact">
                                            <a className="btn btn-preview-icon btn-apply btn-apply-big">Preview</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom pt-10 pb-10" />
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <div className="box-nav-tabs nav-tavs-profile mb-5">
                                        <ul className="nav" role="tablist">
                                            <li>
                                                <a className="btn btn-border aboutus-icon mb-20 active" onClick={() => handleOnClick(1)}>
                                                    My Profile
                                                </a>
                                            </li>
                                            <li>
                                                <button className="btn btn-border recruitment-icon mb-20" onClick={() => handleOnClick(2)}
                                                    disabled={!(isAuth === true && ["employee", "admin"].includes(userDetails.role) && userDetails.role !== "")} >
                                                    My Jobs
                                                </button>
                                            </li>

                                            <li>
                                                <button
                                                    className="btn btn-border people-icon mb-20"
                                                    onClick={() => handleOnClick(3)}
                                                    disabled={!(isAuth === true && !["employee"].includes(userDetails.role) && userDetails.role !== "")}                                                    >
                                                    Posted Jobs
                                                </button>
                                            </li>


                                        </ul>
                                        <div className="border-bottom pt-10 pb-10" />
                                        <div className="mt-20 mb-20">
                                            <Link legacyBehavior href="#">
                                                <a className="link-red">Delete Account</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
                                    <div className="content-single">
                                        <div className="tab-content">
                                            <div className={`tab-pane fade ${activeIndex === 1 && "show active"}`}>
                                                <h3 className="mt-0 mb-15 color-brand-1">My Account</h3>
                                                <Link legacyBehavior href="#">
                                                    <a className="font-md color-text-paragraph-2">Update your profile</a>
                                                </Link>

                                                <div className="mt-35 mb-40 box-info-profie">
                                                    <div className="image-profile">
                                                        <img src="assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" />
                                                    </div>
                                                    <a className="btn btn-apply">Upload Avatar</a>

                                                    <a className="btn btn-link">Delete</a>
                                                </div>
                                                <div className="row form-contact">
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group">
                                                            <label className="font-sm color-text-mutted mb-10">Full Name *</label>
                                                            <input className="form-control" type="text" defaultValue="Steven Job" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="font-sm color-text-mutted mb-10">Email *</label>
                                                            <input className="form-control" type="text" defaultValue="stevenjob@gmail.com" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="font-sm color-text-mutted mb-10">Contact number</label>
                                                            <input className="form-control" type="text" defaultValue="01 - 234 567 89" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="font-sm color-text-mutted mb-10">Bio</label>
                                                            <textarea className="form-control" rows={4} defaultValue={"We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="font-sm color-text-mutted mb-10">Personal website</label>
                                                            <input className="form-control" type="url" defaultValue="https://alithemes.com" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="font-sm color-text-mutted mb-10">Country</label>
                                                                    <input className="form-control" type="text" defaultValue="United States" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="font-sm color-text-mutted mb-10">State</label>
                                                                    <input className="form-control" type="text" defaultValue="New York" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="font-sm color-text-mutted mb-10">City</label>
                                                                    <input className="form-control" type="text" defaultValue="Mcallen" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="font-sm color-text-mutted mb-10">Zip code</label>
                                                                    <input className="form-control" type="text" defaultValue={82356} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border-bottom pt-10 pb-10 mb-30" />
                                                        <h6 className="color-orange mb-20">Change your password</h6>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="font-sm color-text-mutted mb-10">Password</label>
                                                                    <input className="form-control" type="password" defaultValue={123456789} />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="font-sm color-text-mutted mb-10">Re-Password *</label>
                                                                    <input className="form-control" type="password" defaultValue={123456789} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border-bottom pt-10 pb-10" />
                                                        <div className="box-agree mt-30">
                                                            <label className="lbl-agree font-xs color-text-paragraph-2">
                                                                <input className="lbl-checkbox" type="checkbox" defaultValue={1} />
                                                                Available for freelancers
                                                            </label>
                                                        </div>
                                                        <div className="box-button mt-15">
                                                            <button className="btn btn-apply-big font-md font-bold">Save All Changes</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="box-skills">
                                                            <h5 className="mt-0 color-brand-1">Skills</h5>
                                                            <div className="form-contact">
                                                                <div className="form-group">
                                                                    <input className="form-control search-icon" type="text" placeholder="E.g. Angular, Laravel..." />
                                                                </div>
                                                            </div>
                                                            <div className="box-tags mt-30">
                                                                <a className="btn btn-grey-small mr-10">
                                                                    Figma
                                                                    <span className="close-icon" />
                                                                </a>

                                                                <a className="btn btn-grey-small mr-10">
                                                                    Adobe XD
                                                                    <span className="close-icon" />
                                                                </a>

                                                                <a className="btn btn-grey-small mr-10">
                                                                    NextJS
                                                                    <span className="close-icon" />
                                                                </a>

                                                                <a className="btn btn-grey-small mr-10">
                                                                    React
                                                                    <span className="close-icon" />
                                                                </a>

                                                                <a className="btn btn-grey-small mr-10">
                                                                    App
                                                                    <span className="close-icon" />
                                                                </a>

                                                                <a className="btn btn-grey-small mr-10">
                                                                    Digital
                                                                    <span className="close-icon" />
                                                                </a>

                                                                <a className="btn btn-grey-small mr-10">
                                                                    NodeJS
                                                                    <span className="close-icon" />
                                                                </a>
                                                            </div>
                                                            <div className="mt-40">
                                                                {" "}
                                                                <span className="card-info font-sm color-text-paragraph-2">You can add up to 15 skills</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade ${activeIndex === 2 && "show active"}`}>
                                                <h3 className="mt-0 color-brand-1 mb-50">My Jobs</h3>
                                                <section className="section-box-2">
                                                    <div className="container">

                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                                            {
                                                                jobApplications.length === 0 && (
                                                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                                                                        <span style={{ color: 'gray' }}>No jobs applied yet</span>
                                                                    </div>
                                                                )
                                                            }
                                                            {jobApplications.map((jobApplication, index) => (
                                                                <div key={index} className="job-application-card">
                                                                    <div style={{ backgroundColor: '#FBFFF1', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                                                        <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                                                            <span style={{ fontWeight: 'bold' }}>
                                                                                <i className="material-icons">Description</i> Job Title:
                                                                            </span>
                                                                            {jobApplication.job.title}
                                                                        </div>
                                                                        <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                                                            <span style={{ fontWeight: 'bold' }}>
                                                                                <i className="material-icons">Place</i> Location:
                                                                            </span>
                                                                            {jobApplication.job.location}
                                                                        </div>
                                                                        {/* similar for other details */}
                                                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                            <span style={{ fontWeight: 'bold' }}>
                                                                                Status:
                                                                            </span>
                                                                            <span style={{ color: jobApplication.status === 'Approved' ? 'green' : jobApplication.status === 'Rejected' ? 'red' : 'black', fontWeight: 'Bold' }}>
                                                                                {jobApplication.status}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>



                                                    </div>
                                                </section>
                                            </div>
                                            <div className={`tab-pane fade ${activeIndex === 3 && "show active"}`}>
                                                <h3 className="mt-0 color-brand-1 mb-50">Posted Jobs</h3>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                                    {
                                                        myJobs.length === 0 && (
                                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                                                                <span style={{ color: 'gray' }}>No jobs posted yet</span>
                                                            </div>
                                                        )
                                                    }
                                                    {myJobs.map((jobApplication, index) => (
                                                        <div key={index} className="job-application-card">
                                                            <div style={{ backgroundColor: '#FBFFF1', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                                                <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                                                    <span style={{ fontWeight: 'bold' }}>
                                                                        <i className="material-icons">Description</i> Job Title:
                                                                    </span>
                                                                    {jobApplication.job.title}
                                                                </div>
                                                                <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                                                    <span style={{ fontWeight: 'bold' }}>
                                                                        <i className="material-icons">Place</i> Location:
                                                                    </span>
                                                                    {jobApplication.job.location}
                                                                </div>
                                                                {/* similar for other details */}
                                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                    <span style={{ fontWeight: 'bold' }}>
                                                                        Status:
                                                                    </span>
                                                                    <span style={{ color: jobApplication.status === 'Approved' ? 'green' : jobApplication.status === 'Rejected' ? 'red' : 'black', fontWeight: 'Bold' }}>
                                                                        {jobApplication.status}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </Layout>
        </>
    );
}
