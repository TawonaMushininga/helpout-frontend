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

    const Headers = [
        {
            headers: {
                "ngrok-skip-browser-warning": "69420",
                "access-token": sessionStorage.getItem('access-token'),
                "client": sessionStorage.getItem('client'),
                "expiry": sessionStorage.getItem('expiry'),
                "uid": sessionStorage.getItem('uid'),
                "token-type": sessionStorage.getItem('token-type')
            }
        }
    ]

    const fetchJobDetails = async () => {
        try {
            const response = await axios.get(url, Headers[0]
            );
            setJob(response.data);
            console.log(response.data);
            setUser(getUserDetails());

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const applyJob = async () => {
        try {
            const response = await axios.post(`${BackendUrl}/api/v1/job_applications`, {
                job_id: id
            }, Headers[0]
            );
            console.log(response.data);
            toast.success("Job Application Successful");

        } catch (error) {
            console.log(error);
            toast.error("Job Application Failed");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        id && fetchJobDetails()
    }, [id])


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
                                                    <span className="card-briefcase">{job.payment_type}</span>
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
                                                <div className="author-single">
                                                    <span>AliThemes</span>
                                                </div>
                                                <div className="single-apply-jobs">
                                                    <div className="row align-items-center">
                                                        <div className="col-md-5">

                                                            <Link legacyBehavior href="#">
                                                                <a className="btn btn-default mr-15">Apply now</a>
                                                            </Link>

                                                            <Link legacyBehavior href="#">
                                                                <a className="btn btn-border">Save job</a>
                                                            </Link>
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
                                                                <span className="sidebar-company">AliThemes</span>
                                                                <span className="card-location">New York, US</span>
                                                                <Link legacyBehavior href="#">
                                                                    <a className="link-underline mt-15">02 Open Jobs</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-list-job">
                                                        <div className="box-map">
                                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3150609575905!2d-87.6235655!3d41.886080899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1658551322537!5m2!1svi!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                                        </div>
                                                        <ul className="ul-disc">
                                                            <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                                            <li>Phone: (123) 456-7890</li>
                                                            <li>Email: contact@Evara.com</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="sidebar-border">
                                                    <h6 className="f-18">Similar jobs</h6>
                                                    <div className="sidebar-list-job">
                                                        <ul>
                                                            <li>
                                                                <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                                    <div className="image">
                                                                        <Link legacyBehavior href="/job-details">
                                                                            <a>
                                                                                <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="info-text">
                                                                        <h5 className="font-md font-bold color-brand-1">
                                                                            <Link legacyBehavior href="/job-details">
                                                                                <a>UI / UX Designer fulltime</a>
                                                                            </Link>
                                                                        </h5>
                                                                        <div className="mt-0">
                                                                            <span className="card-briefcase">Fulltime</span>
                                                                            <span className="card-time">
                                                                                <span>3</span>
                                                                                <span> mins ago</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-5">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <h6 className="card-price">
                                                                                        $250<span>/Hour</span>
                                                                                    </h6>
                                                                                </div>
                                                                                <div className="col-6 text-end">
                                                                                    <span className="card-briefcase">New York, US</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                                    <div className="image">
                                                                        <Link legacyBehavior href="/job-details">
                                                                            <a>
                                                                                <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="info-text">
                                                                        <h5 className="font-md font-bold color-brand-1">
                                                                            <Link legacyBehavior href="/job-details">
                                                                                <a>Java Software Engineer</a>
                                                                            </Link>
                                                                        </h5>
                                                                        <div className="mt-0">
                                                                            <span className="card-briefcase">Fulltime</span>
                                                                            <span className="card-time">
                                                                                <span>5</span>
                                                                                <span> mins ago</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-5">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <h6 className="card-price">
                                                                                        $500<span>/Hour</span>
                                                                                    </h6>
                                                                                </div>
                                                                                <div className="col-6 text-end">
                                                                                    <span className="card-briefcase">Tokyo, Japan</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                                    <div className="image">
                                                                        <Link legacyBehavior href="/job-details">
                                                                            <a>
                                                                                <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="info-text">
                                                                        <h5 className="font-md font-bold color-brand-1">
                                                                            <Link legacyBehavior href="/job-details">
                                                                                <a>Frontend Developer</a>
                                                                            </Link>
                                                                        </h5>
                                                                        <div className="mt-0">
                                                                            <span className="card-briefcase">Fulltime</span>
                                                                            <span className="card-time">
                                                                                <span>8</span>
                                                                                <span> mins ago</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-5">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <h6 className="card-price">
                                                                                        $650<span>/Hour</span>
                                                                                    </h6>
                                                                                </div>
                                                                                <div className="col-6 text-end">
                                                                                    <span className="card-briefcase">Hanoi, Vietnam</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                                    <div className="image">
                                                                        <Link legacyBehavior href="/job-details">
                                                                            <a>
                                                                                <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="info-text">
                                                                        <h5 className="font-md font-bold color-brand-1">
                                                                            <Link legacyBehavior href="/job-details">
                                                                                <a>Cloud Engineer</a>
                                                                            </Link>
                                                                        </h5>
                                                                        <div className="mt-0">
                                                                            <span className="card-briefcase">Fulltime</span>
                                                                            <span className="card-time">
                                                                                <span>12</span>
                                                                                <span> mins ago</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-5">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <h6 className="card-price">
                                                                                        $380<span>/Hour</span>
                                                                                    </h6>
                                                                                </div>
                                                                                <div className="col-6 text-end">
                                                                                    <span className="card-briefcase">Losangl, Au</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                                    <div className="image">
                                                                        <Link legacyBehavior href="/job-details">
                                                                            <a>
                                                                                <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="info-text">
                                                                        <h5 className="font-md font-bold color-brand-1">
                                                                            <Link legacyBehavior href="/job-details">
                                                                                <a>DevOps Engineer</a>
                                                                            </Link>
                                                                        </h5>
                                                                        <div className="mt-0">
                                                                            <span className="card-briefcase">Fulltime</span>
                                                                            <span className="card-time">
                                                                                <span>34</span>
                                                                                <span> mins ago</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-5">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <h6 className="card-price">
                                                                                        $140<span>/Hour</span>
                                                                                    </h6>
                                                                                </div>
                                                                                <div className="col-6 text-end">
                                                                                    <span className="card-briefcase">Paris, France</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                                    <div className="image">
                                                                        <Link legacyBehavior href="/job-details">
                                                                            <a>
                                                                                <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="info-text">
                                                                        <h5 className="font-md font-bold color-brand-1">
                                                                            <Link legacyBehavior href="/job-details">
                                                                                <a>Figma design UI/UX</a>
                                                                            </Link>
                                                                        </h5>
                                                                        <div className="mt-0">
                                                                            <span className="card-briefcase">Fulltime</span>
                                                                            <span className="card-time">
                                                                                <span>45</span>
                                                                                <span> mins ago</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-5">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <h6 className="card-price">
                                                                                        $290<span>/Hour</span>
                                                                                    </h6>
                                                                                </div>
                                                                                <div className="col-6 text-end">
                                                                                    <span className="card-briefcase">New York, US</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                                    <div className="image">
                                                                        <Link legacyBehavior href="/job-details">
                                                                            <a>
                                                                                <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="info-text">
                                                                        <h5 className="font-md font-bold color-brand-1">
                                                                            <Link legacyBehavior href="/job-details">
                                                                                <a>Product Manage</a>
                                                                            </Link>
                                                                        </h5>
                                                                        <div className="mt-0">
                                                                            <span className="card-briefcase">Fulltime</span>
                                                                            <span className="card-time">
                                                                                <span>50</span>
                                                                                <span> mins ago</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-5">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <h6 className="card-price">
                                                                                        $650<span>/Hour</span>
                                                                                    </h6>
                                                                                </div>
                                                                                <div className="col-6 text-end">
                                                                                    <span className="card-briefcase">New York, US</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                                    <div className="image">
                                                                        <Link legacyBehavior href="/job-details">
                                                                            <a>
                                                                                <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="info-text">
                                                                        <h5 className="font-md font-bold color-brand-1">
                                                                            <Link legacyBehavior href="/job-details">
                                                                                <a>UI / UX Designer</a>
                                                                            </Link>
                                                                        </h5>
                                                                        <div className="mt-0">
                                                                            <span className="card-briefcase">Fulltime</span>
                                                                            <span className="card-time">
                                                                                <span>58</span>
                                                                                <span> mins ago</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-5">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <h6 className="card-price">
                                                                                        $270<span>/Hour</span>
                                                                                    </h6>
                                                                                </div>
                                                                                <div className="col-6 text-end">
                                                                                    <span className="card-briefcase">New York, US</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section-box mt-50 mb-50">
                                    <div className="container">
                                        <div className="text-left">
                                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Featured Jobs</h2>
                                            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
                                        </div>
                                        <div className="mt-50">
                                            <div className="box-swiper style-nav-top">
                                                <FeaturedSlider />
                                            </div>
                                            <div className="text-center">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-grey">Load more posts</a>
                                                </Link>
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
                        </>
                    )
                }

            </Layout>
        </>
    );
}
