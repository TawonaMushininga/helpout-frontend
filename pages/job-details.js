"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import FeaturedSlider from "./../components/sliders/Featured";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import axios from "axios";
import { getUserDetails } from "../util/userDetails";
import { toast } from "react-toastify";

import BackendUrl from "../util/url";

export default function JobDetails() {

    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    // Get parameters from Link
    const router = useRouter()
    const { id } = router.query

    const url = `${BackendUrl}/api/v1/jobs/${id}`

    const formatDate = (date) => {
        const d = new Date(date);
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        return `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()} | ${hours}:${minutes}`;
    }

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

    const fetchJobDetails = async () => {
        setLoading(true);
        try {
            const headers = await getHeaders();
            const response = await axios.get(url, { headers });
            setJob(response.data);
            console.log(response.data);
            setUser(getUserDetails());
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    const applyJob = async () => {
        setLoading(true);

        try {
            const headers = await getHeaders();
            const response = await axios.post(
                `${BackendUrl}/api/v1/job_applications`,
                { job_id: id },
                { headers }
            );
            console.log(response.data);
            toast.success("Job Application Successful");
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            toast.error("Job Application Failed");
        } finally {
            setLoading(false);
        }
    };

    const getJobApplications = async () => {
        setLoading(true);
        try {
            const headers = await getHeaders();
            const response = await axios.get(`${BackendUrl}/api/v1/job_applications`, { headers });
            console.log(response.data);
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            fetchJobDetails();
            getJobApplications();
        }
    }, [id]);

    return (
        <>
            <Layout>
                {
                    loading ? <div>Loading...</div> : (
                        <>
                            <div>
                                <section className="section-box-2">
                                    <div className="container">
                                        <div className="banner-hero banner-image-single">
                                            <img src="assets/imgs/page/job-single/thumb.png" alt="jobBox" />
                                        </div>
                                        <div className="row mt-10">
                                            <div className="col-lg-8 col-md-12">
                                                <h3>{job.title}</h3>
                                                <div className="mt-0 mb-15">
                                                    <span className="card-briefcase">{job.status}</span>
                                                    <span className="card-time">{formatDate(job.created_at)}</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 text-lg-end">
                                                {
                                                    user && user.role === "employee" ? (
                                                        <button onClick={()=>applyJob()} className="btn btn-apply-icon btn-apply btn-apply-big hover-up" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                            Apply now
                                                        </button>
                                                    ) : (
                                                        <div className="btn btn-apply-icon btn-apply btn-apply-big hover-up" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                            Edit Job
                                                        </div>
                                                    )
                                                }

                                            </div>
                                        </div>
                                        <div className="border-bottom pt-10 pb-10" />
                                    </div>
                                </section>
                                <section className="section-box mt-50">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                                <div className="job-overview">
                                                    <h5 className="border-bottom pb-15 mb-30">Job Information</h5>
                                                    <div className="row">
                                                        <div className="col-md-6 d-flex">
                                                            <div className="sidebar-icon-item">
                                                                <img src="assets/imgs/page/job-single/industry.svg" alt="jobBox" />
                                                            </div>
                                                            <div className="sidebar-text-info ml-10">
                                                                <span className="text-description industry-icon mb-10">Industry</span>
                                                                <strong className="small-heading"> {job.job_type}</strong>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 d-flex mt-sm-15">
                                                            <div className="sidebar-icon-item">
                                                                <img src="assets/imgs/page/job-single/job-level.svg" alt="jobBox" />
                                                            </div>
                                                            <div className="sidebar-text-info ml-10">
                                                                <span className="text-description joblevel-icon mb-10">Job level</span>
                                                                <strong className="small-heading">{job.experience}</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-25">
                                                        <div className="col-md-6 d-flex mt-sm-15">
                                                            <div className="sidebar-icon-item">
                                                                <img src="assets/imgs/page/job-single/salary.svg" alt="jobBox" />
                                                            </div>
                                                            <div className="sidebar-text-info ml-10">
                                                                <span className="text-description salary-icon mb-10">Salary</span>
                                                                <strong className="small-heading">${job.amount} ZiG / {job.payment_type}</strong>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 d-flex">
                                                            <div className="sidebar-icon-item">
                                                                <img src="assets/imgs/page/job-single/experience.svg" alt="jobBox" />
                                                            </div>
                                                            <div className="sidebar-text-info ml-10">
                                                                <span className="text-description experience-icon mb-10">Experience</span>
                                                                <strong className="small-heading">{job.experience}</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-25">
                                                        <div className="col-md-6 d-flex mt-sm-15">
                                                            <div className="sidebar-icon-item">
                                                                <img src="assets/imgs/page/job-single/job-type.svg" alt="jobBox" />
                                                            </div>
                                                            <div className="sidebar-text-info ml-10">
                                                                <span className="text-description jobtype-icon mb-10">Job Date</span>
                                                                <strong className="small-heading">{job.date ? formatDate(job.date) : "Not Set"}</strong>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 d-flex mt-sm-15">
                                                            <div className="sidebar-icon-item">
                                                                <img src="assets/imgs/page/job-single/deadline.svg" alt="jobBox" />
                                                            </div>
                                                            <div className="sidebar-text-info ml-10">
                                                                <span className="text-description mb-10">Deadline</span>
                                                                <strong className="small-heading">10/08/2022</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-25">
                                                        <div className="col-md-6 d-flex mt-sm-15">
                                                            <div className="sidebar-icon-item">
                                                                <img src="assets/imgs/page/job-single/updated.svg" alt="jobBox" />
                                                            </div>
                                                            <div className="sidebar-text-info ml-10">
                                                                <span className="text-description jobtype-icon mb-10">Updated</span>
                                                                <strong className="small-heading">{formatDate(job.updated_at)}</strong>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 d-flex mt-sm-15">
                                                            <div className="sidebar-icon-item">
                                                                <img src="assets/imgs/page/job-single/location.svg" alt="jobBox" />
                                                            </div>
                                                            <div className="sidebar-text-info ml-10">
                                                                <span className="text-description mb-10">Location</span>
                                                                <strong className="small-heading">{job.location}</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-single">
                                                    <h4>Job Experience</h4>
                                                    <p>{job.description}</p>
                                                </div>

                                                <div className="single-apply-jobs">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-5">

                                                        {
                                                    user && user.role === "employee" ? (
                                                        <button onClick={()=>applyJob()} className="btn btn-apply-icon btn-apply btn-apply-big hover-up" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                            Apply now
                                                        </button>
                                                    ) : (
                                                        <div className="btn btn-apply-icon btn-apply btn-apply-big hover-up" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                            Edit Job
                                                        </div>
                                                    )
                                                }


                                                        </div>
                                                        <div className="col-md-7 text-lg-end social-share">
                                                            <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-10">Share this</h6>
                                                            <Link legacyBehavior href="#">
                                                                <a className="mr-5 d-inline-block d-middle">
                                                                    <img alt="jobBox" src="assets/imgs/template/icons/share-fb.svg" />
                                                                </a>
                                                            </Link>

                                                            <Link legacyBehavior href="#">
                                                                <a className="mr-5 d-inline-block d-middle">
                                                                    <img alt="jobBox" src="assets/imgs/template/icons/share-tw.svg" />
                                                                </a>
                                                            </Link>

                                                            <Link legacyBehavior href="#">
                                                                <a className="mr-5 d-inline-block d-middle">
                                                                    <img alt="jobBox" src="assets/imgs/template/icons/share-red.svg" />
                                                                </a>
                                                            </Link>

                                                            <Link legacyBehavior href="#">
                                                                <a className="d-inline-block d-middle">
                                                                    <img alt="jobBox" src="assets/imgs/template/icons/share-whatsapp.svg" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                                <div className="sidebar-border">
                                                    <div className="sidebar-heading">
                                                        <div className="avatar-sidebar">
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/job-single/avatar.png" />
                                                            </figure>
                                                            <div className="sidebar-info">
                                                                <span className="sidebar-company">Job Owner</span>
                                                                <span className="card-location">Harare, ZW</span>

                                                            </div>
                                                        </div>
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
                            </div>
                        </>
                    )
                }

            </Layout>
        </>
    );
}
