"use client"
/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";

import Link from 'next/link';
import React from 'react';
import { getUserDetails } from "../../util/userDetails";

const Header = ({ handleOpen, handleRemove, openClass }) => {
    const [scroll, setScroll] = useState(false);
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

    const logout = async () => {
        await sessionStorage.removeItem('access-token');
        await sessionStorage.removeItem('refresh-token');
        await sessionStorage.removeItem('user_id');
        await sessionStorage.removeItem('username');
        await sessionStorage.removeItem('email');
        await sessionStorage.removeItem('user_role');
        await sessionStorage.removeItem('isAuthenticated');
        await sessionStorage.removeItem('first_name');
        await sessionStorage.removeItem('last_name');
        await sessionStorage.removeItem('user_role');

        window.location.href = "/page-signin";
    }

    // isAuthenticated().then(result => console.log(result));

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 100);
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
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
            <header className={scroll ? "header sticky-bar stick" : "header sticky-bar"}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <h4 className="d-flex"> GiG - Jobs</h4>
                            </div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                    <li className="">
                                        <Link legacyBehavior href="/"><a className="active">Home </a></Link>
                                    </li>
                                    <li className="">

                                        <Link legacyBehavior href={isAuth == true ? "/jobs-grid" : "/page-signin"}><a>GiGs</a></Link>

                                    </li>
                                    <li className="">
                                        <Link legacyBehavior href="/page-about"><a>About Us</a></Link>

                                    </li>

                                    <li className="">
                                        <Link legacyBehavior href={isAuth == true ? "/candidate-details" : "/page-signin"}><a>Profile</a></Link>

                                        {/* <ul className="sub-menu">
                                            <li>
                                                <Link legacyBehavior href="/page-about"><a>About Us</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/page-pricing"><a>Pricing Plan</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/page-contact"><a>Contact Us</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/page-register"><a>Register</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/page-signin"><a>Signin</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/page-reset-password"><a>Reset Password</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/page-content-protected"><a>Content Protected</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/page-createjob"><a>Create Job</a></Link>
                                            </li>
                                        </ul> */}
                                    </li>
                                    {/* <li className="has-children">
                                        <Link legacyBehavior href="/blog-grid"><a>Blog</a></Link>

                                        <ul className="sub-menu">
                                            <li>
                                                <Link legacyBehavior href="/blog-grid"><a>Blog Grid</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/blog-grid-2"><a>Blog Grid 2</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/blog-details"><a>Blog Single</a></Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {
                                        isAuth === true && userDetails.role !== "employee" && userDetails.role !== "" && (
                                            <li>
                                                <Link legacyBehavior href="/page-createjob">
                                                    <a>Create Job </a>
                                                </Link>
                                            </li>
                                        )
                                    }

                                </ul>
                            </nav>
                            <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                onClick={() => { handleOpen(); handleRemove() }}>
                                <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" /></div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                {
                                    isAuth == true ? (
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center"
                                        }}>
                                            <Link legacyBehavior href="/page-profile"><a className="text-link-bd-btom hover-up">Welcome, {userDetails.firstName}</a></Link>
                                            <button onClick={() => logout()}
                                                style={{
                                                    cursor: "pointer",
                                                    color: "#fff",
                                                    backgroundColor: "#f00",
                                                    padding: "4px 10px",
                                                    borderRadius: "5px",
                                                    border: "none",
                                                    marginLeft: "10px"

                                                }}
                                            >Logout</button>
                                        </div>
                                    ) : (
                                        <>
                                            <Link legacyBehavior href="/page-signin"><a className="text-link-bd-btom hover-up bg-blue-500 p-4">Sign In</a></Link>
                                            <Link legacyBehavior href="/page-register"><a className="text-link-bd-btom hover-up p-4">Register</a></Link>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;
