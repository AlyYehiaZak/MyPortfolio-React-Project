import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
return (
    <>
        <div id="skills_section" className="skills_background p-5">
            <div className="container rounded-5 skills_container text-white text-center py-sm-5 px-sm-5 py-3">

                <p className="fs-1 myFontFamily">Skills</p>
                <p className="myFontFamily my-text-secondary mb-5">Programming Languages Known</p>
                
                <Swiper
                    breakpoints={{
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 150,
                        },
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination,Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="swiper_slides mb-5">
                            <div className="w-100">
                                <CircularProgressbar
                                    value={100}
                                    text={`${100}%`}
                                    styles={buildStyles({
                                    textColor: '#ffffff',
                                    pathColor: '#EF5A17',
                                    trailColor: '#1D1D1D',
                                    })}
                                />
                            </div>
                            <p className="text-center mt-3 fs-1 myFontFamily">C++</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper_slides mb-5">
                            <div className="w-100">
                                <CircularProgressbar
                                    value={90}
                                    text={`${90}%`}
                                    styles={buildStyles({
                                    textColor: '#ffffff',
                                    pathColor: '#195dba',
                                    trailColor: '#1D1D1D',
                                    })}
                                />
                            </div>
                            <p className="text-center mt-3 fs-1 myFontFamily">C#</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper_slides mb-5">
                            <div className="w-100">
                                <CircularProgressbar
                                    value={100}
                                    text={`${100}%`}
                                    styles={buildStyles({
                                    textColor: '#ffffff',
                                    pathColor: '#EF5A17',
                                    trailColor: '#1D1D1D',
                                    })}
                                />
                            </div>
                            <p className="text-center mt-3 fs-1 myFontFamily">HTML</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper_slides mb-5">
                            <div className="w-100">
                                <CircularProgressbar
                                    value={100}
                                    text={`${100}%`}
                                    styles={buildStyles({
                                    textColor: '#ffffff',
                                    pathColor: '#195dba',
                                    trailColor: '#1D1D1D',
                                    })}
                                />
                            </div>
                            <p className="text-center mt-3 fs-1 myFontFamily">CSS</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper_slides mb-5">
                            <div className="w-100">
                                <CircularProgressbar
                                    value={100}
                                    text={`${100}%`}
                                    styles={buildStyles({
                                    textColor: '#ffffff',
                                    pathColor: '#EF5A17',
                                    trailColor: '#1D1D1D',
                                    })}
                                />
                            </div>
                            <p className="text-center mt-3 fs-1 myFontFamily">JS</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper_slides mb-5">
                            <div className="w-100">
                                <CircularProgressbar
                                    value={70}
                                    text={`${70}%`}
                                    styles={buildStyles({
                                    textColor: '#ffffff',
                                    pathColor: '#195dba',
                                    trailColor: '#1D1D1D',
                                    })}
                                />
                            </div>
                            <p className="text-center mt-3 fs-1 myFontFamily">Python</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper_slides mb-5">
                            <div className="w-100">
                                <CircularProgressbar
                                    value={90}
                                    text={`${90}%`}
                                    styles={buildStyles({
                                    textColor: '#ffffff',
                                    pathColor: '#EF5A17',
                                    trailColor: '#1D1D1D',
                                    })}
                                />
                            </div>
                            <p className="text-center mt-3 fs-1 myFontFamily">C</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper_slides mb-5">
                            <div className="w-100">
                                <CircularProgressbar
                                    value={90}
                                    text={`${90}%`}
                                    styles={buildStyles({
                                    textColor: '#ffffff',
                                    pathColor: '#195dba',
                                    trailColor: '#1D1D1D',
                                    })}
                                />
                            </div>
                            <p className="text-center mt-3 fs-1 myFontFamily">SQL</p>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>
    </>
);
}

export default Skills;
