import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import BackendUrl from "../util/url";
import { useRouter } from 'next/router'
function EditJob() {
  const [loading, setLoading] = useState(false);
  const [jobDetails, setJobDetails] = useState(null);
  const router = useRouter()
  const { id } = router.query
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(`${BackendUrl}/api/v1/jobs/9`, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
          "access-token": localStorage.getItem('access-token'),
          "client": localStorage.getItem('client'),
          "expiry": localStorage.getItem('expiry'),
          "uid": localStorage.getItem('uid'),
          "token-type": localStorage.getItem('token-type')
        }

      });
      console.log(response)
      if (response.status === 200) {
        setJobDetails(response.data);
        // Populate the form fields with the fetched job details
        Object.keys(response.data).forEach((key) => {
          setValue(key, response.data[key]);
        });
      } else {
        toast.error("Failed to fetch job details", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    } catch (error) {
      console.error("Error fetching job details:", error);
      toast.error("Failed to fetch job details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };
  useEffect(() => {

    fetchJobDetails();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    const updatedData = { ...jobDetails, ...data };

    try {
      const response = await axios.put(`${BackendUrl}/api/v1/jobs/${id}`, updatedData, {

        headers: {
          "ngrok-skip-browser-warning": "69420",
          "access-token": localStorage.getItem('access-token'),
          "client": localStorage.getItem('client'),
          "expiry": localStorage.getItem('expiry'),
          "uid": localStorage.getItem('uid'),
          "token-type": localStorage.getItem('token-type')
        }
      });

      console.log(response.data)


      if (response.status === 200) {
        fetchJobDetails();
        toast.success("Job Updated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      } else {
        toast.error("Job Update Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error("Job Update Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    } finally {
      setLoading(false);
    }
  };

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout>
        <section className="pt-100 login-register">
          <div className="container">
            <div className="row login-register-cover">
              <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
                <div className="text-center mb-4">
                  <h2 className="mt-10 mb-5 text-brand-1">Edit Job</h2>
                </div>
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
                    <input
                      type="text"
                      className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                      id="location"
                      {...register('location', { required: true })}
                    />
                    {errors.location && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="job_type">Job Type</label>
                    <select
                      className={`form-control ${errors.job_type ? 'is-invalid' : ''}`}
                      id="job_type"
                      {...register('job_type', { required: true })}
                    >
                      <option value="">Select job type</option>
                      <option value="software">Software</option>
                    </select>
                    {errors.job_type && <span className="invalid-feedback">This field is required</span>}
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
                    <label htmlFor="payment_type">Payment Type</label>
                    <input
                      type="text"
                      className={`form-control ${errors.payment_type ? 'is-invalid' : ''}`}
                      id="payment_type"
                      {...register('payment_type', { required: true })}
                    />
                    {errors.payment_type && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="region">Region</label>
                    <select
                      className={`form-control ${errors.region ? 'is-invalid' : ''}`}
                      id="region"
                      {...register('region', { required: true })}
                    >
                      <option value="">Select region</option>
                      <option value="harare">Harare</option>
                      <option value="bulawayo">Bulawayo</option>
                      <option value="marondera">Marondera</option>
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
                      {...register('deadline', { required: false })}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="experience">Experience</label>
                    <select
                      className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
                      id="experience"
                      {...register('experience', { required: true })}
                    >
                      <option value="">Select experience level</option>
                      <option value="expert">Expert</option>
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
                  <div className="form-group mb-3">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                      id="date"
                      {...register('date', { required: false })}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="timeslot">Timeslot</label>
                    <input
                      type="time"
                      className={`form-control ${errors.timeslot ? 'is-invalid' : ''}`}
                      id="timeslot"
                      {...register('timeslot', { required: true })}
                    />
                    {errors.timeslot && <span className="invalid-feedback">This field is required</span>}
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Updating..." : "Update Job"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default EditJob;
