import React, { useState } from "react";
import Link from "next/link";

import Jobs from "../../util/mock_data_jobs";

const CategoryTab2 = () => {
    const [active, setActive] = useState(1);

    const latestAvailableJobs = Jobs.slice(-6);

    const randomImages = [
        "assets/imgs/page/homepage2/img1.png",
        "assets/imgs/page/homepage2/img2.png",
        "assets/imgs/page/homepage2/img3.png",
        "assets/imgs/page/homepage2/img4.png",
        "assets/imgs/page/homepage2/img5.png",
        "assets/imgs/page/homepage2/img6.png",
    ]

    const getRandImage = () => {
        return randomImages[Math.floor(Math.random() * randomImages.length)];
    }

    const formatDate = (date) => {
        const d = new Date(date);
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        return `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()} | ${hours}:${minutes}`;
    }

    const handleOnClick = (index) => {
        setActive(index); // remove the curly braces
    };
    return (
        <>

            <div className="tab-content mt-50" id="myTabContent-1">


                <div className="row">
                    {
                        latestAvailableJobs.length > 0 && latestAvailableJobs.map((job, index) => (
                            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="card-grid-2 grid-bd-16 hover-up">
                                    <div className="card-grid-2-image">
                                        <span className="lbl-hot"><span>{job.job_type}</span></span>
                                        <div className="image-box">
                                            <figure><img src={getRandImage()} alt="jobBox" /></figure>
                                        </div>
                                    </div>
                                    <div className="card-block-info">
                                        <h5>
                                            <Link legacyBehavior href="/job-details"><a>{job.title}</a></Link>
                                        </h5>
                                        <div className="mt-5">
                                            <span className="card-location mr-15">{job.location}</span>
                                            <span className="card-time">{job.postedTime ? formatDate(job.postedTime) : formatDate(job.created_at)}</span>
                                        </div>
                                        <div className="card-2-bottom mt-20">
                                            <div className="row">
                                                {/* <div className="col-xl-7 col-md-7 mb-2">
                                                    <Link key={index} legacyBehavior href="/jobs-grid">
                                                        <a className="btn btn-tags-sm mr-5">{job.tag ? job.tag : getRandTag()}</a>
                                                    </Link>
                                                </div> */}
                                                <div className="col-xl-7 col-md-7 mb-2">
                                                    <span className="card-text-price">{job.amount}</span>
                                                    <span className="text-muted">{" "}/{" "}{job.payment_type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="font-sm color-text-paragraph mt-20">{job.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryTab2;
