import styled from 'styled-components';

export const SwipeListStyle = styled.ul`
    .swiper-wrapper {
        width: 1000px;
        height: 500px;
        align-items: end;
        /* top: 100px; */
        /* overflow: hidden; */
    }
    .firstSwiper {
        width: 1000px;
        height: 1000px;
        /* vertical-align: bottom; */

        overflow: hidden;
        .swiper-slide {
            top: 252px;
            text-align: center;
            font-size: 18px;
            display: flex;
            width: 400px;
            background-color: aliceblue;
            justify-content: center;
            align-items: center;
            margin-right: 200px;
            &:last-child {
                margin-right: 600px;
            }
        }
        .swiper-slide img {
            display: block;
            width: 400px;
            height: 400px;
            object-fit: cover;
        }
        .swiper-pagination-bullet {
            /* display: none; */
        }
        .swiper-slide-active {
            transform-origin: bottom left;
            transform: scale(1.2);
            transition: 0.4s;
        }
        .swiper-pagination {
            position: absolute;
            left: 0;
            top: 0px;
            margin: 0px;
            /* width: 100px; */
            .swiper-pagination-bullet {
                margin: 0px;
                width: 100px;
                border-radius: 0;
                height: 50px;
                background-color: transparent;
                border-bottom: 1px solid #000;
                position: relative;
                &::after {
                    content: '안녕하세요';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    white-space: nowrap;
                }
                &:nth-child(1) {
                    &::after {
                        content: '주택사업';
                    }
                }
                &:nth-child(2) {
                    &::after {
                        content: '건축사업';
                    }
                }
                &:nth-child(3) {
                    &::after {
                        content: '토목사업';
                    }
                }
                &:nth-child(4) {
                    &::after {
                        content: '해외사업';
                    }
                }
                &:nth-child(5) {
                    &::after {
                        content: '레저사업';
                    }
                }
            }
        }
    }
    .ttp {
        position: absolute;
        background-color: transparent;
        width: 1900px;
        height: 1000px;
        top: 0;
        left: -910px;
        text-align: center;
        pointer-events: none;
        z-index: -1;
        /* overflow: visible; */
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1900px;
            height: 1000px;
            margin: 0;
        }
        .swiper-pagination {
            display: none;
        }
        h2 {
            font-size: 200px;
            font-weight: 600;
            text-align: center;
            color: #999;
            opacity: 0.1;
        }
    }
`;
