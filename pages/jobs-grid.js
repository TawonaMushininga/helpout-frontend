"use client";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Jobs from "../util/mock_data_jobs";
import axios from "axios";
import  BackendUrl from "../util/url";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
export default function JobGrid() {

    const [jobs, setJobs] = useState([]);

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

        console.log({ accessToken, client, expiry, uid, tokenType });

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
            toast.success("Jobs fetched successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch jobs");
        }
    };

    // use effect to navigate to sign-in page if session storage is not defined
    useEffect(() => {
        getJobs();
    }, []);


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
                                        <div className="box-filters-job">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-5">
                                                    <span className="text-small text-showing">
                                                        Showing <strong>41-60 </strong>of <strong>944 </strong>jobs
                                                    </span>
                                                </div>
                                                <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                                    <div className="display-flex2">
                                                        <div className="box-border mr-10">
                                                            <span className="text-sortby">Show:</span>
                                                            <div className="dropdown dropdown-sort">
                                                                <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                                    <span>12</span>
                                                                    <i className="fi-rr-angle-small-down" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">10</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">12</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">20</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="box-border">
                                                            <span className="text-sortby">Sort by:</span>
                                                            <div className="dropdown dropdown-sort">
                                                                <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                                    <span>Newest Post</span>
                                                                    <i className="fi-rr-angle-small-down" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">Newest Post</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Oldest Post</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Rating Post</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="box-view-type">
                                                            <Link legacyBehavior href="/jobs-list">
                                                                <a className="view-type">
                                                                    <img src="assets/imgs/template/icons/icon-list.svg" alt="jobBox" />
                                                                </a>
                                                            </Link>

                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="view-type">
                                                                    <img src="assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">

                                            {
                                                jobs.map((job, index) => (
                                                    <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                        <div className="card-grid-2 hover-up">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src={showRandomLogo()} alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <Link legacyBehavior href="company-details">
                                                                        <a className="name-job">{job.title}</a>
                                                                    </Link>
                                                                    <span className="location-small">{job.location}</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-block-info">
                                                                <h6>
                                                                    <Link legacyBehavior href="/job-details">
                                                                        <a>{job.jobTitle}</a>
                                                                    </Link>
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
                                                                            <Link legacyBehavior
                                                                            href={{
                                                                                pathname: '/job-details',
                                                                                query: { id: job.id },
                                                                              }}
                                                                              >
                                                                                <a className="btn btn-apply-now">Apply Now</a>
                                                                            </Link>
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
                                    <div className="paginations">
                                        <ul className="pager">
                                            <li>
                                                <a className="pager-prev" href="#" />
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">1</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">2</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">3</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">4</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">5</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number active">6</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">7</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="pager-next" href="#" />
                                            </li>
                                        </ul>
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

                    <section className="section-box mt-50 mb-20">
                        <div className="container">
                            <div className="box-newsletter">
                                <div className="row">
                                    <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/template/newsletter-left.png" alt="joxBox" />
                                    </div>
                                    <div className="col-lg-12 col-xl-6 col-12">
                                        <h2 className="text-md-newsletter text-center">
                                            New Things Will Always
                                            <br /> Update Regularly
                                        </h2>
                                        <div className="box-form-newsletter mt-40">
                                            <form className="form-newsletter">
                                                <input className="input-newsletter" type="text" placeholder="Enter your email here" />
                                                <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                                        <img src="assets/imgs/template/newsletter-right.png" alt="joxBox" />
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
