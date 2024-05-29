/* eslint-disable @next/next/no-img-element */

import BlogSlider from "../components/sliders/Blog";
import BrandSlider2 from "../components/sliders/Brand2";
import CategorySlider from "../components/sliders/Category";
import CategorySlider2 from "../components/sliders/Category2";
import CategoryTab2 from "../components/elements/CategoryTab2";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import TestimonialSlider1 from "../components/sliders/Testimonial1";

export default function Index4() {
    return (
        <>
            <Layout>
                <div>
                    <div className="bg-homepage4" />
                    <section className="section-box">
                        <div className="banner-hero hero-1 banner-homepage4">
                            <div className="banner-inner">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-12">
                                        <div className="block-banner">
                                            <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                                                Get The <span className="color-brand-2">Right Job</span>
                                                <br className="d-none d-lg-block" />
                                                You Deserve
                                            </h1>
                                            <div className="banner-description mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                                Each month, more than 3 million job seekers turn to website in their search for work,
                                                <br className="d-none d-lg-block" />
                                                making over 140,000 applications every single day
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
                                            <div className="list-tags-banner mt-60 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
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
                                    </div>
                                    <div className="col-xl-5 col-lg-12 d-none d-xl-block col-md-6">
                                        <div className="banner-imgs">
                                            <div className="block-1 shape-1">
                                                <img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage4/banner.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-110">
                        <div className="section-box wow animate__animated animate__fadeIn mt-70">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Latest Jobs Post</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                        Explore the different types of available jobs to apply
                                        <br className="d-none d-lg-block" />
                                        discover which is right for you.
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <CategoryTab2 />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-110 bg-cat">
                        <div className="section-box wow animate__animated animate__fadeIn mt-70">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Browse by category</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <CategorySlider />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-0">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div className="text-center mt-50">
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                        Thousands of employee get their ideal jobs
                                        <br className="d-none d-lg-block" />
                                        and feed back to us!
                                    </p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <TestimonialSlider1 />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-80">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs by Location</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Find your favourite jobs and get the benefits of yourself</p>
                            </div>
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
                                                    <h5>Harare</h5>
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
                                                    <h5>Bulawayo</h5>
                                                </a>
                                            </Link>

                                            <div className="row">
                                                <div className="col-lg-6 col-6">
                                                    <span className="text-14 color-text-paragraph-2">Mazowe</span>
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
                                                    <h5>Mvurwi</h5>
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
                                                    <h5>Marondera</h5>
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
                                                    <h5>Gweru</h5>
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
                                                    <h5>Masvingo</h5>
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
                    </section>
                </div>
            </Layout>
        </>
    );
}
