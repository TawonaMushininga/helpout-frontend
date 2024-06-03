"use client";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Jobs from "../util/mock_data_jobs";
import axios from "axios";
import BackendUrl from "../util/url";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import PageHead from "../components/Layout/PageHead"
import { getUserDetails } from "../util/userDetails";
export default function JobGrid() {

    const [jobs, setJobs] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    const isAuthenticated = async () => {
        const accessToken = await sessionStorage.getItem('access-token');
        if (accessToken !== null) {
            // console.log('authenticated');
            return true;
        }
        // console.log('not authenticated');
        return false;
    }


    const randomLogos = [
        "assets/imgs/brands/brand-1.png",
        "assets/imgs/brands/brand-2.png",
        "assets/imgs/brands/brand-3.png",
        "assets/imgs/brands/brand-4.png",
        "assets/imgs/brands/brand-5.png",
        "assets/imgs/brands/brand-6.png",
        "assets/imgs/brands/brand-7.png",
    ];

    const showRandomLogo = () => {
        return randomLogos[Math.floor(Math.random() * randomLogos.length)];
    }

    const formatDate = (date) => {
        const d = new Date(date);
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        return `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()} | ${hours}:${minutes}`;
    }

    const getHeaders = async () => {
        const accessToken = await sessionStorage.getItem('access-token');
        const client = await sessionStorage.getItem('client');
        const expiry = await sessionStorage.getItem('expiry');
        const uid = await sessionStorage.getItem('uid');
        const tokenType = await sessionStorage.getItem('token-type');

        // console.log({ accessToken, client, expiry, uid, tokenType });

        const headers = {
            "ngrok-skip-browser-warning": "69420",
            "access-token": accessToken,
            "client": client,
            "expiry": expiry,
            "uid": uid,
            "token-type": tokenType
        };

        return { headers };
    };


    const getJobs = async () => {
        try {
            const headers = await getHeaders();
            const response = await axios.get(`${BackendUrl}/api/v1/jobs`, headers);
            console.log(response.data);
            setJobs(response.data);
            response.data.length === 0 ? toast.success("No jobs available") : toast.success("Jobs fetched successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch jobs");
        }
    };

    // use effect to navigate to sign-in page if session storage is not defined
    useEffect(() => {
        getJobs();
    }, []);

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
                            <div className="banner-hero banner-single banner-single-bg">
                                <div className="block-banner text-center">
                                    <h3 className="wow animate__animated animate__fadeInUp">
                                        <span className="color-brand-2">22 Jobs</span> Available Now
                                    </h3>
                                    <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, <br className="d-none d-xl-block" />
                                        atque delectus molestias quis?
                                    </div>
                                    <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                        <form>
                                            <div className="box-industry">
                                                <select className="form-input mr-10 select-active input-industry">
                                                    <option value={0}>Industry</option>
                                                    <option value={1}>Software</option>
                                                    <option value={2}>Finance</option>
                                                    <option value={3}>Recruting</option>
                                                    <option value={4}>Management</option>
                                                    <option value={5}>Advertising</option>
                                                    <option value={6}>Development</option>
                                                </select>
                                            </div>
                                            <div className="box-industry">
                                                <select className="form-input mr-10 select-active input-location">
                                                    <option value>Location</option>
                                                    <option value="HRE">Harare</option>
                                                    <option value="BYO">Bulawayo</option>
                                                    <option value="KAD">Kadoma</option>
                                                    <option value="MAS">Masvingo</option>
                                                    <option value="MUT">Mutare</option>
                                                    <option value="GWE">Gweru</option>

                                                </select>
                                            </div>
                                            <input className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... " />
                                            <button className="btn btn-default btn-find font-sm">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                                    <div className="content-page">

                                        <div className="row">

                                            {
                                                jobs?.map((job, index) => (
                                                    <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                        <div className="card-grid-2 hover-up">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src={showRandomLogo()} alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <p className="name-job">{job.title}</p>
                                                                    <span className="location-small">{job.location}</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-block-info">
                                                                <h6>
                                                                    {job.jobTitle}
                                                                </h6>
                                                                <div className="mt-5">
                                                                    <span className="card-briefcase">{job.job_type}</span>
                                                                    <span className="card-time">
                                                                        {formatDate(job.created_at)}
                                                                    </span>
                                                                </div>
                                                                <p className="font-sm color-text-paragraph mt-15">{job.description}</p>

                                                                <div className="card-2-bottom mt-30">
                                                                    <div className="row">
                                                                        <div className="col-lg-7 col-7">
                                                                            <span className="card-text-price">{job.amount} ZiG{" "}</span>
                                                                            <span className="text-muted">/ {job.payment_type}</span>
                                                                        </div>
                                                                        <div className="col-lg-5 col-5 text-end">
                                                                            {
                                                                                isAuth === true && userDetails.role === "employee" && userDetails.role !== "" ? (
                                                                                    <Link legacyBehavior
                                                                                        href={{
                                                                                            pathname: '/job-details',
                                                                                            query: { id: job.id },
                                                                                        }}
                                                                                    >
                                                                                        <a className="btn btn-apply-now">Apply Now</a>
                                                                                    </Link>
                                                                                ) : (


                                                                                    <Link legacyBehavior
                                                                                        href={{
                                                                                            pathname: '/page-edit-job',
                                                                                            query: { id: job.id },
                                                                                        }}
                                                                                    >
                                                                                        <a className="btn btn-apply-now">Edit</a>
                                                                                    </Link>
                                                                                )
                                                                            }

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="sidebar-shadow none-shadow mb-30">
                                        <div className="sidebar-filters">
                                            <div className="filter-block head-border mb-30">
                                                <h5>
                                                    Advance Filter
                                                    <Link legacyBehavior href="#"

                                                    >
                                                        <a className="link-reset">Reset</a>
                                                    </Link>
                                                </h5>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <div className="form-group select-style select-style-icon">
                                                    <select className="form-control form-icons select-active">
                                                        <option>Harare</option>
                                                        <option>Bulawayo</option>
                                                        <option>Kadoma</option>
                                                        <option>Masvingo</option>
                                                    </select>
                                                    <i className="fi-rr-marker" />
                                                </div>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">Industry</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Advertising</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Gardening</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">34</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Housekeeping</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">50</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Delivery Services</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">29</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Manual Labor</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">38</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">Experience Level</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Internship</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">56</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Mid</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">87</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">Associate</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">24</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Mid Level</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">45</span>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">Job Posted</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">All</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">78</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">1 day</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">65</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">7 days</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">24</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">30 days</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">56</span>
                                                        </li>
                                                    </ul>
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
