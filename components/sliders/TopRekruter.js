import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const data = [
    {
        img: "1.png",
        title: "Avy"
    },
    {
        img: "2.png",
        title: "Mark"
    },
    {
        img: "2.png",
        title: "Mark"
    }
];

const TopRekruterSlider = () => {
    return (
        <>
            <div className="swiper-container swiper-group-1 swiper-style-2">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={{
                        prevEl: ".swiper-button-prev-1",
                        nextEl: ".swiper-button-next-1"
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        575: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        767: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        991: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        1199: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        }
                    }}
                    className="swiper-wrapper pt-5"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide">
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">

                                            <div className="text-info-right">
                                                <h4>VPCG</h4>

                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">Harare, ZW</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    25<span> Applicants Taken</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">

                                            <div className="text-info-right">
                                                <h4>Jaji Investments</h4>

                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">Harare, ZW</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    17<span> Applicants Taken</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">

                                            <div className="text-info-right">
                                                <h4>Otto cloud investments</h4>

                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">Harare, ZW</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    65<span> Applicants Taken</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">

                                            <div className="text-info-right">
                                                <h4>Mwendo Africa</h4>

                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">Harare, ZW</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    25<span> Applicants Taken</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">

                                            <div className="text-info-right">
                                                <h4>Relvex Investments</h4>

                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">Harare, ZW</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    34<span> Applicants Taken</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                                    <a href="#">
                                        <div className="item-logo">

                                            <div className="text-info-right">
                                                <h4>Hotsplash Investments</h4>

                                            </div>
                                            <div className="text-info-bottom mt-5">
                                                <span className="font-xs color-text-mutted icon-location">Harare, ZW</span>
                                                <span className="font-xs color-text-mutted float-end mt-5">
                                                    56<span> Applicants Taken</span>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>


                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="swiper-button-next swiper-button-next-1" />
            <div className="swiper-button-prev swiper-button-prev-1" />
        </>
    );
};

export default TopRekruterSlider;
