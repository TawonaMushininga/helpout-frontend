import React, { useState, useEffect } from 'react';
import { set, useForm } from 'react-hook-form';
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import BackendUrl from "../util/url";
import { Token } from "../util/url";
import { getUserDetails } from "../util/userDetails";

function CreateJob() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
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



  const onSubmit = async (data) => {
    console.log('Job Details:', data);
    setLoading(true);

    const getHeaders = async () => {
      const accessToken = await sessionStorage.getItem('access-token');
      const client = await sessionStorage.getItem('client');
      const expiry = await sessionStorage.getItem('expiry');
      const uid = await sessionStorage.getItem('uid');
      const tokenType = await sessionStorage.getItem('token-type');

      console.log({ accessToken, client, expiry, uid, tokenType });

      return {
        "ngrok-skip-browser-warning": "69420",
        "access-token": accessToken,
        "client": client,
        "expiry": expiry,
        "uid": uid,
        "token-type": tokenType,
      };
    };

    const url = `${BackendUrl}/api/v1/jobs`;

    try {
      const headers = await getHeaders();

      const response = await axios.post(url, {
        title: data.title,
        description: data.description,
        location: data.location,
        amount: data.amount,
        job_type: data.job_type,
        payment_type: data.payment_type,
        region: data.region,
        deadline: data.deadline,
        experience: data.experience,
        hours: data.hours,
        date: data.date,
        max_applicants: data.max_applicants
      }, { headers });

      console.log(response);
      setLoading(false);

      if (response.status === 200) {
        toast.success("Job Created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        reset();  // Reset form after successful submission
        // window.location.href = "/page-dashboard";
      } else {
        toast.error("Job Creation Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Job Creation Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }


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

if(isAuth === true && userDetails.role === "employee" && userDetails.role !== "" ){
  return (
    <>
      <Layout>
      <section className="pt-100 login-register">
          <div className="container">
            <div className="row login-register-cover">
              <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
                <div className="text-center mb-4">
                <h1>Role - Employee </h1>
        <p>
          You are not authorized to view this page
        </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}


  return (
    <>
      <Layout>
        <section className="pt-100 login-register">
          <div className="container">
            <div className="row login-register-cover">
              <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
                <div className="text-center mb-4">
                  <h2 className="mt-10 mb-5 text-brand-1">Job Creation</h2>
                </div>
                {
                                        isAuth === true && userDetails.role === "employee" && userDetails.role !== "" && (
                                            <li>
                                                <Link legacyBehavior href="/page-createjob">
                                                    <a>Create Job {userDetails.role}</a>
                                                </Link>
                                            </li>
                                        )
                                    }
                <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 rounded shadow-sm">
                  <div className="form-group mb-3">
                    <label htmlFor="title">Job Title</label>
                    <input
                      type="text"
                      className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                      id="title"
                      {...register('title', { required: true })}
                    />
                    {errors.title && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                      id="description"
                      {...register('description', { required: true })}
                    />
                    {errors.description && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="location">Location</label>
                    {/* <input
                      type="text"
                      className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                      id="location"
                      {...register('location', { required: true })}
                    /> */}
                    <select
                      className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                      id="job_type"
                      {...register('location', { required: true })}
                    >
                      <option value="harare">Harare</option>
                      <option value="bulawayo">Bulawayo</option>
                      <option value="mazowe">Mazowe</option>
                      <option value="mvurwi">Mvurwi</option>
                    </select>
                    {errors.location && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="amount">Amount</label>
                    <input
                      type="number"
                      className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                      id="amount"
                      {...register('amount', { required: true })}
                    />
                    {errors.amount && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="amount">Max Applicants</label>
                    <input
                      type="number"
                      className={`form-control ${errors.max_applicants ? 'is-invalid' : ''}`}
                      id="amount"
                      {...register('max_applicants', { required: true })}
                    />
                    {errors.max_applicants && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="job_type">Job Type</label>
                    <select
                      className={`form-control ${errors.job_type ? 'is-invalid' : ''}`}
                      id="job_type"
                      {...register('job_type', { required: true })}
                    >
                      <option value="software">Software</option>
                      <option value="tutor">Tutor</option>
                      <option value="manager">Manager</option>
                      <option value="fishing">Fishing</option>
                    </select>
                    {errors.job_type && <span className="invalid-feedback">This field is required</span>}
                  </div>


                  <div className="form-group mb-3">
                    <label htmlFor="payment_type">Payment Type</label>
                    <select
                      className={`form-control ${errors.payment_type ? 'is-invalid' : ''}`}
                      id="job_type"
                      {...register('payment_type', { required: true })}
                    >
                      <option value="hourly">Hourly</option>
                      <option value="fixed">Fixed</option>
                    </select>
                    {errors.payment_type && <span className="invalid-feedback">This field is required</span>}
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="region">Region</label>

                    <select
                      className={`form-control ${errors.region ? 'is-invalid' : ''}`}
                      id="job_type"
                      {...register('region', { required: true })}
                    >
                      <option value="harare">Harare</option>
                      <option value="bulawayo">Bulawayo</option>
                      <option value="mazowe">Mazowe</option>
                      <option value="mvurwi">Mvurwi</option>
                    </select>
                    {errors.region && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="deadline">Deadline</label>
                    <input
                      type="date"
                      className={`form-control ${errors.deadline ? 'is-invalid' : ''}`}
                      id="deadline"
                      {...register('deadline', { required: true })}
                    />
                    {errors.deadline && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  {/* Dropdown for choosing experience */}
                  <div className="form-group mb-3">
                    <label htmlFor="experience">Experience</label>
                    <select
                      className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
                      id="experience"
                      {...register('experience', { required: true })}
                    >
                      <option value="">Select experience level</option>
                      <option value="entry">Entry Level</option>
                      <option value="beginner">Intermediate</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expect">Senior</option>
                    </select>
                    {errors.experience && <span className="invalid-feedback">This field is required</span>}
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="hours">Hours</label>
                    <input
                      type="number"
                      className={`form-control ${errors.hours ? 'is-invalid' : ''}`}
                      id="hours"
                      {...register('hours', { required: true })}
                    />
                    {errors.hours && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  {/* add Date of Job */}
                  <div className="form-group mb-3">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                      id="date"
                      {...register('date', { required: true })}
                    />
                    {errors.date && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  {
                    loading ? <button className="btn btn-primary btn-block" type="button" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Loading...
                    </button> : (
                      <button type="submit" className="btn btn-primary btn-block">Create Job</button>
                    )
                  }
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
    </>
  );
}

export default CreateJob;
