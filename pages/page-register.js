import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import errorStyle from "../components/styles/errorStyle";
import axios from "axios";
import { toast } from "react-toastify";
import BackendUrl from "../util/url";

export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleRePasswordVisibility = () => setShowRePassword(!showRePassword);

    const url = BackendUrl + "/api/v1/users.json";

    //  function to store token in local storage
    const storeToken = (token) => {
        localStorage.setItem("token", token);
    };

    const onSubmit = (data) => {
        const formData = {
            user: {
                first_name: data.fullname.split(" ")[0],
                last_name: data.fullname.split(" ")[1],
                email: data.emailaddress,
                username: data.username,
                role: data.role === "Job Seeker" ? 0 : 1,
                password: data.password,
                password_confirmation: data.repassword
            }
        };

        console.log(formData);

        try {
            axios.post(url, formData, { headers: { "Content-Type": "application/json","ngrok-skip-browser-warning": "69420" }})
                .then((response) => {
                    console.log(response);

                    //  get token from headers
                    const token = response.headers.authorization;
                    storeToken(token);

                    toast.success("Registration Successful", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                    window.location.href = "/page-profile";
                })
                .catch((error) => {
                    toast.error("Registration Failed", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                });

        }
        catch (error) {
            console.log(error);
        }
    };

    const password = watch("password");

    const roles = ["Employee", "Employer"];

    return (
        <>
            <Layout>
                <section className="pt-100 login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <p className="font-sm text-brand-2">Register </p>
                                    <h2 className="mt-10 mb-5 text-brand-1">Start for free Today</h2>
                                    <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                                    <button className="btn social-login hover-up mb-20">
                                        <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                        <strong>Sign up with Google</strong>
                                    </button>
                                    <div className="divider-text-center">
                                        <span>Or continue with</span>
                                    </div>
                                </div>
                                <form className="login-register text-start mt-20" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-1">Full Name *</label>
                                        <input
                                            className="form-control"
                                            id="input-1"
                                            type="text"
                                            {...register("fullname", { required: "Full Name is required" })}
                                            placeholder="Steven Job"
                                        />
                                        {errors.fullname && <p style={errorStyle}>{errors.fullname.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-2">Email *</label>
                                        <input
                                            className="form-control"
                                            id="input-2"
                                            type="email"
                                            {...register("emailaddress", { required: "Email is required" })}
                                            placeholder="stevenjob@gmail.com"
                                        />
                                        {errors.emailaddress && <p style={errorStyle}>{errors.emailaddress.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-3">Username *</label>
                                        <input
                                            className="form-control"
                                            id="input-3"
                                            type="text"
                                            {...register("username", { required: "Username is required" })}
                                            placeholder="stevenjob"
                                        />
                                        {errors.username && <p style={errorStyle}>{errors.username.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="role">Role *</label>
                                        <select
                                            className="form-control"
                                            id="role"
                                            {...register("role", { required: "Role is required" })}
                                        >
                                            <option value="">Select Role</option>
                                            {roles.map((role) => (
                                                <option key={role} value={role}>
                                                    {role === "Employee" ? "Job Seeker" : "Employer"}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.role && <p style={errorStyle}>{errors.role.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-4">Password *</label>
                                        <div className="password-wrapper" style={{ display: "flex", justifyContent: "space-between" }}>
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
                                        {errors.password && <p style={errorStyle}>{errors.password.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-5">Re-Password *</label>
                                        <div className="password-wrapper" style={{ display: "flex", justifyContent: "space-between" }}>
                                            <input
                                                className="form-control"
                                                id="input-5"
                                                type={showRePassword ? "text" : "password"}
                                                {...register("repassword", {
                                                    required: "Re-Password is required",
                                                    validate: value => value === password || "Passwords do not match"
                                                })}
                                                placeholder="************"
                                            />
                                            <button type="button" className="password-toggle" style={{
                                                marginLeft: "10px",
                                                padding: "5px 10px",
                                                fontSize: "14px",
                                                borderRadius: "5px",
                                                border: "1px solid #ccc",
                                                backgroundColor: "#fff",
                                                color: "#333",
                                                cursor: "pointer"
                                            }} onClick={toggleRePasswordVisibility}>
                                                {showRePassword ? "Hide" : "Show"}
                                            </button>
                                        </div>
                                        {errors.repassword && <p style={errorStyle}>{errors.repassword.message}</p>}
                                    </div>
                                    <div className="login_footer form-group d-flex justify-content-between">
                                        <label className="cb-container">
                                            <input type="checkbox" {...register("terms", { required: "You must agree to the terms" })} />
                                            <span className="text-small">Agree our terms and policy</span>
                                            <span className="checkmark" />
                                        </label>
                                        <Link legacyBehavior href="/page-contact">
                                            <a className="text-muted">Learn more</a>
                                        </Link>
                                    </div>
                                    {errors.terms && <p style={errorStyle}>{errors.terms.message}</p>}
                                    <div className="form-group">
                                        <button className="btn btn-brand-1 hover-up w-100" type="submit">
                                            Submit &amp; Register
                                        </button>
                                    </div>
                                    <div className="text-muted text-center">
                                        Already have an account?{" "}
                                        <Link legacyBehavior href="/page-signin">
                                            <a>Sign in</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className="img-1 d-none d-lg-block">
                                <img className="shape-1" src="assets/imgs/page/login-register/img-1.svg" alt="JobBox" />
                            </div>
                            <div className="img-2">
                                <img src="assets/imgs/page/login-register/img-2.svg" alt="JobBox" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
