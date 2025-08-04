import { Swiper, SwiperSlide } from 'swiper/react';
import { Section2Style } from './style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import SectionSwiperItem from './SectionSwiperItem';
import { useSelector } from 'react-redux';
const index = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const swiperRef = useRef(null);
    const { breads } = useSelector((state) => state.section3);
    const [currentPage, setCurrentPage] = useState(1);
    const totalGroups = Math.ceil(breads.length / 4);
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = navigationNextRef.current;
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);
    return (
        <Section2Style>
            <div className="inner">
                <h3 className="title">오늘, 당신의 기분을 채워줄 맛은?</h3>
                <div className="content">
                    <article>
                        <div className="content-title">
                            <span>지금 이 순간, 달콤한 휴식이 필요할 때</span>
                            <strong>빵 & 생과자류</strong>
                        </div>
                        <div className="content-bottom">
                            <p className="pagination">
                                <i>
                                    <svg
                                        className="swiper-button swiper-custom-button-prev"
                                        ref={navigationPrevRef}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.18279 7.94176C5.06562 7.82456 4.9998 7.66561 4.9998 7.49989C4.9998 7.33416 5.06562 7.17522 5.18279 7.05801L8.71841 3.52239C8.77607 3.46269 8.84503 3.41508 8.92129 3.38232C8.99754 3.34957 9.07955 3.33233 9.16254 3.33161C9.24553 3.33088 9.32783 3.3467 9.40464 3.37812C9.48145 3.40955 9.55123 3.45596 9.60991 3.51464C9.66859 3.57332 9.715 3.64311 9.74643 3.71992C9.77785 3.79673 9.79367 3.87903 9.79295 3.96201C9.79222 4.045 9.77498 4.12701 9.74223 4.20327C9.70947 4.27952 9.66186 4.34848 9.60216 4.40614L6.50841 7.49989L9.60216 10.5936C9.71601 10.7115 9.77901 10.8694 9.77759 11.0333C9.77616 11.1971 9.71043 11.3539 9.59455 11.4698C9.47867 11.5857 9.32191 11.6514 9.15804 11.6528C8.99417 11.6542 8.83629 11.5912 8.71841 11.4774L5.18279 7.94176Z"
                                            fill="black"
                                        />
                                    </svg>
                                </i>
                                <span className="page">
                                    {currentPage}/{totalGroups}
                                </span>
                                <i>
                                    <svg
                                        className="swiper-button swiper-custom-button-next"
                                        ref={navigationNextRef}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.81721 7.05824C9.93438 7.17544 10.0002 7.33439 10.0002 7.50011C10.0002 7.66584 9.93438 7.82478 9.81721 7.94199L6.28159 11.4776C6.22393 11.5373 6.15497 11.5849 6.07871 11.6177C6.00246 11.6504 5.92045 11.6677 5.83746 11.6684C5.75448 11.6691 5.67218 11.6533 5.59537 11.6219C5.51856 11.5905 5.44877 11.544 5.39009 11.4854C5.33141 11.4267 5.285 11.3569 5.25357 11.2801C5.22215 11.2033 5.20633 11.121 5.20705 11.038C5.20778 10.955 5.22502 10.873 5.25777 10.7967C5.29053 10.7205 5.33814 10.6515 5.39784 10.5939L8.49159 7.50011L5.39784 4.40636C5.28399 4.28849 5.22099 4.13061 5.22241 3.96674C5.22384 3.80286 5.28957 3.64611 5.40545 3.53023C5.52133 3.41435 5.67809 3.34862 5.84196 3.34719C6.00583 3.34577 6.16371 3.40876 6.28159 3.52261L9.81721 7.05824Z"
                                            fill="black"
                                        />
                                    </svg>
                                </i>
                            </p>
                            <div className="more">전체보기</div>
                        </div>
                    </article>
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                        slidesPerView={4}
                        slidesPerGroup={4}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onSlideChange={(swiper) => {
                            const currentGroup = Math.floor(swiper.activeIndex / 4) + 1;
                            setCurrentPage(currentGroup);
                        }}
                    >
                        {breads.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <SectionSwiperItem data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Section2Style>
    );
};
export default index;
