import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const TestimonialSlider1 = () => {
    return (
        <>
            <div className="swiper-container swiper-group-3">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    className="swiper-wrapper pb-70 pt-5"
                >
                    <SwiperSlide>
                        <div className="card-grid-6 hover-up">
                            <div className="card-text-desc mt-10">
                                <p className="font-md color-text-paragraph">"This platform helped me find quick gardening jobs in my neighborhood. I was able to earn money and support my family. Highly recommend!"</p>
                            </div>
                            <div className="card-image">
                                <div className="image">
                                    <figure>
                                        <img alt="jobBox" src="assets/imgs/page/about/user1.png" />
                                    </figure>
                                </div>
                                <div className="card-profile">
                                    <h6>Chenai Moyo</h6>
                                    <span>Gardener</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-grid-6 hover-up">
                            <div className="card-text-desc mt-10">
                                <p className="font-md color-text-paragraph">"I needed some quick cash and found a few painting jobs through this site. It was easy to use and helped me get by when I needed it most."</p>
                            </div>
                            <div className="card-image">
                                <div className="image">
                                    <figure>
                                        <img alt="jobBox" src="assets/imgs/page/about/user2.png" />
                                    </figure>
                                </div>
                                <div className="card-profile">
                                    <h6>Thabo Ncube</h6>
                                    <span>Painter</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-grid-6 hover-up">
                            <div className="card-text-desc mt-10">
                                <p className="font-md color-text-paragraph">"Finding quick jobs for extra cash has never been easier. From babysitting to cleaning, this platform has been a lifesaver for me."</p>
                            </div>
                            <div className="card-image">
                                <div className="image">
                                    <figure>
                                        <img alt="jobBox" src="assets/imgs/page/about/user3.png" />
                                    </figure>
                                </div>
                                <div className="card-profile">
                                    <h6>Rudo Chikosi</h6>
                                    <span>Babysitter</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="swiper-pagination swiper-pagination3" />
        </>
    );
};

export default TestimonialSlider1;
