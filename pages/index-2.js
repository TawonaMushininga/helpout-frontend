/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import CategoryTab2 from "./../components/elements/CategoryTab2";
import BlogSlider from "./../components/sliders/Blog";
import BrandSlider from "./../components/sliders/Brand";
import CategorySlider2 from "./../components/sliders/Category2";
import TopRekruterSlider from "./../components/sliders/TopRekruter";

export default function Index2() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero hero-2">
                            <div className="banner-inner">
                                <div className="block-banner">
                                    <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">
                                        The #1 <span className="color-green">Job Board for</span>
                                        <br className="d-none d-lg-block" />
                                        Hiring or Find Your Next Job
                                    </h1>
                                    <div className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                        Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
                                    </div>
                                    <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
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
                                    <div className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                        <strong>Popular Searches:</strong>
                                        <Link legacyBehavior href="#">
                                            <a>Designer, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Web, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>IOS, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Developer, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>PHP, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Senior, </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Engineer, </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-60">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-start">
                                                <h4 className="color-white">
                                                    {" "}
                                                    <span className="count">265</span>
                                                    <span> K+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Daily Jobs Posted</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-start">
                                                <h4 className="color-white">
                                                    <span className="count">17</span>
                                                    <span> K+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Recruiters</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-start">
                                                <h4 className="color-white">
                                                    {" "}
                                                    <span className="count">15</span>
                                                    <span> K+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Freelancers</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                                            <div className="d-inline-block text-start">
                                                <h4 className="color-white">
                                                    {" "}
                                                    <span className="count">28</span>
                                                    <span> K+</span>
                                                </h4>
                                                <p className="font-sm color-text-mutted">Blog Tips</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="list-brands mt-40 mb-30">
                                <div className="box-swiper">
                                    <BrandSlider />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs of the day</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster.</p>
                            </div>
                            <div className="mt-50">
                                <CategoryTab2 />
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-start">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Popular category</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster.</p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <CategorySlider2 />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs by Location</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find your favourite jobs and get the benefits of yourself</p>
                            </div>
                            <div className="container">
                                <div className="row mt-50">
                                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location1.png)" }}>
                                                        <span className="lbl-hot">Hot</span>
                                                    </div>
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>Paris, France</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">5 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">120 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location2.png)" }}>
                                                        <span className="lbl-hot">Trending</span>
                                                    </div>
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>London, England</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">7 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">68 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location3.png)" }}>
                                                        <span className="lbl-hot">Hot</span>
                                                    </div>
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>New York, USA</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">9 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">80 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location4.png)" }} />
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>Amsterdam, Holland</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">16 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">86 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location5.png)" }} />
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>Copenhagen, Denmark</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">39 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">186 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                                        <div className="card-image-top hover-up">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a>
                                                    <div className="image" style={{ backgroundImage: "url(assets/imgs/page/homepage1/location6.png)" }} />
                                                </a>
                                            </Link>

                                            <div className="informations">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a>
                                                        <h5>Berlin, Germany</h5>
                                                    </a>
                                                </Link>

                                                <div className="row">
                                                    <div className="col-lg-6 col-6">
                                                        <span className="text-14 color-text-paragraph-2">15 Vacancy</span>
                                                    </div>
                                                    <div className="col-lg-6 col-6 text-end">
                                                        <span className="color-text-paragraph-2 text-14">632 companies</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box overflow-visible mt-50 mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">25</span>
                                            <span> K+</span>
                                        </h1>
                                        <h5>Completed Cases</h5>
                                        <p className="font-sm color-text-paragraph mt-10">
                                            We always provide people a <br className="d-none d-lg-block" />
                                            complete solution upon focused of
                                            <br className="d-none d-lg-block" /> any business
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">17</span>
                                            <span> +</span>
                                        </h1>
                                        <h5>Our Office</h5>
                                        <p className="font-sm color-text-paragraph mt-10">
                                            We always provide people a <br className="d-none d-lg-block" />
                                            complete solution upon focused of <br className="d-none d-lg-block" />
                                            any business
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">86</span>
                                            <span> +</span>
                                        </h1>
                                        <h5>Skilled People</h5>
                                        <p className="font-sm color-text-paragraph mt-10">
                                            We always provide people a <br className="d-none d-lg-block" />
                                            complete solution upon focused of <br className="d-none d-lg-block" />
                                            any business
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="text-center">
                                        <h1 className="color-brand-2">
                                            <span className="count">28</span>
                                            <span> +</span>
                                        </h1>
                                        <h5>CHappy Clients</h5>
                                        <p className="font-sm color-text-paragraph mt-10">
                                            We always provide people a <br className="d-none d-lg-block" />
                                            complete solution upon focused of <br className="d-none d-lg-block" />
                                            any business
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Top Recruiters</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Discover your next career move, freelance gig, or internship</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="box-swiper mt-50">
                                <TopRekruterSlider />
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 mb-15 mb-lg-0">
                                    <div className="box-radius-8 bg-urgent hover-up">
                                        <div className="image">
                                            <figure>
                                                <img src="assets/imgs/page/homepage2/job-tools.png" alt="jobBox" />
                                            </figure>
                                        </div>
                                        <div className="text-info">
                                            <h3>Job Tools Services</h3>
                                            <p className="font-sm color-text-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet rutrum quam, id faucibus erat interdum a. Curabitur eget tortor a nulla interdum semper.</p>
                                            <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">Find Out More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="box-radius-8 bg-9 hover-up">
                                        <div className="image">
                                            <figure>
                                                <img src="assets/imgs/page/homepage2/planning-job.png" alt="jobBox" />
                                            </figure>
                                        </div>
                                        <div className="text-info">
                                            <h3>Planning a Job?</h3>
                                            <p className="font-sm color-text-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet rutrum quam, id faucibus erat interdum a. Curabitur eget tortor a nulla interdum semper.</p>
                                            <div className="mt-15">
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-arrow-right">Find Out More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-50">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">News and Blog</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="mt-50">
                                <div className="box-swiper style-nav-top">
                                    <BlogSlider />
                                </div>
                                <div className="text-center">
                                    <Link legacyBehavior href="blog-grid">
                                        <a className="btn btn-brand-1 btn-icon-load mt--30 hover-up">Load More Posts</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </Layout>
        </>
    );
}
