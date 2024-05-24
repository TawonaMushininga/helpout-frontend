/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import CategoryTab3 from "./../components/elements/CategoryTab3";
import BlogSlider from "./../components/sliders/Blog";
import BrandSlider2 from "./../components/sliders/Brand2";
import CategorySlider3 from "./../components/sliders/Category3";
import TopRekruterSlider from "./../components/sliders/TopRekruter";
export default function Index3() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero hero-2 hero-3">
                            <div className="banner-inner">
                                <div className="block-banner">
                                    <h1 className="text-42 color-white wow animate__animated animate__fadeInUp">
                                        The #1 <span className="color-green">Job Board for</span>
                                        <br className="d-none d-lg-block" />
                                        Hiring or Find Your Next Tob
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
                            </div>
                            <div className="container mt-60">
                                <div className="box-swiper mt-50">
                                    <CategorySlider3 />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs of the day</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster.</p>
                            </div>
                            <CategoryTab3 />
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Top Candidates</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                            </div>
                            <div className="mt-50">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/candidates/user1.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <h5>Robert Fox</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">Chicago, US</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1">$45 / hour</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/candidates/user2.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <h5>Cody Fisher</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Python developer</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">Chicago, US</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1">$45 / hour</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/candidates/user3.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <h5>Jerome Bell</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Content Manager</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">Chicago, US</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1">$45 / hour</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/candidates/user4.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <h5>Jane Cooper</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Network</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">Chicago, US</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1">$45 / hour</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/candidates/user5.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <h5>Floyd Miles</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Photo Editing</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">Chicago, US</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1">$45 / hour</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/candidates/user6.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <h5>Devon Lane</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">Online Marketing</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">Chicago, US</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1">$45 / hour</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/candidates/user7.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <h5>Jerome Bell</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">Chicago, US</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1">$45 / hour</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left">
                                                <div className="card-grid-2-image-rd online">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <figure>
                                                                <img alt="jobBox" src="assets/imgs/page/candidates/user8.png" />
                                                            </figure>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="card-profile pt-10">
                                                    <Link legacyBehavior href="candidate-details">
                                                        <a>
                                                            <h5>Eleanor</h5>
                                                        </a>
                                                    </Link>
                                                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                                                    <div className="rate-reviews-small pt-5">
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span>
                                                            <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                                        </span>
                                                        <span className="ml-10 color-text-mutted font-xs">(65)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block-info">
                                                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                                    <div className="text-start">
                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                                                        </Link>

                                                        <Link legacyBehavior href="/jobs-grid">
                                                            <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="employers-info align-items-center justify-content-center mt-15">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <span className="d-flex align-items-center">
                                                                <i className="fi-rr-marker mr-5 ml-0" />
                                                                <span className="font-sm color-text-mutted">Chicago, US</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="d-flex justify-content-end align-items-center">
                                                                <i className="fi-rr-clock mr-5" />
                                                                <span className="font-sm color-brand-1">$45 / hour</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-40 mb-60">
                                    <div className="col-lg-12">
                                        <div className="text-center">
                                            <Link legacyBehavior href="/blog-grid">
                                                <a className="btn btn-brand-1 btn-icon-load mt--30 hover-up">Load More Posts</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="section-box mb-30">
                        <div className="container">
                            <div className="box-we-hiring">
                                <div className="text-1">
                                    <span className="text-we-are">We are</span>
                                    <span className="text-hiring">Hiring</span>
                                </div>
                                <div className="text-2">
                                    Let’s <span className="color-brand-1">Work</span> Together
                                    <br /> &amp; <span className="color-brand-1">Explore</span> Opportunities
                                </div>
                                <div className="text-3">
                                    <div className="btn btn-apply btn-apply-icon" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                        Apply now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-box mt-70">
                        <div className="container">
                            <div className="box-trust">
                                <div className="row">
                                    <div className="left-trust col-lg-2 col-md-3 col-sm-3 col-3">
                                        <h4 className="color-text-paragraph-2">Trusted by</h4>
                                    </div>
                                    <div className="right-logos col-lg-10 col-md-9 col-sm-9 col-9">
                                        <div className="box-swiper">
                                            <BrandSlider2 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section-box bg-15 pt-50 pb-50 mt-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center mb-30">
                                    <img className="img-job-search mt-20" src="assets/imgs/page/homepage3/img-job-search.png" alt="jobBox" />
                                </div>
                                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                                    <h2 className="mb-40">Job search for people passionate about startup</h2>
                                    <div className="box-checkbox mb-30">
                                        <h6>Create an account</h6>
                                        <p className="font-md color-text-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo a quam varius maximus. Maecenas sodales tortor quis tincidunt commodo.</p>
                                    </div>
                                    <div className="box-checkbox mb-30">
                                        <h6>Search for Jobs</h6>
                                        <p className="font-md color-text-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo a quam varius maximus. Maecenas sodales tortor quis tincidunt commodo.</p>
                                    </div>
                                    <div className="box-checkbox mb-30">
                                        <h6>Save &amp; Apply</h6>
                                        <p className="font-md color-text-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo a quam varius maximus. Maecenas sodales tortor quis tincidunt commodo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="text-center">
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
                            <div className="text-center">
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
                                    <Link legacyBehavior href="/blog-grid">
                                        <a className="btn btn-brand-1 btn-icon-load mt--30 hover-up">Load More Posts</a>
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
            </Layout>
        </>
    );
}
