import React, { useEffect, useRef } from 'react';
import { SwipeListStyle } from './style';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Pagination } from 'swiper/modules';

const SwipeList = () => {
    const mainSwiperRef = useRef(null);
    const thumbSwiperRef = useRef(null);

    useEffect(() => {
        mainSwiperRef.current.controller.control = thumbSwiperRef.current;
        thumbSwiperRef.current.controller.control = mainSwiperRef.current;
    }, []);
    return (
        <SwipeListStyle>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                controller={{ control: thumbSwiperRef.current, inverse: true }}
                modules={[Pagination, Controller]}
                className="mySwiper firstSwiper"
                slidesPerView="auto"
            >
                <SwiperSlide style={{ width: '400px', height: 400 }}>
                    <img src="./images/content3_img1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide style={{ width: `400px`, height: 400 }}>
                    <img src="./images/content3_img2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide style={{ width: `400px`, height: 400 }}>
                    <img src="./images/content3_img3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide style={{ width: `400px`, height: 400 }}>
                    <img src="./images/content3_img4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide style={{ width: `400px`, height: 400 }}>
                    <img src="./images/content3_img5.png" alt="" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                dir="rtl"
                pagination={{
                    clickable: true,
                }}
                onSwiper={(swiper) => (thumbSwiperRef.current = swiper)}
                modules={[Pagination, Controller]}
                className="mySwiper ttp"
                slidesPerView="auto"
                watchSlidesProgress={true}
                controller={{ control: mainSwiperRef.current, inverse: true }}
                freeMode={true}
            >
                <SwiperSlide>
                    <h2>Leisure Business</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>Overseas Business</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>Civil engineering Business</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>Building Business</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>Housing Business</h2>
                </SwiperSlide>
            </Swiper>
        </SwipeListStyle>
    );
};

export default SwipeList;
