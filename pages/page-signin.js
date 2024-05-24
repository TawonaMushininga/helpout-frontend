/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useForm } from "react-hook-form";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import errorStyle from "../components/styles/errorStyle";
import BackendUrl from "../util/url";

export default function Signin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const url = BackendUrl + "/api/v1/users/sign_in.json";

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    // Request interceptor to add headers
    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            const client = localStorage.getItem('client');
            const expiry = localStorage.getItem('expiry');
            const uid = localStorage.getItem('uid');
            const token_type = localStorage.getItem('token-type');

            config.headers['access-token'] = token;
            config.headers['client'] = client;
            config.headers['expiry'] = expiry;
            config.headers['uid'] = uid;
            config.headers['token-type'] = token_type;

            return config;
        },
        (error) => Promise.reject(error)
    );

    // Response interceptor to store headers
    axios.interceptors.response.use(
        (response) => {
            // console.log('Response headers:', response.headers);
            console.log('Response data:', response.headers['x-total-count']);

            const token = response.headers['access-token'];
            const client = response.headers['client'];
            const expiry = response.headers['expiry'];
            const uid = response.headers['uid'];
            const token_type = response.headers['token-type'];

            localStorage.setItem('access-token', token);
            localStorage.setItem('client', client);
            localStorage.setItem('expiry', expiry);
            localStorage.setItem('uid', uid);
            localStorage.setItem('token-type', token_type);

            return response;
        },
        (error) => Promise.reject(error)
    );

    const onSubmit = (data) => {
        setLoading(true);

        const formData = {
            user: {
                email: data.email,
                password: data.password
            }
        };

        axios.post(url, formData)
            .then((response) => {
                console.log(response);
                // save id to local storage
                localStorage.setItem("user_id", response.data.data.id);
                localStorage.setItem("first_name", response.data.data.first_name);
                localStorage.setItem("last_name", response.data.data.last_name);
                localStorage.setItem("email", response.data.data.email);
                localStorage.setItem("username", response.data.data.username);
                localStorage.setItem("user_role", response.data.data.role);

                localStorage.setItem("isAuthenticated", true);

                if (response.status === 200) {
                    toast.success("Login Successful", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                    // Redirect or do something else
                    window.location.href = "/page-profile";
                } else {
                    toast.error("Login Failed", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast.error("Login Failed", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            });
    };

    return (
        <Layout>
            <section className="pt-100 login-register">
                <div className="container">
                    <div className="row login-register-cover">
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="text-center">
                                <p className="font-sm text-brand-2">Welcome back! </p>
                                <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                                <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                                <button className="btn social-login hover-up mb-20">
                                    <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                    <strong>Sign in with Google</strong>
                                </button>
                                <div className="divider-text-center">
                                    <span>Or continue with</span>
                                </div>
                            </div>
                            <form className="login-register text-start mt-20" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-1">
                                        Username or Email address *
                                    </label>
                                    <input
                                        className="form-control"
                                        id="input-1"
                                        type="text"
                                        {...register("email", { required: "Username or Email address is required" })}
                                        placeholder="Steven Job"
                                    />
                                    {errors.email && <p style={errorStyle} >{errors.email.message}</p>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-4">
                                        Password *
                                    </label>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <input
                                            className="form-control"
                                            id="input-4"
                                            type={showPassword ? "text" : "password"}
                                            {...register("password", { required: "Password is required" })}
                                            placeholder="************"
                                        />
                                        <button type="button" className="password-toggle"
                                            style={{
                                                marginLeft: "10px",
                                                padding: "5px 10px",
                                                fontSize: "14px",
                                                borderRadius: "5px",
                                                border: "1px solid #ccc",
                                                backgroundColor: "#fff",
                                                color: "#333",
                                                cursor: "pointer"
                                            }}
                                            onClick={togglePasswordVisibility}>
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    {errors.password && <p style={errorStyle} >{errors.password.message}</p>}
                                </div>
                                <div className="login_footer form-group d-flex justify-content-between">
                                    <label className="cb-container">
                                        <input type="checkbox" {...register("rememberMe")} />
                                        <span className="text-small">Remember me</span>
                                        <span className="checkmark" />
                                    </label>
                                    <Link legacyBehavior href="/page-contact">
                                        <a className="text-muted">Forgot Password</a>
                                    </Link>
                                </div>
                                <div className="form-group">
                                    {
                                        loading ? <button className="btn btn-brand-1 hover-up w-100" type="submit" disabled>
                                            Loading...
                                        </button> : (
                                            <button className="btn btn-brand-1 hover-up w-100" type="submit">
                                                Login
                                            </button>
                                        )
                                    }
                                </div>
                                <div className="text-muted text-center">
                                    Don't have an Account ? {" "}
                                    <Link legacyBehavior href="/page-register">
                                        <a>Sign up</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="img-1 d-none d-lg-block">
                            <img className="shape-1" src="assets/imgs/page/login-register/img-4.svg" alt="JobBox" />
                        </div>
                        <div className="img-2">
                            <img src="assets/imgs/page/login-register/img-3.svg" alt="JobBox" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
